import Element from "./Element";
import { useDispatch, useSelector } from "react-redux";
import { userDataActions } from "../../store/userData";
import { useState } from "react";
import { changePassword } from "../../utils/emailChecker";
import { modalActions } from "../../store/modal";
import Modal from "../UI/Modal";
export default function ChangePassword() {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { modal } = useSelector((state) => state.modal);
  const { existingData } = useSelector((state) => state.userData);
  console.log(existingData);
  function onSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const values = changePassword(
      existingData.existingData,
      data.currpass,
      data.password
    );

    values
      ? dispatch(
          userDataActions.changePassword({
            data: values,
            index: existingData.index,
          })
        ) && dispatch(modalActions.successpassword())
      : setError("Current Password is not correct");
  }
  function onChange() {
    setError();
  }
  return (
    <Modal open={modal === "change-password"}>
      <form onSubmit={onSubmit}>
        <Element
          title="New Password"
          placeholder="Current Password"
          error={error}
          onChange={onChange}
          name="currpass"
          required
        />
        <Element
          placeholder="New Password"
          button="Check"
          onChange={onChange}
          type="submit"
          required
          name="password"
        />
      </form>
    </Modal>
  );
}
