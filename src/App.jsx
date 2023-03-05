import "./App.css";
import HomePage from "/CURS/magazin/src/pages/HomePage";

import Navi from "./components/Navi";
import Foot from "./components/Foot";
import SingleProd from "./components/SingleProd";
import ProductComponent from "./components/ProductComponent";
import ProductPage from "./pages/ProductPage";
import WishListPage from "./pages/WishListPage";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Navi />
			<Routes>
				<Route path='/product/:id' element={<SingleProd />} />
				<Route path='/products' element={<ProductPage />} />
				<Route path='/wish' element={<WishListPage />} />
				<Route path='/' element={<HomePage />} />
				<Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
			<Foot />
		</div>
	);
}

export default App;
