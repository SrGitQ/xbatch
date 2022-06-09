import UserInf from "../components/UserInf"
import BoxBody from "../atoms/BoxBody"
import Menu from "../components/Menu"
import Divisor from "../atoms/Divisor"

const MenuScreen = ({option, setOption, userInfo}) => {
    const layout = (
        <div >
            <UserInf userInfo={userInfo}/>
            <Divisor />
            <Menu option={option} setOption={setOption}/>
        </div>
    )

    return (
        <BoxBody layout={layout} width='w-72'/>
    ) 
}

export default MenuScreen;