import React, { useState } from "react";
import User from "../../model/user";

interface AddUserFormProps{
    addUser: (user: User) => void,
}
const initialFormState: User = { id: null, name: '', username: '' }
const AddUserForm = (props: AddUserFormProps) => {

    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event: React.FormEvent<EventTarget>) => {
        const { name, value } = event.target as HTMLInputElement;
        setUser({ ...user, [name]: value });
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (!user.name || !user.username) return null;

            props.addUser(user);
            setUser(initialFormState);
        }}>
            <label>Name
                <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            </label>
            <label>Username
                <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            </label>
            <button>Add New User</button>
            <button className="button muted-button" onClick={() => { setUser(initialFormState) }}>Reset</button>
        </form>
    );
}

export default AddUserForm;