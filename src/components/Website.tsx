import { useState } from 'react';
import Style from '../styles/Projects.module.css';
import { ImageViewer } from './ImageViewer';
import { MdFullscreen } from 'react-icons/md';
export const Website: React.FC<{ name: string; img: string; url?: string }> = ({ name, img, url }) => {
    const [fullscreen, setFullscreen] = useState(false);

    return (
        <>
            {fullscreen ? <ImageViewer src={img} alt={name} close={() => setFullscreen(false)} /> : null}
            <a href={`https://${url || name}`}>
                <div className={Style.website}>
                    <h3>{name}</h3>
                    <img src={img} alt={name} />
                    <button
                        onClick={event => {
                            event.preventDefault();
                            setFullscreen(true);
                        }}
                    >
                        <MdFullscreen />
                    </button>
                </div>
            </a>
        </>
    );
};
