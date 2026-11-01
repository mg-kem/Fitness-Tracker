import type { TTrainingProgram } from '../types/types.mock';

export const trainingPrograms: TTrainingProgram[] = [
    {
        id: 'pr-1',
        name: 'Full Body для начинающих',
        description: 'Базовая программа на всё тело для знакомства с силовыми тренировками',
        durationWeeks: 6,
        level: 'beginner',
        daysPerWeek: 3,
    },
    {
        id: 'pr-2',
        name: 'Upper / Lower',
        description: 'Программа с разделением тренировок на верхнюю и нижнюю части тела.',
        durationWeeks: 8,
        level: 'intermediate',
        daysPerWeek: 4
    }
]