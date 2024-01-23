import WhatAppIcon from '../assets/icons/WhatAppIcon'
import serviceImages from '../assets/img/medcure.png'
import TextComponent from './TextComponent'
function Service() {
  return (
    <section className="wrapper-md lg:wrapper-lg grid lg:grid-cols-2 place-items-center gap-x-4 lg:py-20 ">
      <div className='lg:order-10'>
        <img src={serviceImages} alt="" />
      </div>
      <div className=''>
        <TextComponent
          title="Services"
          headline="Experienced in multiple medical practices"
          paragraphe="orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed."
          className="text-2xl lg:text-3xl lg:text2xl py-2"
          classNamePara="text-lg"
        >
            <WhatAppIcon/>
        </TextComponent>
      </div>
    </section>
  )
}

export default Service