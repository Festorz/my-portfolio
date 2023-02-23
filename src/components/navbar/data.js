import tips from '../../data/images/tips_predictions.png'
import breakfast from '../../data/images/breakfast.png'
import mkulima from '../../data/images/mkulima.png'
import insta from '../../data/images/insta.png'
import correctscores from '../../data/images/correctscores.png'
import { LocationOn, Email, PhoneInTalkOutlined, GitHub, LinkedIn, Facebook, Twitter } from '@material-ui/icons'

export const pages = [
    {
        id: 1,
        label: 'Home',
        route: '/',
    },
    {
        id: 2,
        label: 'About',
        route: '/about',
    },
    {
        id: 5,
        label: 'Experience',
        route: '/experience',
    },
    {
        id: 3,
        label: 'works',
        route: '/work',
    },
    {
        id: 4,
        label: 'Contacts',
        route: '/contact',
    },

]

export const scoredata = [
    {
        id: 1,
        number: '50+',
        value: 'PROJECTS COMPLETED',
        stars: 4,
    },
    {
        id: 2,
        number: '4+',
        value: 'YEARS OF EXPERIENCE',
        stars: 4,
    },
    {
        id: 3,
        number: '10+',
        value: 'HAPPY CLIENTS',
        stars: 4,
    },
    {
        id: 4,
        number: '10+',
        value: 'CUSTOMER REVIEWS',
        stars: 4,
    },
]

export const skills = [
    {
        id: 1,
        skill: 'Node Js',
        level: 90,

    },
    {
        id: 13,
        skill: 'Next Js',
        level: 90,

    },
    {
        id: 2,
        skill: 'React Js',
        level: 90,

    },
    {
        id: 3,
        skill: 'Javascript',
        level: 90,

    },
    {
        id: 4,
        skill: 'Flutter for Android & IOS apps',
        level: 90,

    },
    {
        id: 5,
        skill: 'Python',
        level: 85,

    },
    {
        id: 6,
        skill: 'DJango',
        level: 90,

    },
    {
        id: 7,
        skill: 'PHP',
        level: 90,

    },
    {
        id: 8,
        skill: 'Laravel',
        level: 90,

    },
    {
        id: 9,
        skill: 'SQL DATABASES',
        level: 90,

    },
    {
        id: 10,
        skill: 'NO-SQL DATABASES',
        level: 85,

    },
    {
        id: 11,
        skill: 'AWS WEB SERVICES',
        level: 90,

    },
    {
        id: 12,
        skill: 'git',
        level: 90,

    },
]

export const experience = [
    {
        id: 1,
        role: 'INTERN',
        duration: 'JUL 2022 - SEPT 2022',
        institution: 'Icore Information Systems',
        duties: [
            {
                id: 1,
                role: 'Testing and evaluating new new programs using PHP and LARAVEL'
            },
            {
                id: 2,
                role: 'Integrating MPESA and SMS APIs using PHP, Laravel and JavaScript'
            },
            {
                id: 3,
                role: 'Testing and modifying systems to ensure they operate reliably.'
            },
            {
                id: 4,
                role: 'Fault finding, diagnosing and fixing bugs using either PHP, Laravel, CAKE PHP, HTML, CSS & Javascript'
            },
            {
                id: 5,
                role: 'User Training and support and responding to feedback.'
            },
            {
                id: 6,
                role: 'Maintaining and upgrading existing systems.'
            },
            {
                id: 7,
                role: 'Researching, designing, implementing and managing software programs.'
            },
            {
                id: 8,
                role: 'Deploying software tools, processes and metrics.'
            },
            {
                id: 9,
                role: 'Writing and implementing efficient code.'
            },
            {
                id: 10,
                role: 'Working closely with other developers, UX designers, business and systems analysts.'
            },
        ]

    },
    {
        id: 2,
        role: 'ICT ATTACHEE',
        duration: 'APR 2019 - AUG 2019',
        institution: 'Kenya National Library Nakuru',
        duties: [
            {
                id: 1,
                role: 'Computer networking and server administration'
            },
            {
                id: 2,
                role: 'Installation And configuration of hardware and software'
            },
            {
                id: 3,
                role: 'Troubleshooting software and hardware'
            },
            {
                id: 4,
                role: 'User Authorization and Authentication'
            },
            {
                id: 5,
                role: 'Maintainance of ICT Equipements'
            },
            {
                id: 6,
                role: 'Management of e-resources and OPAC and Library Management System (Amlib)'
            },
            {
                id: 7,
                role: 'Wireless Internet configuration to library users'
            },
            {
                id: 8,
                role: 'Updating ICT inventory Database'
            },
            {
                id: 9,
                role: 'ICT Helpdesk Support'
            },
            {
                id: 10,
                role: 'Data Backup through SQL Server'
            }
        ]

    },


]

export const projects = [
    {
        id: 1,
        label: 'Breakfast Recipes App',
        image: breakfast,
        github: 'https://github.com/Festorz/BreakFast-recipes-app---Flutter',
        server: 'https://play.google.com/store/apps/details?id=com.coolrecipes.breakfast.recipes',
        tech: 'Dart Flutter, API'

    },
    {
        id: 2,
        label: 'Soccer Web Application',
        image: tips,
        github: 'https://github.com/Festorz/football-analysis-application-django',
        server: 'https://objective-almeida-e0f012.netlify.app/',
        tech: 'Python Django, React JS'

    },
    {
        id: 3,
        label: 'Mkulima Business App',
        image: mkulima,
        github: 'https://github.com/Festorz/Farming-App---Dart-Flutter',
        server: 'https://play.google.com/store/apps/details?id=com.jordandevs.apps.mkulima',
        tech: 'NodeJS, Flutter'

    },
    {
        id: 4,
        label: 'Instaverse App',
        image: insta,
        github: 'https://github.com/Festorz/Mern-app-React-',
        server: 'https://instaverse-node.netlify.app/',
        tech: 'Mongo DB, Express, React Js, NodeJS'
    },
    {
        id: 5,
        label: 'Correct Scores Website',
        image: correctscores,
        github: 'https://github.com/Festorz/CorrectScore',
        server: '',
        tech: 'Django, HTML, CSS, JavaScript'
    },
]

export const contacts = [
    {
        id: 1,
        title: 'Location',
        label: 'Nairobi Kenya',
        icon: <LocationOn />,
    },
    {
        id: 2,
        title: 'Email',
        label: 'festaskirui@gmail.com',
        icon: <Email />,
    },
    {
        id: 3,
        title: 'Mobile Number',
        label: '+254 798 663646',
        icon: <PhoneInTalkOutlined />,
    }
]

export const socialLinks = [
    {
        id: 1,
        title: 'Github',
        link: 'https://github.com/festorz',
        icon: <GitHub fontSize='large' />,
    },
    {
        id: 2,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/festus-kirui-566451205/',
        icon: <LinkedIn fontSize='large' />,
    },
    {
        id: 3,
        title: 'Facebook',
        link: 'https://www.facebook.com/festorz.kirui.98/',
        icon: <Facebook fontSize='large' />,
    },
    {
        id: 4,
        title: 'Twitter',
        link: 'https://twitter.com/festaskirui',
        icon: <Twitter fontSize='large' />,
    }
]