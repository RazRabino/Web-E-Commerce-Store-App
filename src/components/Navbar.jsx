import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  color: lightgray;
  ${mobile({ fontSize: "24px" })}

  transition: all 0.5s ease;
  &:hover {
    color: darkseagreen;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}

    transition: all 0.5s ease;
    &:hover {
      color: darkseagreen;
    }
`;

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/" style={{ textDecoration: 'none'}}>
                      <Logo>
                          Kaktus.
                      </Logo>
                    </Link>
                </Left>
                <Center>
                    
                </Center>
                <Right>
                    <MenuItem>
                      <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        SIGN IN
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        REGISTER
                      </Link>
                    </MenuItem>
                    <MenuItem>
                        <SearchContainer>
                            <Input/>
                            <Search style={{color:"gray", fontSize:16}}/>
                        </SearchContainer>
                    </MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
