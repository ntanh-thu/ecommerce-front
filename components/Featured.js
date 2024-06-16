import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import { ButtonLink } from "./ButtonLink";
import CartIcon from "./icons/Cart";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;
export default function Featured({ featureProduct }) {
  const { addProduct } = useContext(CartContext);
  function addFeatureToCart() {
    addProduct(featureProduct._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnWrapper>
          <Column>
            <div>
              <Title>{featureProduct.title}</Title>
              <Desc>{featureProduct.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink outline={1} white={1} href="/products">
                  Read More
                </ButtonLink>
                <Button white onClick={addFeatureToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src="http://127.0.0.1:9000/next-ecommerce/1679151719649.png" alt="" />
          </Column>
        </ColumnWrapper>
      </Center>
    </Bg>
  );
}
