import {Text, TextVariant} from "./Text.tsx";
import {Anchor} from "./Anchor.tsx";
import { ReactComponent as BehanceIcon } from '@/assets/icons/ic_behance.svg'
import { ReactComponent as InstagramIcon } from "@/assets/icons/ic_instagram.svg";

const Footer = () => {
    return (
        <div className='flex justify-between p-4 lg:mx-48'>
            <div>
                <Text variant={TextVariant.H6}>Contact</Text>
                <Anchor to={'mailto:hato3650@gmail.com'}><Text variant={TextVariant.P}>hato3650@gmail.com</Text></Anchor>
                <Anchor to={'https://t.me/hatomarano'}><Text variant={TextVariant.P}>tg: @hatomarano</Text></Anchor>
            </div>

            <div className='flex flex-col justify-center items-center lg:flex-row'>
                <Anchor to={'https://www.instagram.com/hatomaran'}><InstagramIcon/></Anchor>
                <Anchor to={'https://www.behance.net/hatomar'}><BehanceIcon/></Anchor>
            </div>
        </div>
)};

export default Footer;