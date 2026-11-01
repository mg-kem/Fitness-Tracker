import type { TTrainingProgram, TPersonalTraining, TStaticCard } from '../types/types';


/**
 * Моковые данные общих программ тренировок
 */
export const programs: TTrainingProgram[] = [
    {
        id: 'full-body-beginner',
        name: 'Full body для начинающих',
        description: 'Базовая программа на всё тело для знакомства с силовыми тренировками.',
        level: 'Начальный',
        daysPerWeek: 3,
        duration: '6 недель',
        exercises: [
            { name: 'Приседания с гантелью', muscleGroup: 'Ноги', sets: 3, reps: '10–12', rest: '90 сек' },
            { name: 'Жим гантелей лёжа', muscleGroup: 'Грудь', sets: 3, reps: '8–12', rest: '90 сек' },
            { name: 'Тяга верхнего блока', muscleGroup: 'Спина', sets: 3, reps: '10–12', rest: '90 сек' },
            { name: 'Жим гантелей сидя', muscleGroup: 'Плечи', sets: 2, reps: '10–12', rest: '60 сек' },
            { name: 'Планка', muscleGroup: 'Пресс', sets: 3, reps: '30–45 сек', rest: '60 сек' },
        ],
    },
    {
        id: 'upper-lower',
        name: 'Верх / низ',
        description: 'Чередование тренировок верхней и нижней частей тела для стабильного прогресса.',
        level: 'Средний',
        daysPerWeek: 4,
        duration: '8 недель',
        exercises: [
            { name: 'Жим штанги лёжа', muscleGroup: 'Грудь', sets: 4, reps: '6–10', rest: '120 сек' },
            { name: 'Тяга штанги в наклоне', muscleGroup: 'Спина', sets: 4, reps: '8–10', rest: '120 сек' },
            { name: 'Жим гантелей над головой', muscleGroup: 'Плечи', sets: 3, reps: '8–12', rest: '90 сек' },
            { name: 'Приседания со штангой', muscleGroup: 'Ноги', sets: 4, reps: '6–10', rest: '120 сек' },
            { name: 'Румынская тяга', muscleGroup: 'Ноги', sets: 3, reps: '8–12', rest: '120 сек' },
        ],
    },
    {
        id: 'push-pull-legs',
        name: 'Push / Pull / Legs',
        description: 'Трёхдневный сплит: жимовые движения, тяговые движения и отдельный день ног.',
        level: 'Средний',
        daysPerWeek: 3,
        duration: '8 недель',
        exercises: [
            { name: 'Жим штанги на наклонной скамье', muscleGroup: 'Грудь', sets: 4, reps: '8–10', rest: '120 сек' },
            { name: 'Подъём гантелей в стороны', muscleGroup: 'Плечи', sets: 3, reps: '12–15', rest: '60 сек' },
            { name: 'Разгибание рук на блоке', muscleGroup: 'Трицепс', sets: 3, reps: '10–15', rest: '60 сек' },
            { name: 'Подтягивания', muscleGroup: 'Спина', sets: 4, reps: '6–10', rest: '120 сек' },
            { name: 'Выпады с гантелями', muscleGroup: 'Ноги', sets: 3, reps: '10 на ногу', rest: '90 сек' },
        ],
    },
];


/**
 * Моковые данные персональных тренировок пользователя(недавные активности)
 */
export const personalTraining: TPersonalTraining[] = [
    {
        id: 1,
        workoutName: 'Грудь и трицепс',
        date: '30 октября 2026',
        exercisesCount: 6,
        duration: '160 мин'
    },
    {
        id: 2,
        workoutName: 'Спина и бицепс',
        date: '28 октября 2026',
        exercisesCount: 10,
        duration: '130 мин'
    },
    {
        id: 3,
        workoutName: 'Ноги',
        date: '26 октября 2026',
        exercisesCount: 4,
        duration: '90 мин'
    },
    {
        id: 4,
        workoutName: 'Грудь и трицепс',
        date: '24 октября 2026',
        exercisesCount: 4,
        duration: '60 мин'
    },
]


/**
 * Данные для карточек статистики
 */
export const statCard: TStaticCard[] = [
    {
        title: "Пройдено тренировок",
        value: 12,
    },
    {
        title: "Общий вес",
        value: 25000,
    },
    {
        title: "Время в зале",
        value: 330
    },
    {
        title: "Текущий вес",
        value: 76
    }
]