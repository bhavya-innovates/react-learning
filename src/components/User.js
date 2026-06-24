const User = (props) => {
  const { name, ...rest } = props; //Destructuring on the fly
  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <h4>Location: {rest.location}</h4>
      <h4>Phone: {rest.phone}</h4>
      <h4>Email ID: {rest.email}</h4>
    </div>
  );
};

export default User;
