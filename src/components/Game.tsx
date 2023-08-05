import { CreateButton } from "./CreateButton";
import { useMokepon } from '../hooks/useMokepon';

interface Props {
  userMokepon: IMokeponType;
}

export const Game = ( props: Props ) => {

  const { 
    fight,
    getAEnemyMokepon,
    enemyMokepon,
  } = useMokepon();

  const totLiveUser: number = props.userMokepon.live;
  const totLiveEnemy = (): number => {
    if(enemyMokepon){ return(enemyMokepon.live) }
    else { return(0) }
  }

  return (
    <>
      <div className="absolute top-1/4 left-1/4 p-4 bg-primary-light rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_30px_30px_rgba(0,0,0,0.75)] shadow-primary-light">
        <p>{props.userMokepon.name}</p>
        <p>{props.userMokepon.live} / {totLiveUser}</p>
      </div>

      <div className="absolute top-3/4 left-1/3 p-4 bg-primary-dark rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_30px_30px_rgba(0,0,0,0.75)] shadow-primary-dark">
        <CreateButton 
          type="button" 
          title="Encontrar Mokepón"
          content={<span>Encontrar<br />enemigo</span>} 
          onClick={getAEnemyMokepon}
          className="text-md sm:text-md"
        />
      </div>

      {enemyMokepon && <>
      <div className="absolute top-1/4 left-3/4 p-4 bg-tertiary-dark rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_30px_30px_rgba(0,0,0,0.75)] shadow-tertiary-dark">
        <p>{enemyMokepon.name}</p>
        <p>{enemyMokepon.live} / {totLiveEnemy()}</p>
      </div>
      
      <div className="absolute top-3/4 left-2/3 p-4 bg-primary-dark rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_30px_30px_rgba(0,0,0,0.75)] shadow-primary-dark">
        <CreateButton 
          type="button" 
          title="Encontrar Mokepón"
          content='Atacar' 
          onClick={() => fight(enemyMokepon, props.userMokepon.attack1)}
          className="text-md sm:text-md"
        />
      </div>
      </>}
    </>
  )
}
