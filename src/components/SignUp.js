import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const SignUp = () => {
    const history = useHistory();
    const handleSign = async(event)=>{
        event.preventDefault();
        let username = document.querySelector('#s-email').value;
        let name = document.querySelector('#s-name').value;
        let password1 = document.querySelector('#s-password').value;
        let password2 = document.querySelector('#s-password_2').value;
        if(username && password1 && password2 && name){
            if(password1 == password2){
                const response = await fetch('http://localhost:5000/api/auth/signup', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "mail" : username,
                        "name" : name,
                        "password" : password2
                    })
                });
                let data = await response.json();
                if(response.ok){
                    localStorage.setItem('token',data.error.token);
                    history.push('/');
                }
            }
        }
    }
    return (
        <div className="container m-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="s-email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="s-email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="s-name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="s-name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="s-password" className="form-label">Password</label>
                    <input type="password" autoComplete='on' className="form-control" id="s-password"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="s-password_2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"  autoComplete='on' id="s-password_2"/>
                </div>
                <button type="submit" onClick={handleSign} className="btn btn-primary">Sign Up</button>
            </form> 

        </div>
    )
}
