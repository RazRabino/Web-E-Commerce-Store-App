import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 5px;
`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 10px;
    ${mobile({ textAlign: "center" })}
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: darkseagreen;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
  // work with mailchimp integration, use it in real stores (free acount with 2500 mails per month)

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your e-mail" />
        <Button onClick={() => alert("your E-Mail has been registered.") + window.location.reload() + (document.body.scrollTop = document.documentElement.scrollTop = 0)}>
          <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter