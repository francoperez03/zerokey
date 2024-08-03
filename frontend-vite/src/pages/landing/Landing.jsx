import Home from './components/home/Home'
import Problem from './components/problem/Problem'

function Landing() {
  return (
    <main className="flex  flex-col items-center justify-between">
        <Home/>
        <Problem />
    </main>
  )
}

export default Landing