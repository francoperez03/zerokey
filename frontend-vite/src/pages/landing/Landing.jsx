import Footer from '@/components/footer/Footer'
import Company from './components/company/Company'
import Home from './components/home/Home'
import PCI from './components/pci/PCI'
import Problem from './components/problem/Problem'
import About from './components/about/About'

function Landing() {
  return (
    <main className="flex  flex-col items-center justify-between">
        <Home/>
        <Problem />
        <PCI />
        <Company />
        <About />
        <Footer />
    </main>
  )
}

export default Landing