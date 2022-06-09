import BoxBody from "../atoms/BoxBody";
import PagesScreen from "../components/PagesScreen";
import DashScreen from "../components/DashScreen";
import StatsScreen from "../components/StatsScreen"

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