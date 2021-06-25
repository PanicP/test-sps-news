import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const ClassicLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      { children }
      <Footer />
    </Container>
  )
}

export default ClassicLayout