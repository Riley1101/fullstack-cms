import { createDispatchHook, useDispatch, useSelector } from "react-redux";
import { getProducts, loadMore } from "@/data/slices/productSlice";
import { useEffect } from "react";
const useProducts = () => {
  const {
    status,
    data: { data },
  } = useSelector((state) => state.products);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  let more = () => {
    dispatch(loadMore());
    dispatch(getPlayers());
  };
  return {
    data: data,
    more,
    status,
  };
};

export default useProducts;
