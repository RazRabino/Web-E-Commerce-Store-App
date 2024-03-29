import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { publicRequest } from "../requestMethods"
import { addProduct } from "../redux/cartRedux"
import { useDispatch, useSelector } from "react-redux"

const Container = styled.div``

const Wrapper = styled.div`
  border-top-style: solid;
  border-width: 0.5px;
  border-color: lightgray;
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })};
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  higet: 90vh;
  ${mobile({ height: "40vh" })};
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  justify-content: space-between;
  margin: 5px 0px;
  ${mobile({ width: "100%" })};
`

const Filter = styled.div`
  display: flex;
  align-item: left;
  margin-top: 5px;
`

const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-redius: 50%;
  background-color: ${(props) => props.color};
  margin: 4px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin: 4px 5px;
`

const FilterSizeOption = styled.option``

const Amount = styled.span`
  width: 30px;
  height: 30px;
  diaplay: flex;
  align-item: center;
  justify-content: center;
  margin: 0px 10px;
  padding: 5px;
`

const AmountContainer = styled.div`
  align-item: center;
  diaplay: flex;
  font-weight: 700;
`

const AddContainer = styled.div`
  width: 50%;
  diaplay: flex;
  align-item: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`

const Button = styled.button`
  padding: 15px;
  border: 3px solid teal;
  bacground-color: white;
  cursor: pointer;
  margin-top: 15px;
  font-weight: 550;
  &:hover {
    bacground-color: red;
  };
`

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  document.body.scrollTop = document.documentElement.scrollTop = 0;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
