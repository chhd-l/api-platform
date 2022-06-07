import styled from 'styled-components'
import LOGO_black from '../../../../../assets/image/LOGO_black.png'
import { IconFont } from '../../../IconFont'
import { SearchInput } from '../components/SearchInput'

const HeaderBox = styled.div`
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
`
const Divider = styled.div`
  width: 284px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &::after {
    content: '';
    height: 40px;
    border-left: 1px solid #e6e6e6;
    width: 1px;
    display: inline-block;
  }
`
const Img = styled.img`
  width: 109.93px;
  height: 22px;
  margin-left: 24px;
`

const DetailHeader = () => {
  return (
    <HeaderBox>
      <div className=" h-am70 flex items-center justify-between">
        <div className="flex items-center">
          <Divider>
            <Img src={LOGO_black} />
          </Divider>
          <div className="ml-4 text-am16">HTTP API</div>
        </div>
        <SearchInput suffix={<IconFont type="icon-bianzu" />} style={{ marginRight: 360 }} placeholder="search" />
      </div>
    </HeaderBox>
  )
}

export default DetailHeader
