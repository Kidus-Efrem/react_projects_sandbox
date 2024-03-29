import React from 'react'
import Alert from '../components/Alert'

export default function AlertApp() {
  return (
	<div className='container mx-0 my-3'>
		<Alert type={"success"} message={"connected successfully"}/>
		<Alert type={"danger"} delay='true' message={"not connected"} delayTime='3000'/>
	</div>
  )
}
