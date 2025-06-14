import RoomsSection from './components/rooms/RoomsSection'
import ZonesSection from './components/zones/ZonesSection'

function App() {
  return (
    <section className='bg-gray-50 w-full flex pt-20 h-screen'>
      <div className='grid grid-cols-2 w-full space-10'>
        <ZonesSection />
        <RoomsSection />
      </div>
    </section>
  )
}

export default App
