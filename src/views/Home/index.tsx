import HomeHeader from '../../components/common/Layout/Header/HomeHeader'
import homeCard from '../../assets/image/homeCard.png'
import Product from './components/Product'
import SDKTooling from './components/SDKTooling'
import Title from './components/Title'
import ReleaseNotes from './components/ReleaseNotes'
import Footer from '../../components/common/Footer'

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <HomeHeader />
        <img src={homeCard} alt="" />
        <div className="ml-am_19 mr-am_5">
          <Title>Our Product</Title>
          <Product />
          <Title>SDKs and Tooling</Title>
          <SDKTooling />
          <div className="text-am_568300 text-am16 text-left underline mt-2">See all SDKs and tools...</div>
          <Title>Release Notes</Title>
          <ReleaseNotes />
        </div>
      </div>
      <Footer />
    </>
  )
}
