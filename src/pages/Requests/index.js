import { Button } from "../../components";
import MainRequestBox from "./mainrequestbox";
import styles from "./style";

const Requests = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Button className={classes.button} type="button">
        Request Information
      </Button>
      <MainRequestBox />
    </div>
  );
};
export default Requests;
