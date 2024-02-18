import React from 'react'

export default function SliderComp({setValue, handleInput, bgColor, textColor}) {
  return (
	<div className='container d-flex flex-column text-center' >
		<input type="range" value={setValue} onInput={handleInput} min={0} max={100} />
		<div className='container '
			style={
				{
					color: !textColor?"black":textColor,
					background: !bgColor? "lightgray": bgColor,
					height: `${setValue*3}px`,
					width:	`${setValue*3}px`,
					fontWeight: 600,
					display: 'flex',
					justifyContent:"center",
					alignItems:'center',
					borderRadius:"50%"
				}
			}
		><span>
			{setValue}
		</span></div>
	</div>
  )
}
