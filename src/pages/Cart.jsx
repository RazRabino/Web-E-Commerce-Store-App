import Navbar from "../components/Navbar";
import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 250;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decloration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
    flex; 3;
`;

const Summary = styled.div` 
   flex; 1;
   border: 0.5px solid lightgray;
   border-radius: 10px;
   paddingL 20px;  
   heigt: 50vh;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDatail = styled.div`
  flex: 2;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-item: center;
  margin-bottom: 15px;
`;

const ProductAmount = styled.div`
  font-size: 25;
  margin: 4px;
`;

const Hr = styled.hr`
  background-color: #ae2;
  heigt: 1px;
`;

const ProductPrice = styled.div`
  font-size: 30;
  font-weight: 170;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
    margin 0px 2px;

`;

const SummaryItem = styled.div`
    margin 20px 2px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
    `;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 650;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your cart</Title>
        <Top>
          <TopButton>Go back to shopping</TopButton>
          <TopTexts>
            <TopText>Cart</TopText>
            <TopText>Wish list</TopText>
          </TopTexts>
          <TopButton type="filled">Pay</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDatail>
                <Image src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>
                    <b>Product </b>
                    Kaktus Kit
                  </ProductName>
                  <ProductId>
                    <b>ID </b>
                    7634934999221
                  </ProductId>
                  <ProductColor color="green" />
                  <ProductSize>
                    <b>Size </b>
                    Big
                  </ProductSize>
                </Details>
              </ProductDatail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>25 $</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDatail>
                <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAGkAiAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABgQFBwMBAgj/xABDEAACAQMCAwQGCAIGCwAAAAABAgMABBEFEgYhMRNBUWEUIjJxgaEHFSNSkbGywWJyJjNjouHwFjRTVHN0grPCw9H/xAAZAQACAwEAAAAAAAAAAAAAAAAAAQIDBAX/xAAlEQADAAIBBAMAAgMAAAAAAAAAAQIDETEEEiFREyJBI3EUM0L/2gAMAwEAAhEDEQA/ANxooooA8JwMnoKrNF1y01lrpbXeGtpAjhxjqMg+7FRuJdQurGXTktuz2XNz2MofHMMMD5kUvfR0kyaxrpK4i3xDP8QQcqqeT7qSLrzofqK5JPFJK8SSKZI8b1B5rkZGa61aSCiiigAooooAKKKKACqq/wBfsrC/is5y/aPjJUZCZ6E1anpWX8UyE8TaiM9HjUeX2YrP1OV4o7kBp4r2viJt8aN95Qa+6vQBRRRTAK5vLHGVDuq7jhdxxk+VdKUfpEtpzp9tfwthbSTMuDhtreqSPMVG67Z2JvSK3WPrLWL/AFWzcEpp88NxCcBdq7uYyOvJc/jSm85WLimFX2h7ZSAp64Qf5+FMtxqJi4o7cTLImo6ayMyZCtIq9w7ueaT7wbJtfO/ANsg5HqSmP8++ufb+2yih54e1aHTo9S1nUZy0U9z2K7Fy3q9CR4bQKfhWTNFFc2Gl6YUYelXWZApwVDMIiB8FY5rWB0rXgba0WwzjeXMVpA00zbVHzNU9lxTaXVysG103ttVjzBJGR+YqB9IVy0NtZRqSA8xZseCox/PFJg5GMpyIH/qUj9IqjP1FRel+E96NhoqPYTGeygmJBMkasceYqRW1Pa2AUUUHlTAD0rJ+Jm/pPqIH+3T9ArVwc1kXEzY4n1Ej/eF/TWLrv9aEzWLT/VYf+Gv5V1zXCwO6xtz4xL+VKXCeozy8Q3kM0rOs6tIAxJwQR08OTY+FXvIpcr2MdaKKKuAKjajaR39jPaTD7OeMxtjwIxUmih+QMi0i3W7P1Xc3Ho13by7YZSu4JMuVKnyZcD4HvNcbTSvrHiOO0GM3U0ckuD7EMQBPPHe3KnXiXh1Yrr680tUjukbdcK7erKnefJu+lDhy0k1DirUrGLUHtu0hjLMoyxQAEqOfLrnnnv5Gue8bm1LKNaemW+mwNqXHiGKLFtYuzEp7CBVKoPDnkn4Vo1QdI0q10izW1s0KoDlmJyzt3lj3mp1bMcdqLZWkJ30jITBpzc8duy8s98bUnI4YIcHnGD0/sq0DjiAS6MJduTBNHJ7huwfkTWfWcRmeGDIDlFjwPHaq+HnXN6uf5P7GzU7GWO00i1aZhGqwJnPLHIVwXiPS2kEfpcYYnHWlb6QLuSO+sLJCREsby7e4lR6uaUF5GInmeyt29/Mg/KrMnVVjfavwltI21HV1DKQQe+qriy4e10C6kjJDHYmR/EwU/nUPge4eXTHidi3YyFAT4YB/eunHRxwzdHweL/uLWv5O/C6XoTPngiUvoao7EiFygz3DkcfOs/4k9bifUv8AmP8Axq5hnaPgfUMMRm4AOD3cv/lKCzNJM8kjliXHrMcnvH5VgyZO7DMiNt0s50y0PjCn6RSFwk/9K4/NJR8gf2q+4O4g+slS07EIkduhjfPNsAA5FLXBzbuKbcj7sv6avu5usbQzTqKKK3gFRb27a2TKQvIe4AcqlVVz69pkF+LGa6VJyQuCDgE9AWxgGoXxrehppPyUura/KbWeC70u6EDrtMkSljz6YAy3n0pU4ZSbTeJ73U2s5rhpIVS3RQVzhVBzuAx8fOtA13XYdHMCvEZXlbGAcYGcZ/wq1lkjiXfK6IucZYgCs/xtt/fyibrG3vtINrqbzIpktJo2I5jrj8Knh8ruwR5EV9DpyoxWiJpLy9kaafCFniHWJIllt59NllspEKO6bi3Pl7IXp35z8KTbOdbHV47l0Mscb55Bs55Y9Xbk91awVB6iufYRZz2aZ91Z8nT1b33E1eP9kz/ie7h1Oexa4j9HmGezZgSGz7SHHTP7UvJbIjwo0oICICQpOFRjzI61sQhiByI1B91e9kn3F/Cq66N15p+QdY3/AMirwTewmxaO1guH9c7pHiKbj44OCBjFTuOVL8K3uOoCH8HU1eqir0AFQdftWvNEv7dPbkgcJ/Njl88VoWNzjckKab8IzyKQNwbrK59iSN/xbFJsUh9AeTvGT+dM2hym5t73T1631qyxAn2pANyj4kEUowPu0k4Ody8vnXN5hEDQOApewuVJONloxPwGa94DTfxNkdI4JD81FUdrqH1daXLAEtJB2K47t2M/LNNH0aW7Pd312eiIsQP8RO5v2qXT/a5XpsDQKKKK64wpK4r4SuL+aa408xsZTlo5Dtwe/Bp1rzFV5Mc5Fpia2Z1aahBrGuaKup7o2gjVWYncs8oxj3Atk+fIV14zvrm5uprGW3CC3VpY8N/WJgZPPqfd5iqHi+zl0S5dRlezJe3fuYA5XHmOQP8AjTV9I8pSKwDDCbnbn94AY/M1i3Tx13coifOl8RzWUWi6TFEt1cPBGZMPuKg8scvAdTTsOlJ30bQSjT7q7ZdsVxKOyyMbgBgt7j+1OJ5Vsw7c7ZJHtQtSvks7G7uGYD0aEytnuABP7Go2sX31ZdWdzK2LWSTsJs9ELew34jH/AFeVUfHN4LWC/ib2LvTyg/mBP7MaMmRSmDehoW5AurhHYBIkViScAZ3ZPyqQrBlBGcEZ50gWOvx3UyGV/VueyeX+SKLcw+LYGPM0wz6tNaWltGEE2rX3rRWxPJc958EUdT348ahjzzSYlWxgrw9KjWCFIsPcG4kHtyYwC3fgdAPKpVXokZHxTo1zoWovLHujtWk7S2nTpGc5C+RB6eP44Vbuf0u5nzHHEXnVmWL2eeSce8gnHnX6EkjSVGSRFdGGCrDINYlxXp8P+keqQ26LCvbrtEYAC+p3CufnxLH9k/DEdrbSdQ1lIYtNtTL9pl5CdsaADA3H9hz8q1bh3SY9F0uOzRt7j1pJMY3uep/YeQFRuDLJLHhuyVR68kYkkP3mI5mryr+mwKJ7v0YUUUVqAKKKhX2q2VgjPd3CRKvUselJ0p8saTfBTcfFPqVI3iRxJOq7mXJTqcg9x5Yz50jJIbu/tIrwvdRNcIDBLIzK2Tg8s+BNOPEmp6Xq+jSwRXcYkIEsLlgF3Dpz8D0+NJvBv2urx6jqCPDZW2ZN7qcM/RR8OufKuflfdlTT8CrHe+DXo0VEVEUKqjCgDAAr1lDKQwBB7iKrLPX9Mu7hreG6QyqAdmeeD0NWYIIyOlb5qa4Y3LXIucWWpTRrkOGmsCn28XVoh99D5ddvh0x35zqOrS3eixWd1L2ktsrRrN17SMj1Tn4Gtdu7+zi3RzsCCMMNuRish1bRWtJriOyftLN2IhcHmoz0x5Vz+qf21L/sjeOtb0Q7GZbe5ieXLxrGoYZ6g43fKnPgZLjXNRvtSvHJZsCZh58xEvgoGM+PIeNKZ0y/hT1rcqjAKGJrSuCUsdO0OG3iuEkkbMkrqeTMfA9/cM1T0q/k8+ERjHW+BkRQihVAAAwAB0r6r57RNu7cNvjmq+41zTreZIZLlFkf2FJ5t7vGuq7meWWqW+EWVY3xU23izVB/bKf7laRNxRpsSszSEhRk8uf4VlfE8j3es6hrFmDLZPIh3AEFfVA5g92fCsvU1NzpMbx2lvRr3DpzoOnHxtkP90VZUs6Br2m23DendvdJH2VrGsm442MEGQfA1bWmtafdlhDcoWU4Iz0NX48kKUti7K1wWFFeBgwyDkUVcRPaj3Fla3IxcW8Un86g1IopNJ8jTa4Ki64Z0W72+kadBJt6ZXpUS44M0a5kieaK4bsTmNfSZAqnxxmmKio/HHol317K+HRrCEARW6qPDNTlUIu1QAB4V9UU5iZ4RF03yyPc2Vvcj7aIP76p5+DNBnuDcSWC9sTneHYc/wAaYKKTxw3toaulwxbh4I0SK+W97GeSdc7WluXfHwJq3t9Ksbb+otIUPeQgyam0UfHHoHdP9PnYoXaFAHgBVde6HZXjBpYxuHQ4zVnRRWOaWqQTVTwxZ/0J0lBIbeL0d5Pakg9Rz8RXw3Byjc0OqXkchHJsIfjgrzppoqHwY/RP5snsV7Xg2GGRZpr+6uJx7Tu2A/hlRy5d3KrVdGtwADzwc8gBVnRS/wAbFvbQfNfs8UBRgDAor2iryo//2Q==" />
                <Details>
                  <ProductName>
                    <b>Product </b>
                    Kaktus Poster
                  </ProductName>
                  <ProductId>
                    <b>ID </b>
                    6637428953020
                  </ProductId>
                  <ProductColor color="green" />
                  <ProductSize>
                    <b>Size </b>
                    Small
                  </ProductSize>
                </Details>
              </ProductDatail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>7 $</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sum </SummaryItemText>
              <SummaryItemPrice>27 $</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping </SummaryItemText>
              <SummaryItemPrice>3.9 $</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping dicount </SummaryItemText>
              <SummaryItemPrice>-0.9 $</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total </SummaryItemText>
              <SummaryItemPrice>30 $</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Pay now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default Cart;
