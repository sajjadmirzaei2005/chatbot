import React from 'react'

export default function ChatHeader() {
  return (
    <div className='flex items-center justify-between p-4 bg-black/30 backdrop-blur-md shadow-lg'>
        <h1 className='text-white font-bold'>چت هوش مصنوعی</h1>

        <div className='gap-2 flex items-center'>
            <span className='h-3 w-3 rounded-full bg-green-300 animate-pulse'></span>
            <span className='text-gray-300 text-sm'>آنلاین</span>
        </div>
    </div>
  )
}
