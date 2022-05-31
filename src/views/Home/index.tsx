import HomeHeader from '../../components/common/Layout/Header/HomeHeader'
import { Button } from 'antd'
import homeCard from '../../assets/image/homeCard.png'

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <img src={homeCard} alt="" />
      <div>Our Product</div>
    </div>
  )
}
