// create reducer function for profile page
const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS';

//инициализируем state для Users
let initialState = {
    //created object of users
    users: [
       /* {
            id: 1,
            photoUrl: 'https://sun9-20.userapi.com/c850724/v850724327/1cc1b8/9K99zOgr-JA.jpg',
            followed: false,
            fullName: 'Olia',
            status: 'I\'m here',
            location: {city: 'NY', country: 'USA'}
        },
        {
            id: 2,
            photoUrl: 'https://sun9-20.userapi.com/c850724/v850724327/1cc1b8/9K99zOgr-JA.jpg',
            followed: true,
            fullName: 'Ivan',
            status: 'Hello!',
            location: {city: 'Msc', country: 'RF'}
        },
        {
            id: 3,
            photoUrl: 'https://sun9-20.userapi.com/c850724/v850724327/1cc1b8/9K99zOgr-JA.jpg',
            followed: true,
            fullName: 'Oleg',
            status: 'Hello, brothers',
            location: {city: 'Vladivostok', country: 'RF'}
        },*/
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //variants how to copy array
                /*users: [...state.users],*/
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };

        default:
            return state;
    }

};

//create followActionCreators function for follow/unfollow button
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
//take users from server and set them in state
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;