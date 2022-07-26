import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { getInvoices, loadMore } from "@/data/slices/invoiceSlice";
import api_end from "@/utils/api_end";
const useInvoice = () => {
  const alert = useAlert();
  const { control, handleSubmit, reset } = useForm({});
  const { data: products } = useSelector((state) => state.products);
  const { status: invoiceStatus, data: invoices } = useSelector(
    (state) => state.invoices
  );
  let dispatch = useDispatch();

  let transformProducts = () => {
    let data = [];

    products.forEach((product) => {
      let tmp = {};
      tmp["value"] = product.id;
      tmp["name"] = product.name;
      tmp["label"] = product.name;
      data.push(tmp);
    });
    return data;
  };

  /*
    Load  Invoices
  */
  useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);

  /*
    Load More Invoice
  */
  let loadMoreInvoices = () => {
    dispatch(loadMore());
    dispatch(getInvoices());
  };

  /*
    Add a new Invoice
  */
  const onSubmit = async (data) => {
    if (data.product) {
      let serverData = {
        customerName: data.customerName,
        note: data.note,
        product: data?.product?.value,
        amount: data.amount,
        salesPerson: data.salesPerson,
      };
      await fetch(`${api_end}/invoices`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serverData),
      }).then(() => {
        reset({
          customerName: "",
          salesPerson: "",
          amount: "",
          note: "",
        });
        alert.success("Order successfully added");
      });
    } else {
      alert.error("Please Select a product ");
    }
  };
  return {
    control,
    handleSubmit,
    onSubmit,
    products: transformProducts(),
    invoices,
    loadMoreInvoices,
    invoiceStatus,
  };
};

export default useInvoice;
