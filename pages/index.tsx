import { useState } from 'react'
import AddUserForm from '../components/forms/AddUserForm'
import EditUserForm from '../components/forms/edit-user-form'
import UserTable from '../components/tables/user-table'
import User from '../model/user'
import Layout from '../styles/layout'

const usersData: User[] = [
  { id: 1, name: 'Tania', username: 'floppydiskette' },
  { id: 2, name: 'Craig', username: 'siliconeidolon' },
  { id: 3, name: 'Ben', username: 'benisphere' },
];

const initialFormState: User = { id: null, name: '', username: '' };

const Home = () => {
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user: User) => {
    console.log(user);
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = (id: number|null) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id))
  }

  const editRow = (user: User) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  }
  const updateUser = (id: number|null, updateUser: User) => {
    setEditing(false);
    setUsers(users.map((user) => { return user.id === id ? updateUser : user }))
  }
  return (
    <Layout >
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {!editing ? (
            <>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </>
          ) : (
            <>
              <h2>Edit User</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </>
          )}

        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </Layout>
  )
}

export default Home;
