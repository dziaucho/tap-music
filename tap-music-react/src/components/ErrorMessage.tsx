interface ErrorMessageProps {
  text: string;
}

function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <div className="error message__div flex-column-center">
      <h2 className="error message__heading">oops...</h2>
      <p className="error message__paragraph"> {text}</p>
    </div>
  );
}

export default ErrorMessage;
