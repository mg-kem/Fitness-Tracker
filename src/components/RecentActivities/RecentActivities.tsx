import ActivityRow from '../ActivityRow';
import {personalTraining} from "../../mock/dashboardMock.ts";

function RecentActivities() {
    return (
        <section className="recent-activities">
            <h2 className="recent-activities__title">Недавние активности</h2>
            {
                personalTraining.length > 0 ? (
                        <div className="recent-activities__table-wrapper">
                            <table>
                                <thead>
                                <tr>
                                    <th scope="col">Тренировка</th>
                                    <th scope="col">Дата</th>
                                    <th scope="col">Упражнения</th>
                                    <th scope="col">Длительность</th>
                                    <th scope="col" className="visually-hidden">Действия</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    personalTraining.map(data => (
                                        <ActivityRow
                                            key={data.id}
                                            workoutName={data.workoutName}
                                            date={data.date}
                                            exercisesCount={data.exercisesCount}
                                            duration={data.duration}
                                        />
                                    ))
                                }

                                </tbody>
                            </table>
                        </div>
                    ) :
                    (
                        <div className='recent-activities__empty'>Данных пока нет</div>
                    )
            }

        </section>
    )
}

export default RecentActivities;
