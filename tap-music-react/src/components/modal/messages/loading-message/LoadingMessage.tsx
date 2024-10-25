function LoadingMessage() {
  return (
    <div className="message__div flex-column-center">
      <h2 className="message__heading">loading</h2>
      <div className="message__animation-container flex-row-center">
        <span className="message__animation dot"></span>
        <span className="message__animation dot"></span>
        <span className="message__animation dot"></span>
      </div>
    </div>
  );
}

export default LoadingMessage;
