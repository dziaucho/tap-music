import Button from "../../../button/Button";

interface WipMessageProps {
  onClick: () => void;
}

function WipMessage({ onClick }: WipMessageProps) {
  return (
    <div className="message__div flex-column-center">
      <Button className="message" onClick={onClick}>
        &#10006;
      </Button>
      <h2 className="message__heading">
        hii! wip. please keep this in mind and have a good day :&#41;
      </h2>
    </div>
  );
}

export default WipMessage;
