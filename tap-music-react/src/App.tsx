import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header
        headingText="tap music"
        paragraphText="create sounds with just one type"
      />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
