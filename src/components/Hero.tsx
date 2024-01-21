import MessageIcon from "../assets/icons/MessageIcon"
import Button from "./Button"
import { heroImage } from "../assets"

function Hero() {
  return (
    <section className="poppins-regular grid lg:grid-cols-2 lg:mt-8 lg:place-items-center">
      <div className="flex flex-col text-center lg:text-left">
        <h4 className="text-secondary font-semibold lg:text-xl">Dr. Matthew anderson</h4>
        <h2 className="poppins-bold text-3xl lg:text-5xl font-bold">A dedicated doctor you can trust</h2>
        <p className="text-iris my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut nemo error placeat accusantium provident velit</p>
        <Button
          text="Book appointment"
          className="bg-primary flex gap-x-4 py-2 rounded-full font-semibold text-white w-2/3 mx-auto lg:w-1/2 items-center justify-center">
          <MessageIcon className="h-5 w-5"/>
        </Button>
      </div>
      <div className="flex mt-4 lg:mt-0 lg:justify-end">
        <img src={heroImage.default} alt="" className="-mr-16" />
      </div>
    </section>
  )
}

export default Hero