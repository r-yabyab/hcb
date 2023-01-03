import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SocketStuff from './SocketStuff'
import '../App.css'

export function BottomNav () {

    const [messageBox, setMessageBox] = useState(false)

    const clickHandler = () => {
        setMessageBox(!messageBox)
        console.log("clicked")
    }

return(
    <>

        {/* mainContainer */}
        <div className='overflow-hidden bg-gray-300 fixed bottom-0 w-full text-[12px] pl-10'>
            {/* mainUL */}
            <div className='text-center flex [&>p]:mb-[0px] [&>p]:mr-[100px]'>
                <p className='pl-10 -ml-10 pr-20 hover:bg-slate-400 hover:cursor-pointer' onClick={clickHandler}>
{messageBox ? 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
<path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
<path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/></svg>            
}                   
                </p>
                <p className='-ml-20'>test</p>
                <p>test</p>
                <div className='absolute right-[10px] text-gray-500'>Powered by Node, React, Express, Socket.io</div>
            </div>

        </div>

<div className='FadeIn'>
        {messageBox === true && <div>
            <div className='absolute bottom-12 left-4 bg-blue-400 p-4'>
                <SocketStuff  />
                <p className='bg-yellow-100 opacity-80 animate-pulse select-none'>Can send globally to other people, only 1 message</p>
            </div>
        </div>}
</div>

        {/* <div className='absolute bottom-12 left-4 bg-blue-400 p-4'>
            <SocketStuff />
            <p className='bg-yellow-100 opacity-80 animate-pulse select-none'>Can send globally to other people, only 1 message</p>
        </div> */}

    </>
)
}