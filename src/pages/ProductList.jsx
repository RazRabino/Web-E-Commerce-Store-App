import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { mobile } from "../responsive";

const Subcontainer = styled.div`
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 0.5px;
  border-color: lightgray;
`

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
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FillterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`'
    padding: 10px;
    margin-right: 20px;
     ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2]

  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Subcontainer>
      <Title>{cat}</Title>
      <FillterContainer>
        <Filter>
          <FillterText>Filter Products </FillterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>blue</Option>
            <Option>green</Option>
            <Option>yellow</Option>
            <Option>red</Option>
            <Option>black</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>
              Size
            </Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
          </Select>
        </Filter>
        <Filter>
          <FillterText>Sort Products </FillterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FillterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      </Subcontainer>
      <Newsletter/>
      <Footer />
    </Container>
  );
};

export default ProductList
