import React,{useEffect,useState} from 'react'
import './Practice.css'
export default function Practice() {
  let [value, setvalue]   =  useState(0)
  let [time,settime]        =  useState(null)

  useEffect(()=>{},[value,time])

  function init(event)
  {
    const { target }  =   event;
    // console.log(target)
    let targetValue   =   (event.target.innerText)
    // console.log(targetValue)
    if (target.classList.contains('number'))
    {
      if(value===0)
      {
        setvalue(targetValue)
      }
      else
      {
        value+=targetValue
        setvalue(value)
      }
    }

    if (target.classList.contains('operator'))
    {
      if(value===0)
      {
        setvalue(targetValue)
      }
      else
      {
        value+=targetValue
        setvalue(value)
      }
    }

    if(target.classList.contains('equal'))
    {
      try{
        let result = eval('(' + value.toString() +')')
        setvalue(result)
      }
      catch{
       alert('Give a valid input')
      }
    }

    if(target.classList.contains('allclear')){
      setvalue(0)
    }

    if(target.classList.contains('clear')){
      if(value.length > 0)
      {
        value=value.slice(0,-1)
        setvalue(value)
      }
    }
  }

  function updateTime()
  {
    const currentTime = new Date();
    let result = currentTime.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true });
    let time = result.toString()
    settime(time)
    // console.log(time)
  
  }
  setInterval(updateTime, 10000);
  useEffect(()=>{updateTime();})



  return (
    <div className='calculator'>

      <div className="topContainer">
        <div className="time">
          <p>{time}</p>
        </div>

        <div className="space">
          <p></p>
        </div>

        <div className="status">
          <i className="bi bi-reception-4"></i>
          <i className="bi bi-wifi"></i>
          <i className="bi bi-battery-half"></i> 
        </div> 

      </div>

      <div className="value">
        <p>{value}</p>
      </div>

      <div className='buttonsContainer' onClick={(e)=>init(e)}>
        <div className='button grey allclear'>AC</div>
        <p className='button grey clear'>C</p>
        <p className='button grey operator'>%</p>
        <p className='button operator'>/</p>
        <p className='button number'>7</p>
        <p className='button number'>8</p>
        <p className='button number'>9</p>
        <p className='button operator'>*</p>
        <p className='button number'>4</p>
        <p className='button number'>5</p>
        <p className='button number'>6</p>
        <p className='button operator'>-</p>
        <p className='button number'>1</p>
        <p className='button number'>2</p>
        <p className='button number'>3</p>
        <p className='button operator'>+</p>
        <p className='button number shape'>0</p>
        <p className='button'>.</p>
        <p className='button equal'>=</p>
      </div>
    </div>

  )
}
