
import React , {useEffect , useState} from 'react';
import './Calculator.css'


export default function Calculator() {
  let [value1, setvalue1]   =  useState("0")
  let [value3, setvalue3]   =  useState(null)
  let [value2, setvalue2]   =  useState(null)
  let [value4, setvalue4]   =  useState(null)
  let [time,settime]        =  useState(null)

  useEffect(()=>{},
  [value1,value2,value3,value4,time])


// keys.addEventListener('click', (event) => {
  
  // Access the clicked element
 
 


  function init(event){

  
  const { target }  =   event;
  let targetValue   =   (event.target.innerText)

  if (target.classList.contains('number')) {
    // if(value1.innerText == 0){
    //   value1.innerText = targetValue
    if(value1 === 0){
      value1=targetValue
      setvalue1(value1)
    }else{
      value1+=targetValue
      setvalue1(value1)
      //  value1.innerText += (targetValue)
    }
  }

  if (target.classList.contains('bracket') ||
      target.classList.contains('operator') ) {
      // if(value1.innerText == 0){
      //   value1.innerText = targetValue
      // }
      if(value1 === 0){
        value1=targetValue
        setvalue1(value1)
      }
      else{
        value1+= targetValue
        setvalue1(value1)

      }
  }

  if (target.classList.contains('equal')) {
    try{
      let result = eval('(' + value1.toString() +')')
      if(value3 != null || undefined){
        value4 = value3
        setvalue4(value4)
        value3 = value2
        setvalue3(value3) 
        value2 = value1
        setvalue2(value2)
        value1 = result.toString()
        setvalue1(value1)
        console.log(value1)
        console.log(value2)
        console.log(value3)
        console.log(value4)
      }
      else if(value2 != null || undefined){
        value3 = value2 
        setvalue3(value3)
        value2 = value1
        setvalue2(value2)
        value1 = result
        setvalue1(value1)
      }else{
        value2 = value1
        setvalue2(value2)
        value1 = result
        setvalue1(value1)
      }
      
    }
    catch{
        alert("please give proper input")
    }
   
  }

  if (target.classList.contains('clear-1' )) {
    if(value1.length > 0)
     value1 = value1.slice(0, -1) 
     setvalue1(value1)
  }

  if (target.classList.contains('clear' )) {
    value1 = '0'
    setvalue1(value1)
    value2 = ''
    setvalue2(value2)
    value3 = ''
    setvalue3(value3)
    value4 = ''
    setvalue4(value4)
  }

  targetValue += targetValue
  // const updateTime = () => {
  //   const currentTime = new Date();
  //   let result = currentTime.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true });
  //   time.textContent = result.toString()
  // }
 
 

}
function updateTime(){
  const currentTime = new Date();
   let result = currentTime.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true });
   let time = result.toString()
    settime(time)
   console.log(time)

}
setInterval(updateTime, 10000);
useEffect(()=>{
 updateTime();
})
  return (
  <div className="calculator">
        <div className="top-container">
            <div className="clock">
              <span className="time">{time}</span>
            </div>

            <div>
              <p className="black-space "></p>
            </div>

            <div className="status">
              <i className="bi bi-reception-4"></i>
              <i className="bi bi-wifi"></i>
              <i className="bi bi-battery-half"></i> 
            </div>
        </div>

        <div className="value-container" > 
            <p className="value4">{value4}</p>
            <p className="value3">{value3}</p>
            <p className="value2">{value2}</p>
        </div>

        <p className="value1" >{value1}</p> 



        <div className="buttons-container" onClick={e=> init(e)}>
          <div className="button bracket open-bracket shape1">(</div>
          <p className="button bracket close-bracket shape1">)</p>
          <div className="button clear-1 ">←</div>
          <div className="button number">7</div>
          <div className="button number">8</div>
          <div className="button number">9</div>
          <div className="button operator minus">-</div>
          <div className="button operator divide">/</div>
          <div className="button number">4</div>
          <div className="button number">5</div>
          <div className="button number">6</div>
          <div className="button operator add shape1">+</div>
          <div className="button operator multiply">*</div>
          <div className="button number">1</div>
          <div className="button number">2</div>
          <div className="button number">3</div>    
          <div className="button operator percent">%</div> 
          <div className="button number">0</div>
          <div className="button number">.</div>
          <div className="button clear">C</div>
          <div className="button equal shape1 ">=</div>
        </div>
  </div>
  )
}
