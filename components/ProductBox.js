import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/Cart";
import Link from "next/link";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: white;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
`;

const ProductInforBox = styled.div`
  margin-top: 5px;
`;
const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export default function ProductBox({ _id, title, description, price, images, categories }) {
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={"http://" + images[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInforBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button primary outline>
            Add to Cart
          </Button>
        </PriceRow>
      </ProductInforBox>
    </ProductWrapper>
  );
}
