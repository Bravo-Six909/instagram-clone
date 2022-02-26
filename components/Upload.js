import React, { useState } from 'react'

const Upload = () => {
    const [text, setText] = useState("");

    const uploadForm = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
    }


  return (
    <div className='h-screen w-screen flex justify-center'>
        <form onSubmit={uploadForm} className='w-screen md:w-1/3 flex justify-center items-center flex-col h-1/2 border bg-gray-100 rounded-md shadow-lg'>
            <label className='rounded-full' htmlFor='image'><img className=' h-28 w-h-28' src="/upload.png"/></label>
            <input hidden id='image' type="file" />
            <input onChange={(e) => {setText(e.target.value)}} className='outline-none py-2 px-4 my-4' placeholder='Enter Whats Happening?' />
            <button className=' w-1/3 h-8 rounded-lg bg-gradient-to-l from-[#FEDA77] via-[#DD2A7B] to-[#8134AF] text-white'>Post</button>
        </form>
    </div>
  )
}

export default Upload