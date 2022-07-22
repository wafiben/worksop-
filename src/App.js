import "./App.css";
/* import * as x from "./data" */
import { users, nameofAdmin } from "./data";
import ListOfUsers from "./Components/ListOfUsers";
import image from "./image";

function App() {
  const handleName = (user) => {
    alert(user.name);
  };
  return (
    <div className="App">
      <ListOfUsers
        users={users}
        nameofAdmin={nameofAdmin}
        handleName={handleName}
      >
        <div style={{ backgroundColor: "red" }}>
          <h1>hello</h1>
          <input />
        </div>
      </ListOfUsers>
    </div>
  );
}

export default App;
