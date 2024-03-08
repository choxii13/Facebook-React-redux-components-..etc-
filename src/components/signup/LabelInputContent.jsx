import getLabelInput from "../../utils/getLabelInput";
import LabelInput from "./LabelInput";
import "../style/labelinput.css";
export default function LabelInputContent() {
  return (
    <div className="birthday">
      <span className="small"> Gender</span>
      <div className="form-content-row">
        <LabelInput {...getLabelInput("radio", "female", "Female", "gender")} />
        <LabelInput {...getLabelInput("radio", "male", "Male", "gender")} />
        <LabelInput
          {...getLabelInput("radio", "optional", "Optional", "gender")}
        />
      </div>
    </div>
  );
}
