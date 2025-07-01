import styles from "./App.module.css";
import Header from "./Header";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh",fontSize: "6rem", color: "white" }}>
        <p>Built in progress...</p>
      </div>
    </div>
  );
}

export default App;
