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
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <Sidebar projects={projects} />
    </>
  );
}

export default App;
