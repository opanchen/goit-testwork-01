import { UserList } from "components/UserList/UserList";
import { useEffect, useState } from "react"
import {initLocalStorage, selectAllUsers, selectFollowedUsers, selectUnfollowedUsers } from "services/localStorageAPI";
import { fetchUsers, getVisibleUsers } from "services/usersAPI";
import css from './Tweets.module.css';
import { Link } from "react-router-dom";
import { Spinner } from "components/Spinner/Spinner";
import { FilterDropdown } from "components/FilterDropdown/FilterDropdown";
import { ErrorView } from "components/ErrorView/ErrorView";

export const Tweets = () => {

    const [users, setUsers] = useState([]);

    const [filter, setFilter] = useState('show all');

    const [page, setPage] = useState(() => JSON.parse(localStorage.getItem('testwork-page')) ?? 1);

    const [isLoading, setIsLoading] = useState(false);
    
    const [error, setError] = useState(null);


    useEffect(() => {
       
        const handleUsersLoading = async () => {
            try {
                setIsLoading(true);
                const data = await fetchUsers();
            
                initLocalStorage(data);
                setUsers(selectAllUsers());
                
            } catch (error) {
                console.log(error);
                setError('Something went wrong. Please try again later.')
            } finally {
                setIsLoading(false);
            }
        }
            
        handleUsersLoading();
        
    }, [])

    useEffect(() => {
        localStorage.setItem('testwork-page', JSON.stringify(page))
    }, [page])

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    }

    const filterUsers = (label) => {

        switch (label) {
            case 'show all':
                setFilter(label);
                setUsers(selectAllUsers());
                break;
            case 'followings':
                setFilter(label);
                setUsers(selectFollowedUsers());
                break;
            case 'follow':
                setFilter(label);
                setUsers(selectUnfollowedUsers());
                break;
            default:
                console.log(`Error: selected value ${label} doesn't exist. Check filter-dropdown markup.`);
                return;
        }
        

    }

  
    const visibleUsers = getVisibleUsers(page, users);

    return (
        <div className={css.wrapper}>
            <h1 className="visually-hidden">Users with tweets</h1>

           <div className={css.nav} >
                <Link className={css.backlink} to='/'>Back</Link> 

                <FilterDropdown placeholder={filter} onSelect={filterUsers} />
           </div>

            {isLoading && <Spinner />}

            {error && <ErrorView message={error}/>}

            {filter !== 'show all' && visibleUsers.length === 0 && 
            <ErrorView message={"There aren't any users in this category"} />}

           { !isLoading && users.length > 0 && 
            <>
                <UserList 
                    users={visibleUsers}
                />
                {visibleUsers.length !== users.length && 
                 <button className={css['load-more-btn']} onClick={handleLoadMore} type="button">Load more</button>
                }
            </>
           } 
        </div>
    )
}
