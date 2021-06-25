import styled from "styled-components"
import PeaksLogo from '../../assets/Logo_White.png'
import SearchIcon from '../../assets/search-icon@2x.svg'

const HeaderContainer = styled.div`
  height: 160px;
  background-color: #1e2e79;
  padding: 0 192px;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
`

const EmptySpace = styled.div`
  flex: 1;
`

const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-start;
`

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const SearchButton = styled.div`
  width: 96px;
  border-bottom: 2px solid white;
`


const Header = () => {
  return (
    <HeaderContainer>
      <EmptySpace />
      <ImageContainer>
        <img src={PeaksLogo} alt="The Peaks" width={176} height={64} />
      </ImageContainer>   
      <SearchContainer>
        <SearchButton>
          <img src={SearchIcon} alt="search icon" />
        </SearchButton>
        {/* <SearchBox>

        </SearchBox> */}
      </SearchContainer>
    </HeaderContainer>
  )
}

export default Header