import StatisticCard from '../StatisticCard';
import {statCard} from "../../mock/dashboardMock.ts";

function TrainingMetrics() {
    return (
        <section className="stat-cards">
            {
                statCard.map(card => {
                    return (
                        <StatisticCard
                            key={card.title}
                            title={card.title}
                            value={card.value}
                        />
                    )
                })
            }
        </section>
    )
}

export default TrainingMetrics;
