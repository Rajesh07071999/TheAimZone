import { HashLoader } from "react-spinners";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-wrapper">
      <HashLoader color="#0ea5e9" size={90} />
    </div>
  );
}

export default Loader;
