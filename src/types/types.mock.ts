/**
 * Типизация сложности упражнения
 */
type TExerciseDifficulty = 'light' | 'medium' | 'difficult';


/**
 * Типизация уровня сложности программы
 */
type TProgramLevel = 'beginner' | 'intermediate' | 'advanced';


/**
 * Типизация одного упражнения из каталога
*/
export type TExercise = {
    id: string;
    name: string;
    muscleGroup: string;
    difficulty: TExerciseDifficulty;
}


/**
 * Типизация программы тренировки
 */
export type TTrainingProgram = {
    id: string;
    name: string;
    description: string;
    durationWeeks: number;
    level: TProgramLevel;
    daysPerWeek: number;
}


/**
 * Типизация дня программы тренировки
 */
export type TTrainingDay = {
    id: string;
    name: string;
    programId: string;
    dayOrder: number;
}


/**
 * Типизация соответствия упражнения и дня программы тренировок
 */
export type TProgramExercise = {
    id: string;
    exerciseId: string;
    trainingDayId: string;
    sets: number;
    reps: number;
    weight?: number;
}