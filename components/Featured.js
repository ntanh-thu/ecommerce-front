import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
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

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>Pro anywhere</Title>
              <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dicta dignissimos ea eius enim
                laudantium modi odit quidem
              </Desc>
              <button>Read More</button>
              <button>Add to cart</button>
            </div>
          </Column>
          <Column>
            <img src="http://127.0.0.1:9000/next-ecommerce/1679151719649.png" alt="" />
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
}
