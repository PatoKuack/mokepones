import { CreateIcon } from './CreateIcon';
import '../index.css';

interface Props {
  type: 'submit' | 'reset' | 'button' | undefined
  content: string
  title: string
  className?: string
  onClick?: ()=>void
}

export const CreateButton = (props: Props): JSX.Element => {
  return (
    <>
      <div className="relative mb-4 hover:brightness-95 ">
        <button type={props.type} className={`
          relative px-2 py-2 rounded-full text-base bg-secondary opacity-90 z-10 
          transition ease-in-out duration-100 
          active:translate-y-[2px] 
          sm:px-4sm:font-medium sm:text-lg 
          ${props.className}
        `}>
          {props.content}
          <CreateIcon 
            type={"reflejo"}
            classSVG={"fill-shadow-light dark:fill-shadow-dark h-full -translate-x-full"}
            classContainer={"absolute top-0 right-0 h-3/4 p-1 opacity-50"}
          />
        </button>
        <div className={`absolute top-[6px] left-[-4px] w-[calc(100%+8px)] h-full bg-secondary border-4 border-solid border-quaternary rounded-full`}></div>
      </div>
    </>
  )
}

/* https://codepen.io/ayamflow/pen/mdqGwg */
/* https://codepen.io/arronhunt/pen/WWOOeO */