import styled from 'styled-components'
import PlatformAPIs from '../../../../assets/image/PlatformAPIs.png'
import SellerCenter from '../../../../assets/image/SellerCenter.png'

const Wrapper = styled.div`
  width: 282px;
  height: 222px;
  margin-right: 20px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fdfff8;
  padding: 0 20px;
  &:hover {
    border: 1px solid #95b94f;
  }
`
const Title = styled.div`
  font-size: 22px;
  color: #000000;
`
const Content = styled.div`
  font-size: 16px;
  color: #666666;
  text-align: left;
  width: 213px;
  margin: 0 auto;
`
const Img = styled.img`
  width: 56px;
  height: 40px;
  margin: 20px auto;
`
type ProductProps = {
  title: string
  desc: string
  img: string
}

const data: ProductProps[] = [
  {
    title: 'Platform APIs',
    desc: 'Build your dreams using the commercetools APIs',
    img: PlatformAPIs,
  },
  {
    title: 'Seller Center',
    desc: 'The User Interface to manage your business',
    img: SellerCenter,
  },
]
const Product = () => {
  return (
    <div className="flex flex-row mt-2">
      {data.map((item) => (
        <Wrapper key={item.title}>
          <Img src={item.img} />
          <Title>{item.title}</Title>
          <Content>{item.desc}</Content>
        </Wrapper>
      ))}
    </div>
  )
}

export default Product
