import { FaTwitter } from "react-icons/fa";
import Routes from "./Routes";
function App() {
  return (
    <div className="App">
      <Routes></Routes>
      <a
        href="https://twitter.com/FtVid_"
        target="_new"
        className="twitter__link"
      >
        <FaTwitter></FaTwitter>
      </a>
    </div>
  );
}

export default App;
