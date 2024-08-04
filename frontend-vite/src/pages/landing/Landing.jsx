import Footer from '@/components/footer/Footer'
import Company from './components/company/Company'
import Home from './components/home/Home'
import PCI from './components/pci/PCI'
import Problem from './components/problem/Problem'
import About from './components/about/About'
import Contact from '@/components/contact/Contact'
import ButtonDemo from './components/buttonDemo/ButtonDemo'
import Process from './components/process/Process'

function Landing() {
  return (
    <main className="flex  flex-col items-center justify-between">
        <Home/>
        <Problem />
        <PCI />
        <Company />
        <Process />
        <ButtonDemo />
        <Contact />
        <About />
        <Footer />
    </main>
  )
}

export default Landing