import React from 'react'

export default function Button({text="click", onClick,btnClass, icon, style}) {
  return (
	  <button onClick={onClick}style={{display: "inline-block"}} className={`btn ${btnClass}`}>
	  {icon}{!text?"click":text}

	  </button>
  )
}
