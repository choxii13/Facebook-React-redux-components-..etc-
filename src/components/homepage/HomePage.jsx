import { useDispatch, useSelector } from "react-redux";
import { userDataActions } from "../../store/userData";

export default function HomePage() {
  const dispatch = useDispatch();
  const userNameData = useSelector((state) => state.userData.userNameData);
  const { days, firstname, gender, lastname, months, password, years } =
    userNameData;
  console.log(userNameData);
  return (
    <main>
      <div className="user-data">
        <div className="user-data-container">
          <div className="data">
            <p>name:</p>
            <p>birthday:</p>
            <p>gender:</p>
            <p>username:</p>
            <p>password:</p>
          </div>
          <div className="data">
            <p>{`${firstname} ${lastname}`}</p>
            <p>{`${months} ${days} ${years}`} </p>
            <p>{gender}</p>
            <p>{userNameData["mobile-email"]}</p>
            <p> {password}</p>
          </div>
        </div>
        <button
          className="design"
          onClick={() => dispatch(userDataActions.reset())}
        >
          Log out
        </button>
      </div>
    </main>
  );
}
