import React from "react";
import { CreateButton } from './CreateButton.tsx';

/* 
Había una marca de error en el Form onSubmit={handleSubmit} del archivo App.tsx
Existia una colisión de nombres en el tipado FormData que se definio aquí y la interface FormData que es una parte intrínseca de JavaScript (utilizada para trabajar con datos de formularios en el objeto FormData).
Para resolver este problema, simplemente renombré la interface FormData que definí aquí, depués exporté la interface con la palabra "export" antes de la interface y la importé en App.tsx para utilizarla en la función handleOnSubmit(). También se puede crear un tipado global para no exportar el tipado. 
 */

interface FormProps {
  onSubmit: (data: IUserData) => void;
}

export const Form = ({ onSubmit }: FormProps) => {

  const [formData, setFormData] = React.useState<IUserData>({ name: '', element: '', level: 0 });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="absolute top-1/2 left-1/2 flex flex-col items-center gap-y-4 w-full max-w-screen py-8 px-6 border-8 border-solid border-secondary-light rounded-3xl -translate-x-1/2 -translate-y-1/2 backdrop-blur bg-primary/80 sm:w-max sm:px-12">
      <h2>¡Elige tu Mokepón!</h2>
      <div className=" flex flex-col gap-2 mb-6">
      {/* Ingresar Nombre */}
      <label className="flex flex-col gap-2">
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="ej: Chikapu" required />
      </label>
      {/* Elegir elemento */}
      <div className="flex flex-col w-fit mx-auto">
        <p>Elemento:</p>
        <label className="px-4 py-1">
          <input type="radio" name="element" className='mr-2' id="water" value={"watter"} onChange={handleInputChange} required />
          Agua
        </label>
        <label className="px-4 py-1">
          <input type="radio" name="element" className='mr-2' id="fire" value={"fire"} onChange={handleInputChange} required />
          Fuego
        </label>
        <label className="px-4 py-1">
          <input type="radio" name="element" className='mr-2' id="earth" value={"earth"} onChange={handleInputChange} />
          Tierra
        </label>
      </div>
      {/* Ingreso de puntaje en Platzi (level) */}
      <label className="flex flex-col gap-2">
        <span>¿Cuántos puntos tienes en <b>Platzi</b>?:</span>
        <input type="number" name="level" min={0} value={formData.level} onChange={handleInputChange} className='w-32 mx-auto' />
      </label>
      </div>
      <CreateButton 
        type = {"submit"}
        content = {"Seleccionar"}
        title = {"seleccionar"}
      />
    </form>
  )
}
