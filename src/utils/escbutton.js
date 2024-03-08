import { useDispatch } from "react-redux";
import { modalActions } from "../store/modal";
import { userDataActions } from "../store/userData";

export default function EscButton() {
  const dispatch = useDispatch();
  return window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      dispatch(modalActions.close());
      dispatch(userDataActions.reset());
    }
  });
}
