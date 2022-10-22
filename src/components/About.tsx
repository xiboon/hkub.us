import Logo from '../assets/logos/logo.png';
import Styles from '../styles/About.module.css';
import {
    SiCss3,
    SiExpress,
    SiHtml5,
    SiJavascript,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiSqlite,
    SiTypescript
} from 'react-icons/si';
export const About: React.FC<{ description: string }> = props => (
    <header className={Styles.header}>
        <div>
            <div className={Styles.name}>
                <img className={Styles.avatar} src={Logo}></img>
                <h1>xiboon</h1>
            </div>
            <h2>{props.description}</h2>
            <div className={Styles.technologies}>
                <h2>Technologies I use</h2>
                <SiTypescript></SiTypescript>
                <SiJavascript></SiJavascript>
                <SiReact></SiReact>
                <SiNodedotjs></SiNodedotjs>
                <SiHtml5></SiHtml5>
                <SiCss3></SiCss3>
                <SiExpress></SiExpress>
                <SiPrisma></SiPrisma>
                <SiPostgresql></SiPostgresql>
                <SiSqlite></SiSqlite>
            </div>
        </div>
    </header>
);
