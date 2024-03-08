import { days, months, years } from "../../utils/date";
import Select from "./Select";

export default function SelectContent() {
  return (
    <div className="birthday-gender">
      <span className="small"> Birthday</span>
      <div className="form-content-row">
        <Select name="months" id="months" identifier={months} />
        <Select name="days" id="days" identifier={days} />
        <Select name="years" id="years" identifier={years} />
      </div>
    </div>
  );
}
