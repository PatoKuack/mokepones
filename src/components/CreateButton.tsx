import { CreateIcon } from './CreateIcon';
import '../index.css';
import { useState } from 'react';

interface Props {
  type: 'submit' | 'reset' | 'button' | undefined
  content: string | JSX.Element
  title: string
  className?: string
  onClick?: ()=>void
}

export const CreateButton = (props: Props): JSX.Element => {

  const [activation, setActivation] = useState<boolean>(false);
  const activateButton = (): void => {
    setActivation(true);
    if(props.onClick) {
      props.onClick()
    }
    setTimeout((): void => setActivation(false), 300);
  }

  return (
    <>
      <div className="relative mb-4 hover:brightness-95 w-fit">
        <div className={`absolute top-[6px] left-[-4px] w-[calc(100%+8px)] h-full bg-secondary border-4 border-solid border-quaternary rounded-full pointer-events-none`}></div>
        <button 
          title={props.title}
          type={props.type} 
          onClick={activateButton}
          className={`
            relative px-2 py-2 rounded-full text-base 
            transition ease-in-out duration-100 
            sm:px-4 sm:font-medium sm:text-lg 
            ${activation && "translate-y-[2px]"} 
            ${props.className}
          `}
        >
          <div className='absolute top-0 left-0 w-full h-[calc(60%)] rounded-t-full bg-secondary opacity-90'></div>
          <span className='text-transparent pointer-events-none'>{props.content}</span>
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none'>{props.content}</span>
          <CreateIcon 
            type={"reflejo"}
            classSVG={"absolute top-1 -left-1 fill-shadow-light h-full -translate-x-1/2 pointer-events-none"}
            classContainer={"absolute top-0 right-0 w-max h-3/4 p-1 opacity-50"}
          />
        </button>
      </div>
    </>
  )
}

/* https://codepen.io/ayamflow/pen/mdqGwg */
/* https://codepen.io/arronhunt/pen/WWOOeO */