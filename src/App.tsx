import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Service from "./components/Service"


function App() {

  return (
    <div className="max-h-full h-dvh min-h-full poppins-regular">
      <Header />
      <main className="bg-dark-gray">
        <Hero />
        <About />
        <Service/>
      </main>
    </div>
  )
}

export default App
