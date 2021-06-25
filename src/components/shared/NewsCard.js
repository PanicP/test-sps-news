import styled from 'styled-components'

const Card = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
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
`

const Title = styled.div``

const Body = styled.div``

const NewsCard = ({
  width,
  height,
  image,
  title = 'test',
  body = 'test'
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