import React from 'react'

const App = () => {
  return (
    <div className='bg-green-900 h-screen w-screen p-4'>
      <div className="container-wrapper h-screen flex justify-center  w-screen bg-green-400 p-2">
        <div className="container p-3 grid grid-cols-3 gap-3 ">

          <div className="header bg-green-200 p-3 rounded col-span-full">
            <h2>Welcome to our website!</h2>
          </div>

          <div className="banner bg-green-200 p-3 rounded col-span-full">
            <h3>Banner</h3>
          </div>

          <div className="content bg-green-200 p-3 rounded col-span-2">
            <h3>Content</h3>
          </div>

          <div className="adds bg-green-200 p-3 rounded">
            <h3>Adds</h3>
          </div>

          <div className="footer bg-green-200 p-3 rounded col-span-full">
            <h3>Footer</h3>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App