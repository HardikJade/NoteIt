import React from 'react'
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export const Login = () => {
    const history = useHistory()
    const submit_password = async(event)=>{
        event.preventDefault();
        let userName = document.querySelector('#username').value;
        let password = document.querySelector('#password').value;
        if(userName && password){
            const response = await fetch(`${process.env.REACT_APP_DOMAIN_NAME}api/auth/login`, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "mail" : userName,
                    "password" : password
                })
            });
            if(response.ok){
                let data = await response.json();
                localStorage.setItem("token",data.error.token);
                history.push("/");
            }
        }
    }
    return (
        <>
        <div className="container m-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="email" required className="form-control" id="username" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" autoComplete='on' required className="form-control" id="password"/>
                </div>
                <button type="submit" onClick={submit_password} className="btn btn-primary">Login</button>
            </form>
        </div>
        </>
    )
}
