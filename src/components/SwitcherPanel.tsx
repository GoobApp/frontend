import { useNavigate } from "react-router";
import "../App.css";
const SwitcherPanel = () => {
  const navigate = useNavigate();
  return (
    <div id="switcherPanelContainer" className="switcher-panel-container">
      <button
        className="panel-button"
        onClick={() => navigate("/", { viewTransition: true })}
      >
        Chat
      </button>
      <button
        className="panel-button"
        onClick={() => navigate("/games", { viewTransition: true })}
      >
        Games
      </button>
    </div>
  );
};

export default SwitcherPanel;
