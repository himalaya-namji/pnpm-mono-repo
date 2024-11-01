import { useState } from "react";
import "./App.css";
import { Table } from "./components/Table";

function App() {
  const [order, setOrder] = useState("1");

  const handleChangeOrder = (value: string) => {
    setOrder(value);
  };
  return (
    <>
      <select onChange={(e) => handleChangeOrder(e.target.value)}>
        <option value="1">최신순</option>
        <option value="2">조회순</option>
      </select>
      <Table order={order}></Table>
    </>
  );
}

export default App;
