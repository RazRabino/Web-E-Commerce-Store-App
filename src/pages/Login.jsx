import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height 100vh;
    bacground: linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)
    ),
    url(https://as1.ftcdn.net/v2/jpg/01/67/09/46/1000_F_167094683_YuOfaA46rXUo7huHbka9CGMD94RynQFC.jpg);
    background-size : cover;
    center;
    display: flex;
    align-item: center;
    justify-content: center;
`;

const Wrapper = styled.div`
  paddin: 20%;
  width: 30%;
  backgroun-color: white;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 250;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding 12px;    
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  crsor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>Create</Button>
          <Link>Forgot your password?</Link>
          <Link>Creat a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Login;
