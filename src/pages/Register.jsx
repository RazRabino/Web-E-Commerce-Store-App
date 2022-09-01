import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import { useState } from "react";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const SuperContainer = styled.div``

const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 56vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 0.5px;
  border-color: lightgray;
`;

const Wrapper = styled.div`
  width: 40%;
  height: 100%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 6px 0px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: darkseagreen;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    if (username === "" || password === "" || firstname === "" || lastname === "" || email === "") {
      return false;
    }

    if(password !== cpassword) {
      alert("password and confirm password are not the same...");
    } else {
      register(dispatch, { username, password, firstname, lastname, email });
    }
  };

  return (
    <SuperContainer>
    <Navbar/>
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input 
            placeholder="name"
            onChange={(e) => setFirstName(e.target.value)}/>
          <Input 
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)} />
          <Input 
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)} />
          <Input 
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)} />
          <Input 
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)} />
          <Input 
            placeholder="confirm password"
            type="password"
            onChange={(e) => setcPassword(e.target.value)} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data.
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            CREATE ACCOUNT
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link to="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
    <Footer/>
    </SuperContainer>
  );
};

export default Register;