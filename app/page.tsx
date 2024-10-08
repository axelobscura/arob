import Menu from "./components/Menu"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Menu />
      <div className="relative min-h-screen flex place-items-center justify-center flex-row">
        <p className='text-6xl pr-5'>OB ILUMINACIÓN</p>
        <p className='pt-2'>ILUMINACIÓN ARQUITECTÓNICA PROFESIONAL</p>
      </div>
      <Footer />
    </main>
  )
}
