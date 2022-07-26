// import App from 'next/app'
import { store } from "@/data/store";
import { positions, Provider as AlertProvider, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 5000,
    offset: "30px",
    transition: transitions.SCALE,
  };
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Component {...pageProps} />
      </AlertProvider>
    </Provider>
  );
}

export default MyApp;
