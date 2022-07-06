import { Route, Routes } from "react-router-dom";
import { PageView } from "./Components/PageView/PageView";
import { RenderHeader } from "./Components/Header/Header";
import { Products } from "./Components/Products/Products";
import products from "./json/products.json";
function App() {
  return (
    <>
      <RenderHeader />
      <Routes>
        <Route path="/home" element={<Products products={products} />}></Route>
      </Routes>
    </>
  );
}

export default App;
