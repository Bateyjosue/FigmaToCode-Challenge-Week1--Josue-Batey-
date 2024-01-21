import { PropsWithChildren } from 'react'

interface ButtonProps {
  text: string
  className: string
}
function Button({text, className, children}: PropsWithChildren<ButtonProps> ) {
  return (
    <button className={className}>
      {children}
      {text}
    </button>
  )
}

export default Button