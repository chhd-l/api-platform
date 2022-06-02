import Slider from 'react-slick'
import styled from 'styled-components'
import Wrapper from '../../../../components/common/Wrapper'
import Left from '../../../../assets/image/Left.png'
import Right from '../../../../assets/image/Right.png'
import DownLoad from '../../../../assets/image/download.png'
import { useState } from 'react'

const data = [
  {
    title: 'Product API',
    desc: 'Outputs product data, breed reference data and product image meta data from WeShare.',
  },
  {
    title: 'Consumer API',
    desc: 'Create, update  and  retrieve  Company data.',
  },
  {
    title: 'Order API',
    desc: 'API to store and retrieve coupon data',
  },
  {
    title: 'Pet API',
    desc: 'To retrieve and modify pet data.',
  },
  {
    title: 'Product API',
    desc: 'Outputs product data, breed reference data and product image meta data from WeShare.',
  },
  {
    title: 'Consumer API',
    desc: 'Create, update  and  retrieve  Company data.',
  },
  {
    title: 'Order API',
    desc: 'API to store and retrieve coupon data',
  },
  {
    title: 'Pet API',
    desc: 'To retrieve and modify pet data.',
  },
]
export const Button = styled.div`
  background: #6ca100;
  border-radius: 45px;
  width: 150px;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  color: #ffffff;
  /* margin: 0 auto; */
`

const SampleNextArrow = styled.div`
  background: url(${Right}) center no-repeat;
  background-size: 100% 100%;
  width: 22px;
  height: 40px;
`

const SamplePrevArrow = styled.div`
  background: url(${Left}) center no-repeat;
  background-size: 100% 100%;
  width: 22px;
  height: 40px;
`

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #d8d8d8;
  border-radius: 4px;
  margin-top: 50px;
`

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  customPaging: () => <Dot />,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
}

export const MultipleItems = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [slider, setSlider] = useState()
  return (
    <div className="w-full">
      <Slider {...settings} ref={(slider) => console.log(slider)} className="m-auto">
        {data.map((item, index) => (
          <div key={index}>
            <Wrapper width="282px" height="248px">
              <div className="mt-am20 flex flex-row items-center w-am242 m-auto">
                <img src={DownLoad} alt="" style={{ width: 34, height: 28, marginRight: 11 }} />
                <div className="text-am20 text-am_333333 font-bold ">{item.title}</div>
              </div>
              <div className="text-am16 text-am_666666 text-left mt-am25 mb-am30 w-am242 m-auto h-am57">
                {item.desc}
              </div>
              <Button className="m-auto">API Details</Button>
            </Wrapper>
          </div>
        ))}
      </Slider>
    </div>
  )
}
