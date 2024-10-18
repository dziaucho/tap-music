import SearchingForm from "./SearchingForm";
import Pad from "./Pad";

function Main() {
  return (
    <main className="main">
      <SearchingForm
        className="main"
        placeholder="type sound name here"
        buttonText="magic!"
      />
      <div className="main__animation-zone"></div>
      <div className="main__pads">
        {Array.from({ length: 6 }, (_, index) => (
          <Pad className="main" index={String(index)} key={index} sound="" />
        ))}
      </div>
    </main>
  );
}

export default Main;
