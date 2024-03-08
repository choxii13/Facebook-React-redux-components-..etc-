import Clickable from "./Clickable";
import Input from "../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userDataActions } from "../../store/userData";
import { emailChecker } from "../../utils/emailChecker";

export default function FormsSignIn() {
  const { userData } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const [error, setError] = useState();
  function onSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const value = emailChecker(userData, data.password, data.email);

    value.login === "SUCCESSFUL" &&
      dispatch(userDataActions.auth()) &&
      dispatch(userDataActions.userNameData(value.index));
    setError(value);
  }

  function onChange() {
    setError();
  }

  return (
    <div className="log-in">
      <form className="form-sign-in" onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Email or Phone Number"
          id="email"
          name="email"
          onChange={onChange}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          onChange={onChange}
          required
        />
        {error && <p className="active"> {error} </p>}
        <button type="submit">Login </button>
        <Clickable />
      </form>
    </div>
  );
}
