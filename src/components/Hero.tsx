import MessageIcon from "../assets/icons/MessageIcon"
import Button from "./Button"
import { heroImage } from "../assets"

function Hero() {
  return (
    <section className="poppins-regular grid lg:grid-cols-2 mt-8 place-items-center">
      <div className="flex flex-col">
        <h4 className="text-secondary font-semibold text-xl">Dr. Matthew anderson</h4>
        <h2 className="poppins-bold text-5xl font-bold">A dedicated doctor you can trust</h2>
        <p className="text-iris my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut nemo error placeat accusantium provident velit</p>
        <Button
          text="Book appointment"
          className="bg-primary flex gap-x-4 px-4 py-2 rounded-full font-semibold text-white w-1/2">
          <MessageIcon className="h-6 w-6"/>
        </Button>
      </div>
      <div className="flex justify-end">
        <img src={heroImage.default} alt="" className="-mr-16" />
      </div>
    </section>
  )
}

export default Hero