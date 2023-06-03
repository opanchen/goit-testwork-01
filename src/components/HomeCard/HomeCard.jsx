import css from './HomeCard.module.css';
import logo from '../../images/card-logo.png';
import element from '../../images/card-element-01.png';
import ellipse from '../../images/card-element-02 .png';
import rectangle from '../../images/card-element-03.png';
import userDefaultImg from '../../images/user-default.png';
import { selectFollowedUsers } from 'services/localStorageAPI';
import { Link } from 'react-router-dom';
import { getVisibleQuantity } from 'helpers/getVisibleQuantity';

export const HomeCard = () => {

    const subscriptions = selectFollowedUsers();


    return (
        <div className={css.card}>
            
            <img className={css.logo} src={logo} alt="Logo of GoIT School" width={76} />
            <img className={css.element} src={element} alt="Design element" />

            <div>
                <img className={css.rectangle} src={rectangle} alt="UI design element" />
                <img className={css.avatar} src={userDefaultImg} alt='user avatar' width={64}/>
                <img className={css.ellipse} src={ellipse} alt="UI design element" />
            </div>

            <div className={css.inner}>
                
                    <p>Subscriptions: 
                        <span className={css['subs-number']}>
                            {subscriptions ? getVisibleQuantity(subscriptions.length) : 0}
                        </span>  
                    </p>
               

                <Link className={css.link} to="/tweets">Details</Link>
                {/* <button className={btnClassName} onClick={onBtnClick} type='button' aria-label='Following button'>{btnText}</button> */}
            </div>





        </div>
    )
}