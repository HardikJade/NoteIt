import React,{useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import noteContext from '../context/Notes/NoteContext'
import { NoteItem } from './NoteItem'
export const Notes = () => {
    const context = useContext(noteContext)
    const {notes,getNote} = context
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('token') === null){
            history.push('/login')
            
        }else{
            getNote();
        }
    }, [])
    return(
        <>
            <div className="row d-flex justify-content-center">
                {notes.map((element)=>{return <NoteItem key={element._id} data = {element} />})}
            </div>
        </>
        )
}
