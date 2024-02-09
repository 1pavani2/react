import { useState } from "react"

export default function Calculator(){
    const [number,setNumber]=useState("")
    const [result,setResult]=useState("")
    const [clear,setClear]=useState()
    const clicktoclear=()=>{
         setClear((beforenumber)=>beforenumber.slice(0,-1))
    }
    return(
    <div className="flex justify-center">
        <div className="bg-[white]] w-[25%] flex flex-col h-[800px] shadow-2xl">
            <div className="h-[50%]">
              {number}
            </div>
            <div className="bg-slate-200 px-10">
                <div className="flex flex-row  justify-between  py-5">
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    
                    >+</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl">-</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl">*</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl">/</button>
                </div>
                <div className="flex flex-row justify-between  py-5">
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        setNumber((beforenumber)=>beforenumber+7)
                    }}
                    >7</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        setNumber((beforenumber)=>beforenumber+8)
                    }}
                    >8</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        setNumber((beforenumber)=>beforenumber+9)
                    }}
                    >9</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl">=</button>
                </div>
                <div className="flex flex-row justify-between py-5">
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        setNumber((beforenumber)=>beforenumber+4)
                    }}
                    >4</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        setNumber((beforenumber)=>beforenumber+5)
                    }}
                    >5</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        setNumber((beforenumber)=>beforenumber+6)
                    }}
                    >6</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={clicktoclear}
                    >c</button>
                </div>
                <div className="flex flex-row justify-between py-5">
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        setNumber((beforenumber)=>beforenumber+1)
                    }}
                    >1</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        setNumber((beforenumber)=>beforenumber+2)
                    }}
                    >2</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        setNumber((beforenumber)=>beforenumber+3)
                    }}
                    >3</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl">AC</button>
                </div>
            </div>
            
        </div>
    </div>
    )
}