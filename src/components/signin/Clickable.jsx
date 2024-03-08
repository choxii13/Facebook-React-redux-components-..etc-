import { modalActions } from "../../store/modal";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../store/userData";
export default function Clickable() {
  const dispatch = useDispatch();
  return (
    <>
      <span
        onClick={() =>
          dispatch(modalActions.emailexist()) &&
          dispatch(userDataActions.reset())
        }
      >
        Forgot password?
      </span>
      <hr />
      <button type="button" onClick={() => dispatch(modalActions.signup())}>
        Create new Account
      </button>
    </>
  );
}
