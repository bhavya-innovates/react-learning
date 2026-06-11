import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading" }, //to give attributes to the element, props of the element
  "Hello World from React", //children of the element
);

//Creating nested elements in React
const content = React.createElement("div", { id: "parent" }, [
  //to give attributes to the element, props of the element
  React.createElement("div", { id: "child", key: "child" }, [
    React.createElement(
      "h1",
      { id: "sibling1", key: "sibling1" },
      "Hello Childdddddddds",
    ),
    React.createElement(
      "h2",
      { id: "sibling2", key: "sibling2" },
      "Hello Child 2",
    ),
  ]),
  React.createElement(
    "h1",
    { id: "heading", key: "heading" }, //to give attributes to the element, props of the element
    "Hello World from React", //children of the element
  ),
]);
//The above code is very difficult to read and understand. It's not scalable when the DOM element structure gets complex.
// So we can use JSX to write the same code in a more readable way.

console.log(heading); //React create element returns a JS Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(content);

//index.html
// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Namaste React</title>
//     <link rel="stylesheet" href="./index.css" />
//   </head>
//   <body id="root">
//     <h1>Hello World</h1>
//     <script>
//         const heading = document.createElement("h1");
//         heading.innerText = "Hello World from JavaScript";
//         document.getElementById("root").appendChild(heading);
//     </script>

//     <!-- injecting react into the project -->
//     <!-- Using CDN links is not a good way to get react into our app, we don't want to make a network call everytime and the link needs to be changed with each newer version -->
//     <script
//       crossorigin
//       src="https://unpkg.com/react@18/umd/react.development.js"
//     ></script>
//     <script
//       crossorigin
//       src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
//     ></script>

//     <script type="module" src="./App.js"></script>
//   </body>
// </html>
