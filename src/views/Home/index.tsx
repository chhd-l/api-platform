import HomeHeader from '../../components/common/Layout/Header/HomeHeader'
import homeCard from '../../assets/image/homeCard.png'
import Product from './components/Product'
import SDKTooling from './components/SDKTooling'
import ReleaseNotes from './components/ReleaseNotes'
import Footer from '../../components/common/Footer'

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <HomeHeader />
        <div className="m-auto relative">
          <img src={homeCard} alt="" className="w-full" />
          <div className="absolute top-am50 w-am525 text-left left-am160">
            <p className="text-am50 text-white border-b border-white w-am377">DTC Platform API</p>
            <span className="text-am24 text-white">
              It has the most comprehensive application programming interface in the world.
            </span>
          </div>
        </div>
        <div className="w-am1200 m-auto">
          <Product />
          <SDKTooling />
          <div className="text-am_568300 text-am16 text-left underline mt-2">See all SDKs and tools...</div>
          <ReleaseNotes />
        </div>
      </div>
      <Footer />
    </>
  )
}
