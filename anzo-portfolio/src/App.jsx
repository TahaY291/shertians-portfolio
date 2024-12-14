import React from 'react'
import Page1 from './pages/Page1'
import Header from './component/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'

function App() {
  return (
    <>
      <div>
        <Header />
        <Page1/>
        <Page2 />
        <Page3 />
        <Page4 />
        <Page6 />
        <Page5 />
      </div>
    </>
  )
}

export default App