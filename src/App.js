import './App.css';
import NavbarComponent from "./components/Nav";
import FooterComponent from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main></main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}

export default App;
