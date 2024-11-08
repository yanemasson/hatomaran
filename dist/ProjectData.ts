import {Project} from '../src/types/Project.ts'
export const projects : Project[] =[
    {
        title: 'Title1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum esse expedita ipsum obcaecati officia quo.' ,
        bechanceLink: '/#',
        images: [
            {
                url: 'public/images/pohuypank.png',
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
                url: '/public/images/boing.jpg',
                description: 'Lorem ipsum dolor.'
            },
            {
                url: '/public/images/boingdemo.jpg',
                description: 'bubeba'
            }
        ]
    }
]
