import UserInf from "../components/UserInf"
import BoxBody from "../components/BoxBody"

const MenuScreen = () => {
    const layout = (
        <div className="grid grid-cols-1 divide-y divide-bray mx-4">
            <UserInf/>
            <div>22</div>
        </div>
    )

    return (
        <BoxBody layout={layout} width='72'/>
    ) 
}

export default MenuScreen; 