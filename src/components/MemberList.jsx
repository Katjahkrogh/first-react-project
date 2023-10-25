import MemberCard from "./MemberCard";

export default function MemberList() {
  return (
    <div>
      <p>Team members previously added to projects</p>
      <hr />
      <MemberCard name="Lindsay Walton" title="Front-end Developer"/>
      <MemberCard name="Courtney Henry" title="Designer"/>
      <MemberCard name="Tom Cook" title="Director of Product"/>
    </div>
  );
}
