import React from 'react';
import styles from './Users.module.css';

//create Users component through function
let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
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
                },
            ],
        );
    }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt=""/>
                        </div>
                        <div>
                            {u.followed ?
                                <button className={styles.btn} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button> :
                                <button className={styles.btn} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
};

export default Users;