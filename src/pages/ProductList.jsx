import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FillterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FillterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`'
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Succulents</Title>
      <FillterContainer>
        <Filter>
          <FillterText>Filter Products </FillterText>
          <Select>
            <Option disabled selected>
              All
            </Option>
            <Option>Big</Option>
            <Option>Medium</Option>
            <Option>Small</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Different selsct
            </Option>
            <Option>BLUBLI</Option>
            <Option>BLABLA</Option>
            <Option>RAAAAAAAAAAAAZ</Option>
          </Select>
        </Filter>
        <Filter>
          <FillterText>Sort Products </FillterText>
          <Select>
            <Option disabled selected>
              Newest
            </Option>
            <Option>Price</Option>
          </Select>
        </Filter>
      </FillterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
