import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;

    transition: all 0.5s ease;
    &:hover {
        color: darkseagreen;
    }
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        Kaktus.
                    </Logo>
                </Left>
                <Center>
                    
                </Center>
                <Right>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem><Language>EN</Language></MenuItem>
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

export default Navbar