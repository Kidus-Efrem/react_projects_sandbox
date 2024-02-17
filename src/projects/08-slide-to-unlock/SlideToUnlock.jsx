import React, { useState } from 'react';
import LockSlider from './LockSlider';
import { AiFillUnlock } from 'react-icons/ai';
import Title from '../components/Title';
import LockScreenImg from "./img/moon.jpeg"
import HomeScreenImg from "./img/home.jpeg"
export default function SlideToUnlock() {
	const [uiProps, setUiProps]= useState({
		uiText:"unlock screen",
		uiColor: `#fff`,
		uiBg: `url(${LockScreenImg})  center/cover`
	})
    const [showLockSlider, setShowLockSlider] = useState(true);
	const[lockSliderValue, setLockSliderValue] = useState(0)
	const handleLockSliderInput=(e)=>{
		setLockSliderValue(e.target.value)

		// console.log(e.target.value)
		if(e.target.value==100)
			setShowLockSlider(false)
	}
    return (
        <div
            className='container  d-flex flex-column justify-content-center align-items-center text-center'
            style={{
                height: '70vh',
                marginTop: '15vh',
                width: 340,
                border: '4px solid #000',
                borderRadius: 15,
				background: uiProps.uiBg


            }}
        >
            <Title text={uiProps.uiText} styles={{color: uiProps.uiColor}}></Title>
            {showLockSlider ? (
                <LockSlider width={'250px'} handleInput={handleLockSliderInput}/>
            ) : (
                <AiFillUnlock className='unlockIcon' />
            )}
        </div>
    );
}
