
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagenation from "./components/Pagenation";

function App() {

  return (
    <div className="flex flex-col items-center gap-y-5 w-full">
      <Header />
      <Blogs />
      <Pagenation/>
    </div>
  );
}

export default App;
