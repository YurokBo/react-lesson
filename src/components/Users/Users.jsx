import React from 'react';

//create Users component through function
let Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>

                </div>)
            }
        </div>
    )
};

export default Users;