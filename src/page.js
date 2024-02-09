import Rock from './assets/rock image.png'
import Paper from './assets/paper image.jpeg'
import Scissor from './assets/scissor image.png'
import {useState,useEffect} from 'react'
import _ from 'lodash';

export default function Page(){
  const system=[{
    id:1,
     name:'rock',
     img: Rock
  },
  {
    id: 2,
    name: 'paper',
    img: Paper
  },
  {
    id:3,
    name: 'scissor',
    img: Scissor
  }
]

// const [name,pavani]=useState()
const [humandisplayimage,setHumandisplayimage]=useState()
const [systemdisplayimage,setSystemdisplayimage]=useState()
const [wonplayer,setWonplayer]=useState()
const [systemscore,setSystemscore]=useState(0)
const [humanscore,setHumanscore]=useState(0)
const [draw,setDraw]=useState(false)

// const clicktoupdate=()=>{
//   pavani(name)
// }
const clicktodisplayrockimage=()=>{
  setHumandisplayimage(system[0])
  setSystemdisplayimage(system[Math.floor(Math.random()*3)])
  results(setHumandisplayimage(system[0]),setSystemdisplayimage(system[Math.floor(Math.random()*3)]))
}
const clicktodisplaypaperimage=()=>{
  setSystemdisplayimage(system[Math.floor(Math.random()*3)])
  setHumandisplayimage(system[1])
  results(setHumandisplayimage(system[1]),setSystemdisplayimage(system[Math.floor(Math.random()*3)]))
}
const clicktodisplayscissorimage=()=>{
  setHumandisplayimage(system[2])
  setSystemdisplayimage(system[Math.floor(Math.random()*3)])
  results(setHumandisplayimage(system[2]),setSystemdisplayimage(system[Math.floor(Math.random()*3)]))
}

 function randomimage(){
  return (Math.floor(Math.random()* 2) + 1)
 }
console.log('ramdom number', Math.floor(Math.random()*3));
// useEffect(() => {
//   if (humandisplayimage && systemdisplayimage) {
//     results();
//   }
// }, [humandisplayimage, systemdisplayimage]);
const results=()=>{
  const isEqual = _.isEqual(humandisplayimage, systemdisplayimage);
  if(isEqual){
      setDraw(true)
      // setWonpoint('Draw ...!');
  }
  if(systemdisplayimage?.name==="rock"&&humandisplayimage?.name==="paper"){
    setWonplayer('human')
    setHumanscore((score)=>score+1)
  }
  else if(systemdisplayimage?.name==="rock"&&humandisplayimage?.name==="scissor"){
    setWonplayer('system ')
    setSystemscore((score)=>score+1)
  }
  else if(systemdisplayimage?.name==="paper"&&humandisplayimage?.name==="scissor"){
    setWonplayer('human')
    setHumanscore((score)=>score+1)
  }
  else if(systemdisplayimage?.name==="paper"&&humandisplayimage?.name==="rock"){
    setWonplayer('system')
    setSystemscore((score)=>score+1)

  }
  else if(systemdisplayimage?.name==="scissor"&&humandisplayimage?.name==="rock"){
    setWonplayer('human')
    setHumanscore((score)=>score+1)
  }
  else if(systemdisplayimage?.name==="scissor"&&humandisplayimage?.name==="paper"){
    setWonplayer('system')
    setSystemscore((score)=>score+1)

  }
}
 return(
    <div className=" bg-teal-500 w-[50%] h-auto px-8 py-8 flex flex-col space-y-10 rounded-lg">
    <div className="text-black text-3xl font-bold flex justify-center">Rock-Paper-Scissor Game</div>
    <div className=" flex flex-row justify-between">
        <div className="w-[150px] h-[50px] bg-[white] px-2 border-slate-400 font-bold rounded-lg">system score:{systemscore}</div>
{/* <div>
       {draw?():()
        <div className="w-[150px] h-[50px] bg-[white] px-2 border-slate-400 font-bold rounded-lg"></div>
        
       }
     </div> */}
  <div className=" w-[150px] h-[50px] bg-[white] px-2 border-slate-400 font-bold rounded-lg">
                {draw ? (
                    <p className="text-[#0f0f0f]">Draw ...!</p>
                ) : wonplayer ? (
                    <div className="flex items-center justify-center">
                        <p className="text-[#0f0f0f]">{wonplayer} WON ...!</p>
                        <img
                            src="/src/assets/rock-paper-scissor/images/winEmoji.png"
                            alt="win Emoji"
                            height={100}
                            width={100}
                        />
                    </div>
                ) : (
                    <p>Start Game..!</p>
                )}
                </div>

       {/* <div className="w-[150px] h-[50px] bg-[white] px-2 border-slate-400 font-bold rounded-lg">Winner:{}</div> */}
        <div className="w-[140px] h-[50px] bg-[white] px-2 border-slate-400 shadow-inner font-bold rounded-lg">person score:{humanscore}</div>
    </div>
    <div className="flex flex-row justify-between px-20">
        <div className="space-y-2">
          <h1 className="font-bold">System:</h1>
          <div className="w-[150px] h-[150px] bg-[red]">
            <img className="w-[150px] h-[150px] rounded-lg" src={systemdisplayimage?.img} alt='rockimage'/>
          </div>
        </div>
        <div className='text-5xl p-y-4px'>v/s</div>
        <div className="space-y-2">
          <h1 className="font-bold">Human:</h1> 
          <img className="w-[150px] h-[150px] rounded-lg" src={humandisplayimage?.img} alt='rockimage'/>
          </div>
    </div>
    <div className="flex justify-between px-24">
        <button 
        onClick={clicktodisplayrockimage}
        className="w-[100px] h-[40px] bg-blue-600 text-white text-lg font-bold rounded-lg">Rock</button>
        <button 
        onClick={clicktodisplaypaperimage}
        className="w-[100px] h-[40px] bg-blue-600 text-white text-lg font-bold rounded-lg">Paper</button>
        <button 
        onClick={clicktodisplayscissorimage}
        className="w-[100px] h-[40px] bg-blue-600 text-white text-lg font-bold rounded-lg">Scissor</button>
    </div>
    </div>
  
    )
}