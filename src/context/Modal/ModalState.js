import ModalContext from './ModalContext' 
import { useState } from 'react'
const ModalState = (props)=>{
    const [state, setstate] = useState({
        'id' : '',
        'title' : "",
        'tag' : "",
        'description' : ""
    })
    return(
        <ModalContext.Provider value = {{state,setstate}}>
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalState