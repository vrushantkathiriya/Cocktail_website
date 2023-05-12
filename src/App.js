import { Routes , Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDeatils from "./Pages/ProductDeatils";
import PageNotFound from "./Components/PageNotFound";
import SearchBox from "./Components/SearchBox";
import Layout from "./Components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={
      <>
      <Layout>
        <SearchBox />
        <HomePage />
      </Layout>
      </> 
        }/>
      <Route path="/products/:id" element={<ProductDeatils />} />
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
