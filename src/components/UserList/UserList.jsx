import PropTypes from 'prop-types';
import { UserCard } from "components";
import css from './UserList.module.css';


export const UserList = ({users}) => {

    return (
        <ul className={css.list}>
            {users.map(({id, user, avatar, tweets, followers, isFollowing}) => {
                return (
                <UserCard
                    key={id}
                    id={id}
                    name={user}
                    avatar={avatar}
                    tweets={tweets}
                    followers={followers}
                    following={isFollowing}
                />
            )})}
        </ul>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        tweets: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        isFollowing: PropTypes.bool,
    }),).isRequired,
}