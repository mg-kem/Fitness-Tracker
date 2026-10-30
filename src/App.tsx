

function App() {
  return (

    <div className="website-container">
      <aside className="sidebar">
        <nav className="sidebar-navigation">
          <div className="sidebar-navigation__general">
            <a href="#" className="website_navigation__link">Обзор</a>
            <a href="#" className="website_navigation__link">Программа</a>
            <a href="#" className="website_navigation__link">Тренировки</a>
            <a href="#" className="website_navigation__link">Питание</a>
            <a href="#" className="website_navigation__link">Упражнения</a>
          </div>
          <div className="sidebar-navigation__personal">
            <a href="#" className="website_navigation__link">Профиль</a>
            <a href="#" className="website_navigation__link">Настройки</a>
          </div>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <p className="addressbar">/Обзор</p>
        </header>
        <section className="stat-cards">
          <article className="stat-card">
            <h2 className="stat-card__title">Пройдено тренировок</h2>
            <p className="stat-card__value">12</p>
          </article>

          <article className="stat-card">
            <h2 className="stat-card__title">Общий объем</h2>
            <p className="stat-card__value">25,000 кг</p>
          </article>
          <article className="stat-card">
            <h2 className="stat-card__title">Время в зале</h2>
            <p className="stat-card__value">5 ч 30 мин</p>
          </article>
          <article className="stat-card">
            <h2 className="stat-card__title">Текущий вес</h2>
            <p className="stat-card__value">76 кг</p>
          </article>
        </section>
        <section className="stat-graphs">
          <p className="process-training">
            Процесс тренировок
          </p>
          <p className="next-training">
            Следующая тренировка
          </p>
        </section>

        <section className="recent-activities">
          <h2 className="recent-activities__title">Недавние активности</h2>
          <div className="recent-activities__table-wrapper">
            <table>
              <thead>
                <tr>
                  <th scope="col">Тренировка</th>
                  <th scope="col">Дата</th>
                  <th scope="col">Упражнения</th>
                  <th scope="col">Длительность</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Грудь и трицепс</td>
                  <td>30 октября</td>
                  <td>8</td>
                  <td>45 мин</td>
                  <td>***</td>
                </tr>
                <tr>
                  <td>Спина и бицепс</td>
                  <td>29 октября</td>
                  <td>5</td>
                  <td>30 мин</td>
                  <td>***</td>
                </tr>
                <tr>
                  <td>Плавание</td>
                  <td>28 октября</td>
                  <td>6</td>
                  <td>40 мин</td>
                  <td>***</td>
                </tr>
                <tr>
                  <td>Ноги</td>
                  <td>27 октября</td>
                  <td>7</td>
                  <td>50 мин</td>
                  <td>***</td>
                </tr>
                <tr>
                  <td>Кардио</td>
                  <td>26 октября</td>
                  <td>4</td>
                  <td>35 мин</td>
                  <td>***</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>

    </div >
  )
}

export default App
