import { trainingPrograms } from '../mock/programsMock';
import { trainingDays } from '../mock/trainingDaysMock';
import type { TTrainingDay, TTrainingProgram } from '../types/types.mock';

export function getAllPrograms(): TTrainingProgram[] {
    return trainingPrograms;
}

export function getProgramDays(programId: string): TTrainingDay[] {
    return trainingDays.filter(day => day.programId === programId);
}

export function getExercisesByTrainingDay() {
    return;
}