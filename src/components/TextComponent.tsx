import { PropsWithChildren } from 'react'
import Button from './Button'
import WhatAppIcon from '../assets/icons/WhatAppIcon'

interface TextComponentProps {
  title: string
  headline: string
  paragraphe: string
  className: string
  classNamePara: string
}

function TextComponent({title, headline, paragraphe,className,classNamePara}: PropsWithChildren<TextComponentProps>) {
  return (
    <div className="flex flex-col">
        <h4 className="text-secondary text-2xl lg:font-semibold lg:text-xl">{title}</h4>
        <h2 className={`poppins-bold font-semibold lg:font-bold ${className}`}>{headline}</h2>
        <p className={`text-iris my-4 ${classNamePara}`}>{paragraphe}</p>
        <Button
          text="Book an appointment"
          className="bg-primary flex gap-x-4 py-3 px-4 lg:px-0 rounded-full font-semibold text-white w-2.5/3 mx-auto lg:mx-0 lg:w-1/2 items-center justify-center">
          <WhatAppIcon/>
        </Button>
      </div>
  )
}

export default TextComponent