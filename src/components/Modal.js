import React, { useContext } from 'react'
import ModalContext from '../context/Modal/ModalContext'
import noteContext from '../context/Notes/NoteContext'

export const Modal = () => {
    const context = useContext(ModalContext)
    const {editNote} = useContext(noteContext)
    const Titlechanger = (event)=>{
        let id = context.state.id;
        let tag = context.state.tag;
        let desc = context.state.description;
        context.setstate({
            'id' : id,
            'title' : event.target.value,
            'tag' : tag,
            'description' : desc
        })
    }
    const Descchanger = (event)=>{
        let id = context.state.id;
        let title = context.state.title;
        let tag = context.state.tag;
        context.setstate({
            'id' : id,
            'title' : title,
            'tag' : tag,
            'description' : event.target.value
        })
    }
    const Tagchanger = (event)=>{
        let id = context.state.id;
        let title = context.state.title;
        let desc = context.state.description;
        context.setstate({
            'id' : id,
            'title' : title,
            'tag' :  event.target.value,
            'description' : desc
        })
    }
    return (
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit The Note</h5>
                        <button type="button" className="close" id='close_modal' data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="e_title" className="col-form-label">Title:</label>
                                <input type="text"  value={context.state.title} onChange={Titlechanger} className="form-control" id="e_title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="e_description" className="col-form-label">Description:</label>
                                <textarea className="form-control" value={context.state.description} onChange={Descchanger} id="e_description"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="e_tag" className="col-form-label">Tag:</label>
                                <input type='text' value={context.state.tag} onChange={Tagchanger} className="form-control" id="e_tag" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={()=>{editNote(context.state)}} className="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
