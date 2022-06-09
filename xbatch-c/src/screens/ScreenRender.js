import BoxBody from "../atoms/BoxBody";
import PagesScreen from "../layouts/pages_screen/PagesScreen";
import DashScreen from "../layouts/dash_screen/DashScreen";
import StatsScreen from "../layouts/stats_screen/StatsScreen";

const ScreenRender = ({option}) => {
    return (
        <BoxBody 
            layout={
                option === 'pages' ? <PagesScreen /> :
                option === 'dashboard' ? <DashScreen /> :
                <StatsScreen />
            }
            width='w-full'
        />
    ) 
}

export default ScreenRender; 