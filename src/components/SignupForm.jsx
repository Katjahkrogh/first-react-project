import PrimaryBtn from "./PrimaryBtn";

export default function SignupForm() {
  return (
    <div>
      <form>
        <label htmlFor="mail">
          <input type="email" id="mail" placeholder="Enter an email" required />
        </label>
        <PrimaryBtn />
      </form>
    </div>
  );
}
