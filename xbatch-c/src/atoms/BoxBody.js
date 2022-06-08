const BoxBody = ({layout, width='full'}) => {
    const style = 'bg-prayrise w-' + width + ' rounded-lg'
    return (
        <div className={style}>{layout}</div>
    ) 
}

export default BoxBody; 