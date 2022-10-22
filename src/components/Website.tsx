import Style from '../styles/Projects.module.css';
export const Website: React.FC<{ name: string; img: string }> = ({ name, img }) => (
    <a href={`https://${name}`}>
        <div className={Style.website}>
            <h3>{name}</h3>
            <img src={img} alt={name} />
        </div>
    </a>
);
