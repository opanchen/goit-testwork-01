# GoIT Tweets App 

[VIEW LIVE PAGE](https://opanchen.github.io/goit-testwork-01)

## Testwork for IT School GoIT



The application simulates a simplified version of a social network, where the user can view other people's profiles and follow them. 
At the same time, the current number of user subscriptions is displayed in his profile on the Home page.
![](https://media.giphy.com/media/IPBeQTADxa2iVPDYyh/giphy.gif)

On the front-end side, pagination and filtering of the user list by "All", "Follow" and "Following" categories are implemented.

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTdiMTE4MTM3MmFjYTNmMDk2OTQ3YTU3NTQxMjYzZjUyNDVhNjE1NyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/kjmJGCAluPInvK5s4t/giphy.gif)

According to the requirements of the project, the [mockapi.io](https://mockapi.io/) service is used as a backend, where the data is represented by an array of objects with keys: "id", "user", "avatar", "followers" and "tweets". 

> The project does not use Redux. 

> Receiving, storing and processing data takes place in __fakeUsersAPI.js__ using [axios](https://axios-http.com/) and __local storage__. 
After increasing the array of data on the moke.api service, the list of users is updated keeping the current state.


## Technology stack & additional dependencies

HTML5

CSS3

JavaScript

React [React Router Dom, React Helmet, React Icons]

axios

gh-pages

## Creating & building a repository by template

This project was created with
[Create React App](https://github.com/facebook/create-react-app). To get
acquainted and configure additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

File __jsconfig.json__ has been created for more convenient import of files/components inside an src folder. 

Added __404.html__ file and the corresponding script in __index.html__ to handle the 404  error when the page is reloaded.

