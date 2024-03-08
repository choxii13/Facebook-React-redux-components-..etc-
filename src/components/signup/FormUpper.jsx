import { modalActions } from "../../store/modal";
import "../style/formupper.css";
import { useDispatch } from "react-redux";
export default function FormUpper() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(modalActions.close());
  }

  return (
    <>
      <div className="form-upper">
        <div className="form-upper-signup">
          <h1> Sign Up</h1>
          <span className="small">it&apos;s quick and Easy </span>
        </div>
        <p onClick={handleClick}> x </p>
      </div>
      <hr />
    </>
  );
}
