import { NavLink } from 'react-router-dom'
import { AppRoute } from '../../const/const'

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo">
                <div className="logo-container"></div>
                <div className="logo-title">Fitness Tracker</div>
            </div>
            <nav className="sidebar-navigation">
                <div className="sidebar-navigation__general">
                    <NavLink to={AppRoute.ROOT} className="website_navigation__link">Главная</NavLink>
                    <NavLink to={AppRoute.PROGRAMS} className="website_navigation__link">Программы тренировок</NavLink>
                    <NavLink to={AppRoute.EXERCISES} className="website_navigation__link">Упражнения</NavLink>
                </div>
                <div className="sidebar-navigation__personal">

                    <NavLink to={AppRoute.DASHBOARD} className="website_navigation__link">Обзор</NavLink>
                    <a href="#" className="website_navigation__link">Начать тренировку</a>
                    <a href="#" className="website_navigation__link">Мои тренировки</a>
                    <a href="#" className="website_navigation__link">Прогресс</a>
                    <a href="#" className="website_navigation__link">Питание</a>
                    <a href="#" className="website_navigation__link">Профиль</a>
                    <a href="#" className="website_navigation__link">Настройки</a>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar