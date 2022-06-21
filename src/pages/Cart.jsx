import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import styled from "styled-components"
import StripeCheckout from "react-stripe-checkout"
import { Add, Remove } from "@material-ui/icons"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { userRequest } from "../requestMethods"
import { useNavigate } from "react-router-dom"
import { mobile } from "../responsive"

const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div``

const Wrapper = styled.div`
  min-height: 48vh;
  padding: 20px;
  ${mobile({ padding: "10px" })};
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 0.5px;
  border-color: lightgray;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${mobile({ flexDirection: "column" })};
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })};
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 100%;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const [stripeToken, setStripeToken] = useState(null)
  const history = useNavigate()

  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total,
        })
        history.push("/success", {
          stripeData: res.data,
          products: cart.total, })
      } catch {}
    }
    stripeToken && cart.total > 0 &&makeRequest()
  }, [stripeToken, cart, history])

  return (
    <Container>
    <Announcement />
    <Navbar />
    <Wrapper>
      <Title>YOUR BAG</Title>
      <Bottom>
        <Info>
          {cart.products.map((product) => (
            <Product>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  {//TODO: add handler for add and remove in cart that remove the item if quantity === 0
                  }<Add />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>
                  $ {product.price * product.quantity}
                </ProductPrice>
              </PriceDetail>
            </Product>
          ))}
          
        </Info>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
          </SummaryItem>
          <StripeCheckout
            name="Kaktus."
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total.toFixed(2)}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}>
            <Button>CHECKOUT NOW</Button>
            <Button>
              CONTINUE SHOPPING
            </Button>
          </StripeCheckout>
        </Summary>
      </Bottom>
    </Wrapper>
    <Footer />
  </Container>
  )
}
export default Cart
