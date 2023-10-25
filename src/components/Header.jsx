import SignupForm from "./SignUpForm";

export default function Header() {
  return (
    <div>
      <header>
        <img src="./public/group.svg" alt="Group" className="group" />
        <h1>Add team members</h1>
        <p>
          You haven’t added any team members to your project yet. As the owner
          of this project, you can manage team member permissions.
        </p>
        <SignupForm />
      </header>
    </div>
  );
}
