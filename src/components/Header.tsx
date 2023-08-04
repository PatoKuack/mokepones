interface Props {
  userMokepon: IMokeponType
}

export const Header = (props: Props) => {

  const referencias = (): void => {
    console.log(props.userMokepon)
  }

  return (
    <header className="fixed bottom-0 right-0 flex justify-around w-full max-w-screen h-fit max-h-11 backdrop-blur bg-primary/80 border-4 border-solid border-secondary-light">
      <div className="px-2 py-1 hover:bg-shadow-light rounded-lg cursor-pointer">Comandos</div>
      <div className="px-2 py-1 hover:bg-shadow-light rounded-lg cursor-pointer">Referencias</div>
      <div className="px-2 py-1 hover:bg-shadow-light rounded-lg cursor-pointer" onClick={referencias}>Diario</div>
    </header>
  )
}
