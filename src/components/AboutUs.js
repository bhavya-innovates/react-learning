import User from "./User";
import UserClass from "./UserClass";

const AboutUs = () => {
  return (
    <div>
      <h1>About this page!</h1>
      <h2>This is a naive attempt to create a Food Delivery App</h2>
      <User
        name={"Bhavya Kumari (from function-based component)"}
        location={"Delhi"}
        phone={9811027518}
        email={"abc@gmail.com"}
      />
      <UserClass
        name={"Bhavya Kumari (from class-based component)"}
        location={"Delhi"}
        phone={9811027518}
        email={"abc@gmail.com"}
      />
    </div>
  );
};

export default AboutUs;
