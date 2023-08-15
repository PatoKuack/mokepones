import { Nav } from '../components/Nav';
import { Form } from '../components/Form';
import { Battle } from '../components/Battle';
import { Game } from '../components/Game';
import { useMokepon } from '../hooks/useMokepon';
import { useState } from 'react';

function App() {

  const { 
    userMokepon, 
    setUserMokepon,
    enemyMokepon,
    getElementAttack,
    getAEnemyMokepon,
    fight,
  } = useMokepon();

  const [showForm, setShowForm] = useState<boolean>(true);
  const [showBattle, setShowBattle] = useState<boolean>(false);
  const [totLiveUser, setTotLiveUser] = useState<number>(0);

  const handleSubmit = (formData: IUserData): void => {
    const originalLive: number = Math.round(formData.level/10);
    setUserMokepon({
      ...userMokepon, 
      name: formData.name, 
      element: formData.element, 
      live: originalLive,
      attack2: getElementAttack(formData.element)
    });
    setShowForm(false);
    setTotLiveUser(originalLive);
  }

  const handleFight = (attacked: IMokeponType, attacker: IMokeponType, attack?: number): void => {
    fight(attacked, attacker, attack)
  }

  return (
    <>
      <Nav 
        userMokepon={userMokepon}
        enemyMokepon={enemyMokepon} 
      />
      {showForm && <Form onSubmit={handleSubmit} />}
      {!showForm && <Game 
        userMokepon={userMokepon}
        setUserMokepon={setUserMokepon}
        getAEnemyMokepon={getAEnemyMokepon}
        totLiveUser={totLiveUser}
        setShowBattle={setShowBattle}
      />}
      {showBattle && <Battle 
        userMokepon={userMokepon}
        setUserMokepon={setUserMokepon}
        enemyMokepon={enemyMokepon}
        setShowBattle={setShowBattle}
        handleFight={handleFight}
        totLiveUser={totLiveUser}
      />}
      {/* location.reload */}
    </>
  )
}

export default App;
