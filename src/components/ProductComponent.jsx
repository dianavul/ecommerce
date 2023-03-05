import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	CardLink,
	Button,
} from "reactstrap";
import { Link } from "react-router-dom";

function ProductComponent({
	title,
	price,
	image,
	id,
	description,
	category,
	rating,
}) {
	const cardStyle = { color: "#2d3032", textDecoration: "none" };
	const dollar = " \u20AC";
	const cartStyle = {
		color: "#495057 ",
		textDecoration: "none",
		fontWeight: "bold",
	};
	return (
		<Card className='p-5 ms-2 mt-2' color='light' style={{ width: "18rem" }}>
			<img
				alt='Card cap'
				src={`${image}`}
				width={"100%"}
				height={"100%"}
				className='p-1'
			/>

			<CardBody>
				<Link to={`/product/${id}`} style={cardStyle}>
					<CardTitle tag='h5'>{title}</CardTitle>
				</Link>
			</CardBody>

			<CardBody style={cardStyle}>
				<CardText>
					{price}
					{dollar}
				</CardText>
				<CardText>{category}</CardText>

				<Button style={({ cartStyle }, { color: "white" })}>
					Add to wishlist
				</Button>
			</CardBody>
		</Card>
	);
}
export default ProductComponent;
