import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const navLinkClassName = ({isActive}) => isActive 
    ? `${css.link} ${css['link-current']}` 
    : css.link;

export const Navigation = () => {

    return (
        <nav className={css['page-nav']}>
            <NavLink className={navLinkClassName} to='/'>Home</NavLink>
            <NavLink className={navLinkClassName} to='/tweets'>Tweets</NavLink>
        </nav>
    )
}