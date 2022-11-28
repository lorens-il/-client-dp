import { Form, Formik, Field, ErrorMessage as ErrorForm } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import './Auth.sass';

const Auth = () => {
    return (
        <div className="auth">
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    login: Yup.string()
                        .required('Не указан логин или пароль')
                        .min(8, 'Длина логина должна быть не меньше 8 символов')
                        .max(255, 'Длина логина должна быть не больше 255 символов'),
                    password: Yup.string()
                        .required('Не указан логин или пароль')
                        .min(8, 'Длина пароля должна быть не меньше 8 символов')
                        .max(72, 'Длина логина должна быть не больше 72 символов'),
                })}
                onSubmit={() => console.log('мб стоит сделать редирект')}>
                <Form className="auth__form">
                    <h2 className="auth__title">Авторизация</h2>
                    <div className="auth__input-wrapper">
                        <label className="auth__label" htmlFor="login">
                            Логин
                        </label>
                        <ErrorForm className="auth__error" name="login" component="div" />
                        <Field id="login" name="login" className="auth__input" type="text" />
                        <label className="auth__label" htmlFor="password">
                            Пароль
                        </label>
                        <ErrorForm className="auth__error" name="password" component="div" />
                        <Field id="password" name="password" className="auth__input" type="text" />
                        <button className="btn btn-warning auth__btn" type="submit">
                            Вход
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Auth;
