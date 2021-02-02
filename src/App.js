import "./App.css";
import Sections from "./Sections";

import logo from "./logo.696c2101.png";

function App() {
    return (
        <div className="app-div">
            <h1>
                <img src={logo} alt="logo"></img>
            </h1>
            <Sections></Sections>
        </div>
    );
}
export default App;
