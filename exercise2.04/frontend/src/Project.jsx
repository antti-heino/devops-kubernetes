import axios from "axios";
import React, { useState, useEffect } from "react";

const Url = "/api";

const styles = {
  img: {
    width: "300px",
    borderRadius: 5,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  inputContainer: {
    marginTop: 5,
    flexDirection: "column",
  },
  listContainer: {
    textAlign: "center",
    marginTop: 20,
  },
  itemInput: {
    marginLeft: 10,
    marginRight: 10,
  },
};

const Project = () => {
  const [list, populate] = useState([]);
  const [todo, setTodo] = useState("");

  const handleClick = async () => {
    const response = await axios.post(`${Url}/todo`, {
      content: todo.toString()
    }, { headers: {
      'Content-Type': 'application/json'
      }
    });
    console.log(todo)
    if (response) getTodos();
  };

  const getTodos = async () => {
    const response = await axios.get(`${Url}/todo`);
    populate(response.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div style={styles.container}>
      <img
        style={styles.img}
        src={`https://picsum.photos/1200`}
        alt="random image"
      ></img>
      <div style={styles.inputContainer}>
        <input
          style={styles.itemInput}
          placeholder=""
          onChange={(event) => setTodo(event.target.value)}
        ></input>
        <button style={styles.itemInput} onClick={handleClick}>
          Save todo{" "}
        </button>
      </div>
      <div style={styles.listContainer}>
        <h3>List</h3>
        <List list={list}></List>
      </div>
    </div>
  );
};

const List = ({ list }) => {
  return list.map((item, i) => (
    <li key={i} style={{ listStyleType: "none", marginTop: 20 }}>
      {item.content}
    </li>
  ));
};

export default Project;