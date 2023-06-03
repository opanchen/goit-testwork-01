import { UserCard } from "components/UserCard/UserCard";
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