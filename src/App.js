import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import ListItems from "./ListItems";
import Signup from "./Signup";
import useFetch from "./useFetch";

function App() {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log({ data });
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home loading={loading} error={error} data={data}/>} />
        <Route path="/views" element={<ListItems loading={loading} error={error} data={data}/>} />
        <Route path="/signup" element={<Signup loading={loading} error={error} data={data}/>} />
      </Routes>
    </div>
  );
}

export default App;
