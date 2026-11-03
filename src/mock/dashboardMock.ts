import type {TStaticCard, TPersonalTraining} from "../types/types.mock.ts";

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

/**
 * Моковые данные персональных тренировок пользователя(недавние активности)
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
