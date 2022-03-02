import "./styles.css";

export const Button = (props) => {
  console.log(props);

  return (
    <div className="my-btn" onClick={props.onClick}>
      {props.children}
    </div>
  );
};
