const LS_KEY = 'testwork-users';

export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem(LS_KEY));
}

export const initLocalStorage = (data) => {
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

export const updateLocalStorage = (id, isFollowing, followersQuantity) => {

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

export const selectFollowedUsers = () => {
   const storage = getLocalStorage();

   if (storage) {
    return storage.filter((user) => user.isFollowing === true);
   }
}

export const selectUnfollowedUsers = () => {
   const storage = getLocalStorage();

   if (storage) {
       return storage.filter((user) => user.isFollowing === false);
   }
}

export const selectAllUsers = () => {
    return getLocalStorage();
}

