import { CreateButton } from "./CreateButton";
import { useState, useEffect } from "react";

interface Props {
  userMokepon: IMokeponType;
  setUserMokepon: React.Dispatch<React.SetStateAction<IMokeponType>>;
  enemyMokepon: IMokeponType;
  setEnemyMokepon?: React.Dispatch<React.SetStateAction<IMokeponType>>;
  setShowBattle: React.Dispatch<React.SetStateAction<boolean>>;
  handleFight: (attacked: IMokeponType, attacker: IMokeponType, attack?: number) => void;
  totLiveUser: number;
}

export const Battle = ( props: Props ) => {

  const [attackUser, setAttackUser] = useState<boolean>(false);
  const [attackEnemy, setAttackEnemy] = useState<boolean>(false);

  const battle = (enemy: IMokeponType, user: IMokeponType, attack: number): void => {
    if(enemy?.name !== "" && attackEnemy === false && attackUser === false) {
      setAttackUser(true);
      setTimeout((): void => setAttackUser(false), 500);
      props.handleFight(user, enemy);
      setTimeout((): void => {
        setAttackEnemy(true);
        setTimeout((): void => setAttackEnemy(false), 500);
        props.handleFight(enemy, user, attack)
      }, 1000);
    }
  }

  useEffect((): void => {
    if(props.enemyMokepon.name !== "" && props.enemyMokepon.live <= 0) {
      setTimeout((): void => {
        props.setShowBattle(false);
      }, 1500);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.enemyMokepon]);

  return (
    <div className="absolute top-1/2 left-1/2 w-full max-w-screen h-full max-h-screen py-8 px-6 border-8 border-solid border-secondary-light rounded-3xl -translate-x-1/2 -translate-y-1/2 backdrop-blur bg-primary/80 sm:px-12">

      <div className={`
        absolute top-2/4 left-1/4 p-4 bg-lime-200 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_30px_30px_rgba(0,0,0,0.75)] shadow-lime-200 
        transition ease-in-out duration-100 
        ${attackEnemy && "translate-x-[calc(50vw-100%)] -translate-y-[calc((100vh/4)-100%)]"}`}>
        <p>{props.userMokepon.name}</p>
        <p>{props.userMokepon.live} / {props.totLiveUser}</p>
      </div>

      {(props.enemyMokepon.name !== "" && (props.enemyMokepon.live > 0)) && <>
        <div className={`
          absolute top-1/4 left-3/4 p-4 bg-orange-300 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_30px_30px_rgba(0,0,0,0.75)] shadow-orange-300 
          transition ease-in-out duration-100 
          ${attackUser && "-translate-x-[calc(50vw-100%)] translate-y-[calc((100vh/4)-100%)]"} 
          ${(props.enemyMokepon.live<=0) && "bg-green-500"}
        `}>
          <p>{props.enemyMokepon.name}</p>
          <p>{props.enemyMokepon.live} / {props.enemyMokepon.originalLive}</p>
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
    </div>
  )
}
