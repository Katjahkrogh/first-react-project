export default function Avatar(props) {
  return (
    <div>
      <img src={props.picture} alt="Profil billede" className="avatar"/>
    </div>
  );
}
