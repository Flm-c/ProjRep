import React, {useState} from 'react';
import {useHttp} from "../hooks/http.hook";

export const AuthPage = () => {
    const {loading,error,request} = useHttp()
    const [form, setForm] = useState({
        email: '',password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]:event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('api/auth/register', 'POST', {...form})
        }
        catch (e) {}
    }

    return(
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>For smth</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title ">Авторизация</span>
                        <div className="input-field">
                            <input placeholder="Введите Email" id="email" type="text" className="authInput" name="password" onChange={changeHandler}/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input placeholder="Введите пароль" id="password" type="password" className="authInput" name="password" onChange={changeHandler}/>
                            <label htmlFor="password">Пароль</label>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className='btn yellow darken-4'
                            style={{marginRight: 10}}
                            disabled={loading}
                        >
                            Войти</button>
                        <button
                            className='btn grey lighten-1 black-text'
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}