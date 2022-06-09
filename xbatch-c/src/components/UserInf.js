import Text from '../atoms/Text'
import Logo from '../atoms/Logo'

const Description = ({userInfo}) => {
    return (
        <div className='text-center mx-auto'>
            <Text text={userInfo.name}/>
            <Text text={userInfo.job}/>
        </div>
    )
    
}
const UserInf = ({userInfo}) => {
    return (
        <div className="h-72 flex flex-col justify-center">
            <Logo name = "EMM"/>
            <br/>
            <Description userInfo={userInfo}/>
        </div>
    ) 
}

export default UserInf; 
