import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function Login() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <main className="login-page">
            <Link className="welcome-brand" to={AppRoute.ROOT}>Fitness Tracker</Link>
            <section className="login-card">
                <Link className="programs-back-link" to={AppRoute.ROOT}>← На главную</Link>
                <h1>Войти в аккаунт</h1>
                <p className="login-card__description">
                    Авторизуйся, чтобы в будущем создавать личные программы тренировок.
                </p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="login-email">Электронная почта</label>
                    <input id="login-email" name="email" type="email" autoComplete="email" required />
                    <label htmlFor="login-password">Пароль</label>
                    <input id="login-password" name="password" type="password" autoComplete="current-password" required />
                    <button className="welcome-button welcome-button--primary" type="submit">Войти</button>
                </form>
                {submitted && (
                    <p className="login-notice" role="status">
                        Форма готова, но авторизация пока недоступна: для входа нужно подключить backend.
                    </p>
                )}
            </section>
        </main>
    );
}

export default Login;
