import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: darkseagreen;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        {
          //TODO: delte images from src/components/images if we not using it.
        }
        Super Deal - Free Shipping on All Orders 🚀
    </Container>
  )
}

export default Announcement