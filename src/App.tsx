import "./App.scss";
import { SvgIcon } from "./components/SvgIcon";

function App() {
  return (
    <div className="App">
      <div>
        <div className="App-title">
          <h2>Svg Icon Sprite</h2>
        </div>
        <div className="App-content">
          <div className="item">
            <SvgIcon name="member" />
          </div>
          <div className="item">
            <SvgIcon name="phone" />
          </div>
          <div className="item">
            <SvgIcon name="location" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
