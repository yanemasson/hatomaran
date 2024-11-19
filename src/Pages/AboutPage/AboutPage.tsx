import {Text, TextVariant} from "../../components/Text.tsx";
import usePages from "../../hooks/usePages.ts";

const AboutPage = () => {
    const { description } = usePages("about");
    return (
        <div className='mt-20'>
            <Text variant={TextVariant.H1}>About</Text>
            <Text variant={TextVariant.P}>{description}</Text>
        </div>
    );
};

export default AboutPage;