import "./App.css";
import CategoryItems from "./components/category-item/category-item.jsx";
import Header from "./components/header/header.jsx";
import "./responsive.scss";
function App() {

  return (
    <>

      {/* DEFAULT NAVIGATION */}
      <Header />
      <CategoryItems />

    </>
  );
}
export default App;
