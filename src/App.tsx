import { useState } from 'react'
import { FindInput } from './components/FindInput'

import useAppContext from './context/AppContext'
import { UserDetails } from './components/UserDetails'

function App() {
  const {store, actions} = useAppContext()
 

  

  return (
    
    <section className='w-screen h-screen bg-[#141C2F] flex flex-col justify-center items-center'>
      <div className='w-full h-full xl:w-[40%] xl:h-[70%] md:w-[70%] sm:w-[70%] flex flex-col items-center p-4'>
        <FindInput/>
        {store?.data !==null && <UserDetails/>}
      </div>
    </section>
  )
}

export default App
