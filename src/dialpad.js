import { useState } from 'react'
import Backspace from './assets/backspace img.jpg'

export default function Dialpad(){
    const [dial,setDial]=useState("")
    const maxDigits=30
    const truncatedDial = dial.slice(-maxDigits);
    return(
       <div>
       <div className="bg-slate-400 w-[30%] h-[500px] min-h-auto px-8 py-8 flex flex-col space-y-10 rounded-lg">
        <div className="flex flex-row px-10">
        <div className="h-[50px] w-[100%] px-3 bg-white flex flex-row justify-between">
          <div className='py-3 flex justify-start w-[85%] items-start'>{truncatedDial}</div>
         <button className='py-2'
         onClick={()=>{
              setDial((previousNumber)=>previousNumber.slice(0,-1))
         }}>
           <img className="w-[40px] h-[30px]" src={Backspace} alt='backspace'/>
         </button>
        </div>
        </div>
        <div className="flex flex-row justify-between px-10">
            <button className="w-[100px] h-[50px] bg-[green] rounded-lg flex justify-center py-3 bg-slate-200"
             onClick={()=>{
                setDial((previousNumber)=>previousNumber+'1')
            }}>
                1 
            </button>
            <button className="w-[100px] h-[50px] bg-[green] rounded-lg flex justify-center py-3 bg-slate-200"
             onClick={()=>{
                setDial((previousNumber)=>previousNumber+'2')
            }}>2</button>
            <button className="w-[100px] h-[50px] bg-[green] rounded-lg flex justify-center py-3 bg-slate-200"
             onClick={()=>{
                setDial((previousNumber)=>previousNumber+'3')
            }}>3</button>
        </div>
        <div className="flex flex-row flex flex-row justify-between px-10">
            <button className="w-[100px] h-[50px] bg-[green] rounded-lg flex justify-center py-3 bg-slate-200"  onClick={()=>{
                setDial((previousNumber)=>previousNumber+'4')
            }}>4</button>
            <button className="w-[100px] h-[50px] bg-[green] rounded-lg flex justify-center py-3 bg-slate-200"
             onClick={()=>{
                setDial((previousNumber)=>previousNumber+'5')
            }}
            >5</button>
            <button className="w-[100px] h-[50px] bg-[green] rounded-lg flex justify-center py-3 bg-slate-200"
             onClick={()=>{
                setDial((previousNumber)=>previousNumber+'6')
            }}>6</button>
        </div>
        <div className="flex flex-row flex flex-row justify-between px-10">
            <button className="w-[100px] h-[50px] bg-[green] rounded-lg flex justify-center py-3 bg-slate-200"
            onClick={()=>{
                setDial((previousNumber)=>previousNumber+'7')
            }}
            >7</button>
            <button className="w-[100px] h-[50px] bg-[green] rounded-lg flex justify-center py-3 bg-slate-200"
            onClick={()=>{
                setDial((previousNumber)=>previousNumber+'8')
            }}
            >8</button>
            <button className="w-[100px] h-[50px] bg-[green] rounded-lg flex justify-center py-3 bg-slate-200"
            onClick={()=>{
                setDial((previousNumber)=>previousNumber+'9')
            }}
            >9</button>
        </div>
        <div className="flex flex-row flex flex-row justify-between px-10">
            <button className="w-[100px] h-[50px] bg-[green] rounded-lg flex justify-center py-3 bg-slate-200"
            onClick={()=>{
                setDial((previousNumber)=>previousNumber+'*')
            }}
            >*</button>
            <button className="w-[100px] h-[50px] bg-[green] rounded-lg flex justify-center py-3 bg-slate-200"
            onClick={()=>{
                setDial((previousNumber)=>previousNumber+'0')
            }}
            >0</button>
            <button className="w-[100px] h-[50px] bg-[green] rounded-lg flex justify-center py-3 bg-slate-200"
            onClick={()=>{
                setDial((previousNumber)=>previousNumber+'#')
            }}
            >#</button>
        </div>
       </div>
       </div>
    )
}