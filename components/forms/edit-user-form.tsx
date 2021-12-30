import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import User from "../../model/user";

interface EditUserFormProps {
    currentUser: User,
    updateUser: (id: number|null, user: User) => void,
    setEditing : Dispatch<SetStateAction<boolean>>
}
const EditUserForm = (props: EditUserFormProps) => {
    const [user, setUser] = useState(props.currentUser);
    const handleInputChange = (event: React.FormEvent<EventTarget>) => {
        const { name, value }  = event.target as HTMLInputElement ;
        setUser({ ...user, [name]: value });
    }

    useEffect(() => setUser(props.currentUser), [props]);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.updateUser(user.id, user);
        }}>
            <label>Name
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange} />
            </label>

            <label>Username
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange} />
            </label>

            <button>Update User</button>
            <button onClick={() => props.setEditing(false)}
                className="button muted-button">Cancel</button>
        </form>
    );
}

export default EditUserForm;