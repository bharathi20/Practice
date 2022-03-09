import './form.css';
import React , {useEffect , useState} from 'react';

function App() {

    const [data, setData] = useState("hij")
  
    useEffect(()=>{
      console.log("hi from use effect")
    },[data])
    
    function handlesubmit(e){
      e.preventDefault()
      
      var nameData=e.target.name.value
      setData(nameData)
      localStorage.setItem("a",nameData)
      let phoneData=e.target.phone.value
      let mailData=e.target.mail.value
      let msgData=e.target.message.value
      console.log(nameData,phoneData,mailData,msgData)
      console.log(data,"from submit")
  
    }
  
    console.log(data, "from global")
    return (
        <div className="contact">
          <div className="heading">
            <h1>Contact Miles</h1>
          </div>
          <div className="formContent">
            <form onSubmit={handlesubmit}>
            <p ><input id="name" className="content" name="name" type="text" placeholder="Name"></input></p>
            <p ><input id="phone" className="content" name="phone" type="number" placeholder="Phone"></input></p>
            <p ><input id="mail" className="content" name="mail" type="email" placeholder="Email"></input></p>
            <p ><textarea id="message"className="content" name="message" rows="4" columns="20" placeholder="Message"></textarea></p>
            <p><button type="submit" id="sendButton" className="content sendButton" >SEND MESSAGE</button></p>
            </form>
          </div>
          <p id="userData">{data}</p>
        </div>

);
}

export default App;