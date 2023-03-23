import { useState, useEffect } from "react";
import { Spinner, Input, Row, Button, Badge } from "reactstrap";
import CategComponent from "../components/CategComponent";

function Category() {
	const [categList, setCategList] = useState(null);

	const [selectedCategory, setSelectedCategory] = useState(null);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((categListAPI) => setCategList(categListAPI));
	}, []);

	return (
		<>
			<h2>Categories</h2>
			{categList ? (
				<div className='cont d-flex  justify-content-evenly ps-5'>
					{categList.map((cat, index) => {
						return (
							<CategComponent category={cat} key={index} image={cat.image} />
						);
					})}
				</div>
			) : (
				<Spinner>LOADING...</Spinner>
			)}
		</>
	);
}
export default Category;
