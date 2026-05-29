import React, { useState } from 'react'

const App = () => {

  const [first, setfirst] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form submitted successfully!", first)

    setfirst('')
  }

  return (
    <div>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <input onChange={(e) => { setfirst(e.target.value) }}
          type="text" placeholder='Type your text' className='bg-sky-200 rounded-sm p-4 m-10' value={first} />
        <button type="submit" className='bg-red-500 rounded-sm p-2'>Submit</button>
      </form>
    </div>
  )
}

export default App
