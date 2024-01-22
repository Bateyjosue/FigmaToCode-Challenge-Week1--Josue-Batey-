import MessageIcon from "../assets/icons/MessageIcon"
import Button from "./Button"
import { heroImage } from "../assets"
import Advert from "./Advert"
import ClockIcon from "../assets/icons/ClockIcon"
import CircleCheckIcon from "../assets/icons/CircleCheckIcon"
import HealthIcon from "../assets/icons/HealthIcon"

function Hero() {
  return (
    <section className="wrapper-md lg:wrapper-lg grid lg:grid-cols-2 lg:place-items-center relative rounded-b-2xl pb-32 lg:pb-24">
      <div className="flex flex-col text-center lg:text-left">
        <h4 className="text-secondary font-semibold lg:text-xl">Dr. Matthew anderson</h4>
        <h2 className="poppins-bold text-3xl lg:text-5xl font-bold">A dedicated doctor you can trust</h2>
        <p className="text-iris my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut nemo error placeat accusantium provident velit</p>
        <Button
          text="Book appointment"
          className="bg-primary flex gap-x-4 py-2 rounded-full font-semibold text-white w-2/3 mx-auto lg:mx-0 lg:w-1/2 items-center justify-center">
          <MessageIcon className="h-5 w-5"/>
        </Button>
      </div>
      <div className="flex mt-4 lg:mt-0 lg:justify-end">
        <img src={heroImage.default} alt="" className="-mr-16" />
      </div>
      <div className="wrapper-md lg:wrapper-lg lg:absolute flex flex-col lg:flex-row gap-6 -bottom-48 lg:-bottom-12 lg:left-20 lg:right-20">
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