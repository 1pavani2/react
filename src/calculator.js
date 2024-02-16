import { useState } from "react"

export default function Calculator(){
    // const [input,setInput]=useState("")
    const [result,setResult]=useState("")
    const [input,setInput]=useState("")
    
    const inputValue=(value:string)=>{
        setInput((preValue)=>preValue+value)
    }
   const showOutput=()=>{
     setResult(eval(input))
   }
    return(
    <div className="flex justify-center">   
        <div className="bg-[white]] w-[25%] flex flex-col h-[800px] shadow-2xl">
            <div className="h-[50%] border ">
              <div className=" text-end h-[80%] pt-64 text-2xl pr-6">{input}</div>
              <div className="text-end h-[20%] text-2xl pt-4 pr-6">{result} </div>
            </div>
            <div className="bg-slate-300 px-10">
                <div className="flex flex-row  justify-between  py-5">
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                      onClick={()=>{
                        inputValue("+")}}
                    >+</button>
                    <button 
                    onClick={()=>{
                        inputValue("-")}}
                    className="bg-[white] w-[60px] h-[60px] text-2xl">-</button>
                    <button 
                     onClick={()=>{
                        inputValue("*")}}
                    className="bg-[white] w-[60px] h-[60px] text-2xl">*</button>
                    <button 
                     onClick={()=>{
                        inputValue("/")}}
                    className="bg-[white] w-[60px] h-[60px] text-2xl">/</button>
                </div>
                <div className="flex flex-row justify-between  py-5">
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        inputValue("7")
                    }}
                    >7</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        inputValue("8")
                    }}
                    >8</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        inputValue("9")
                    }}
                    >9</button>
                    <button 
                    onClick={showOutput}
                    className="bg-[white] w-[60px] h-[60px] text-2xl">=</button>
                </div>
                <div className="flex flex-row justify-between py-5">
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        inputValue("4")
                    }}
                    >4</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        inputValue("5")
                    }}
                    >5</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        inputValue("6")
                    }}
                    >6</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        setInput((prevNumber)=>prevNumber?.slice(0,-1))
                    }}
                    >c</button>
                </div>
                <div className="flex flex-row justify-between py-5">
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        inputValue("1")
                    }}
                    >1</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        inputValue("2")
                    }}
                    >2</button>
                    <button className="bg-[white] w-[60px] h-[60px] text-2xl"
                    onClick={()=>{
                        inputValue("3")
                    }}
                    >3</button>
                    <button
                    onClick={()=>{
                        setInput("")
                        setResult("")
                    }} 
                    className="bg-[white] w-[60px] h-[60px] text-2xl">AC</button>
                </div>
            </div>
            
        </div>
    </div>
    )
}