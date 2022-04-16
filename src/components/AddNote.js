import React , {useContext} from 'react'
import noteContext from '../context/Notes/NoteContext'
export const AddNote = () => {
    const context = useContext(noteContext)
    const addNote = (e)=>{
        e.preventDefault();
        let title = document.querySelector('#title').value
        let description = document.querySelector('#description').value
        let tag = document.querySelector('#tag').value;
        context.addNote(title,description,tag);
    }
    return (
        <div className="container">
            <h1 className='display-6 text-center'>Add A Note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" required className="form-control" id="title" aria-describedby="titleHelp"/>
                        <div id="titleHelp" className="form-text">Title Must Be 5 Character long.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea required className="form-control" id="description"/>
                    <div id="descHelp" className="form-text">Description Must Be 5 Character long.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input className="form-control" id="tag"/>
                    <div id="tagHelp" className="form-text">Tag Must Be 3 Character long.</div>
                </div>
                <div className="container d-flex justify-content-center">
                    <button type="submit" onClick={addNote} className="btn btn-primary">Add A Note</button>
                </div>
            </form>
        </div>
    )
}
