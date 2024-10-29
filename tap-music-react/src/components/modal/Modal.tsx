import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import WipMessage from "./messages/wip-message/WipMessage";
import LoadingMessage from "./messages/loading-message/LoadingMessage";
import ErrorMessage from "./messages/error-message/ErrorMessage";

function Modal() {
  const { isLoading, error } = useSelector((state: RootState) => state.sounds);
  const [isAlert, setIsAlert] = useState(true);

  if (!isAlert && !isLoading && !error) {
    return <></>;
  }

  return (
    <div className="modal-bg__div">
      {isAlert && <WipMessage onClick={() => setIsAlert(false)} />}
      {isLoading && <LoadingMessage />}
      {error && <ErrorMessage />}
    </div>
  );
}

export default Modal;
