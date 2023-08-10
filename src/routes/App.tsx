import { Nav } from '../components/Nav';
import { Form } from '../components/Form';
import { Game } from '../components/Game';
import { useMokepon } from '../hooks/useMokepon';
import { useState } from 'react';

function App() {

  const { 
    availableList, 
    userMokepon, 
    setUserMokepon,
    enemyMokepon,
    setEnemyMokepon,
    getElementAttack,
    getAEnemyMokepon,
    fight,
  } = useMokepon();

  const [showForm, setShowForm] = useState<boolean>(true);
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
        availableList={availableList}
        userMokepon={userMokepon}
        setUserMokepon={setUserMokepon}
        enemyMokepon={enemyMokepon}
        setEnemyMokepon={setEnemyMokepon}
        setShowForm={setShowForm}
        getAEnemyMokepon={getAEnemyMokepon}
        handleFight={handleFight}
        totLiveUser={totLiveUser}
      />}
    </>
  )
}

export default App;
