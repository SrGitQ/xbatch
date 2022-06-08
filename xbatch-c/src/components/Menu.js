import Text from '../atoms/Text';

const Option = ({title, checked = false, select, setOption}) => {
    return (
        <button className="w-56 my-3 flex ml-5 place-items-center" onClick={() => {setOption(select)}}>
            <div className="rounded-full mr-6 w-3 h-3 bg-bray"/>
            <div className="mr-auto">
                {checked ? <Text text={title} /> : <p className='text-bray text-sm'>{title}</p>}
            </div>
            {checked ? <div className="w-0.5 h-4 bg-grayrise "/> : <div className="w-0.5 h-4"/>}
        </button>
    )
}


const Menu = ({option, setOption}) => {
    return (
        <div className="h-56 my-10 ">
            <Option title="Dashboard" select={'dashboard'} setOption={setOption} checked={option === 'dashboard'}/>
            <Option title="Pages" select={'pages'} setOption={setOption} checked={option === 'pages'}/>
            <Option title="Statistics" select={'statistics'} setOption={setOption} checked={option === 'statistics'}/>
        </div>
    );
}

export default Menu;