import React from "react";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

function CardUser({ user, handleName,children }) {
  const handleClick = () => {
    handleName(user);
  };
  console.log(user);
  return (
    <Paper elevation={10}>
      <Avatar alt={user.name} src={user.image} sx={{ width: 56, height: 56 }} />
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <Button variant="contained" onClick={handleClick}>
        sho my name
      </Button>
    </Paper>
  );
}

export default CardUser;
