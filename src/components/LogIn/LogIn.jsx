import React from "react"
import {Field} from "redux-form"
import {Redirect} from "react-router-dom";
import s from './LogIn.module.css';
import {required} from "../../utils/validators/validators";
import {InputLogIn} from "../common/FormValidator/FormValidator";
import logo from "../../assets/images/logo.png";
import hh from "../../assets/images/hh.png";
import github from "../../assets/images/github.png";


const LogIn = React.memo(({handleSubmit, pristine, submitting, error, logIn, isAuth, authorizedUserId}) => {
    if (isAuth) return <Redirect to={`/profile/${authorizedUserId}`} />;
    //refactoring: create registrationPage
    
    let tryLogIn = (formData) => {
        logIn(formData.email, formData.password, true);
    }
    
    let tryRegister = () => {
        alert(`    When you press ok, will onen site with registration form.
    After registration return on this window ang refresh page. You will be log in.
    
    My congratulations and thank you for you time!`)
        return <Redirect to={"https://social-network.samuraijs.com/signUp"} />
    }
    
    return (
        <div className={s.wrapper}>
            <div className={s.wraper_description}>
                <a href="../login"><img src={logo} alt="logo" className={s.logo} /></a>
                <div>
                    <h3 className={s.about_title}>About project</h3>
                    <p className={s.about_text}>
                        What is this? It is my project whole wrote with library React, Redux and with other small librarys. Now project on stady develop and active development. <br /><br />
                        Now you can only enter my project through this <a href="https://social-network.samuraijs.com/signUp" className={s.samurai}>site</a>, because so far this project is based on their API.
                        In the future I will writing my API. <br />
                        After registration return on this window ang refresh page. You will be log in.<br /><br />
                        My congratulations and thank you for you time!
                    </p>
                </div>
                <div className={s.links}>
                    <span className={s.made_by}>made by <strong>Dima Doroshenko</strong></span>
                    <a href="https://github.com/lendmid"><img src={hh} alt="github logo" className={s.portfolio} /></a>
                    <a href="https://hh.ru/resume/d8a7fb57ff07de8d7f0039ed1f77765778734a"><img src={github} alt="headhunter logo" className={s.portfolio} /></a>
                </div>
            </div>
            
            <form onSubmit={handleSubmit(tryLogIn)} className={`${s.login} ${error ? s.error : ""}`}>
                <Field component={InputLogIn} type="email"
                       placeholder="Email"
                       name="email"
                       validate={[required]}
                       className={s.input}
                       autoFocus />
                <Field component={InputLogIn} type="password"
                       placeholder="Password"
                       name="password"
                       validate={[required]}
                       className={s.input}
                       autoComplete="on" />
                <button type="submit" disabled={pristine || submitting} className={s.button}>Log in</button>
                {error && <span className={s.error_message}>{error}</span>}
            </form>
    
            <a href="https://social-network.samuraijs.com/signUp" className={s.register_link} onClick={tryRegister}>
                <div className={s.register}>
                    <div className={s.temp_input}>Your email</div>
                    <div className={s.temp_input}>Your password</div>
                    <div className={s.temp_input}>Full name</div>
                    <div className={s.temp_input}>City where you live (if you want)</div>
                    <div className={s.temp_input}>Place of work (if you want)</div>
                    {/*<input type="text"*/}
                    {/*       placeholder="Your email"*/}
                    {/*       name="emailRegister"*/}
                    {/*       className={s.input}*/}
                    {/*       autoComplete="off"*/}
                    {/*       disabled />*/}
                    {/*<input type="password"*/}
                    {/*       placeholder="Your password"*/}
                    {/*       name="passwordRegister"*/}
                    {/*       className={s.input}*/}
                    {/*       autoComplete="off"*/}
                    {/*       disabled/>*/}
                    {/*<input type="text"*/}
                    {/*       placeholder="Full name"*/}
                    {/*       name="nameRegister"*/}
                    {/*       className={s.input}*/}
                    {/*       autoComplete="off"*/}
                    {/*       disabled/>*/}
                    {/*<input type="text"*/}
                    {/*       placeholder="City where you live (if you want)"*/}
                    {/*       name="cityRegister"*/}
                    {/*       className={s.input}*/}
                    {/*       autoComplete="off"*/}
                    {/*       disabled/>*/}
                    {/*<input type="text"*/}
                    {/*       placeholder="Place of work (if you want)"*/}
                    {/*       name="passwordRegister"*/}
                    {/*       className={s.input}*/}
                    {/*       autoComplete="off"*/}
                    {/*       disabled/>*/}
                    <button className={s.button + " " + s.button_register}>Register</button>
                    {/*{error && <span className={s.error_message}>{error}</span>}*/}
                </div>
            </a>

            <div className={s.footer}>
                <span className={s.myfacebook}>myfacebook © 2020</span>
            </div>
                
        </div>
    )
})

export default LogIn;
