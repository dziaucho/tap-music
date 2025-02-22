import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <div className="app flex-column-space-between">
      <Modal />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
