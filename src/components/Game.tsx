import { CreateButton } from "./CreateButton";

interface Props {
  userMokepon: IMokeponType;
  setUserMokepon: React.Dispatch<React.SetStateAction<IMokeponType>>;
  getAEnemyMokepon: () => void;
  totLiveUser: number;
  setShowForm?: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBattle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Game = ( props: Props ) => {
  
  const oso = (): void => {
    props.getAEnemyMokepon();
    props.setShowBattle(true);
  }

  return (
    <>
      <div className="absolute top-3/4 left-1/3 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_10px_10px_rgba(0,0,0,0.75)] shadow-primary-dark">
        <CreateButton 
          type="button" 
          title="Encontrar Mokepón"
          content={<span>Encontrar<br />enemigo</span>} 
          onClick={(): void => oso()}
          className="text-md sm:text-md"
        />
      </div>
    </>
  )
}
