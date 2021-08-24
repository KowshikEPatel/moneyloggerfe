import React,{useContext} from 'react'
import {UserContext} from '../contexts/UserContext';

export default function SecondPage() {
    const usercontextdata = useContext(UserContext)
    return (
        <>
            <div>
                this is second page
            </div>
            <div>
                {JSON.stringify(usercontextdata.loggedUser)}
            </div>
        </>
    )
}
