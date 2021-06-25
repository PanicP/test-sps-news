import styled from 'styled-components'

const Card = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: relative;
`

const CardImage = styled.div`
  width: 100%;
  height: 100%;
`

const CardBody = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #1e2e79;
  opacity: 0.8;
`

const Title = styled.div``

const Body = styled.div``

const NewsCard = ({
  width = 240,
  height = 240,
  image,
  title = 'title',
  body = 'body'
}) => {
  return (
    <Card width={width} height={height}>
      <CardImage />
      <CardBody>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </CardBody>
    </Card>
  )
}

export default NewsCard