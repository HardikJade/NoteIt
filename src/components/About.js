import React,{useContext,useEffect} from 'react'
import ModalContext from '../context/Modal/ModalContext'
export const About = () => {
    const context = useContext(ModalContext)
    console.log(context)
    useEffect(() => {
        context.setstate("World")
    }, [])
    return (
        <div>
            <h1>This is About {}</h1>
        </div>
    )
}
