export const ListLayout = ({ listElements, extra = '' }) => {
    const style = "grid grid-cols-9 px-6 " + extra;
    return (
        <div className={style}>
            <div className="col-span-3">{listElements[0]}</div>
            <div className="col-span-2">{listElements[1]}</div>
            <div className="col-span-2">{listElements[2]}</div>
            <div>{listElements[3]}</div>
            <div>{listElements[4]}</div>
        </div>
    );
};
