import Main from "./component/Main/Main";
import Sidebar from "./component/Sidebar/Sidebar";
import "./index.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
