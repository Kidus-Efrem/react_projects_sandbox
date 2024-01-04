import React from 'react'

export default function Title({text, classes}) {
  return (
    <div>
    <h1 className={classes?classes:'header'}>{!text?"Title":text}</h1>
    </div>
  )
}
