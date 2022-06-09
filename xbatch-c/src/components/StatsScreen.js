const Header = () => {
    return (
        <div className=" flex">
            <h1 className="text-grayrise w-2/5 text-3xl font-bold">Statistics</h1>
            <div className="w-full flex justify-end">
                {/* <h1 className="text-grayrise text-center text-4xl w-9 font-bold">+</h1> */}
            </div>
        </div>
    );
}

const AuxHeader = () => {
    return (
        <h1>AUXILIARHEADER</h1>
    );
}

const Body = () => {
    return (
        <h1>BODY</h1>
    );
}

const StatsScreen = () => {
    return (
        <div className="m-5">
            <Header />
            <AuxHeader />
            <Body />
        </div>
    );
}

export default StatsScreen;