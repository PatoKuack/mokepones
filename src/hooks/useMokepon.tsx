'use client';
import { useState } from "react";
import { useMokeponData } from "./useMokeponData";

/* 
La interface MokeponType se creó porque aparecía una marca de error al utilizar los elementos de los objetos del array mokeponList, por ejemplo: e.name
TypeScript no podía inferir el tipo de los elementos dentro del Array mokeponList automáticamente porque le había dado el tipo Array<object>. Al usar Array<object>, TypeScript solo considera que los elementos son de tipo object, lo cual no incluye las propiedades específicas como name, element, attack1, etc., a las que necesitaba acceder en el código.
Para resolver este problema, definí una interface para representar la estructura de los objetos dentro del Array mokeponList, y luego utilice esa interfaz como el tipo del Array. De esta manera, TypeScript puede inferir correctamente el tipo de los elementos en el Array.
después MokeponType se pasó a una variable global porque se empezó a utilizar en varios archivos.
 */


export const useMokepon = () => {
  
  const { 
    mokeponList, 
    defaultMokepon, 
    finalBossMokepon, 
    defaultWatterAttack,
    defaultFireAttack,
    defaultEarthAttack,
  } = useMokeponData();

  const [availableList, setAvailableList] = useState<string[]>(mokeponList.map(moke => moke.name));
  const [enemyMokepon, setEnemyMokepon] = useState<IMokeponType> (defaultMokepon);
  const [userMokepon, setUserMokepon] = useState<IMokeponType> (defaultMokepon);

  const getRandomValue = (max: number, min: number): number => {
    return(Math.floor(Math.random() * (max - min + 1) + min));
  }

  // getAEnemyMokepon() elimina de availableList un mokepón alatorio y le asigna a "enemyMokepon" ese mokepón aleatorio. Si ya no hay mokepones en availableList, se le asigna a en enemyMokepon el mokepón Reptax.
  const getAEnemyMokepon = (): void => {
    const newAvailableList = availableList;
    let currentEnemy: IMokeponType | undefined;
    const totMokepones: number = newAvailableList.length;
    const selectionRandom: number = getRandomValue((totMokepones-1), 0);
    console.log(`Selección aleatoria: ${selectionRandom}: ${newAvailableList[selectionRandom]}`);
    console.log("queda: " + (newAvailableList.length - 1));
    const currentSelection: string = newAvailableList[selectionRandom];
    if(newAvailableList.length > 0 && newAvailableList.includes(currentSelection)) {
      const indexToDelete = newAvailableList.indexOf(currentSelection);
      // Se elimina 1 valor, apartir del "index para eliminar"
      newAvailableList.splice(indexToDelete, 1);
      setAvailableList(newAvailableList);
      console.log(availableList);
      currentEnemy = mokeponList.find(e => e.name===currentSelection);
      if(currentEnemy) {
        setEnemyMokepon({...currentEnemy, originalLive: currentEnemy.live});
      }
    } else {
      setEnemyMokepon({...finalBossMokepon, originalLive:finalBossMokepon.live});
    }
  }

  // fight() recibe un objeto con los datos del mokepon atacante. Si el atacante es el enemigo, se le resta a la vida del usuario el ataque aleatorio del enemigo. Si el atacante es el usuario, se le reta a la vida del enemigo el attack que se recibe en el segundo parámetro.
  const fight = (attacked: IMokeponType, attacker: IMokeponType, attack?: number): void => {
    let currentLive: number;
    let attackType: number;
    
    if(enemyMokepon && userMokepon && attacked.name !== "" && attacker.name !== "" && attacker.live > 0) {
      
      if(typeof(attack) === "number") {
        attackType = attack;
        console.log("atacante: usuario")
      } else {
        attackType = getRandomValue(3, 1);
        console.log("atacante: enemigo")
      }

      switch(attackType) {
        case 1:
          currentLive = attacked.live - attacker.attack1.damage;
          console.log("ataque 1 de: " + attacker.attack1.damage)
          break;
        case 2:
          currentLive = attacked.live - attacker.attack2.damage;
          console.log("ataque 2 de: " + attacker.attack2.damage)
          break;
        case 3:
          currentLive = attacked.live - attacker.attack3.damage;
          console.log("ataque 3 de: " + attacker.attack3.damage)
          break;
        default:
          currentLive = attacker.live;
          console.error(attackType);
          console.error(attacked);
          console.error(attacker);
      }

      if(typeof(attack) === "number") {
        if(attacked.live > 0) {
          setEnemyMokepon({ ...attacked, live: currentLive });
        } else {
          setEnemyMokepon(defaultMokepon);
        }
        console.log(`${attacker.name} atacó a ${attacked.name} con su ${attackType}° ataque, dejandolo con ${currentLive}`);
      } else {
        setUserMokepon({ ...attacked, live: currentLive });
        console.log(`${attacker.name} atacó a ${attacked.name} con su ${attackType}° ataque, dejandolo con ${currentLive}`);
      }
    }
  }

  const getElementAttack = (typeEl: string): IAttackType => {
    let attackType: IAttackType;
    if(typeEl === "watter") {
      attackType = defaultWatterAttack;
      console.log(defaultWatterAttack);
    } else if(typeEl === "fire") {
      attackType = defaultFireAttack;
      console.log(defaultFireAttack);
    } else {
      attackType = defaultEarthAttack;
      console.log(defaultEarthAttack);
    }
    return(attackType);
  }

  return {
    availableList,
    fight,
    getAEnemyMokepon,
    enemyMokepon,
    setEnemyMokepon,
    userMokepon,
    setUserMokepon,
    getElementAttack,
  }
}
