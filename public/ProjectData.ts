import {Project} from '../src/types/Project.ts'
export const projects : Project[] =[
    {
        title: 'Title1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum esse expedita ipsum obcaecati officia quo.' ,
        bechanceLink: '/#',
        images: [
            {
                url: new URL('/images/pohuypank.png', import.meta.url).href,
                description: 'Lorem ipsum dolor.'
            }
        ]
    },
    {
        title: 'Title2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis distinctio excepturi, laboriosam quaerat quibusdam tempore.',
        bechanceLink: '/#',
        images: [
            {
                url: new URL('/images/boing.jpg', import.meta.url).href,
                description: 'Lorem ipsum dolor.'
            },
            {
                url: new URL('/images/boingdemo.jpg', import.meta.url).href,
                description: 'bubeba'
            }
        ]
    }
]
