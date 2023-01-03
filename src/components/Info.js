import React from "react";

function Info () {
    return(
        <>


<div className="absolute top-[25%] left-[50%] -translate-x-1/2 text-center text-gray-500 hover:animate-spin">
<div className='w-[500px] h-[140px] rounded-2xl bg-purple-200'>
    <div className="[&>p]:-mt-[10px] pt-4">
        <p>Boomer revival site built with modern tech.</p>
        {/* <p>Boomer revival site with preserved UI built with modern tech.</p> */}
    </div>
    <p className="">Not affiliated with OMGPOP or Zynga.</p>
    <p className="text-gray-400 font-extralight animate-pulse">Dev start: 01/01/2023 14:00</p>

</div>
</div>
        </>
    )
}

export default Info;

