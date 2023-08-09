import "./styles.css";
import Quiz from "./Quiz";

export default function App() {
  const getValue = (val) => {
    console.log(val);
  };
  return (
    <div className="App">
      <form>
        <label>Name</label>
        <input type="text" placeholder="Type"></input>
        <p>What is the capital of India</p>
        <Quiz data={getValue} />
      </form>
    </div>
  );
}
