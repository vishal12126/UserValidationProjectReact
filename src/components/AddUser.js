import React,{useState} from "react";
import Card from "./UI/Card";
import classes from './AddUser.module.css';
import AddButton from "./UI/Button";

const AddUser = (props) => {
   const addUserHandler = (event) => {
    console.log("hello");
    event.preventDefault();
   };

    return (
        <Card className={classes.input}>
    <form onSubmit={addUserHandler}> 
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <AddButton type="submit">Add User</AddButton>
    </form>
    </Card>
    );
}

export default AddUser;