import React, { useState } from 'react';
import LockSlider from './LockSlider';
import { AiFillUnlock } from 'react-icons/ai';
import Title from '../components/Title';

export default function SlideToUnlock() {
    const [showLockSlider, setShowLockSlider] = useState(true);
    return (
        <div
            className='container d-flex flex-column justify-content-center align-items-center text-center'
            style={{
                height: '70vh',
                marginTop: '15vh',
                width: 340,
                border: '4px solid #000',
                borderRadius: 15,

            }}
        >
            <Title></Title>
            {showLockSlider ? (
                <LockSlider width={'250px'} />
            ) : (
                <AiFillUnlock className='unlockIcon' />
            )}
        </div>
    );
}
