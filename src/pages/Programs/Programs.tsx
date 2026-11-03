import {Link, useParams} from 'react-router-dom';
import {getAllPrograms, getProgramDetails} from "../../services/programService.ts";
import type {TProgramDetails} from '../../types/types.mock';

function getCountExercisesByProgram(program: TProgramDetails): number {
    return program.days.reduce((count, day) => count + day.exercises.length, 0);
}

function Programs() {
    const {programId} = useParams();
    const trainingPrograms = getAllPrograms();
    const programDetail = programId ? getProgramDetails(programId) : null;


    if (programId && programDetail) {
        return (
            <section className="programs-page">
                <Link className="programs-back-link" to="/programs">← Все программы</Link>
                <header className="programs-page__header">
                    <div>
                        <span className="programs-level">{programDetail.level} уровень</span>
                        <h1 className="programs-page__title">{programDetail.name}</h1>
                        <p className="programs-page__description">{programDetail.description}</p>
                    </div>
                </header>

                <div className="programs-meta">
                    <span>{programDetail.daysPerWeek} раза в неделю</span>
                    <span>{programDetail.durationWeeks} недель</span>
                    <span>{getCountExercisesByProgram(programDetail)} упражнений в программе</span>
                </div>
                {programDetail.days
                    .map(day => (
                        <article className="programs-day" key={day.id}>
                            <h2 className="programs-day__title">{day.name}</h2>
                            <div className="programs-table-wrapper">
                                <table className="programs-table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Упражнение</th>
                                        <th scope="col">Группа мышц</th>
                                        <th scope="col">Подходы</th>
                                        <th scope="col">Повторения</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        day.exercises
                                            .map((exercise) =>
                                                (
                                                    <tr key={exercise.programExerciseId}>
                                                        <td>{exercise.name}</td>
                                                        <td>{exercise.muscleGroup}</td>
                                                        <td>{exercise.sets}</td>
                                                        <td>{exercise.reps}</td>
                                                    </tr>
                                                ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </article>
                    ))
                }
            </section>
        );
    }

    if (programId && !programDetail) {
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
                <span className="programs-page__count">{trainingPrograms.length} программы</span>
            </header>

            <div className="programs-grid">
                {trainingPrograms.map((program) => (
                    <article className="program-card" key={program.id}>
                        <div className="program-card__topline">
                            <span className="programs-level">{program.level} уровень</span>
                            <span>{program.durationWeeks} недель</span>
                        </div>
                        <h2 className="program-card__title">{program.name}</h2>
                        <p className="program-card__description">{program.description}</p>
                        <div className="program-card__meta">
                            <span>{program.daysPerWeek} тренировки в неделю</span>
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
