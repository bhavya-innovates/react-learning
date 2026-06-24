// Class based component for User.js
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      incrementTimes: 0,
      incrementCount: 0,
    };
  }

  componentDidMount() {
    // used to make API calls - so my component first loads quickly and then API call is made, then component is re-rendered
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { name, ...rest } = this.props;
    const { incrementTimes, incrementCount } = this.state;

    function myDebounce(func, wait) {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, wait);
      };
    }

    return (
      <div className="user-card">
        <button
          onClick={() => {
            //NEVER UPDATE THE STATE VARIABLE DIRECTLY -> this.incrementTimes += 1
            this.setState({
              incrementTimes: incrementTimes + 1,
            });
            const debounce = myDebounce(() => {
              this.setState({
                incrementCount: incrementCount + 1,
              });
            }, 1000);
            debounce();
          }}
        >
          Click Me
        </button>
        <h3>
          Button Clicks: {incrementTimes}, Increment Counts after Debounce:{" "}
          {incrementCount}
        </h3>
        <h3>Name: {name}</h3>
        <h4>Location: {rest.location}</h4>
        <h4>Phone: {rest.phone}</h4>
        <h4>Email ID: {rest.email}</h4>
      </div>
    );
  }
}

export default UserClass;

// constructor, render(), super()
//loading a class component means I am creating a new instance of this class and giving it some props
//whenever an instance is created the constructor is called, and it is the best place to give props and define initial variables using this.state

// Component Render Life Cycle of Parent-Child components
// 1. Parent Constructor
// 2. Parent Render Method
// 3. Child Constructor
// 4. Child Render Method
// 5. Child ComponentDidMount
// 6. Parent ComponentDidMount - after all child components has loaded
