import css from './UserCard.module.css';
import logo from 'images/card-logo.png';
import element from 'images/card-element-01.png';
import ellipse from 'images/card-element-02 .png';
import rectangle from 'images/card-element-03.png';
import userDefaultImg from 'images/user-default.png';
import { useEffect, useState } from 'react';
import { getVisibleQuantity } from 'helpers/getVisibleQuantity';
import { updateLocalStorage } from 'services/localStorageAPI';

export const UserCard = ({id, name, avatar, tweets, followers,following}) => {

    const tweetsQuantity = tweets;
    const [followersQuantity, setFollowersQuantity] = useState(followers);
    const [isFollowing, setIsFollowing] = useState(following);

    useEffect(() => {
        updateLocalStorage(id, isFollowing, followersQuantity)
    }, [followersQuantity, id, isFollowing])

    const userImg = avatar ? avatar : userDefaultImg;

    const btnClassName = isFollowing 
    ? `${css.button} ${css.followed}` 
    : `${css.button}`;

    const btnText = isFollowing ? 'Following' : 'Follow';

    const onBtnClick = () => {
        setIsFollowing(!isFollowing);

        isFollowing 
        ? setFollowersQuantity(followersQuantity - 1)
        : setFollowersQuantity(followersQuantity +1);
    } 

    return (
        <li className={css.card}>
            
            <img className={css.logo} src={logo} alt="Logo of GoIT School" width={76} />
            <img className={css.element} src={element} alt="Design element" />

            <div>
                <img className={css.rectangle} src={rectangle} alt="UI design element" />
                <img className={css.avatar} src={userImg} alt={`${name} avatar`} width={64}/>
                <img className={css.ellipse} src={ellipse} alt="UI design element" />
            </div>

            <div className={css.inner}>
                <div className={css.textbox}>
                    <h2 className='visually-hidden'>{name}</h2>
                    <p>{getVisibleQuantity(tweetsQuantity)} tweets</p>
                    <p> {getVisibleQuantity(followersQuantity)} followers</p>
                </div>
                <button className={btnClassName} onClick={onBtnClick} type='button' aria-label='Following button'>{btnText}</button>
            </div>
        </li>
    )
}