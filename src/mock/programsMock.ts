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
    },
    {
        id: 'pr-3',
        name: 'Push / Pull / Legs',
        description: 'Трёхдневная программа с разделением упражнений на жимовые, тяговые и ножные группы.',
        durationWeeks: 8,
        level: 'intermediate',
        daysPerWeek: 3
    },
    {
        id: 'pr-4',
        name: 'Силовая база',
        description: 'Программа для развития силы в базовых упражнениях с чередованием верха и низа тела.',
        durationWeeks: 10,
        level: 'advanced',
        daysPerWeek: 4
    },
    {
        id: 'pr-5',
        name: 'Тренировки дома',
        description: 'План тренировок всего тела с упражнениями, для которых не нужен тренажёрный зал.',
        durationWeeks: 6,
        level: 'beginner',
        daysPerWeek: 3
    }
]