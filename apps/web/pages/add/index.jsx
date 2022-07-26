import Input, { TextArea } from "@/components/common/input";
import Container from "@/layout/container";
import Select from "react-select";
import useInvoice from "@/hooks/useInvoice";
import styles from "./Add.module.scss";
import { Controller } from "react-hook-form";
import useProducts from "@/hooks/useProducts";
const Add = () => {
  useProducts();
  const { control, handleSubmit, onSubmit, products } = useInvoice();

  return (
    <Container>
      <div className={styles.form}>
        <h1 className={styles.form__title}>Add a new invoice</h1>
        <form
          className={styles.form__wrapper}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.form__fields}>
            <Controller
              name="customerName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  required
                  {...field}
                  label={" Customer Name"}
                  placeholder={"Enter Customer Name"}
                />
              )}
            />
            <Controller
              name="salesPerson"
              rules={{ required: true }}
              control={control}
              render={({ field }) => (
                <Input
                  required
                  label={" Sale Person"}
                  placeholder={"Enter Sale Person"}
                  {...field}
                />
              )}
            />
            <Controller
              name="amount"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  required
                  label={" Amount "}
                  type="number"
                  {...field}
                  placeholder={"Add amount of product"}
                />
              )}
            />

            <button type="submit" className={styles.form__button}>
              Submit
            </button>
          </div>
          <div className={styles.form__product}>
            <Controller
              name="note"
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  label={"Note "}
                  type="text"
                  placeholder={"Enter Note"}
                />
              )}
            />

            <p>Select product</p>
            <Controller
              name="product"
              control={control}
              render={({ field }) => <Select {...field} options={products} />}
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Add;
