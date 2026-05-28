const heading = React.createElement(
  "h1",
  { id: "heading" }, //to give attributes to the element, props of the element
  "Hello World from React", //children of the element
);

//Creating nested elements in React
const content = React.createElement("div", { id: "parent" }, [
  //to give attributes to the element, props of the element
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "sibling1" }, "Hello Child"),
    React.createElement("h2", { id: "sibling2" }, "Hello Child 2"),
  ]),
  React.createElement(
    "h1",
    { id: "heading" }, //to give attributes to the element, props of the element
    "Hello World from React", //children of the element
  ),
]);
//The above code is very difficult to read and understand. It's not scalable when the DOM element structure gets complex.
// So we can use JSX to write the same code in a more readable way.

console.log(heading); //React create element returns a JS Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(content);
