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
  attack1: { attack: string; damage: number };
  attack2: { attack: string; damage: number };
  attack3: { attack: string; damage: number };
  live: number;
  image: string;
}
interface attackType {
  attack: string;
  damage: number;
}

export const useRandomMP = () => {

  const mokeponList: MokeponType[] = [
    {
      name: "Aquarisis",
      element: "water",
      attack1: {attack: "Ojitos cariñositos", damage: 20},
      attack2: {attack: "Vozarron", damage: 25},
      attack3: {attack: "Modo Zen", damage: 40},
      live: 100,
      image: "MPAqualisis.svg"
    },
    {
      name: "Juanergized",
      element: "electric",
      attack1: {attack: "Fan-attack", damage: 25},
      attack2: {attack: "Ojos que no ven...", damage: 15},
      attack3: {attack: "hiper-energizado", damage: 35},
      live: 100,
      image: "MPJuanergized.svg"
    },
    {
      name: "Octoscar",
      element: "physical",
      attack1: {attack: "Lechetón", damage: 10},
      attack2: {attack: "Baby-Ha", damage: 35},
      attack3: {attack: "Ciberataque", damage: 25},
      live: 150,
      image: "MPOctoscar.svg"
    },
    /* {
      name: "",
      element: "",
      attack1: {attack: "", damage: 35},
      attack2: {attack: "", damage: 35},
      attack3: {attack: "", damage: 35},
      live: 0,
      image: "MP.svg"
    }, */
  ];

  const [availableList, setAvailableList] = useState<string[]>(mokeponList.map(moke => moke.name));
  const [enemy, setEnemy] = useState<MokeponType> ();

  const totMokepones: number = mokeponList.length;
  const getRandomValue = (max: number, min: number): number => {
    return(Math.floor(Math.random() * (max - min + 1) + min));
  }

  // getAEnemy() elimina de availableList un mokepón alatorio y le asigna a "enemy" ese mokepón aleatorio. Si ya no hay mokepones en availableList, se le asigna a en enemy el mokepón Reptax.
  const getAEnemy = () => {
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
      setEnemy(mokeponList.find(e => e.name===currentSelection));
    } else {
        setEnemy({
          name: "Reptax",
          element: "darkness",
          attack1: { attack: "Desmotivalevolensia", damage: 40 },
          attack2: { attack: "Modo súper evil", damage: 40 },
          attack3: { attack: "Trampa maestra", damage: 40 },
          live: 200,
          image: "MPReptax.svg"
        });
      }
  }

  const fight = (attackUsed: attackType) => {
    if(enemy && enemy.live && enemy.live > 0) {
      const attackedLive: number = enemy.live - attackUsed.damage;
      setEnemy({ ...enemy, live: attackedLive });
    }
  }

  return {
    fight,
    getAEnemy,
    enemy,
    setEnemy
  }
}
