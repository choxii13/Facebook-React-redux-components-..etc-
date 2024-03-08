import "../style/formcontent.css";
import { FormProvider, useForm } from "react-hook-form";
//import { DevTool } from "@hookform/devtools";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../store/userData";
import FormUpper from "./FormUpper";
import { useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import SelectContent from "./SelectContent";
import LabelInputContent from "./LabelInputContent";
import FormContent from "./FormContent";
import FormLower from "./FormLower";
import Modal from "../UI/Modal";

export default function FormModal() {
  const { modal } = useSelector((state) => state.modal);
  const methods = useForm();
  const dispatch = useDispatch();

  function onSubmit(data) {
    dispatch(userDataActions.addUserData(data));
    dispatch(modalActions.signupsuccess());
  }

  return (
    <Modal open={modal === "sign-up"}>
      <FormProvider {...methods}>
        <FormUpper />
        <form
          className="form-sign-up"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <FormContent />
          <SelectContent />
          <LabelInputContent />
          <FormLower />
          <button type="submit">Sign Up</button>
        </form>
        {/* <DevTool control={methods.control} /> */}
      </FormProvider>
    </Modal>
  );
}
