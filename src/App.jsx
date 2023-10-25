import Header from "./components/Header";
import MemberList from "./components/Memberlist";
import "./App.css";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <MemberList/>
      </main>
    </div>
  );
}
