import React from 'react'

export const Alert = (props) => {
    return (
        <div class={`alert alert-${props.data.type}`} role="alert">
            {props.data.message}
        </div>
    )
}
