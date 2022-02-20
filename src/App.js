import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hola Brayan Cubas!!
          <p>
            Esto es React.
          </p>
        </h1>
        <h2>
          ¿En que estado vives?
        </h2>
        <h4>
          Selecciona la opción correcta:
        </h4>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label class="form-check-label" for="flexSwitchCheckDefault">Oaxaca</label>
        </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
            <label class="form-check-label" for="flexSwitchCheckChecked">Ciudad de México</label>
          </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled"/>
              <label class="form-check-label" for="flexSwitchCheckDisabled">Veracruz</label>
            </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled"/>
                <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Guerrero</label>
              </div>
        <p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mr. Google
        </a>
        </p>
      </header>
    </div>
  
  );
}

export default App;
