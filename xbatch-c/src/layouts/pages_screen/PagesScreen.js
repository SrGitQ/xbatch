import { BodyPageScreen } from './BodyPageScreen';

const Header = () => {
    return (
        <div className="h-8 flex">
            <h1 className="text-grayrise w-2/5 text-3xl">Pages</h1>
            <div className="w-full flex justify-end">
                <h1 className="text-grayrise text-center text-4xl w-9 ">+</h1>
            </div>
        </div>
    );
}

const AuxHeader = () => {
    return (
        <div className="h-16">
            <form className=' my-4'>
                <select name0="userpages" id="userpages" className='bg-transparent text-grayrise text-lg'>
                    <option vaalue="all" defaultChecked>All</option>
                    <option vaalue="Juan">Juan</option>
                    <option vaalue="Efrack">Efrack</option>
                </select>
            </form>
        </div>
    );
}

const PagesScreen = () => {
    return (
        <div className="h-[93vh] m-4">
            <Header />
            <AuxHeader />
            <div className='row-span-auto'><BodyPageScreen /></div>
        </div>
    );
}

export default PagesScreen;