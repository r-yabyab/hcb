import React from "react";
import Ex1 from "../photos/ex_beginning.jpg"
import Ex2 from "../photos/ex_end.jpg"

export function Examples () {
    return(
        <>
        <div className="fixed flex pl-4 pr-4 [&>p]:w-full top-[50%] -translate-y-1/2">
<p className="mr-4"><img src={Ex1} alt="Example image 1" /></p>
<p><img src={Ex2} alt="Example image 2" /></p>
        </div>
        </>
    )
}