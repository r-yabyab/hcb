import React, {useEffect} from "react";


const WordList1 = ["GAMES", "PEOPLE", "OUT"]
const WordList2 = ["GAMES", "PEOPLE", "OUT"]
const WordList3 = ["GAMES", "PEOPLE", "OUT"]

export function TextRand () {

let word1 = WordList1[Math.floor(Math.random() * WordList1.length)]
let word2 = WordList2[Math.floor(Math.random() * WordList2.length)]
let word3 = WordList3[Math.floor(Math.random() * WordList3.length)]

    return(
        <>
        <p>PLAY {word1}. MEET {word2}. HANG {word3}</p>
        </>
    )
}