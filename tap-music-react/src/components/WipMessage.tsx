interface WipMessageProps {
  onClick: () => void;
}

function WipMessage({ onClick }: WipMessageProps) {
  return (
    <div className="wip__div">
      <p className="wip__paragraph">
        hii! wip. please keep this in mind and have a good day :&#41;
      </p>
      <button onClick={onClick} className="wip__button">
        x
      </button>
    </div>
  );
}

export default WipMessage;
