import UserInf from "../components/UserInf"
import BoxBody from "../atoms/BoxBody"
import Menu from "../components/Menu"
import Divisor from "../atoms/Divisor"

const MenuScreen = ({option, setOption}) => {
    const layout = (
        <div >
            <UserInf/>
            <Divisor />
            <Menu option={option} setOption={setOption}/>
        </div>
    )

    return (
        <BoxBody layout={layout} width='w-72'/>
    ) 
}

export default MenuScreen;