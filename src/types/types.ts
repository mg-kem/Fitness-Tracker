/** type
 * Программа тренировок
 */
export type TTrainingProgram = {
    id: string;
    name: string;
    description: string;
    level: string;
    daysPerWeek: number;
    duration: string;
    exercises: TProgramExercise[];
};


/** type
 * Каталог упражнений
 */
export type TProgramExercise = {
    name: string;
    muscleGroup: string;
    sets: number;
    reps: string;
    rest: string;
};


/** type
 * Персональные тренировки пользователя (недавние активности)
 */
export type TPersonalTraining = {
    id: number;
    workoutName: string;
    date: string;
    exercisesCount: number;
    duration: string;
}


/** type
 * Карты статистики в dashboard
 */
export type TStaticCard = {
    title: string;
    value: number;
}