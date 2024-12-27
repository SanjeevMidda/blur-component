import "./index.css";
import Card from "./components/Card";

//importing images
import imageOne from "./imgs/one.jpg";
import imageTwo from "./imgs/two.jpg";
import imageThree from "./imgs/three.jpg";

function App() {
  return (
    <div className="App">
      <h3>move studios.</h3>
      <div className="mainContainer">
        <h4>blur /</h4>
        <div className="cardContainer">
          <Card text="1" img={imageOne} />
          <Card text="2" img={imageTwo} />
          <Card text="3" img={imageThree} />
        </div>

        <div className="functions"></div>
      </div>
    </div>
  );
}

export default App;
