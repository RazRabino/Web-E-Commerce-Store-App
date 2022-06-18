import Navbar from "../components/Navbar";
import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 250;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decloration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
    flex; 3;
`;

const Summary = styled.div` 
   flex; 1;
`;

const Product = styled.div``;

const ProductDatail = styled.div``;

const Image = styled.img``;

const Details = styled.div``;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div``;

const ProductSize = styled.span``;

const PriceDetail = styled.span``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your cart</Title>
        <Top>
          <TopButton>Go back to shopping</TopButton>
          <TopTexts>
            <TopText>Cart</TopText>
            <TopText>Wish list</TopText>
          </TopTexts>
          <TopButton type="filled">Pay</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDatail>
                <Image stc="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>
                    <b>Product</b>
                    Happy Kaktus
                  </ProductName>
                  <ProductId>
                    <b>ID</b>
                    7634934999221
                  </ProductId>
                  <ProductColor />
                  <ProductSize>
                    <b>Size</b>
                    Big
                  </ProductSize>
                </Details>
              </ProductDatail>
              <PriceDetail></PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default Cart;