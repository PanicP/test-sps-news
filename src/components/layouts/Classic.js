import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

const Container = styled.div`
  width: 100%;
  /* min-height: calc(100vh - 120px - 160px); */
  /* display: flex;
  flex-direction: column; */
`

const Body = styled.div`
  min-height: calc(100vh - 160px - 320px);
`

const ClassicLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Body>
        {children}
      </Body>
      <Footer />
    </Container>
  )
}

export default ClassicLayout