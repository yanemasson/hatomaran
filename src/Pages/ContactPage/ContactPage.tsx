import {Text, TextVariant} from "../../components/Text.tsx";
import usePages from "../../hooks/usePages.ts";

const ContactPage = () => {
    const { description } = usePages("contact")
    return (
        <div className='mt-20'>
            <Text variant={TextVariant.H1}>Contact & Testimonials</Text>
            <Text variant={TextVariant.P}>{description}</Text>
        </div>
    );
};

export default ContactPage;