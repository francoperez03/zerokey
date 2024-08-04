import Demo from "./components/demo/Demo"
import Home from "./components/home/Home"

function LiveDemo() {
  return (
    <main className="bg-gray-800 h-screen  ">
      <Home />
      <Demo />
    </main>
  )
}

export default LiveDemo