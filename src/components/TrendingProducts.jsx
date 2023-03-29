import { useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
import { Spinner, Col, Row } from "reactstrap";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./TrendingProducts.style.css";
function TrendingProducts() {
	const [trendList, setTrendList] = useState(null);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=8")
			.then((res) => res.json())
			.then((trendData) => setTrendList(trendData));
	}, []);
	return (
		<>
			<h2>Trending products</h2>
			<h4>Here are some of our most favourite items</h4>
			{trendList ? (
				<div className='container '>
					<Row md='4' className='trend_container '>
						{trendList.map((trend, index) => {
							return (
								<Col sm='2' className='product' key={index}>
									<ProductComponent key={index} product={trend} />
									<img src='../imgs/special.png' className='special' />
								</Col>
							);
						})}
					</Row>
				</div>
			) : (
				<Spinner>LOADING...</Spinner>
			)}
		</>
	);
}
export default TrendingProducts;
