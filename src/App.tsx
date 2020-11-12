import React, { useEffect } from 'react'
import './App.css'

const url = 'https://gist.githubusercontent.com/sbekrin/40df3ef1ed883a90471aa39fe0a8d9c1/raw/460d11789a2c02c0623f9fa6ad2b0011ddbc114f/recipes-sample.json'

function App() {
  useEffect(() => {
    async function getRecipes() {
      fetch(url)
        .then((res) => res.json())
        // .then((res) =>)
    }

    getRecipes()
  }, [])

  return (
    <div className="App">
      
    </div>
  )
}

export default App
