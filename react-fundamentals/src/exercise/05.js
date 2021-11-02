import * as React from 'react'
import '../box-styles.css'
function Box({size, color}) {
  return (
    <div
      className={`box box--${size}`}
      style={{backgroundColor: color, fontStyle: 'italic'}}
    >
      {size} {color} box
    </div>
  )
}
function App() {
  return (
    <div>
      <Box size="small" color="lightblue" />
      <Box size="medium" color="pink" />
      <Box size="large" color="orange" />
    </div>
  )
}

export default App
