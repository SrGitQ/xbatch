import Text from '../../atoms/Text';
import { ListLayout } from './ListLayout';
import { Page } from './Page';

const page = {
    title:"https://tailwindcss.com/",
    author:"12/05/2022",
    date:"Juan",
    status:"High",
    id:"passed"
}

export const BodyPageScreen = () => {
    const Head = [<Text text="Page Url" />, <Text text="Date" />, <Text text="Owner" />, <Text text="Priority" />, <Text text="Status" />];

    const List = (
        <div className="bg-orange-400 min-h-[34rem] overflow-auto">
            <Page page={page} />
            <Page page={page} />
            <Page page={page} />
            <Page page={page} />
            <Page page={page} />
            <Page page={page} />
            <Page page={page} />
            <Page page={page} />
            <Page page={page} />
        </div>
    );
    return (
        <div className="w-full h-full bg-white">
            <ListLayout listElements={Head} extra='my-4' />
            {List}
        </div>
    );
};
