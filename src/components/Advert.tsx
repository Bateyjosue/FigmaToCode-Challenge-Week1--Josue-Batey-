import { PropsWithChildren } from "react"
interface AdvertProp {
  title: string
  paragraphe: string
  className: string
}
function Advert({title, paragraphe,className, children}: PropsWithChildren<AdvertProp>) {
  return (
    <article className={className}>
      {children}
      <div className="text-white">
        <h2 className="text-base  font-medium">{title}</h2>
        <p className="text-xs font-extralight">{paragraphe}</p>
      </div>
    </article>
  )
}

export default Advert