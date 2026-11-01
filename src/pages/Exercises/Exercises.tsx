type Exercise = {
    name: string;
    muscleGroup: string;
    equipment: string;
    difficulty: string;
};
const mockExercises: Exercise[] = [
    { name: 'Жим штанги лёжа', muscleGroup: 'Грудь', equipment: 'Штанга', difficulty: 'Средний' },
    { name: 'Отжимания от пола', muscleGroup: 'Грудь', equipment: 'Без оборудования', difficulty: 'Начальный' },
    { name: 'Тяга верхнего блока', muscleGroup: 'Спина', equipment: 'Тренажёр', difficulty: 'Начальный' },
    { name: 'Тяга штанги в наклоне', muscleGroup: 'Спина', equipment: 'Штанга', difficulty: 'Средний' },
    { name: 'Приседания со штангой', muscleGroup: 'Ноги', equipment: 'Штанга', difficulty: 'Средний' },
    { name: 'Выпады с гантелями', muscleGroup: 'Ноги', equipment: 'Гантели', difficulty: 'Начальный' },
    { name: 'Жим гантелей над головой', muscleGroup: 'Плечи', equipment: 'Гантели', difficulty: 'Средний' },
    { name: 'Подъём гантелей в стороны', muscleGroup: 'Плечи', equipment: 'Гантели', difficulty: 'Начальный' },
    { name: 'Жим штанги на наклонной скамье', muscleGroup: 'Грудь', equipment: 'Штанга', difficulty: 'Средний' },
    { name: 'Сведение рук в тренажёре', muscleGroup: 'Грудь', equipment: 'Тренажёр', difficulty: 'Начальный' },
    { name: 'Жим гантелей лёжа', muscleGroup: 'Грудь', equipment: 'Гантели', difficulty: 'Средний' },
    { name: 'Подтягивания', muscleGroup: 'Спина', equipment: 'Турник', difficulty: 'Продвинутый' },
    { name: 'Тяга гантели одной рукой', muscleGroup: 'Спина', equipment: 'Гантель', difficulty: 'Средний' },
    { name: 'Гиперэкстензия', muscleGroup: 'Спина', equipment: 'Скамья для гиперэкстензии', difficulty: 'Начальный' },
    { name: 'Становая тяга', muscleGroup: 'Спина и ноги', equipment: 'Штанга', difficulty: 'Продвинутый' },
    { name: 'Жим ногами', muscleGroup: 'Ноги', equipment: 'Тренажёр', difficulty: 'Начальный' },
    { name: 'Румынская тяга', muscleGroup: 'Ноги', equipment: 'Штанга', difficulty: 'Средний' },
    { name: 'Разгибание ног в тренажёре', muscleGroup: 'Ноги', equipment: 'Тренажёр', difficulty: 'Начальный' },
    { name: 'Сгибание ног в тренажёре', muscleGroup: 'Ноги', equipment: 'Тренажёр', difficulty: 'Начальный' },
    { name: 'Подъём на носки стоя', muscleGroup: 'Икры', equipment: 'Тренажёр', difficulty: 'Начальный' },
    { name: 'Тяга каната к лицу', muscleGroup: 'Плечи', equipment: 'Кроссовер', difficulty: 'Начальный' },
    { name: 'Армейский жим', muscleGroup: 'Плечи', equipment: 'Штанга', difficulty: 'Продвинутый' },
    { name: 'Подъём штанги на бицепс', muscleGroup: 'Бицепс', equipment: 'Штанга', difficulty: 'Начальный' },
    { name: 'Сгибание рук с гантелями', muscleGroup: 'Бицепс', equipment: 'Гантели', difficulty: 'Начальный' },
    { name: 'Молотковые сгибания', muscleGroup: 'Бицепс', equipment: 'Гантели', difficulty: 'Средний' },
    { name: 'Разгибание рук на блоке', muscleGroup: 'Трицепс', equipment: 'Кроссовер', difficulty: 'Начальный' },
    { name: 'Французский жим', muscleGroup: 'Трицепс', equipment: 'Штанга', difficulty: 'Средний' },
    { name: 'Планка', muscleGroup: 'Пресс', equipment: 'Без оборудования', difficulty: 'Начальный' },
    { name: 'Скручивания', muscleGroup: 'Пресс', equipment: 'Без оборудования', difficulty: 'Начальный' },
];

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
                <span className="exercises-page__count">{mockExercises.length} упражнений</span>
            </header>

            <div className="exercises-table-wrapper">
                <table className="exercises-table">
                    <thead>
                        <tr>
                            <th scope="col">Название</th>
                            <th scope="col">Группа мышц</th>
                            <th scope="col">Оборудование</th>
                            <th scope="col">Сложность</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockExercises.map((exercise) => (
                            <tr key={exercise.name}>
                                <td>{exercise.name}</td>
                                <td>{exercise.muscleGroup}</td>
                                <td>{exercise.equipment}</td>
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
