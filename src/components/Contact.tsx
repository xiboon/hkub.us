import { SiDiscord, SiGithub, SiTwitter } from 'react-icons/si';
import Style from '../styles/Contact.module.css';
export const Contact: React.FC = () => (
    <header className={Style.header}>
        <h1>Contact me</h1>
        <div>
            <a href="https://twitter.com/hxiboon">
                <SiTwitter />
                {/* <h1>Twitter</h1> */}
                <h2>@hxiboon</h2>
            </a>
            <a href="https://discord.com/">
                <SiDiscord />
                {/* <h1>Discord</h1> */}
                <h2>@hkubus</h2>
            </a>
            <a href="https://github.com/Xiboon">
                <SiGithub />
                <h2>@Xiboon</h2>
            </a>
        </div>
    </header>
);
