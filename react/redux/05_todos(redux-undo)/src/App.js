import React from 'react';
import Add from "./components/Add";
import List from "./components/List";
import Filter from "./components/Filter";
import UndoRedo from "./components/UndoRedo";

function App() {
  return (
    <div>
      <Add />
      <List />
      <Filter />
      <UndoRedo />
    </div>
  );
}

export default App;
