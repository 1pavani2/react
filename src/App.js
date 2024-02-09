import logo from './logo.svg';
import './App.css';
import Page from './page';
import Dialpad from './dialpad';
import { useState,useEffect } from 'react';
import Calculator from './calculator';
function App() {
  // var x=10
  // const [a, setA] = useState(10)
  // console.log('PAVANI..a', x,a)
  const[pavani,ambati]=useState('hello')
  // const handletoclick=()=>{
  //   ambati("madhuri")
  // }
 
  return (
    // <div className="App">

    <div>
      {/* <p>{pavani}</p> */}
      {/* <Page></Page> */}
      {/* <Dialpad></Dialpad> */}
      <Calculator></Calculator>
      {/* {3==2?'Hi':'Heelo'}
      pavani */}
      {/* {a}
      <button onClick={() => { x = x+10; console.log('x=', x, "a=", a); setA(a+10) }} title='HEllo' className='h-10 w-10 bg-[red] text-[blue]' /> */}
    {/* <button onClick={()=>{
      ambati("madhuri")}}>clickme!</button> */}
    </div>
  );
}

export default App;
