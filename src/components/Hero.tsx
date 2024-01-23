import MessageIcon from "../assets/icons/MessageIcon"
import Button from "./Button"
import { heroImage } from "../assets"
import Advert from "./Advert"
import ClockIcon from "../assets/icons/ClockIcon"
import CircleCheckIcon from "../assets/icons/CircleCheckIcon"
import HealthIcon from "../assets/icons/HealthIcon"

function Hero() {
  return (
    <section className="wrapper-md lg:wrapper-lg grid lg:grid-cols-2 lg:place-items-center relative rounded-b-2xl pb-0 lg:pb-24">
      <div className="order-10 lg:order-0 flex flex-col text-center lg:text-left">
        <h4 className="text-secondary text-2xl mb-2 lg:font-semibold lg:text-xl">Dr. Matthew anderson</h4>
        <h2 className="poppins-bold text-3xl lg:text-5xl font-bold">A dedicated doctor you can trust</h2>
        <p className="text-iris text-lg my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget vel, nunc nulla feugiat. Metus ut.</p>
        <Button
          text="Book appointment"
          className="bg-primary mb-8 lg:mb-0 flex gap-x-4 py-2 rounded-full font-semibold text-white w-2/3 mx-auto lg:mx-0 lg:w-1/2 items-center justify-center">
          <MessageIcon className="h-5 w-5"/>
        </Button>
      </div>
      <div className="order-5 lg:order-10 flex mt-4 mb-10 lg:mb-0 lg:mt-0 lg:justify-end">
        <img src={heroImage.default} alt="" className="-mr-16" />
      </div>
      <div className=" order-10 wrapper-md lg:wrapper-lg lg:absolute flex flex-col lg:flex-row gap-6 -bottom-20 lg:-bottom-12 lg:left-20 lg:right-20">
        <Advert
          title="24 hour service"
          paragraphe="Lorem ipsum dolor sit amet, consectetur adipscing elit."
          className="bg-primary flex gap-4 items-center rounded-xl py-2 px-4"
        >
          <ClockIcon className="h-16" />
        </Advert>

        <Advert
          title="8 years of experience"
          paragraphe="Lorem ipsum dolor sit amet, consectetur adipscing elit."
          className="bg-primary flex gap-2 items-center rounded-xl py-2 px-4"
        >
          <CircleCheckIcon className="h-16" />
        </Advert>

        <Advert
          title="High quality care"
          paragraphe="Lorem ipsum dolor sit amet, consectetur adipscing elit."
          className="bg-primary flex gap-4 items-center rounded-xl py-2 px-4"
        >
          <HealthIcon className="h-16" />
        </Advert>
      </div>
    </section>
  )
}

export default Hero