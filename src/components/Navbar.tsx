import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Style from '../styles/Navbar.module.css';
import { MdContactMail, MdKeyboard, MdPerson } from 'react-icons/md';
export const Navbar: React.FC<{ items: string[] }> = props => {
    const location = useLocation();
    const iconMap = {
        about: <MdPerson className={Style.icon} />,
        projects: <MdKeyboard className={Style.icon} />,
        contact: <MdContactMail className={Style.icon} />
    };
    // @ts-expect-error
    const items = props.items.map((item: 'About' | 'Projects' | 'Contact') => {
        let active = location.pathname.replace('/', '').toLowerCase();
        active = active === '' ? 'about' : active;
        return (
            <Link
                className={active === item.toLowerCase() ? Style.active : ''}
                to={`/${item === 'About' ? '' : item.toLowerCase().replace(' ', '')}`}
            >
                {iconMap[item.toLowerCase() as keyof typeof iconMap]}
                <p>{item}</p>
            </Link>
        );
    });
    return <nav className={Style.nav}>{items}</nav>;
};
