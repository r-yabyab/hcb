import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import SocketStuff from './SocketStuff';
import { TextRand } from './TextRand';

function HomePage () {

    return(
<>
    {/* maincContainer */}
    <div className='mt-2 mr-16 mb-4 ml-16 relative '>

                {/* middle boxContainer w/ color*/}
<sec className='[&>div]:bg-gray-200 [&>div]:w-full'>
    {/* top sec of box */}
    <div className='relative top-10 min-h-[600px] rounded-2xl'>
        {/* topleft sec */}
        <div className='pl-4 pt-3 relative max-w-[600px]'>
            <p className='select-none font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-fuchsia-500 to-amber-400'>
                {/* PLAY GAMES, MEET PEOPLE. HANG OUT. */}
                <TextRand />
            </p>
            <p className='text-[10px] tracking-tight'>Welcome to the best place to play games and have fun with your friends online. Get
                started now by playing a game. It's free!
            </p>
            <p className='absolute right-10'><Button variant='dark' size='sm'>SIGN UP NOW</Button></p>
        </div>

        <div className='right-0 absolute pr-4'>
            penis
        </div>

    </div>



</sec>

        {/* <div className=' text-red-700 bottom-[50%] translate-x-1/2 right-[50%] -translate-y-1/2'>
            HomePage
        </div> */}
        
    </div>




</>
    )
}

export default HomePage;