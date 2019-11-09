// https://reactjs.org/docs/jsx-in-depth.html
/*
 * Functions as Children
 */
import React from "react";

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }

  return <div>{items}</div>;
}

function ListOfTenThings(props) {
  return (
    <Repeat numTimes={10}>
      {index => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

// function Item(props) {
//   return <div>this is {props.time} item in the list</div>;
// }

// function ListOfTenThings(props) {
//   return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <Item key={i} time={i} />);
// }

export default ListOfTenThings;
