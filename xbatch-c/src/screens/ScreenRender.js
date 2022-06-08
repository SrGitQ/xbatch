import BoxBody from "../atoms/BoxBody";

const ScreenRender = ({option}) => {
    const layout = (<div>Screen {option}</div>)
    return (
        <BoxBody layout={layout} width='w-full'/>
    ) 
}

export default ScreenRender; 