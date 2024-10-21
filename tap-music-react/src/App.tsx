import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import WipMessage from "./components/WipMessage";
import LoadingMessage from "./components/LoadingMessage";
import ErrorMessage from "./components/ErrorMessage";

import { useState } from "react";

import { RootState } from "./state/store";
import { useSelector } from "react-redux";

function App() {
  const [isAlert, setIsAlert] = useState(true);

  const { loading, error } = useSelector((state: RootState) => state.sounds);

  return (
    <div className="app">
      {isAlert && <WipMessage onClick={() => setIsAlert(false)} />}

      {loading && <LoadingMessage />}
      {error && <ErrorMessage text={error} />}
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
