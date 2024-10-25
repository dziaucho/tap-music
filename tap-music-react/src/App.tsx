import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <div className="app">
      <Modal />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
