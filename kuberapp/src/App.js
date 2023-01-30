import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import List from "./components/list/list";

function App() {
  //state to hold list object
  //useeffect hook to trigger API function call
  //function makes API call to retrive list object
  //randomise function to be placed at back end

  //List of names
  const [myList, setMyList] = useState([
    { name: "Steve Smith", key: 1 },
    { name: "Bob Banes", key: 2 },
    { name: "John Jones", key: 3 },
  ]);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <List list={myList} />
    </div>
  );
}

export default App;
