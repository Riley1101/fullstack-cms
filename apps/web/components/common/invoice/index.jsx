import styles from "./Invoice.module.scss";
import dateFormat from "dateformat";
const Invoice = ({ customerName, salesPerson, soldProducts, date, index }) => {
  return (
    <ul className={styles.invoice}>
      <li>{index + 1}</li>
      <li>{customerName}</li>
      <li>{soldProducts[0].name} </li>
      <li>{salesPerson}</li>
      <li>{dateFormat(date, "mediumDate")}</li>
    </ul>
  );
};

export default Invoice;
