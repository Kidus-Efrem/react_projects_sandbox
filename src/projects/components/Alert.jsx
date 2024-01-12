import React,{useEffect, useState} from 'react'
import Button from './Button';
export default function Alert({type, message,delay=false, delayTime=5000}) {
 const [showAlert, setShowAlert]=useState(true)
 function closeAlert(event){
  event.target.parentElement.parentElement.classList.add("fade-out")
  setTimeout(()=>{
    setShowAlert(false)
  }, 400)
 }

 useEffect(()=>
 {
  delay && setTimeout(()=>{
    setShowAlert(false)
  }, delayTime)
 }, [delay, delayTime])
 return (
  showAlert && (
    <div>
      <div className={`alert alert-${type}`}>
      <div className="alert-close">
		<span className="mr-5">{message}</span>
		<Button text={""} btnClass={"btn-close"} onClick={closeAlert}/>
	  </div>
</div>

    </div>
  )
);

}

