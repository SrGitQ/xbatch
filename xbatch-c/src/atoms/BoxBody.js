const BoxBody = ({width, layout='w-full'}) => {
    const style = 'bg-prayrise rounded-lg ' + width
    return (
        <div className={style}>{layout}</div>
    ) 
}

export default BoxBody; 