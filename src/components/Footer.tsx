import * as React from 'react';
import {Text, TextVariant} from "./Text.tsx";
import {Anchor} from "./Anchor.tsx";

const Footer = () => {
    return (
        <div className='flex justify-between p-4 lg:mx-48'>
            <div>
                <Text variant={TextVariant.H6}>Contact</Text>
                <Anchor to={'mailto:hato3650@gmail.com'}><Text variant={TextVariant.P}>hato3650@gmail.com</Text></Anchor>
                <Anchor to={'https://t.me/hatomarano'}><Text variant={TextVariant.P}>tg: @hatomarano</Text></Anchor>
            </div>

            <div className='flex flex-col justify-center items-center lg:flex-row'>
                <Anchor to={'https://www.behance.net/hatomar'}><img alt='Behance' className='h-10' src='src/icons/ic_bechance.svg'/></Anchor>
                <Anchor to={'https://www.instagram.com/hatomaran'}><img alt='Instagram' className='h-10' src='src/icons/ic_instagram.svg'/></Anchor>
            </div>
        </div>
)};

export default Footer;