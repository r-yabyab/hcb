import Button from 'react-bootstrap/Button'
import React from 'react'
import { Link } from 'react-router-dom'

export function BottomNav () {
return(
    <>

        {/* mainContainer */}
        <div className='overflow-hidden bg-gray-300 absolute bottom-0 w-full text-[12px] pl-10'>
            {/* mainUL */}
            <div className='text-center flex [&>p]:mb-[0px] [&>p]:mr-[100px]'>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <div className='absolute right-[10px] text-gray-500'>Powered by Node, React</div>
            </div>

        </div>
    </>
)
}