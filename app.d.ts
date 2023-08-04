interface IMokeponType {
  name: string;
  element: string;
  attack1: { attack: string; damage: number, element: string };
  attack2: { attack: string; damage: number, element: string };
  attack3: { attack: string; damage: number, element: string };
  live: number;
  image: string;
}

interface IAttackType {
  attack: string;
  damage: number;
  element: string;
}

interface IUserData {
  name: string;
  element: string;
  level: number;
}