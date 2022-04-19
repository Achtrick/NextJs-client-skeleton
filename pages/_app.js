import "../styles/globals.css";
import Navbar from "../Components/Navbar";
import { AppContext } from "../Components/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppContext.Provider value={{}}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AppContext.Provider>
  );
}

export default MyApp;
