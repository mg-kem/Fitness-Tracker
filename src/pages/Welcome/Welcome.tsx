import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import {getProgramDetails} from "../../services/programService.ts";

function Welcome() {
    getProgramDetails('pr-1');
    return (
        <main className="welcome-page">
            <header className="welcome-header">
                <Link className="welcome-brand" to={AppRoute.ROOT}>Fitness Tracker</Link>
                <nav className="welcome-navigation" aria-label="Основная навигация">
                    <Link to={AppRoute.PROGRAMS}>Программы</Link>
                    <Link to={AppRoute.EXERCISES}>Упражнения</Link>
                    <Link className="welcome-login-link" to={AppRoute.LOGIN}>Войти</Link>
                </nav>
            </header>

            <section className="welcome-hero">
                <div className="welcome-hero__content">
                    <span className="welcome-eyebrow">ТВОЙ ПУТЬ К СИЛЕ И ФОРМЕ</span>
                    <h1>Тренируйся с планом.<br />Двигайся к своей цели.</h1>
                    <p>
                        Изучай упражнения, выбирай готовые программы и выстраивай тренировки
                        в удобном темпе. Всё необходимое для уверенного старта — в одном месте.
                    </p>
                    <div className="welcome-actions">
                        <Link className="welcome-button welcome-button--primary" to={AppRoute.PROGRAMS}>
                            Посмотреть программы
                        </Link>
                        <Link className="welcome-button welcome-button--secondary" to={AppRoute.EXERCISES}>
                            Посмотреть упражнения
                        </Link>
                    </div>
                </div>
                <aside className="welcome-highlight" aria-label="Принципы тренировок">
                    <span className="welcome-highlight__icon" aria-hidden="true">✦</span>
                    <p className="welcome-highlight__label">ТВОЯ СЛЕДУЮЩАЯ ЦЕЛЬ</p>
                    <h2>Сильнее, чем вчера</h2>
                    <p>Постепенность, регулярность и понятный план помогают сохранять мотивацию.</p>
                    <div className="welcome-highlight__tags">
                        <span>Силовые</span>
                        <span>Выносливость</span>
                        <span>Прогресс</span>
                    </div>
                </aside>
            </section>

            <section className="welcome-features" aria-label="Возможности Fitness Tracker">
                <article className="welcome-feature">
                    <span className="welcome-feature__number">01</span>
                    <h2>Подбери программу</h2>
                    <p>Посмотри общие планы тренировок для разного уровня подготовки.</p>
                    <Link to={AppRoute.PROGRAMS}>К программам <span aria-hidden="true">→</span></Link>
                </article>
                <article className="welcome-feature">
                    <span className="welcome-feature__number">02</span>
                    <h2>Изучи упражнения</h2>
                    <p>Найди упражнения по группам мышц и узнай, какое оборудование нужно.</p>
                    <Link to={AppRoute.EXERCISES}>В каталог <span aria-hidden="true">→</span></Link>
                </article>
                <article className="welcome-feature welcome-feature--personal">
                    <span className="welcome-feature__number">03</span>
                    <h2>Составь личную программу</h2>
                    <p>Войди или зарегистрируйся — персональные планы будут доступны в аккаунте.</p>
                    <Link to={AppRoute.LOGIN}>Начать с аккаунтом <span aria-hidden="true">→</span></Link>
                </article>
            </section>

            <footer className="welcome-footer">
                Fitness Tracker <span>Тренируйся в своём ритме.</span>
            </footer>
        </main>
    );
}

export default Welcome;
