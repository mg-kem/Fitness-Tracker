type TableRowProps = {
    workoutName: string;
    date: string;
    exercisesCount: number;
    duration: string;
};

function ActivityRow({ workoutName, date, exercisesCount, duration }: TableRowProps) {
    return (
        <tr>
            <td>{workoutName}</td>
            <td>{date}</td>
            <td>{exercisesCount}</td>
            <td>{duration}</td>
            <td><button className='btn-actions'>***</button></td>
        </tr>
    )
}

export default ActivityRow;