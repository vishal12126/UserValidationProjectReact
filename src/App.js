import React, {useState} from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';


function App() {
const [userList, setUserList] = useState([]);

const addUserHandlerFunction = (name, age) => {
   setUserList((prevUserList) =>{
     return [...prevUserList, {name: name, age: age, id: Math.random().toString()}]
   });
}
  return (
    <div>
   <AddUser onAddUser={addUserHandlerFunction}/>
   <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
