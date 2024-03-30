import React from 'react';
import Style from '../styles/ImageViewer.module.css';
import { MdClose } from 'react-icons/md';
export const ImageViewer: React.FC<{
    src: string;
    alt: string;
    close: () => void;
}> = ({ alt, src, close }) => (
    <div className={Style.wrapper}>
        <div className={Style.main}>
            <div>
                <h3>{alt}</h3>
                <button onClick={close}>
                    <MdClose />
                </button>
            </div>
            <img src={src} />
        </div>
    </div>
);
