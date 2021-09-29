import React from 'react'

export const ButtonAlt = (props)=> {
    console.log(props)
    return (
        <div>
            <button style={{backgroundColor: props.info.color}}> Este el es {props.info.texto} </button>
        </div>
    )
}
