import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { useMokepon } from '../hooks/useMokepon';
import { useState } from 'react';

function App() {

  const { 
    userMokepon,
    setUserMokepon, 
    getElementAttack,
  } = useMokepon();

  const [showForm, setShowForm] = useState<boolean>(true);

  function handleSubmit(formData: IUserData): void {
    setUserMokepon({
      ...userMokepon, 
      name: formData.name, 
      element: formData.element, 
      live: (formData.level/10),
      attack2: getElementAttack(formData)
    });
    setShowForm(false);
  }

  return (
    <>
      <Header userMokepon={userMokepon} />
      {showForm && <Form onSubmit={handleSubmit} />}
    </>
  )
}

export default App;
