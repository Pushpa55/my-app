import useFetch from "./useFetch";

function UserList(){
    
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users');

    if(loading) return <p>Loading...</p>
        return (
          <ul>
            {data.map((user)=>(
               <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
}
export default UserList;