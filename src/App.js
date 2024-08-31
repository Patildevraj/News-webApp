import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import NewsFeed from "./components/NewsFeed";
import Navbar from "./components/Navbar";
import SearchAndFilter from "./components/SearchAndFilter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <SearchAndFilter />
        <NewsFeed />
      </div>
    </Provider>
  );
}

export default App;
