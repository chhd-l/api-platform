import styled from 'styled-components'
import { HeaderBox } from '../components/HeaderBox'
import LOGO_white from '../../../../../assets/image/LOGO_white.png'
import user from '../../../../../assets/image/user.png'
import { SearchTab } from './components/SearchTab'

const Img = styled.img`
  width: 118px;
  height: 22px;
  line-height: 22px;
`
export const SearchHeader = () => {
  return (
    <HeaderBox>
      <div className="w-am1200 m-auto h-am70 flex items-center ">
        <Img src={LOGO_white} className="mr-14" />
        <SearchTab />
        <img src={user} alt="" className="" />
      </div>
    </HeaderBox>
  )
}
