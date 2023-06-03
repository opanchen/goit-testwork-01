import axios from "axios";

const LS_KEY = 'testwork-users';

axios.defaults.baseURL = 'https://6477e89e362560649a2d08a9.mockapi.io/api/v1';

const fetchUsers = async () => {
    try {
        const response = await axios.get('/users');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getVisibleUsers = (page, users) => {

    const perPage = 3;
    const quantity = page * perPage;

    return  users.slice(0, quantity);
}


const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem(LS_KEY));
}

const initLocalStorage = (data) => {
    const storage = getLocalStorage();

    if (storage === null) {
        const newData = data.map(({id, user, avatar, tweets, followers}) => (
            {id, user, avatar, tweets, followers, isFollowing: false}
        ))
        return localStorage.setItem(LS_KEY, JSON.stringify(newData))
    }

    if (storage && storage.length > 0) {
        const currentIdList = storage.map((user) => user.id);

        const newUsers = data.filter((user) => !currentIdList.includes(user.id));

        if (newUsers.length === 0) return;

        const updatedNewUsers = newUsers.map(({id, user, avatar, tweets, followers}) => (
            {id, user, avatar, tweets, followers, isFollowing: false}
        ));

        const newStorage = [...storage, ...updatedNewUsers];

        return localStorage.setItem(LS_KEY, JSON.stringify(newStorage))
    }
}

const updateLocalStorage = (id, isFollowing, followersQuantity) => {

    const storage = getLocalStorage();

    const currentItem = storage.find((user) => user.id === id);

    const updatedItem = {
        id: currentItem.id,
        user: currentItem.user,
        avatar: currentItem.avatar,
        tweets: currentItem.tweets,
        isFollowing: isFollowing,
        followers: followersQuantity,
    }
   
    const index = storage.findIndex((item) => item.id === id)
    const newStorage = [...storage];
    newStorage.splice(index, 1, updatedItem)

    localStorage.setItem(LS_KEY, JSON.stringify(newStorage));
}

const selectFollowedUsers = () => {
   const storage = getLocalStorage();

   if (storage) {
    return storage.filter((user) => user.isFollowing === true);
   }
}

const selectUnfollowedUsers = () => {
   const storage = getLocalStorage();

   if (storage) {
       return storage.filter((user) => user.isFollowing === false);
   }
}

const selectAllUsers = () => {
    return getLocalStorage();
}

export const fakeUsersAPI = {
    fetchUsers,
    getVisibleUsers,
    getLocalStorage,
    initLocalStorage,
    updateLocalStorage,
    selectAllUsers,
    selectFollowedUsers,
    selectUnfollowedUsers,
}

