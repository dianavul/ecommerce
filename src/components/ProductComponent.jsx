import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./ProductComponent.style.css";
function ProductComponent({ image, price, title, product, id, category }) {
	const cardStyle = {
		color: "#2d3032",
		textDecoration: "none",
		borderRadius: "none",
	};
	const dollar = " \u20AC";
	const cartStyle = {
		backgroundColor: "#f8f9fa",
		textDecoration: "none",
		borderRadius: "0",
		color: "black",
		width: "90%",
	};

	const addToWishList = () => {
		const prodsString = localStorage.getItem("products");

		if (prodsString !== null) {
			const prods = JSON.parse(prodsString);
			const existNr = prods.find((prodElement) => {
				return prodElement.id === product.id;
			});

			if (existNr === undefined) {
				prods.push(product);
			}
			localStorage.setItem("products", JSON.stringify(prods));
		} else {
			const newProducts = [];
			newProducts.push(product);
			localStorage.setItem("products", JSON.stringify(newProducts));
		}
	};

	return (
		<div className='divs d-flex flex-wrap'>
			<Card
				className='prod_card  ms-1 mt-2 mb-2'
				color='light'
				style={{
					border: "none",
					borderRadius: "0",
					width: "100%",
					maxheight: "660px",
				}}>
				<div style={{ height: "100%", width: "100%" }}>
					<img
						alt='Card cap'
						src={`${image}`}
						style={{
							width: "100%",
							height: "380px",
							padding: "0",
							margin: "0",
						}}
						className='p-1'
					/>

					<CardBody>
						<Link to={`/product/${id}`} style={cardStyle}>
							<CardTitle tag='h5'>
								{id}
								{title}
							</CardTitle>
						</Link>
					</CardBody>

					<CardBody style={cardStyle}>
						<CardText>
							{price}
							{dollar}
						</CardText>
						<CardText>{category}</CardText>

						<Button
							style={cartStyle}
							onClick={() => {
								addToWishList();
							}}>
							Add to wishlist
						</Button>
					</CardBody>
				</div>
			</Card>
		</div>
	);
}
export default ProductComponent;
