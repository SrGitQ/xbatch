const Logo = (props) => {
    return (<div className="bg-bluegray rounded-full w-32 h-32 mx-auto flex">
        <p className="text-text text-center mx-auto font-bold m-auto">{props.name}</p>
    </div>)
}
const Description = () => {
    return <p className="text-text text-center mx-auto">
        Efrack 
        <br/>
        Parser Engineer 
    </p>
}
const UserInf = () => {
    return (
        <div className="h-80 flex flex-col justify-center">
            <Logo name = "EMM"/>
            <Description/>
        </div>
    ) 
}

export default UserInf; 
