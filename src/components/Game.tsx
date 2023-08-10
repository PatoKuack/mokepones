import { CreateButton } from "./CreateButton";
import { useState } from "react";
import { useMokeponData } from "../hooks/useMokeponData";

interface Props {
  availableList: string[];
  userMokepon: IMokeponType;
  setUserMokepon: React.Dispatch<React.SetStateAction<IMokeponType>>;
  enemyMokepon: IMokeponType | undefined;
  setEnemyMokepon: React.Dispatch<React.SetStateAction<IMokeponType | undefined>>;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  getAEnemyMokepon: () => void;
  handleFight: (attacked: IMokeponType, attacker: IMokeponType, attack?: number) => void;
  totLiveUser: number;
}

export const Game = ( props: Props ) => {

  const {mokeponList} = useMokeponData();
  const [attackUser, setAttackUser] = useState<boolean>(false);
  // const [attackEnemy, setAttackEnemy] = useState<boolean>(false);

  /* function contraattack(enemy: IMokeponType, user: IMokeponType): Promise<void> {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if(enemy.live > 0){
          resolve(fight(user, enemy));
        } else {
          reject('¡Hubo un error!');
        }
      }, 2000);
    });
  } */
  const battle = (enemy: IMokeponType | undefined, user: IMokeponType, attack: number): void => {
    if(enemy !== undefined) {
      setAttackUser(true);
      setTimeout((): void => setAttackUser(false), 1000);
      props.handleFight(user, enemy);
      setTimeout((): void => props.handleFight(enemy, user, attack), 1000);
    }
  }

  const totLiveEnemy = (): number => {
    if(props.enemyMokepon) {
      const enemyName: string = props.enemyMokepon.name;
      const currentEnemy: IMokeponType | undefined = mokeponList.find(e => e.name === enemyName);
      if(currentEnemy) {
        return(currentEnemy.live)
      } else {
        return(200);
      }
    } else {
      return(0);
    }
  }
  // useEffect((): void => {
  //   if(props.enemyMokepon) {
  //     setTotLiveEnemy(props.enemyMokepon.live);
  //   }
  // }, [props.enemyMokepon]);

  return (
    <>
      <div className="absolute top-2/4 left-1/4 p-4 bg-primary-light rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_30px_30px_rgba(0,0,0,0.75)] shadow-primary-light">
        <p>{props.userMokepon.name}</p>
        <p>{props.userMokepon.live} / {props.totLiveUser}</p>
      </div>

      <div className="absolute top-3/4 left-1/3 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_10px_10px_rgba(0,0,0,0.75)] shadow-primary-dark">
        <CreateButton 
          type="button" 
          title="Encontrar Mokepón"
          content={<span>Encontrar<br />enemigo</span>} 
          onClick={props.getAEnemyMokepon}
          className="text-md sm:text-md"
        />
      </div>

      {(props.enemyMokepon && (props.enemyMokepon.live > 0)) && <>
        <div className={`
          absolute top-1/4 left-3/4 p-4 bg-tertiary-dark rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_30px_30px_rgba(0,0,0,0.75)] shadow-tertiary-dark 
          transition ease-in-out duration-100 
          ${attackUser && "-translate-x-[175%] translate-y-3/4"} 
          ${(props.enemyMokepon.live<=0) && "bg-green-500"}
        `}>
          <p>{props.enemyMokepon.name}</p>
          <p>{props.enemyMokepon.live} / {totLiveEnemy()}</p>
        </div>
        
        <div className="absolute top-3/4 left-2/3 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_10px_10px_rgba(0,0,0,0.75)] shadow-primary-dark">
          <CreateButton 
            type="button" 
            title="Encontrar Mokepón"
            content='Atacar' 
            onClick={() => battle(props.enemyMokepon, props.userMokepon, 2)}
            className="text-md sm:text-md"
          />
        </div>
      </>}
    </>
  )
}
