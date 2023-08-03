'use client';
import { PropsWithChildren, useEffect } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

/* 
Si no se coloca un valor en los corchetes del segundo parámetro de useEffect, ESLint advierte que el efecto se ejecutará solo una vez cuando el componente se monte, pero no se actualizará si la función que se utiliza dentro (changeTheme) cambia en el futuro.
Se puede colocar changeTheme en los corchetes o colocar lo siguiente una línea antes de la marca del error (con todo y el doble slash):
//eslint-disable-next-line react-hooks/exhaustive-deps
 */

interface MyProps {
  children?: React.ReactNode;
}

export const Layout = (props: PropsWithChildren<MyProps>) => {

  const { changeTheme } = useDarkMode();

  useEffect(() => {
    changeTheme();
  }, [changeTheme]);

  return (
    <>
      <div className='w-screen min-h-screen bg-background-light dark:bg-background-dark bg-principal-img bg-cover bg-no-repeat bg-center'>
        {props.children}
      </div>
    </>
  )
}
