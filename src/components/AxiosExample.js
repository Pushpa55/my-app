import { useEffect, useState } from "react";
import axios from 'axios';


function AxiosExample() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Making GET request using Axios
        axios.get("https://jsonplaceholder.typicode.com/users")

            .then((response) => {

                setUsers(response.data);  // Store response data in state
            })
            .catch((error) => {

                console.error("Error fetching users:", error);
            });
    }, []);

    return (
        <div>

            <h2>User List</h2>

            {users.map((user) => (

                <p key={user.id}>{user.name}</p>

            ))}
        </div>
    );
}

export default AxiosExample;
