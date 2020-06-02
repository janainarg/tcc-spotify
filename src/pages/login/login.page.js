import React from 'react';
import './login.css';

export function Login() {

    return (
        <div className="login-page">
                <button className="button">
                <a className="title" 
                    href="https://accounts.spotify.com/authorize?client_id=5ed6387183534cd3a9193b8d2e59c7e8&response_type=token&redirect_uri=https%3A%2F%2Ftccjana.azurewebsites.net%2Fartists%2F&scope=user-top-read&state=34fFs29kd09">
                    Log in com Spotify
                </a>
                </button>
           </div>

    )
}