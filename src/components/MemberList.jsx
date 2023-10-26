import MemberCard from "./MemberCard";

export default function MemberList() {
  return (
    <div>
      <p>Team members previously added to projects</p>
      <hr />
      <MemberCard picture="./person1.webp" name="Lindsay Walton" title="Front-end Developer"/>
      <MemberCard picture="./person2.jpeg" name="Courtney Henry" title="Designer"/>
      <MemberCard picture="./person3.webp" name="Tom Cook" title="Director of Product"/>
    </div>
  );
}
