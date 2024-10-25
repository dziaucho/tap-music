import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

import WipMessage from "./messages/wip-message/WipMessage";
import LoadingMessage from "./messages/loading-message/LoadingMessage";
import ErrorMessage from "./messages/error-message/ErrorMessage";

function Modal() {
  const { loading, error } = useSelector((state: RootState) => state.sounds);
  const [isAlert, setIsAlert] = useState(true);

  if (!isAlert && !loading && !error) {
    return <></>;
  }

  return (
    <div className="modal-bg__div">
      {isAlert && <WipMessage onClick={() => setIsAlert(false)} />}
      {loading && <LoadingMessage />}
      {error && <ErrorMessage />}
    </div>
  );
}

export default Modal;
