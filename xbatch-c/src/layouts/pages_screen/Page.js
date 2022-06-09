import Text from '../../atoms/Text';
import { ListLayout } from './ListLayout';

export const Page = ({ page }) => {
    const listElements = [
        <Text text={page.title} />,
        <Text text={page.author} />,
        <Text text={page.date} />,
        <Text text={page.status} />,
        <Text text={page.id} />,
    ];
    return <ListLayout listElements={listElements} extra="bg-bray rounded-lg h-12 my-2 place-content-center" />;
};
