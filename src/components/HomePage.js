import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import SocketStuff from './SocketStuff';
import { TextRand } from './TextRand';

// photos
import CardDealer from '../photos/card_dealer.jpg'
import Obama from '../photos/bobamajpg.jpg'
import PoloG from '../photos/pologjpg.jpg'
import Trump from '../photos/dtrumppng.png'
import Naruto from '../photos/narutojpg.jpg'
import Clay from '../photos/clay_catjpg.jpg'
import FriedRice from '../photos/fried_ricejpg.JPG'
import Fb from '../photos/facebook_logopng.png'

function HomePage () {

    return(
        <>
            {/* maincContainer */}
            <div className='pt-2 pr-16 pl-16 relative max-w-[1600px] min-w-[1024px] justify-center m-auto'>
                {/* middle boxContainer w/ color*/}
                <sec className='[&>div]:bg-[#404040] [&>div]:w-full [&>div]:bg-opacity-60 [&>div]:pl-4' >
                    {/* top sec of box */}
                    <div className='relative top-10 min-h-[650px] rounded-2xl'>
                        {/* topleft sec */}
                        <div className='pt-3 relative max-w-[600px] pb-5'>
                            <div className='select-none font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-fuchsia-500 to-amber-400'>
                                {/* PLAY GAMES, MEET PEOPLE. HANG OUT. */}
                                <TextRand />
                            </div>
                            <p className='text-[10px] text-gray-400 tracking-tight -mt-[12px]'>Welcome to the best place to play games and have fun with your friends online. Get
                                started now by playing a game. It's free!
                            </p>
                        </div>

                        {/* topRight sec of box */}
                        {/* topRight sec of box */}
                        {/* topRight sec of box */}
                        {/* topRight sec of box */}
                        {/* <div className='float-right -mt-[66px] mr-[160px]'>
                            fsdklfjslkfjsd
                            <div>
                                <img className='h-[30px] w-[30px]' src={Fb} alt="facebook logo" />
                            </div>
                        </div> */}


                        {/* photo middleLeft */}
                        <div className=' w-[66%] relative float-left max-w-[1000px]'>
                        <p className='absolute -top-[40px] right-2'><Button variant='dark' size='sm'>SIGN UP NOW</Button></p>
                            <div className='relative'>
                                <div className='absolute right-[50%] translate-x-1/2 top-[50%] -translate-y-1/2'>
                                    <Button variant="secondary" className='opacity-40'><span className="text-sm">PLAY NOW</span></Button>
                                    </div>
                                <div className='
                                absolute bg-gray-900 bg-opacity-70 text-white w-full
                                [&>p]:-mb-1 [&>p]:ml-1
                                '>
                                <p className='text-gray-400'>FEATURED GAME</p>
                                <p className='text-3xl font-semibold pb-2'>TONK</p>
                                </div>
                                <img draggable="false" className='object-cover pointer-events-none select-none w-full max-h-[400px]' src={CardDealer} alt='card_dealer.jpg' />
                            </div>
                        </div>

                        {/* avatars right */}
                        {/* <div className='
                                w-[30%] float-left
                                [&>div>div>p]:-mt-6 
                                    first:[&>div>div>p]:text-white first:[&>div>div>p]:font-semibold  
                                    last:[&>div>div>p]:text-gray-400 last:[&>div>div>p]:font-thin
                                [&>div>div]:-mb-4 
                                [&>div>img]:aspect-square [&>div>img]:object-cover [&>div>img]:w-[40%]'> */}
                        <div 
                        className='
                        w-[30%] justify-center float-right flex-wrap flex pl-4 mr-2 
                            [&>div>img]:p-1 [&>div>img]:-m-1 [&>div>img]:pb-2
                            [&>div>div]:-mb-[4px]
                            [&>div>div>p]:tracking-tighter [&>div>div>p]:text-[12px] [&>div>div>p]:-mt-4 [&>div>div>p]:mb-[10px] [&>div>div>p]:pl-1 
                                 first:[&>div>div>p]:text-white first:[&>div>div>p]:font-semibold
                                 last:[&>div>div>p]:text-gray-400
                        '>
                        <p className='absolute top-[86px] right-10'><Button variant='dark' size='sm'>LOG IN</Button></p>
                            <div className='relative w-[120px] object-cover'>
                                <img className='object-cover w-full aspect-square hover:animate-spin' src={Obama} alt="obama pic" />
                                <div className='absolute bottom-0 left-0'>
                                    <p>Obama</p>
                                    <p>Playing Swapple</p>
                                </div>
                            </div>
                            <div className='relative w-[120px] object-cover'>
                                <img className='object-cover w-full aspect-square' src={PoloG} alt="polo g pic" />
                                <div className='absolute bottom-0 left-0'>
                                    <p>Obama_fan</p>
                                    <p>Playing Swapple</p>
                                </div>
                            </div>
                            <div className='relative w-[120px] object-cover'>
                                <img className='object-cover w-full aspect-square' src={Trump} alt="trump pic" />
                                <div className='absolute bottom-0 left-0'>
                                    <p>Trunk</p>
                                    <p>Playing Rally Simulator</p>
                                </div>
                            </div>
                            <div className='relative w-[120px] object-cover'>
                                <img className='object-cover w-full aspect-square' src={Naruto} alt="naruto pic" />
                                <div className='absolute bottom-0 left-0'>
                                    <p>latino-kid69</p>
                                    <p>Playing Swapples</p>
                                </div>
                            </div>

                            <div className='relative w-[120px] object-cover'>
                                <img className='object-cover w-full aspect-square' src={Clay} alt="admin cat pic" />
                                <div className='absolute bottom-0 left-0'>
                                    <p>Not_a_cat</p>
                                    <p>Playing Swapples</p>
                                </div>
                            </div>
                            <div className='relative w-[120px] object-cover'>
                                <img className='object-cover w-full aspect-square' src={FriedRice} alt="fried rice epic pic" />
                                <div className='absolute bottom-0 left-0'>
                                    <p>Ching Chong 100</p>
                                    <p>Playing Scrabble</p>
                                </div>
                            </div>
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