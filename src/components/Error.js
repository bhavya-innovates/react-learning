import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>Something went wrong</h2>
      <p>
        <strong>
          {error.status}: {error.statusText}
        </strong>
      </p>
    </div>
  );
};

export default Error;
