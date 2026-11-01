import { Link, useParams } from 'react-router-dom';
import { programs } from '../../mock/mockData';

function Programs() {
    const { programId } = useParams();
    const selectedProgram = programs.find((program) => program.id === programId);

    if (programId && selectedProgram) {
        return (
            <section className="programs-page">
                <Link className="programs-back-link" to="/programs">← Все программы</Link>
                <header className="programs-page__header">
                    <div>
                        <span className="programs-level">{selectedProgram.level} уровень</span>
                        <h1 className="programs-page__title">{selectedProgram.name}</h1>
                        <p className="programs-page__description">{selectedProgram.description}</p>
                    </div>
                </header>

                <div className="programs-meta">
                    <span>{selectedProgram.daysPerWeek} раза в неделю</span>
                    <span>{selectedProgram.duration}</span>
                    <span>{selectedProgram.exercises.length} упражнений в тренировке</span>
                </div>

                <div className="programs-table-wrapper">
                    <table className="programs-table">
                        <thead>
                            <tr>
                                <th scope="col">Упражнение</th>
                                <th scope="col">Группа мышц</th>
                                <th scope="col">Подходы</th>
                                <th scope="col">Повторения</th>
                                <th scope="col">Отдых</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedProgram.exercises.map((exercise) => (
                                <tr key={exercise.name}>
                                    <td>{exercise.name}</td>
                                    <td>{exercise.muscleGroup}</td>
                                    <td>{exercise.sets}</td>
                                    <td>{exercise.reps}</td>
                                    <td>{exercise.rest}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }

    if (programId && !selectedProgram) {
        return (
            <section className="programs-page">
                <h1 className="programs-page__title">Программа не найдена</h1>
                <Link className="programs-back-link" to="/programs">Вернуться к программам</Link>
            </section>
        );
    }

    return (
        <section className="programs-page">
            <header className="programs-page__header">
                <div>
                    <h1 className="programs-page__title">Программы тренировок</h1>
                    <p className="programs-page__description">
                        Общие планы тренировок. Выберите программу, чтобы посмотреть упражнения и рекомендации.
                    </p>
                </div>
                <span className="programs-page__count">{programs.length} программы</span>
            </header>

            <div className="programs-grid">
                {programs.map((program) => (
                    <article className="program-card" key={program.id}>
                        <div className="program-card__topline">
                            <span className="programs-level">{program.level} уровень</span>
                            <span>{program.duration}</span>
                        </div>
                        <h2 className="program-card__title">{program.name}</h2>
                        <p className="program-card__description">{program.description}</p>
                        <div className="program-card__meta">
                            <span>{program.daysPerWeek} тренировки в неделю</span>
                            <span>{program.exercises.length} упражнений</span>
                        </div>
                        <Link className="program-card__link" to={`/programs/${program.id}`}>
                            Смотреть программу <span aria-hidden="true">→</span>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Programs;
