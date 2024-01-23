import { PropsWithChildren } from 'react'
import Button from './Button'
import MessageIcon from '../assets/icons/MessageIcon'

interface TextComponentProps {
  title: string
  headline: string
  paragraphe: string
  className: string
  classNamePara: string
}

function TextComponent({title, headline, paragraphe,className,classNamePara}: PropsWithChildren<TextComponentProps>) {
  return (
    <div className="flex flex-col text-center lg:text-left">
        <h4 className="text-secondary font-semibold lg:text-xl">{title}</h4>
        <h2 className={`poppins-bold font-bold ${className}`}>{headline}</h2>
        <p className={`text-iris my-4 ${classNamePara}`}>{paragraphe}</p>
        <Button
          text="Book appointment"
          className="bg-primary flex gap-x-4 py-2 rounded-full font-semibold text-white w-2/3 mx-auto lg:mx-0 lg:w-1/2 items-center justify-center">
          <MessageIcon className="h-5 w-5"/>
        </Button>
      </div>
  )
}

export default TextComponent