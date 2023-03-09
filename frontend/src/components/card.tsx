import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserList {
    users: IUser[]
}

const Card: FC<UserList> = ({users}) => {
    return (
        <div>
            {users.map(user =>
                    <div key={user.chatId}>
                        <span>chatId:{user.chatId} </span>
                    </div>
                )}
        </div>
    );
};

export default Card;