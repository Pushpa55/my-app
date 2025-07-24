import React from 'react';

function withLoading(Component) {
    return function EnhancedComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <p>Loading...</p>;
        }
        return <Component {...props} />;
    };
}

function UserList({ users }) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

const UserListWithLoading = withLoading(UserList);

export default UserListWithLoading;