import Facebook from "./components/signin/Facebook";
import EscButton from "./utils/escbutton";
import { useSelector } from "react-redux";
import HomePage from "./components/homepage/HomePage";
import FormModal from "./components/signup/Form";
import Success from "./components/signup/Success";
import Modal from "./components/UI/Modal";
import SuccessPassword from "./components/forgetpassword/SuccessPassword";
import EmailExist from "./components/forgetpassword/EmailExist";
import ChangePassword from "./components/forgetpassword/ChangePassword";
function App() {
  EscButton();
  const auth = useSelector((state) => state.userData.auth);
  return (
    <>
      {!auth ? <Facebook /> : <HomePage />}
      <Modal />
      <FormModal />
      <EmailExist />
      <ChangePassword />
      <SuccessPassword />
      <Success />
    </>
  );
}

export default App;
