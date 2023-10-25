import Avatar from "./Avatar";
import SecondaryBtn from "./SecondaryBtn";

export default function MemberCard(props) {
  return (
    <>
      <div className="card">
        <div className="info">
          <Avatar />
          <div className="desc">
            <h2>{props.name}</h2>
            <p>{props.title}</p>
          </div>
        </div>
        <SecondaryBtn />
      </div>
      <hr />
    </>
  );
}
