function LoadingMessage() {
  return (
    <div className="loading message__div flex-column-center">
      <h2 className="loading message__heading">loading</h2>
      <div className="loading message__animation-container flex-row-center">
        <span className="message__animation dot"></span>
        <span className="message__animation dot"></span>
        <span className="message__animation dot"></span>
      </div>
    </div>
  );
}

export default LoadingMessage;
