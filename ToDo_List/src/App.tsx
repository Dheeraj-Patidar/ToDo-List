import SmartClock from './components/SmartClock';
import './App.css'
import ToDo_List from './components/ToDo_List'
function App() {

  return (
    <>
    <div className='container flex  gap-10 bg-black text-white mx-auto items-center justify-center h-screen'>
        <SmartClock/>
        <ToDo_List/>
      </div>
      
      
    </>
  )
}

export default App
