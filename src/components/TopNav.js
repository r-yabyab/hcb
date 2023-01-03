import Button from 'react-bootstrap/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import OMGPOPlogo from '../photos/OMGPOP_logo.png'

export function TopNav () {
return(
    <>
    {/* mainContainer */}
    <div className='overflow-hidden bg-gray-300 pl-[120px] select-none'>

            <div className='absolute w-[160px] -mt-[20px] left-[0px]'>
            <Link to='/' className=' text-black'><img src={OMGPOPlogo} alt='OMGPOP logo' /></Link>
            </div>

{/* mainUL */}
<ul className='flex [&>li]:ml-4 [&>li]:pt-4'>
    {/* Home Icon */}
<li className="translate-y-1">
<Link to='/' className=' text-black'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
            </svg></Link>
</li>
<li className='text-gray-400'>GAMES</li>
<li className='text-gray-400'>SHOPS</li>
<li className='text-gray-400'>CASH</li>
<li><Link to='info' className='text-black no-underline'>INFO</Link></li>
<li className="translate-y-1 text-gray-400">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
</svg>
</li>
<li className='-mt-1 '>
    <Button variant="secondary" size='sm'>
        <div className='flex'>
        <div className='pr-2'>Search</div>
        <div className="translate-y-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg></div>
        </div>
    </Button>
</li>

            </ul>
{/* Topright Avatar */}
            <div className='absolute right-[10px] top-[20px] flex text-gray-400'>
                <div className=' border-l-[2px] border-gray-400 mr-2' />
                <div className='pr-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
                </div>
                <div className='-mt-1'>
                    Rod Sexy 5000
                </div>

</div>

    </div>

        <div className='absolute top-[40px] right-[200px] animate-bounce'>
            <Link to='/examples'>
                <Button variant="info" size="sm">ex img</Button></Link>
        </div>

    </>
)
}