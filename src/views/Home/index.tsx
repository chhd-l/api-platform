import HomeHeader from '../../components/common/Layout/Header/HomeHeader'
import homeCard from '../../assets/image/homeCard.png'
import Product from './components/Product'
import SDKTooling from './components/SDKTooling'
import ReleaseNotes from './components/ReleaseNotes'
import Footer from '../../components/common/Footer'
import styled from 'styled-components'

const Img = styled.div`
  background: url(${homeCard}) center no-repeat;
  background-size: 100% 100%;
  height: 400px;
  width: 100%;
  padding-top: 93px;
`
export default function Home() {
  return (
    <>
      <div className="bg-white">
        <HomeHeader />
        <Img>
          <div className=" w-am1200 m-auto text-left flex flex-col ">
            <div className="text-am50 text-white border-b border-white w-am377">DTC Platform API</div>
            <div className="text-am24 text-gray-300 w-am450 mt-am30">
              It has the most comprehensive application programming interface in the world.
            </div>
          </div>
        </Img>
        <div className="w-am1200 m-auto">
          <Product />
          <SDKTooling />
          <div className="text-am_568300 text-am16 text-left underline mt-2 cursor-pointer">
            See all SDKs and tools...
          </div>
          <ReleaseNotes />
        </div>
      </div>
      <Footer />
    </>
  )
}
