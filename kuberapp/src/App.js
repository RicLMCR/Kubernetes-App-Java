import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import List from "./components/list/list";

function App() {
  //state to hold list object
  //useeffect hook to trigger function call
  //function makes API call to retrive list object

  //Temporary list - replace with data sourced from DB
  const [myList, setMyList] = useState([
    { name: "Steve Smith", key: 1 },
    { name: "Bob Banes", key: 2 },
    { name: "John Jones", key: 3 },
  ]);

  useEffect = () => {
    // getList();
    setMyList();
  };
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
