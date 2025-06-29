import styles from "./App.module.css";
import Header from "./Header";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh",fontSize: "6rem", color: "white" }}>
        <p>Kaam abhi baaki hai mere dost...</p>
      </div>
    </div>
  );
}

export default App;
