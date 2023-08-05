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
  const [enemyMokepon, setEnemyMokepon] = useState<IMokeponType> ();
  const [userMokepon, setUserMokepon] = useState<IMokeponType> (defaultMokepon);

  const getRandomValue = (max: number, min: number): number => {
    return(Math.floor(Math.random() * (max - min + 1) + min));
  }

  // getAEnemyMokepon() elimina de availableList un mokepón alatorio y le asigna a "enemyMokepon" ese mokepón aleatorio. Si ya no hay mokepones en availableList, se le asigna a en enemyMokepon el mokepón Reptax.
  const getAEnemyMokepon = (): void => {
    const newAvailableList = availableList;
    const totMokepones: number = newAvailableList.length;
    const selectionRandom: number = getRandomValue(totMokepones, 0);
    console.log("selección aleatoria: " + selectionRandom);
    const currentSelection: string = newAvailableList[selectionRandom];
    if(newAvailableList.length > 0 || newAvailableList.includes(currentSelection)) {
      const indexToDelete = newAvailableList.indexOf(currentSelection);
      // Se elimina 1 valor, apartir del "index para eliminar"
      newAvailableList.splice(indexToDelete, 1);
      setAvailableList(newAvailableList);
      console.log(availableList);
      setEnemyMokepon(mokeponList.find(e => e.name===currentSelection));
    } else {
      setEnemyMokepon(finalBossMokepon);
    }
  }

  // fight() recibe un objeto con los datos del mokepon atacante. Si el atacante es el enemigo, se le resta a la vida del usuario el ataque aleatorio del enemigo. Si el atacante es el usuario, se le reta a la vida del enemigo el attack que se recibe en el segundo parámetro.
  const fight = (attacked: IMokeponType, attack?: IAttackType): number => {
    let currentLive: number;
    const randomAttack: number = getRandomValue(1, 3);
    if(enemyMokepon && attacked.name === enemyMokepon.name) {
      if(randomAttack === 1) {
        currentLive = attacked.live - enemyMokepon.attack1.damage;
      } else if(randomAttack === 2) {
        currentLive = attacked.live - enemyMokepon.attack2.damage;
      } else {
        currentLive = attacked.live - enemyMokepon.attack3.damage;
      }
      setEnemyMokepon({ ...attacked, live: currentLive });
      return(currentLive);
    } else if(attack && userMokepon && attacked.name !== ""){
      currentLive = attacked.live - attack.damage;
      setUserMokepon({ ...attacked, live: currentLive });
      console.log(currentLive)
      return(currentLive);
    } else {
      console.error(attacked);
      return(attacked.live);
    }
  }

  const getElementAttack = (data: IUserData): IAttackType => {
    let attackType: IAttackType;
    if(data.element === "watter") {
      attackType = defaultWatterAttack;
    } else if(data.element === "fire") {
      attackType = defaultFireAttack;
    } else {
      attackType = defaultEarthAttack;
    }
    return(attackType);
  }

  return {
    fight,
    getAEnemyMokepon,
    enemyMokepon,
    setEnemyMokepon,
    userMokepon,
    setUserMokepon,
    getElementAttack,
  }
}
