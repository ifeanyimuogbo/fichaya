import styles from "./style";
const Button = ({ children, className, ...props }) => {
  const classes = styles();
  return (
    <button
      className={classes.root + " " + `${className && className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
