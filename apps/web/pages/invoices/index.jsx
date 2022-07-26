import Invoice from "@/components/common/invoice";
import useInvoice from "@/hooks/useInvoice";
import Container from "@/layout/container";
import styles from "./Invoice.module.scss";
const Invoices = () => {
  const { invoices, loadMoreInvoices, invoiceStatus } = useInvoice();
  return (
    <Container>
      <div className={styles.invoice}>
        <div className={styles.invoice__items}>
          <div className={styles.invoice__items__list}>
            <div className={styles.invoice__items__list__header}>
              <h1 className={styles.invoice__title}>Total Invoices</h1>
              <p className={styles.invoice__description}>
                Showing 8 out of 100 invoices
              </p>
            </div>
            <ul className={styles.invoice__items__list__table}>
              <li>No</li>
              <li>Name</li>
              <li>Products</li>
              <li>SalePerson</li>
              <li>Date</li>
            </ul>
            {invoices.map((inv, index) => (
              <Invoice {...inv} key={inv._id} index={index} />
            ))}

            <button
              onClick={() => loadMoreInvoices()}
              className={styles.invoice__items__button}
            >
              {invoiceStatus === "loading" ? "Loading ..." : " Load More"}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Invoices;
