import { trainingPrograms } from '../mock/programsMock';
import { trainingDays } from '../mock/trainingDaysMock';
import { programsExercises } from "../mock/programsExercisesMock.ts";
import { exercises } from "../mock/exercisesMock.ts";
import type { TTrainingProgram, TProgramDetails } from '../types/types.mock';

export function getAllPrograms(): TTrainingProgram[] {
    return trainingPrograms;
}

export function getProgramDetails (programId: string) :TProgramDetails | null {

    const program = trainingPrograms
        .find(program => program.id === programId);

    if(!program) {
        return null;
    }
    return ({
        ...program,
        days: trainingDays
            .filter(day => day.programId === program.id)
            .map(day => ({
                ...day,
                exercises: programsExercises
                    .filter(exerciseProgram => exerciseProgram.trainingDayId === day.id)
                    .map(exerciseProgram => {
                        const exercise = exercises.find(
                            exercise => exercise.id === exerciseProgram.exerciseId
                        );

                        return {
                            programExerciseId: exerciseProgram.id,
                            exerciseId: exerciseProgram.exerciseId,
                            sets: exerciseProgram.sets,
                            reps: exerciseProgram.reps,
                            weight: exerciseProgram.weight,
                            trainingDayId: exerciseProgram.trainingDayId,
                            name: exercise?.name,
                            muscleGroup: exercise?.muscleGroup,
                            difficulty: exercise?.difficulty
                        };
                    })
            }))
    });
}
