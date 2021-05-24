import React from "react";
import ListItem from "./ListItem"
const List = (props) => {
  const { todos } = props;
  const todosArr = todos.map((elem,i) => {
    return <ListItem key={i} todo={elem.todo} id={elem.id}/>
  })
  return (
    <>
      <ul>{todosArr}</ul>
    </>
  );
};

export default List;
