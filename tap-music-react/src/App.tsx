import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header
        headingText="tap music"
        paragraphText="create music with just a few clicks!"
      />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
