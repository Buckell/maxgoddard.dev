import CppIcon from 'assets/skill_icons/cpp.svg';
import JsIcon from 'assets/skill_icons/js.png';
import ReactIcon from 'assets/skill_icons/react.png';
import HtmlIcon from 'assets/skill_icons/html.svg';
import CssIcon from 'assets/skill_icons/css.svg';
import PhpIcon from 'assets/skill_icons/php.png';
import MySqlIcon from 'assets/skill_icons/mysql.svg';
import PythonIcon from 'assets/skill_icons/python.webp';
import CSharpIcon from 'assets/skill_icons/csharp.png';
import LuaIcon from 'assets/skill_icons/lua.png';
import ElectronIcon from 'assets/skill_icons/electron.png';
import Office365Icon from 'assets/skill_icons/o365.png';
import FusionIcon from 'assets/skill_icons/f360.svg';
import KicadIcon from 'assets/skill_icons/kicad.png';
import JavaIcon from 'assets/skill_icons/java.png';
import DiscordIcon from 'assets/skill_icons/discord.png';
import CodeIcon from 'assets/skill_icons/code.png';
import GoogleIcon from 'assets/skill_icons/google.png';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import ImageProton from "./assets/proton.webp";
import ImageTimeManager from "./assets/timemanager.png";
import ImageMonet from "./assets/monet.webp";
import ImageRebar from "./assets/rebar.png";
import WebsiteImage from "./assets/website.png";

const Max = {
    getSkills: async () => {
        return [
            {
                icon: CppIcon,
                title: 'C/C++',
                category: 'language',
                display: true,
                color: '#0c498e',
                level: 3,
                description:
                    'C++ is the primary language I use for non-web/non-GUI applications. I have spent the past ' +
                    'several years improving my C++ skills, focusing on optimization and effectively using the ' +
                    'latest language features. I am familiar with the extremely low-level side of C++ with direct ' +
                    'memory manipulation and extreme optimization, the high-level side with metaprogramming and ' +
                    'zero-cost abstractions, and the unique quirks of C++ such as RAII and move semantics. Many ' +
                    'of my projects, such as Rebar or MoNET, extensively utilize C++ as their core language.'
            },
            {
                icon: JsIcon,
                title: 'Javascript',
                category: 'language',
                display: true,
                color: '#c59600',
                level: 3,
                description:
                    'The second-most language I use is Javascript. For all web and most UI applications, I will use ' +
                    'Javascript (usually combined with React.js). In terms of web development, I have been using JS ' +
                    'for around a decade. As I started using Javascript more often in React.js and desktop applications ' +
                    'a few years ago, my skills have massively improved. I\'ve used JS as the main language of this ' +
                    'site and in many other GUI applications, such as Bonfire or the panel UI of MoNET.'
            },
            {
                icon: ReactIcon,
                title: 'React.js',
                category: 'technology',
                display: true,
                color: '#44a1df',
                level: 2,
                description:
                    'React.js is the primary framework I use for web and UI development. I started learning React.js ' +
                    'a few years ago and fell in love with the framework and how much easier it is to use over more ' +
                    'static server-side rendering schemes. Since then, almost every single site I\'ve produced has ' +
                    'used React.js. This site, as well, is proudly made from scratch using only React.js and Styled ' +
                    'Components for easy CSS injection.'
            },
            {
                icon: HtmlIcon,
                title: 'Web Development',
                category: 'general',
                display: true,
                color: '#e34300',
                level: 3,
                description:
                    'One of my first experiences with programming was basic web development with HTML, CSS, and ' +
                    'Javascript. Over the last decade, I have worked on using modern web development best practices, ' +
                    'improving my website designs, and creating effective UX/UI. This website\'s design was made from ' +
                    'scratch using no external component/design libraries or unoriginal code.'
            },
            {
                icon: HtmlIcon,
                title: 'HTML',
                category: 'language',
                display: false,
                color: '#e34300',
                level: 3,
            },
            {
                icon: CssIcon,
                title: 'CSS',
                category: 'language',
                display: true,
                color: '#0035e3',
                level: 3,
                description:
                    'My CSS and design abilities have massively improved over the last decade. I have professionally ' +
                    'designed websites from scratch and implemented website redesigns from UI/UX designer specifications. ' +
                    'I am familiar with modern CSS flexbox, responsive design, animations, and other advanced CSS topics. ' +
                    'To demonstrate my abilities, this entire website was designed from scratch utilizing zero component ' +
                    'libraries, style libraries, copied code (from outside sources or prior projects of mine), or even ' +
                    'style references. Everything here (except React.js and related elements) is 100% my original work.'
            },
            {
                icon: JavaIcon,
                title: 'Java',
                category: 'language',
                display: true,
                color: '#cd3000',
                level: 3,
                description:
                    'Java was my language of choice for three years before switching to C++ for most of my general ' +
                    'workload. I extensively used Java for everything from 2D game development to web servers. ' +
                    'Additionally, I have used Java for utility applications, image processing, language development, ' +
                    'and useful bots for messaging platforms like Discord. I also mentored an Advanced Programming ' +
                    'Topics class, teaching students about algorithms and data structures in Java.'
            },
            {
                icon: PhpIcon,
                title: 'PHP',
                category: 'language',
                display: true,
                color: '#846fb6',
                level: 1,
                description:
                    'Due to the web-hosting providers I use, PHP is the primary language I use to implement the ' +
                    'backends in my sites. Despite using PHP extensively for backends, my PHP usage has remained fairly ' +
                    'simple, mostly utilizing mysqli/PDO, file operations, and medium-complexity exchanges. I have some ' +
                    'experience with Composer, but most of my usage of PHP has not required it.'
            },
            {
                icon: MySqlIcon,
                title: 'SQL',
                category: 'language',
                display: true,
                color: '#ef8136',
                level: 1,
                description:
                    'SQL databases have been my primary method of storing and maintaining information. I have used ' +
                    'MySQL, MariaDB, SQLServer, and SQLite servers/instances extensively. I have not needed to use ' +
                    'more advanced SQL manipulation statements, but I am familiar with standard joins and more complex ' +
                    'querying.'
            },
            {
                icon: PythonIcon,
                title: 'Python',
                category: 'language',
                display: true,
                color: '#baa72a',
                level: 2,
                description:
                    'I have not used Python for many recent projects, but I have extensively used it in the past for ' +
                    'cryptography, automation, 2D games, and Discord applications (bots). I am experienced with ' +
                    'advanced Python concepts like decorators, iterators, and other object-oriented topics (operator' +
                    'overloading, polymorphism, etc.).'
            },
            {
                icon: CSharpIcon,
                title: 'C#',
                category: 'language',
                display: true,
                color: '#9165cc',
                level: 1,
                description:
                    'I have not used C# in a wide range of applications, but I have a decent amount of experience in ' +
                    'game development with Unity and C#, creating addictive mobile games and exploration games.'
            },
            {
                icon: LuaIcon,
                title: 'Lua',
                category: 'language',
                display: true,
                color: '#001d93',
                level: 3,
                description:
                    'I professionally developed Lua game modifications for games like Garry\'s Mod for over three years. ' +
                    'During this time, I became extremely familiar with the inner workings of Lua. Due to Lua\'s status ' +
                    'as the premier scripting language for games due to its ease-of-use and speed (through the LuaJIT ' +
                    'compiler), I have used it as a basis for the programming language I am currently developing called ' +
                    'Rebar. I have a love-hate relationship with Lua, but I can\'t help but respect it for the well-' +
                    'deserving prevalence it has within the gaming industry.'
            },
            {
                icon: ElectronIcon,
                title: 'Electron',
                category: 'technology',
                display: true,
                color: '#34749f',
                level: 2,
                description:
                    'Electron has been my technology of choice for developing graphical applications for the last year. ' +
                    'The ability to use Javascript and HTML rendering (including React.js) in a desktop application has ' +
                    'massively simplified the headache of creating cross-platform Java or C++ applications that worked ' +
                    'and looked good at the same time. I have used Electron in Bonfire as the main interface, in MoNET ' +
                    'for the UI of the physical control panels, and in numerous other utility applications.'
            },
            {
                icon: Office365Icon,
                title: 'Microsoft Office 365',
                category: 'program',
                display: true,
                color: '#a45edc',
                level: 2,
            },
            {
                icon: FusionIcon,
                title: 'Fusion 360',
                category: 'program',
                display: false,
                color: '#ff6a00',
                level: 1,
                description:
                    'I use Fusion 360 as my primary application for designing and manufacturing parts for my projects. ' +
                    'I have used Fusion 360 to produce parts using CNC milling, routing, laser cutting, and 3D printing ' +
                    'processes.'
            },
            {
                icon: KicadIcon,
                title: 'KiCAD',
                category: 'program',
                display: false,
                color: '#003373',
                level: 0,
                description:
                    'I would still consider myself a beginner in designing PCBs with KiCAD, but I have designed and ' +
                    'ordered functional PCBs for the theatre lighting controllers (Protons) I manufactured and sold.'
            },
            {
                icon: DiscordIcon,
                title: 'Discord Applications (Bots)',
                category: 'technology',
                display: true,
                color: '#586ce1',
                level: 3,
                description:
                    'I developed Discord bots for a few years, usually tailoring toward specific servers but also as ' +
                    'general purpose utility bots. The bots I made have featured leveling, image processing, aesthetically-' +
                    'pleasing profile cards, moderation and administration functions, and games. I primarily used Java ' +
                    'and the Javacord API, but I have also extensively used discord.js and (to a lesser extent) ' +
                    'discord.py and a Discord C++ API.'
            },
            {
                icon: CodeIcon,
                title: 'Programming Language Development',
                category: 'general',
                display: true,
                color: '#634cb5',
                level: 2,
                description:
                    'For almost as long as I could program, I have been fascinated with programming languages and how ' +
                    'they worked. And for as long as I was fascinated with them, I\'ve been trying (and later succeeding ' +
                    'in) building them. I started with a very simple language with hardly any features built in Python ' +
                    '(utilizing the eval function for expression parsing), but as my general skills in programming have ' +
                    'improved, so have the pet languages I\'ve made. I switched from Python to Java and now, finally, to ' +
                    'C++. For the past five years, Rebar has been the language I have repeatedly remade and improved. ' +
                    'Starting with the first alpha version of Rebar, I switched from an interpreter-based language to a ' +
                    'JIT-compiled language, adding massive amounts of complexity but also massive amounts of speed. ' +
                    'The first version of Rebar was finished over a year ago, and after having learned a lot, I have ' +
                    'set out to make the first, production-ready version of Rebar. '
            },
            {
                icon: FusionIcon,
                title: 'Fabrication and CAD',
                category: 'general',
                display: true,
                color: '#ff6a00',
                level: 1,
            },
            {
                icon: GoogleIcon,
                title: 'Google Suite',
                category: 'program',
                display: true,
                color: '#276a25',
                level: 3,
            }
        ];
    },
    getProjects: async () => {
        return [
            {
                title: 'Rebar',
                image: ImageRebar,
                brief:
                    'A JIT-compiled language with the goals of being fast, easy to use, highly embeddable, ' +
                    'and with many cool language features.',
                description:
                    'Rebar is a JIT-compiled programming language with a few main goals in mind: speed, ' +
                    'embeddability, and ease-of-use. To promote speed and embeddability, the JIT-compilation ' +
                    'process is used, which allows extremely fast execution while maintaining the ability to ' +
                    'use Rebar as a scripting language for other program. To make Rebar easy to use, it utilizes ' +
                    'a familiar C-style syntax and a nearly seamless C++ API.',
                links: [
                    {
                        title: 'GitHub',
                        icon: faGithub,
                        location: 'https://github.com/Buckell/rebar',
                    },
                    {
                        title: 'LinkedIn',
                        icon: faLinkedin,
                        location: '',
                    },
                ]
            },
            {
                title: 'MoNET',
                image: ImageMonet,
                brief:
                    'A building and device network control system. It features ' +
                    'two-way communication, allowing control and monitoring.',
                description: '',
                links: []
            },
            {
                title: 'DCSM and the Proton',
                image: ImageProton,
                brief:
                    'The DCSM protocol is for managing standalone theatre lighting ' +
                    '(DMX) controllers. The Proton is a USB controller built with DCSM compatibility.',
                description: '',
                links: []
            },
            {
                title: 'Time Manager',
                image: ImageTimeManager,
                brief:
                    'A more personal project: a scheduling app that features event ' +
                    'scheduling, task management, and time boxing/blocking.',
                description: '',
                links: []
            },
            {
                title: 'This Website',
                image: WebsiteImage,
                brief:
                    'A personal React.js site without the usage of external ' +
                    'libraries (except framework stuff) or copied code. Everything is from scratch.',
                description: '',
                links: []
            },
        ];
    }
};

export default Max;