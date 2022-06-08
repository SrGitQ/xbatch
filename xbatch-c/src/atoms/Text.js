const Text = ({text, color='grayrise'}) => {
    const style = `text-${color} text-sm`
    return (
        <p className={style}>{text}</p>
    )
}

export default Text;