import React from "react";
import CardUser from "./CardUser";
import Box from '@mui/material/Box';

function ListOfUsers(props) {
  const { users, nameofAdmin ,handleName,children} = props;
  return (
    <>
    <h1>admin:{nameofAdmin}</h1>
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-around', 
      flexDirection: 'row',
      '& > :not(style)': {
        m: 1,
        width: 500,
        height:300 ,
      },
    }}
  >
     
      {users.map((user) => (
        <CardUser key={user.id} user={user} handleName={handleName} x={children} />
      ))}
      </Box>
      {children}
      </>

  );
}

export default ListOfUsers;
