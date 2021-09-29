import React from 'react'

export const Button = (props)=> {
    console.log(props)
    return (
        <div>
            <button style={{backgroundColor: props.color}}> Este el es {props.texto} </button>
        </div>
    )
}
