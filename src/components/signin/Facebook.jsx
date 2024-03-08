import "../style/facebook.css";
import FormsSignIn from "./FormsSignIn";
export default function Facebook() {
  return (
    <section>
      <div className="facebook">
        <img src="images/facebook.svg" />
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <FormsSignIn />
    </section>
  );
}
