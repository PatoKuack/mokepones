import { Nav } from '../components/Nav';
import { Form } from '../components/Form';
import { Game } from '../components/Game';
import { useMokepon } from '../hooks/useMokepon';
import { useState } from 'react';

function App() {

  const { 
    userMokepon, 
    setUserMokepon,
    enemyMokepon,
    setEnemyMokepon,
    getElementAttack,
    getAEnemyMokepon,
    fight,
  } = useMokepon();

  const [showForm, setShowForm] = useState<boolean>(true);

  const handleSubmit = (formData: IUserData): void => {
    setUserMokepon({
      ...userMokepon, 
      name: formData.name, 
      element: formData.element, 
      live: (formData.level/10),
      attack2: getElementAttack(formData.element)
    });
    setShowForm(false);
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
        enemyMokepon={enemyMokepon}
        setEnemyMokepon={setEnemyMokepon}
        setShowForm={setShowForm}
        getAEnemyMokepon={getAEnemyMokepon}
        fight={fight}
        handleFight={handleFight}
      />}
    </>
  )
}

export default App;
