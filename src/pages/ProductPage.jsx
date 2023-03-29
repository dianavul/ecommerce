import { useState, useEffect } from "react";

import { Spinner, Input, Row, Button, Badge } from "reactstrap";
import ProductComponent from "../components/ProductComponent";
import "./ProductPage.style.css";
function ProductPage() {
	const [prodList, setProdList] = useState(null);
	const [categList, setCategList] = useState(null);
	const [textInput, setTextInput] = useState("");
	const [selectedCategory, setSelectedCategory] = useState(null);
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/`)
			.then((res) => res.json())
			.then((prodListAPI) => setProdList(prodListAPI));
		fetch(`https://fakestoreapi.com/products/categories`)
			.then((res) => res.json())
			.then((categListAPI) => setCategList(categListAPI));
	}, []);

	return (
		<>
			{prodList && categList ? (
				<div
					className='page d-flex'
					style={{
						margin: "15px 0px",
					}}>
					<div
						className='list p-5 d-flex flex-column '
						style={{
							backgroundImage:
								"url(" +
								"https://img.freepik.com/free-photo/three-shopping-bags_23-2147696409.jpg?w=826&t=st=1680003640~exp=1680004240~hmac=145d8145fb2cdf066dfa2f58585b837315fc1fda66fbd895130def9d044451fe" +
								")",
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}>
						<h2 style={{ color: "grey" }}>Categories</h2>
						{categList.map((categ, index) => {
							return (
								<Badge
									pill
									className='mt-2 p-3'
									key={"categ_" + index}
									style={{
										cursor: "pointer",
										boxShadow:
											"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
									}}
									color={categ === selectedCategory ? "black" : "secondary"}
									onClick={() => {
										setSelectedCategory(categ);
									}}>
									{categ}
								</Badge>
							);
						})}
						<Button
							className='mt-5 p-2'
							style={{
								color: "black",
								fontWeight: "bold",
								boxShadow:
									"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
							}}
							size='sm'
							onClick={() => {
								setSelectedCategory(null);
							}}>
							Clear filter
						</Button>
					</div>
					<div
						className=' p-5'
						style={{
							backgroundImage:
								"url(" +
								"https://img.freepik.com/free-photo/colourful-packets-decorated-leaves_23-2147955455.jpg?w=1380&t=st=1680003582~exp=1680004182~hmac=cfc7955c2da443209cc680581ec3cb7ac41064eeb19fff890c25ffdcb15ed6dd" +
								")",
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "repeat",
							width: "100vw",
						}}>
						<div className='searchbtn '>
							<Input
								type='text'
								placeholder='Search...'
								value={textInput}
								onChange={(event) => {
									setTextInput(event.target.value);
								}}
							/>
						</div>

						<div className='prod_list'>
							<Row sm='4' className='row  '>
								{prodList
									.filter((prod) => {
										return (
											selectedCategory === null ||
											selectedCategory === prod.category
										);
									})
									.filter((prod) => {
										return prod.title
											.toLowerCase()
											.includes(textInput.toLowerCase());
									})
									.map((prod, index) => {
										return <ProductComponent product={prod} key={index} />;
									})}
							</Row>
						</div>
					</div>
				</div>
			) : (
				<Spinner>LOADING...</Spinner>
			)}
		</>
	);
}
export default ProductPage;
