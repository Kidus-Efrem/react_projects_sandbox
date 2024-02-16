import React from 'react'
import "./LockSlider.css"
export default function LockSlider({handleInput, sliderValue, width}) {
	let sliderStyle = {
		appearance: "none",
		width: !width? "300px":width,
		height: "50px",
		background: "rgba(188, 190, 190, 0.5)",
		outline: "none"
	}

  return (
<input type="range" style={sliderStyle} min="0" max="100"  class="slider mb-2 border-5" id="myRange" onInput={handleInput} value={sliderValue}/>
  )
}
