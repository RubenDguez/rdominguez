import { TMediaLink } from '../types';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export const mediaLinks: TMediaLink[] = [
    {
        link: 'https://www.linkedin.com/in/ruben-dominguez-ba386621a',
        icon: <LinkedInIcon />,
    },
    { link: 'https://github.com/RubenDguez', icon: <GitHubIcon /> },
    {
        link: 'https://www.facebook.com/argenis.dgz.2008/',
        icon: <FacebookIcon />,
    },
    {
        link: 'https://www.instagram.com/argenis.dominguez/?hl=en',
        icon: <InstagramIcon />,
    },
    {
        link: 'https://twitter.com/Argenis_dgz',
        icon: <TwitterIcon />,
    },
];
