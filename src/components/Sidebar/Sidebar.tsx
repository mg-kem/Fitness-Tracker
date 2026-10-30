function Sidebar() {
    return (
        <aside className="sidebar">
            <a className="brand" href="#" aria-label="Forge home">
                <span className="brand-mark">F</span>
                <span>forge<span className="brand-dot">.</span></span>
            </a>

            <div className="sidebar-label">WORKSPACE</div>
            <nav className="nav-list" aria-label="Основная навигация">
                <a className="nav-item active" href="#"><span className="nav-icon">◫</span> Обзор</a>
                <a className="nav-item" href="#"><span className="nav-icon">▤</span> Тренировки</a>
                <a className="nav-item" href="#"><span className="nav-icon">⌘</span> Программы</a>
                <a className="nav-item" href="#"><span className="nav-icon">♧</span> Упражнения</a>
                <a className="nav-item" href="#"><span className="nav-icon">↗</span> Аналитика</a>
            </nav>

            <div className="sidebar-label second-label">PERSONAL</div>
            <nav className="nav-list">
                <a className="nav-item" href="#"><span className="nav-icon">◎</span> Мой профиль</a>
                <a className="nav-item" href="#"><span className="nav-icon">⚙</span> Настройки</a>
            </nav>

            <div className="sidebar-bottom">
                <div className="plan-card">
                    <div className="plan-icon">✦</div>
                    <div>
                        <strong>Твоя цель</strong>
                        <span>Набрать мышечную массу</span>
                    </div>
                    <div className="goal-progress"><span></span></div>
                    <div className="goal-meta"><span>72 кг</span><span>83 кг</span></div>
                </div>
                <div className="user-row">
                    <div className="avatar">MG</div>
                    <div className="user-copy"><strong>Мой профиль</strong><span>Personal account</span></div>
                    <span className="more">•••</span>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar