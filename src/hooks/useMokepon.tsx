'use client';
import { useState } from "react";

/* 
La interface MokeponType se creó porque aparecía una marca de error al utilizar los elementos de los objetos del array mokeponList, por ejemplo: e.name
TypeScript no podía inferir el tipo de los elementos dentro del Array mokeponList automáticamente porque le había dado el tipo Array<object>. Al usar Array<object>, TypeScript solo considera que los elementos son de tipo object, lo cual no incluye las propiedades específicas como name, element, attack1, etc., a las que necesitaba acceder en el código.
Para resolver este problema, definí una interface para representar la estructura de los objetos en el Array mokeponList, y luego utilice esa interfaz como el tipo del Array. De esta manera, TypeScript puede inferir correctamente el tipo de los elementos en el Array.
 */

interface MokeponType {
  name: string;
  element: string;
  attack1: { attack: string; damage: number; element: string; };
  attack2: { attack: string; damage: number; element: string; };
  attack3: { attack: string; damage: number; element: string; };
  live: number;
  image: string;
}
interface AttackType {
  attack: string;
  damage: number;
}

export const useMokepon = () => {

  const mokeponList: MokeponType[] = [
    {
      name: "Aquarisis",
      element: "water",
      attack1: {attack: "Ojitos cariñositos", damage: 20, element: "watter"},
      attack2: {attack: "Vozarron marino", damage: 25, element: "watter"},
      attack3: {attack: "Buceo Zen", damage: 40, element: "watter"},
      live: 100,
      image: "MPAqualisis.svg"
    },
    {
      name: "Juanergized",
      element: "electric",
      attack1: {attack: "ojos que no ven...", damage: 15, element: "electric"},
      attack2: {attack: "...corazón que lo sentirá", damage: 25, element: "electric"},
      attack3: {attack: "hiper-energizado", damage: 35, element: "electric"},
      live: 100,
      image: "MPJuanergized.svg"
    },
    {
      name: "Octoscar",
      element: "psychic",
      attack1: {attack: "Lechetón", damage: 10, element: "physical"},
      attack2: {attack: "Baby-Ha", damage: 35, element: "psychic"},
      attack3: {attack: "Hacker ataque", damage: 25, element: "psychic"},
      live: 150,
      image: "MPOctoscar.svg"
    },
    /* {
      name: "",
      element: "",
      attack1: {attack: "", damage: 35, element: ""},
      attack2: {attack: "", damage: 35, element: ""},
      attack3: {attack: "", damage: 35, element: ""},
      live: 0,
      image: "MP.svg"
    }, */
  ];

  const [availableList, setAvailableList] = useState<string[]>(mokeponList.map(moke => moke.name));
  const [enemyMokepon, setEnemyMokepon] = useState<MokeponType> ();
  const [userMokepon, setUserMokepon] = useState<MokeponType> ({
    name: "",
    element: "",
    attack1: {attack: "Consistencia resistente", damage: 25, element: "physical"},
    attack2: {attack: "", damage: 0, element: ""},
    attack3: {attack: "Duper esfuerzo", damage: 30, element: "physical"},
    live: 0,
    image: "MPUser.svg"
  });

  const totMokepones: number = mokeponList.length;
  const getRandomValue = (max: number, min: number): number => {
    return(Math.floor(Math.random() * (max - min + 1) + min));
  }

  // getAEnemyMokepon() elimina de availableList un mokepón alatorio y le asigna a "enemyMokepon" ese mokepón aleatorio. Si ya no hay mokepones en availableList, se le asigna a en enemyMokepon el mokepón Reptax.
  const getAEnemyMokepon = () => {
    const newAvailableList = availableList;
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
      setEnemyMokepon({
        name: "Reptax",
        element: "darkness",
        attack1: { attack: "Desmotivalevolensia", damage: 40, element: "darkness" },
        attack2: { attack: "Modo súper evil", damage: 40, element: "darkness" },
        attack3: { attack: "Trampa maestra", damage: 40, element: "physical" },
        live: 200,
        image: "MPReptax.svg"
      });
    }
  }

  // fight() recibe un objeto con los datos del mokepon atacante. Si el atacante es el enemigo, se le resta a la vida del usuario el ataque aleatorio del enemigo. Si el atacante es el usuario, se le reta a la vida del enemigo el attack que se recibe en el segundo parámetro.
  const fight = (attacked: MokeponType, attack?: AttackType) => {
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
    } else if(attack && userMokepon && attacked.name === userMokepon.name){
      currentLive = attacked.live - attack.damage;
      setUserMokepon({ ...attacked, live: currentLive });
    } else {
      console.error(attacked);
    }
  }

  const getElementAttack = (data: IUserData): IAttackType => {
    let attackType: IAttackType;
    if(data.element === "watter") {
      attackType = {attack: "Chorro de constancia", damage: 35, element: "watter"}
    } else if(data.element === "fire") {
      attackType = {attack: "Flama de automotivación", damage: 35, element: "fire"}
    } else {
      attackType = {attack: "Brote de dedicación", damage: 35, element: "earth"}
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
