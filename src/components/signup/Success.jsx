import { modalActions } from "../../store/modal";
import Modal from "../UI/Modal";
import "../style/success.css";
import { useDispatch, useSelector } from "react-redux";
export default function Success() {
  const { modal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(modalActions.close());
  }
  return (
    <Modal open={modal === "signup-success"}>
      <div className="success">
        <img src="images/check.png" />
        <h3> Thank you !</h3>
        <p> Sign Up Successfully</p>
        <button onClick={handleClick}> OK </button>
      </div>
    </Modal>
  );
}
