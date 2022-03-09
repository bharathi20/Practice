import React from 'react'

export default function teaching() {

const arr = [ 
   
]
if (arr){
    console.log(arr)
}
else{
    console.log('no')
}

const editFunction = () => {
    console.log("hi from edit")
}

const deleteFunction = () => {
    console.log("hi from delete")
}

  return (
    <div>

<form>
    <input></input>
</form>


        { arr.map((d,i) => 
        <div key={i}>
            <h1  id="1"> 
            {d}
            </h1>
            <button onClick={editFunction}>edit</button>
            <button onClick={deleteFunction}>delete</button>
        </div>
        )}
    </div>
    
  )
}
