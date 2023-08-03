import { Form, UserData } from '../components/Form';

function App() {
  function handleSubmit(formData: UserData) {
    console.log(formData);
  }

  return (
    <>
      <Form onSubmit={handleSubmit} />
    </>
  )
}

export default App;
