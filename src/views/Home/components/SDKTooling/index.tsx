import styled from 'styled-components'
import GoLang from '../../../../assets/image/GoLang.png'
import JavaScript from '../../../../assets/image/JavaScript.png'

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 148px;
  width: 384px;
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  padding: 20px;
  &:hover {
    border: 1px solid #95b94f;
  }
`
const Img = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 20px;
`
const Title = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
`
const Content = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  margin-top: 10px;
`
const data = [
  {
    key: 0,
    title: 'GoLang',
    content: 'GoLang SDK and libraries helps you build apps with GoLang native interfaces models and helpers.',
    img: GoLang,
  },
  {
    key: 1,
    title: 'JavaScript',
    content: 'Modular JavaScript libraries for robust implementations includes SDK written in TypeScript.',
    img: JavaScript,
  },
]
const SDKTooling = () => {
  return (
    <div className="flex flex-row mt-2">
      {data.map((item) => (
        <Wrapper key={item.key}>
          <Img src={item.img} />
          <div className="flex flex-col w-am275 text-left">
            <Title>{item.title}</Title>
            <Content>{item.content}</Content>
          </div>
        </Wrapper>
      ))}
    </div>
  )
}

export default SDKTooling
