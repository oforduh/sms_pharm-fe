import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { IsLoadingObject } from "./context/LoaderContext";
import Loader from "./components/Loader/Loader";
import AppRoutes from "./routes";

function App() {
  // <Route path="/" exact render={(props) => <Dashboard />} />
  const { isLoading } = IsLoadingObject();
  return (
    <Router>
      <div>
        {isLoading && <Loader />}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHove
        />
      </div>
      <AppRoutes />
    </Router>
  );
}

export default App;
