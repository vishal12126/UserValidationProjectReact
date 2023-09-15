import React, { useState } from "react";
import Card from "./UI/Card";
import classes from "./AddUser.module.css";
import AddButton from "./UI/Button";
import UserList from "./UserList";
import ErrorModal from "./UI/ErrorModal";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age(non-empty values).'
        });
        return;
    }
    if(+enteredAge < 1){
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age(>0).'
        });
        return;
    }
    console.log("hello" + enteredAge + " " + enteredUsername);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState('');

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
   {error && <ErrorModal onOkay={errorHandler} title={error.title} message={error.message}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value= {enteredUsername} onChange={userNameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={enteredAge} onChange={userAgeChangeHandler} />
        <AddButton type="submit">Add User</AddButton>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
