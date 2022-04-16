import React from 'react'
import { AddNote } from './AddNote'
import { Notes } from './Notes'
export const Home = () => {
    return (
        <div className='container m-4'>
            <AddNote/>
            <div className="container mt-4">
                <h1 className='display-6 text-center'>Your Notes</h1>
                <Notes/>
            </div>
        </div>
    )
}
