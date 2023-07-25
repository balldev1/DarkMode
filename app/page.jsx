'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { BsFillCloudSunFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'

export default function Home() {

  const [theme, setTheme] = useState('Light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  const handleSwitch = () => {
    setTheme(theme === 'dark' ? 'Light' : 'dark')
  }


  return (

    <div className={`h-screen ${theme === 'dark' ? 'dark:bg-black' : 'bg-white'} text-black flex justify-center items-center`}>
      <div onClick={handleSwitch} className='flex flex-col items-center justify-center'>
        {
          theme === 'dark' ?
            (<BsFillCloudSunFill size={300} className='text-orange-500' />)
            :
            (<MdDarkMode size={300} className='text-blue-500' />)
        }
        <h1 className='text-orange-500  text-[50px] mt-2'>👆 Click here 👆</h1>
      </div>
    </div>



  )
}
