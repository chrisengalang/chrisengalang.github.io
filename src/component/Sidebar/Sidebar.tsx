import Navigation from "./Navigation";
import Profile from "./Profile";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="col-3 vh-100 sidebar">
      <div className="sidebar-container">
        <Profile />
        <Navigation />
      </div>
    </div>
  );
};

export default Sidebar;
