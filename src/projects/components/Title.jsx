import React from 'react'

export default function Title({text, classes}) {
  return (
    <div>
    <h1 className={!classes?'header text-align':(classes&&"header text-align")}>{!text?"Title":text}</h1>
	</div>
  )
}
