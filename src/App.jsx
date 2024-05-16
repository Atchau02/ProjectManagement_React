import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import Sidebar from "./component/Sidebar";

let projects = [
  {
    title: "asdf",
    description: "a project",
    date: Date.now(),
  },
  {
    title: "Project2",
    description: "The second project",
    date: Date.now() + 1,
  },
];

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;
