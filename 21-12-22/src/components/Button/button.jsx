import "./button.css";

const variants = {
  bigger: "bigger-btn",
  smaller: "smaller-btn",
};

export function Button(props) {
  console.log(props);
  const {
    className = "",
    value = "default",
    variant = "",
    onClick = function () {},
  } = props;

  return (
    <button className={`${className} ${variants[variant]}`} onClick={onClick}>
      {value}
    </button>
  );
}
