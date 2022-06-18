import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
//import Newsletter from "../components/Newsletter";
//import Footer from "../components/Footer";
import { mobile } from "../responsive"


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  higet: 90vh;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 30px 0px;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-item: center;
`;

const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-redius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  marin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  diaplay: flex;
  align-item: center;
  justify-content: center;
  margin: 0px 5px;
`;

const AmountContainer = styled.div`
  align-item: center;
  diaplay: flex;
  font-weight: 700;
`;

const AddContainer = styled.div`
  width: 50%;
  diaplay: flex;
  align-item: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Button = styled.button`
  padding: 15px;
  border: 3px solid teal;
  bacground-color: white;
  cursor: pointer;
  font-weight: 550;
  &:hover {
    bacground-color: red;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <InfoContainer>
          <Title>Build your own succulent kit</Title>
          <Desc>
            These DIY Succulent Kits come with all materials needed to create
            your own treasure at home! Buy it for you or buy one as a gift for a
            friend or loved one! Kit comes with instructions on how to plant and
            care for your succulent. Select the different style numbers to view
            the pots available!
          </Desc>
          <Price>200$</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="green" />
              <FilterColor color="purple" />
              <FilterColor color="red" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Big</FilterSizeOption>
                <FilterSizeOption>Medium</FilterSizeOption>
                <FilterSizeOption>Small</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
        <ImgContainer>
          <Image src="https://images.squarespace-cdn.com/content/v1/5edf93b24a82ea1a92337c02/1592582198484-2UWO6V44TYAEFANH91GL/The-Succulent-Shop-Plant-Shop-Kits3.jpg?format=1000w" />
        </ImgContainer>
      </Wrapper>
    </Container>
  );
};
export default Product;
