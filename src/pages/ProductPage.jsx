import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
							marginRight: "15px",
							backgroundImage:
								"url(" +
								"https://t3.ftcdn.net/jpg/05/72/19/34/240_F_572193465_P2OBTq7dte4YCmYxsa6bWk7jwAKySspX.jpg" +
								")",
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}>
						<h2>Categories</h2>
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
								"https://as1.ftcdn.net/v2/jpg/05/14/91/82/1000_F_514918235_7tBlwu9uE5KreiWQty4thANgDRlRebpy.jpg" +
								")",
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							width: "100vw",
						}}>
						<div className='searchbtn w-75'>
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
							<Row sm='4' className='p-5 ' style={{ width: "100%" }}>
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
										return (
											<ProductComponent
												id={prod.id}
												category={prod.category}
												title={prod.title}
												price={prod.price}
												image={prod.image}
												key={index}
											/>
										);
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
