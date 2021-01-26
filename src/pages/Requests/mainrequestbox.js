import styles from "./style";
import { Button } from "../../components";
import BoxBottom from "./boxbottom";

//In a real-world situation, this data would come from an API
const requestsContent = [
  { title: "REQUEST TYPE", text: "POST-CON" },
  { title: "CUSTOMER NAME", text: "PETER ABU-EKPESHIE" },
  { title: "CLEANING DATE", text: "09•10•2019" },
  { title: "INVOICE STATUS", text: "UNGENERATED" },
  { title: "REQUEST DATE", text: "06•10•2016" },
  { title: "REQUEST TIME", text: "8:00 AM" },
  { title: "LOCATION", text: "8, YOVI STREET, IWAYA, ONIKE, YABA." },
  { title: "HOUSE TYPE", text: "5-BEDROOM DUPLEX" },
  {
    title: "EXTRA INFORMATION",
    text: "Some fantastic piece of extra information that’s necessary",
  },
];
const MainRequestBox = () => {
  const classes = styles();
  return (
    <div className={classes.mainRequestBox}>
      <div className="content-flex-container">
        {requestsContent.map((content) => (
          <div key={content.title} className="content">
            <p className="content-title">{content.title}</p>
            <p
              className={`content-text ${
                content.title === "INVOICE STATUS" && "highlight"
              }`}
            >
              {content.text}
            </p>
          </div>
        ))}
      </div>
      <hr className="divider" />
      <BoxBottom className="box-bottom" />
    </div>
  );
};
export default MainRequestBox;
