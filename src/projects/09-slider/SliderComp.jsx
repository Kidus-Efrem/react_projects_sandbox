import React from 'react'

export default function SliderComp() {
  return (
	<div className='container d-flex flex-column text-center' >
		<input type="range" min={0} max={100} value={0}/>
		<div className='container '
			style={
				{
					color: "black",
					background: "lightgray",
					height: "30px",
					width: "30px",
					fontWeight: 600,
					display: 'flex',
					justifyContent:"center",
					alignItems:'center',
					borderRadius:"50%"
				}
			}
		><span>
			circle
		</span></div>
	</div>
  )
}
