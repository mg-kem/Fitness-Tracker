import Breadcrumbs from '../../components/Breadcrumbs';
import Graphics from '../../components/Graphics';
import RecentActivities from '../../components/RecentActivities';
import TrainingMetrics from '../../components/TrainingMetrics'

function Dashboard() {
    return (
        <>
            <Breadcrumbs />
            <TrainingMetrics />
            <Graphics />
            <RecentActivities />
        </>
    )
}

export default Dashboard;