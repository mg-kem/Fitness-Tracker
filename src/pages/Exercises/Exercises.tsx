import {exercises} from '../../mock/exercisesMock';

function Exercises() {
    return (
        <section className="exercises-page">
            <header className="exercises-page__header">
                <div>
                    <h1 className="exercises-page__title">Упражнения</h1>
                    <p className="exercises-page__description">
                        Каталог упражнений с указанием мышечной группы и оборудования.
                    </p>
                </div>
                <span className="exercises-page__count">{exercises.length} упражнений</span>
            </header>
            <div className="exercises-table-wrapper">
                <table className="exercises-table">
                    <thead>
                    <tr>
                        <th scope="col">Название</th>
                        <th scope="col">Группа мышц</th>
                        <th scope="col">Сложность</th>
                    </tr>
                    </thead>
                    <tbody>
                    {exercises.map((exercise) => (
                        <tr key={exercise.id}>
                            <td>{exercise.name}</td>
                            <td>{exercise.muscleGroup}</td>
                            <td>{exercise.difficulty}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Exercises;
