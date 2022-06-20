import styled from "styled-components"
import React from "react"

const Container = styled.div`
    width: 100vw;
    height 100vh;
    bacground: linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)
    );
    url(https://unsplash.com/backgrounds);
    background-size : cover;
    center;
    display: flex;
    align-item: center;
    justify-content: center;
`

const Wrapper = styled.div`
  paddin: 20%;
  width: 40%;
  backgroun-color: white;
`

const Title = styled.h1`
  font-size: 25px;
  font-weight: 250;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding 12px;    
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}
export default Register
