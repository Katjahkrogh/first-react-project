import Header from "./components/Header";
import MemberList from "./components/Memberlist";
import "./App.css";

export default function App() {
  return (
    <div className="wrapper">
      <body>
        <Header />
        <main>
          <MemberList />
        </main>
      </body>
    </div>
  );
}
