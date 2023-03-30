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
						margin: "15px 0 0 0 ",
					}}>
					<div
						className='list p-5 d-flex flex-column '
						style={{
							backgroundColor: "rgb(45,48,50)",
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
									color={
										categ === selectedCategory ? "rgb(45,48,50)" : "secondary"
									}
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
								"https://img.freepik.com/free-vector/pink-geometrical-background-design-vector_53876-62371.jpg?w=826&t=st=1680178285~exp=1680178885~hmac=3ceca3ac4dec2a5b27fce0720f2e1402a928966b53c00da69f8b4593b37655e9" +
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
