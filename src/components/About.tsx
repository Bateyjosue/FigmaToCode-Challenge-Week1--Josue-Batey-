import WhatAppIcon from "../assets/icons/WhatAppIcon"
import DocImage from '../assets/img/about-doc.png'
import TextComponent from "./TextComponent"

function About() {
  return (
    <section className="wrapper-md lg:wrapper-lg grid grid-cols-1 lg:grid-cols-2 lg:place-content-center gap-x-16 pb-16 lg:pb-0 lg:py-32 bg-white">
      <div className="">
        <img src={DocImage} alt="" />
      </div>
      <div className="flex items-center">
        <TextComponent
          title="About me"
          headline="A dedicated doctor with the core mission to help"
          paragraphe="orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum. Tellus quam mauris aenean turpis vulputate sodales nullam lobortis. Vulputate tortor tincidun."
          className="text-2xl lg:text-3xl lg:text2xl py-2"
          classNamePara="text-sm"
        >
            <WhatAppIcon/>
        </TextComponent>
      </div>
    </section>
  )
}

export default About