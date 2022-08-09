import { TRecommendation } from '../components/UI/Recommendations';
import alex from '../images/alex.png';
import lisa from '../images/lisa.png';
import subZero from '../images/subZero.jpeg';
import scorpion from '../images/scorpion.jpeg';

export const recommendations: TRecommendation[] = [
    {
        name: 'Scorpion',
        title: 'CEO',
        comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quo molestiae saepe expedita officia nulla officiis aut. Aperiam aliquam cupiditate earum necessitatibus ipsam unde assumenda!',
        imageSrc: scorpion,
        review: 5,
    },
    {
        name: 'Sub Zero',
        title: 'Supervisor',
        comment: 'Lorem ipsum dolor sit',
        imageSrc: subZero,
        review: 3,
    },
    {
        name: 'Lisa Freiwald',
        title: 'CEO',
        comment: `Sunt commodo commodo nulla eiusmod. Reprehenderit qui qui ipsum ea tempor enim magna ipsum proident adipisicing proident Lorem. Pariatur labore exercitation sint elit sunt occaecat id consequat id irure deserunt nostrud. Enim velit sit magna consectetur est mollit et et et. Veniam deserunt est ad Lorem magna ut sint culpa adipisicing. Velit in esse duis sint non anim laborum non est pariatur commodo anim esse.

Exercitation anim aliqua aliquip mollit aliquip est dolor anim id. Fugiat anim id laboris cupidatat. Sit eu quis occaecat deserunt pariatur eiusmod Lorem fugiat nisi cillum veniam Lorem. Excepteur ut officia voluptate ullamco ullamco voluptate mollit in elit ea laboris et Lorem officia. Commodo nisi pariatur incididunt et enim cupidatat. Cillum laborum ullamco elit veniam eiusmod labore quis irure.

Laborum id magna aliquip sunt nulla quis nostrud occaecat voluptate ex. Dolore nulla enim irure sint officia nisi do cillum. Labore sint adipisicing in culpa sunt mollit occaecat incididunt et. Eiusmod aliqua culpa ea aliqua exercitation consectetur cupidatat qui pariatur adipisicing mollit. Labore velit eu excepteur quis reprehenderit quis anim do ipsum aliquip.`,
        imageSrc: lisa,
        review: 5,
    },
    {
        name: 'Alexander Ramhit',
        title: 'Supervisor',
        comment: 'Lorem ipsum dolor sit',
        imageSrc: alex,
        review: 4,
    },
];
