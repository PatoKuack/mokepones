export const useMokeponData = () => {

  const mokeponList: IMokeponType[] = [
    {
      name: "Aquarisis",
      element: "water",
      attack1: {attack: "Ojitos cariñositos", damage: 20, element: "watter", image: "watterAttack.svg"},
      attack2: {attack: "Vozarron marino", damage: 25, element: "watter", image: "watterAttack.svg"},
      attack3: {attack: "Buceo Zen", damage: 40, element: "watter", image: "watterAttack.svg"},
      live: 120,
      image: "MPAqualisis.svg"
    },
    {
      name: "Juanergized",
      element: "electric",
      attack1: {attack: "ojos que no ven...", damage: 15, element: "electric", image: "ejectric.svg"},
      attack2: {attack: "...corazón que lo sentirá", damage: 25, element: "electric", image: "ejectric.svg"},
      attack3: {attack: "hiper-energizado", damage: 35, element: "electric", image: "ejectric.svg"},
      live: 120,
      image: "MPJuanergized.svg"
    },
    {
      name: "Octoscar",
      element: "psychic",
      attack1: {attack: "Lechetón", damage: 10, element: "physical", image: "psychic.svg"},
      attack2: {attack: "Baby-Ha", damage: 35, element: "psychic", image: "psychic.svg"},
      attack3: {attack: "Hacker ataque", damage: 25, element: "psychic", image: "psychic.svg"},
      live: 150,
      image: "MPOctoscar.svg"
    },
    /* {
      name: "",
      element: "",
      attack1: {attack: "", damage: 35, element: ".svg"},
      attack2: {attack: "", damage: 35, element: ".svg"},
      attack3: {attack: "", damage: 35, element: ".svg"},
      live: 0,
      image: "MP.svg"
    }, */
  ];

  const finalBossMokepon: IMokeponType = {
    name: "Reptax",
    element: "darkness",
    attack1: { attack: "Desmotivalevolensia", damage: 40, element: "darkness", image: "demotivation.svg" },
    attack2: { attack: "Modo súper evil", damage: 40, element: "darkness", image: "evilmood.svg" },
    attack3: { attack: "Trampa maestra", damage: 40, element: "physical", image: "trapMaster.svg" },
    live: 200,
    image: "MPReptax.svg"
  }

  const defaultMokepon: IMokeponType = {
    name: "",
    element: "",
    attack1: {attack: "Consistencia resistente", damage: 25, element: "physical", image: "consistency.svg"},
    attack2: {attack: "", damage: 0, element: "", image: ""},
    attack3: {attack: "Duper esfuerzo", damage: 30, element: "physical", image: "effort.svg"},
    live: 0,
    image: "MPUser.svg"
  }

  const defaultWatterAttack: IAttackType = {attack: "Chorro de constancia", damage: 35, element: "watter", image: "constancy.svg"}

  const defaultFireAttack: IAttackType = {attack: "Flama de automotivación", damage: 35, element: "fire", image: "selfMotivation.svg"}

  const defaultEarthAttack: IAttackType = {attack: "Brote de dedicación", damage: 35, element: "earth", image: "dedication.svg"}

  return {
    mokeponList,
    finalBossMokepon,
    defaultMokepon,
    defaultWatterAttack,
    defaultFireAttack,
    defaultEarthAttack,
  }
}
