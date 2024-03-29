import { GitHub, MailOutline, Phone, Room} from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"
  
const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
  
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
  
const Logo = styled.h1`

`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`
  
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
  
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
  
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
  
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
  
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`
  
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Kaktus.</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <a href="https://github.com/RazRabino/Web-E-Commerce-Store-App">
                            <GitHub />
                        </a>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem><Link to="/" style={{ textDecoration: 'none'}}>Home</Link></ListItem>
                    <ListItem><Link to="/cart" style={{ textDecoration: 'none'}}>Cart</Link></ListItem>
                    <ListItem><Link to="/register" style={{ textDecoration: 'none'}}>Register</Link></ListItem>
                    <ListItem><Link to="/login" style={{ textDecoration: 'none'}}>Log In</Link></ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                <Room style={{marginRight:"10px"}}/> Upper Galilee, 9977, Qiryat Shemona, 1220800
                </ContactItem>
                <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +972 04-818-1855
                </ContactItem>
                <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> contact@Kaktus.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}
  
export default Footer;