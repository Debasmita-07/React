import React, { useState } from 'react'


const App = () => {

  const [num, setnum] = useState(0)

  function increaseNum() {
    setnum(num+1)
  }

  function decreaseNum() {
    setnum(num-1)
  }

  function reset() {
    setnum(0)
  }

  return (
    <div>
      <h1 className='text-5xl bg-olive-400 w-fit p-7 my-10 mx-40 rounded-xl'>{num}</h1>

      <button onClick={increaseNum} className='bg-sky-200 text-2xl rounded-sm p-3 m-10'>Increase</button>
      <button onClick={decreaseNum} className='bg-rose-200 text-2xl rounded-md p-3 m-10'>Decrease</button>
      <button onClick={reset} className='bg-slate-200 text-2xl rounded-md p-3 m-10'>Reset</button>
    </div>
  )
}

export default App
