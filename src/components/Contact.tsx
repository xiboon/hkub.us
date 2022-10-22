import { SiDiscord, SiTwitter } from 'react-icons/si';
import Style from '../styles/Contact.module.css';
export const Contact: React.FC = () => (
    <header className={Style.header}>
        <div>
            <h1>Contact me</h1>
            <a href="https://twitter.com/hxiboon">
                <SiTwitter />
                <h2>@hxiboon</h2>
            </a>
            <a href="https://discord.com/">
                <SiDiscord />
                <h2>kub#0242</h2>
            </a>
        </div>
    </header>
);
