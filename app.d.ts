interface IMokeponType {
  name: string;
  element: string;
  attack1: { attack: string; damage: number, element: string, image: string };
  attack2: { attack: string; damage: number, element: string, image: string };
  attack3: { attack: string; damage: number, element: string, image: string };
  originalLive?: number;
  live: number;
  image: string;
}

interface IAttackType {
  attack: string;
  damage: number;
  element: string;
  image: string;
}

interface IUserData {
  name: string;
  element: string;
  level: number;
}