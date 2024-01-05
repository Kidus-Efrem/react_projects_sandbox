import React,{useState} from 'react'
import Title from '../components/Title'

export default function RandomiseColor() {
	const [color, setColor]=useState("")
	const handleClick=(event)=>{

		let body = document.querySelector("body")
		body.style.background = getRandomColor()
		// console.log(color);
		event.target.style.background=getRandomColor()
		// console.log(color)
	}
	function getRandomColor(){
		const letter ="0123456789abcdef"
		let tempColor = "#"
		for (let i=0; i<6; i++){
			tempColor+=letter[Math.floor(Math.random()*16)]
		}
		setColor(tempColor)
		return tempColor
	}
  return (
	<div>
	<Title text={"Randomise Color"}/>
	<div className='container button-row'>
	  <button onClick={handleClick} className='app-button button-1'>clickme</button>
	  <button onClick={handleClick} className='app-button button-2'>clickme</button>
	  <button onClick={handleClick} className='app-button button-3'>clickme</button>
	  <button onClick={handleClick} className='app-button button-4'>clickme</button>

	  </div>
	  <p className='text-paragrap text-align'>the color is {color}</p>
	</div>
  )
}
