import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../../../../slices/soundSlice";
import { RootState } from "../../../../state/store";

import Button from "../../../button/Button";

function ErrorMessage() {
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.sounds);

  return (
    <div className="message__div flex-column-space-around">
      <Button onClick={() => dispatch(clearError())} className="message">
        &#10006;
      </Button>
      <div className="error-message__container flex-column-center">
        <h2 className="message__heading">oops...</h2>
        <p className="message__paragraph">{error}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
