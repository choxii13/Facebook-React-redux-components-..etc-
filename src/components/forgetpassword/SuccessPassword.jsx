import { modalActions } from "../../store/modal";
import { userDataActions } from "../../store/userData";
import Modal from "../UI/Modal";
import "../style/success.css";
import { useSelector, useDispatch } from "react-redux";
export default function SuccessPassword() {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);

  console.log(modal);
  function handleClick() {
    dispatch(modalActions.close());
    dispatch(userDataActions.reset());
  }

  return (
    <Modal open={modal === "success-password"}>
      <div className="success">
        <img src="images/check.png" />
        <h3> Thank you !</h3>
        <p> Change Password Successfully</p>
        <button onClick={handleClick}> OK </button>
      </div>
    </Modal>
  );
}
