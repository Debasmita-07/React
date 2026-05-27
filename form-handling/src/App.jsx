import React from 'react'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("Form submitted successfully!")
  }

  return (
    <div>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <input type="text" placeholder='Type your text' className='bg-sky-200 rounded-sm p-4 m-10'/>
        <button type="submit" className='bg-red-500 rounded-sm p-2'>Submit</button>
      </form>
    </div>
  )
}

export default App
