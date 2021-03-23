import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommandedVideos from "./RecommandedVideos";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar/>
        <RecommandedVideos/>
      </div>
    </div>
  );
}

export default App;
