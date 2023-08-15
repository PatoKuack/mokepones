import React from "react";
import { CreateButton } from './CreateButton.tsx';
import { useState } from "react";

/* 
Había una marca de error en el Form onSubmit={handleSubmit} del archivo App.tsx
Existia una colisión de nombres en el tipado FormData que se definio aquí y la interface FormData que es una parte intrínseca de JavaScript (utilizada para trabajar con datos de formularios en el objeto FormData).
Para resolver este problema, simplemente renombré la interface FormData que definí aquí, depués exporté la interface con la palabra "export" antes de la interface y la importé en App.tsx para utilizarla en la función handleOnSubmit(). También se puede crear un tipado global para no exportar el tipado. 
 */

/* Se agregó la clase tailwind appearance-none aria-hidden a los inputs para ocultarlos visual y auditivamente y se le colocan la propiedad tabIndex={-1} para desactivarles su selección por tabulación, y a sus labels se les agregó la propiedad tabIndex={0} para hacerlos seleccionables por tabulación. En el evento onKeyUp de las etiquetas label, cuando se presiona la tecla "Enter", se selecciona el input correspondiente y se simula un clic en él usando la función click(), activando el evento onChange del input. Esto mantiene la funcionalidad de selección a través del teclado mientras los inputs permanecen ocultos. */

interface FormProps {
  onSubmit: (data: IUserData) => void;
}

export const Form = ({ onSubmit }: FormProps) => {

  const [formData, setFormData] = useState<IUserData>({ name: '', element: '', level: 0 });
  const [elementSelection, setElementSelection] = useState<string>("");


  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
    if(name === "element") {
      setElementSelection(value);
      console.log(elementSelection);
    }
  }

  /* https://felixgerschau.com/react-typescript-onkeyup-event-type/ */
  const handleKeyboard = (e: React.KeyboardEvent<HTMLLabelElement>): void => {
    if((e.code==="enter" || e.key==="enter" || e.keyCode===13) && e.altKey===false && e.ctrlKey===false) {
      const input = e.currentTarget.querySelector('input');
      if (input) {
        input.click();
      }
      /* if(e.target.childElementCount === 1 && e.target.childNodes[0].nodeName === "INPUT") {
        e.target.firstChild.checked = true;
        setElementSelection(e.target.firstChild.value);
        setFormData({ ...formData, element: e.target.firstChild.value });
        console.log(elementSelection);
      } */
    }
  };

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
        <span className="underline">Nombre:</span>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="ej: Chikapu" required className="rounded-md" />
      </label>
      {/* Elegir elemento */}
      <div className="flex flex-col w-fit mx-auto">
        <p className="underline">Elemento:</p>
        <label className={`px-4 py-0 cursor-pointer border-4 border-solid rounded-full ${(elementSelection==='watter') ? 'border-link-dark' : 'border-transparent'}`} tabIndex={0} onKeyUp={handleKeyboard}>
          <input type="radio" name="element" className="appearance-none aria-hidden" id="water" value={"watter"} onChange={handleInputChange} tabIndex={-1} required />
          Agua
        </label>
        <label className={`px-4 py-0 cursor-pointer border-4 border-solid rounded-full ${(elementSelection==='fire') ? 'border-link-dark' : 'border-transparent'}`} tabIndex={0} onKeyUp={handleKeyboard}>
          <input type="radio" name="element" className='appearance-none aria-hidden' id="fire" value={"fire"} onChange={handleInputChange} tabIndex={-1} required />
          Fuego
        </label>
        <label className={`px-4 py-0 cursor-pointer border-4 border-solid rounded-full ${(elementSelection==='earth') ? 'border-link-dark' : 'border-transparent'}`} tabIndex={0} onKeyUp={handleKeyboard}>
          <input type="radio" name="element" className='appearance-none aria-hidden' id="earth" value={"earth"} onChange={handleInputChange} tabIndex={-1} required />
          Tierra
        </label>
      </div>
      {/* Ingreso de puntaje en Platzi (level) */}
      <label className="flex flex-col gap-2">
        <span className="underline">¿Cuántos puntos tienes en <b>Platzi</b>?:</span>
        <input type="number" name="level" min={0} value={formData.level} onChange={handleInputChange} className='w-32 mx-auto rounded-md' />
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
