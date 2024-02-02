import './App.css';
import NavbarComponent from "./components/Nav";
import FooterComponent from "./components/Footer"
import Main from "./components/Main.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main> <Main/> </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}

export default App;
