import { useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress';



function Battle() {

  return (
    <div className="flex w-screen min-h-screen">
      <div className="flex flex-col w-[50rem] h-[30rem] bg-amber-300">
        <div className=' h-[10rem] w-full flex'>
          <div className='bg-lime-800 flex flex-col h-full w-[50%] p-[3rem]'>
            oi
            <LinearProgress sx={{width: "40%"}} variant="determinate" value={10} />
          </div>
          <div className='bg-red-300 h-full w-[50%]'>

          </div>
        </div>
        <div className=' h-[10rem] w-full flex'>
          <div className='bg-lime-400 h-full w-[50%]'>

          </div>
          <div className='bg-lime-800 flex flex-col h-full w-[50%] p-[3rem]'>
            oi
            <LinearProgress sx={{width: "40%"}} variant="determinate" value={10} />
          </div>
        </div>
        <div className='bg-blue-300 h-[10rem] w-full'></div>
      </div>

    </div>
  )
}

export default Battle