import React from 'react'
import styles from '../app/styles/UserList.module.css'

interface UserListProps {
  users: any[]
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  if (!users || users.length === 0) {
    return <p>No users found.</p>
  }

  return (
    <div className={styles.userList}>
      {users.map((user) => (
        <div key={user.ID} className={styles.userItem}>
          <p>
            <strong>ID:</strong> {user.ID}
          </p>
          <p>
            <strong>Name:</strong> {user.FirstNameLastName}
          </p>
          <p>
            <strong>Job Title:</strong> {user.JobTitle}
          </p>
          <p>
            <strong>Email:</strong> {user.Email}
          </p>
          <p>
            <strong>Phone:</strong> {user.Phone}
          </p>
          <p>
            <strong>Company:</strong> {user.Company}
          </p>
        </div>
      ))}
    </div>
  )
}

export default UserList
