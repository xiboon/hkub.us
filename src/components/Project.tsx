import { ReactElement } from 'react';
import Styles from '../styles/Projects.module.css';
export const Project: React.FC<{ icon: ReactElement; name: string; description: string; url: string }> = props => (
    <a href={props.url} className={Styles.project}>
        {props.icon}
        <div>
            <h2>{props.name}</h2>
            <h3>{props.description}</h3>
        </div>
    </a>
);
