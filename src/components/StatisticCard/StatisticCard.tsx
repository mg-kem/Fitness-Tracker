type StatisticCardProps = {
    title: string,
    value: number,
}

function StatisticCard({ title, value }: StatisticCardProps) {
    return (
        <article className="stat-card">
            <h2 className="stat-card__title">{title}</h2>
            <p className="stat-card__value">{value}</p>
        </article>
    )
}

export default StatisticCard;