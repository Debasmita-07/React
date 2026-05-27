import React from 'react'
import Card from './components/Card/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Demi" age={21}/>
      <Card user="Debasmita" age={21}/>
      <Card user="Haigurey" age={21}/>
    </div>
  )
}

export default App
