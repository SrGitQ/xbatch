import Text from '../atoms/Text'
import Logo from '../atoms/Logo'

const Description = () => {
    return (
        <div className='text-center mx-auto'>
            <Text text="Efrack"/>
            <Text text="Parser Engineer "/>
        </div>
    )
    
}
const UserInf = () => {
    return (
        <div className="h-72 flex flex-col justify-center">
            <Logo name = "EMM"/>
            <br/>
            <Description/>
        </div>
    ) 
}

export default UserInf; 
