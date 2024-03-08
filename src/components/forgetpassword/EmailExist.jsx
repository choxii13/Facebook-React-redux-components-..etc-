import { useDispatch, useSelector } from "react-redux";
import Element from "./Element";
import Modal from "../UI/Modal";
import { useState } from "react";
import ChangePassword from "./ChangePassword";
import { modalActions } from "../../store/modal";
import { emailChangePass } from "../../utils/emailChecker";
import { userDataActions } from "../../store/userData";
export default function EmailExist() {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [email, setEmail] = useState();
  const { userData } = useSelector((state) => state.userData);
  const { modal } = useSelector((state) => state.modal);
  function onClick() {
    const values = emailChangePass(userData, email);
    values
      ? dispatch(userDataActions.existingData(values)) &&
        dispatch(modalActions.changepassword())
      : !values && setError("Email Does not Exists");
  }

  function onChange(event) {
    setEmail(event.target.value);
    setError();
  }

  return (
    <Modal open={modal === "email-exist"}>
      <Element
        title="What is your Email?"
        placeholder="Email"
        error={error && "Email does not exist"}
        onChange={onChange}
        onClick={() => onClick("email")}
        required
        button="Check"
        type="button"
      />
    </Modal>
  );
}
