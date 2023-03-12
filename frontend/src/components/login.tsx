import React, {useState} from 'react';
import './styles/login.css'
import {LoginRequest} from "../http/userApi";


export function Login() {

    const [chatId, setChatId] = useState("")

    const Entry = async () => {

        const res = await LoginRequest(chatId)
        console.log(res);

    }

    return (
        <div className="login">
            <div className="login-form">
                <p className="login-form__title">Вход</p>
                <div className='login-form__bundle'>
                    <span className="login-form__subtitle">Chat ID:</span>
                    <input className="login-form__input" placeholder='Chat ID' value={chatId} onChange={e => setChatId(e.target.value)} />
                </div>
                <button className="login-form__button" onClick={Entry}>Вход</button>
            </div>
        </div>
    );
};
