import AppRouter from "./Router";
import styles from "../assets/css/App.css";

const App = () => {
  
  return (
    <div style={styles} className="flex-wrapper">
      <AppRouter />
    </div>
  );
};

export default App;
