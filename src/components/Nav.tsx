interface Props {
  userMokepon: IMokeponType;
}

export const Nav = ( props: Props ) => {

  const referencias = (): void => {
    console.log(props.userMokepon)
  }

  return (
    <nav className="fixed bottom-0 right-1/2 w-full max-w-screen h-fit backdrop-blur bg-primary/80 border-4 border-solid border-secondary-light translate-x-1/2">
      <ul className="flex justify-around w-full">
      <li className="px-2 py-1 hover:bg-shadow-light rounded-lg cursor-pointer">Comandos</li>
      <li className="px-2 py-1 hover:bg-shadow-light rounded-lg cursor-pointer">Referencias</li>
      <li className="px-2 py-1 hover:bg-shadow-light rounded-lg cursor-pointer" onClick={referencias}>Diario</li>
      </ul>
    </nav>
  )
}
