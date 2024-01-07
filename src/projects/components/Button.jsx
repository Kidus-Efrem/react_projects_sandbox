import React from 'react'

export default function Button({text="click", btnClass, icon, style}) {
  return (
	  <button style={{display: "inline-block"}} className={`btn ${btnClass}`}>
	  {icon}{!text?"click":text}

	  </button>
  )
}
