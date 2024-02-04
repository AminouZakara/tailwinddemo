import React from 'react'






const App = () => {
  return (
    <div className=''>
      <div className="bg-white-400 p-1">
        <div className="grid grid-cols-3 gap-2 ">

          <div className="px-2 flex items-center header h-12 bg-orange-400 rounded col-span-full text-white font-extrabold text-2xl">
            <h2>Home</h2>
            <h2 className='px-8'>Logo</h2>

            <div className='flex ml-auto'>
              <h2>Contact</h2>
              <h2 className='px-8'>About us</h2>
              <h2>Login</h2>
            </div>


          </div>

          <div className="px-2 banner flex justify-evenly text-white font-extrabold text-2xl h-8  bg-green-500 rounded col-span-full">
            <h3>Link 1</h3>
            <h3>Link 2</h3>
            <h3>Link 3</h3>
            <h3>Link 4</h3>
            <h3>Link 5</h3>

          </div>

          <div className="main col-span-full grid grid-flow-col gap-2">
            <div className="px-2 adds col-span-2 bg-green-300 rounded">
              <h3 className='text-green-950'>Adds</h3>
            </div>

            <div className="h-screen px-2 text-white col-span-8 content text- bg-orange-400 rounded">
              <h3>Content</h3>
            </div>

            <div className="px-2 adds col-span-2 bg-green-300 rounded">
              <h3 className='text-green-950'>Adds</h3>
            </div>
          </div>

          <div className="px-2 flex justify-center items-center footer h-8 bg-green-500 rounded col-span-full">
            <h3 className='text-white'>Footer</h3>
          </div>

        </div>





      </div>
    </div>
  )
}

export default App