import Header from "./components/Header"
import Hero from "./components/Hero"


function App() {

  return (
    <div className="max-h-full h-dvh min-h-full bg-[#F8F8F8] poppins-regular">
      <Header />
      <main className="wrapper-md lg:wrapper-lg">
        <Hero />
      </main>
    </div>
  )
}

export default App
