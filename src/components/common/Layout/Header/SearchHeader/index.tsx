import styled from 'styled-components'
import { HeaderBox } from '../components/HeaderBox'
import LOGO_white from '../../../../../assets/image/LOGO_white.png'
import LOGO_black from '../../../../../assets/image/LOGO_black.png'
import user from '../../../../../assets/image/user.png'
import { SearchTab } from './components/SearchTab'
import { useLocation } from 'react-router-dom'

const Img = styled.img`
  width: 118px;
  height: 22px;
  line-height: 22px;
`
const Avatar = styled.img`
  background: url(${user}) center no-repeat;
  width: 32px;
  height: 32px;
  background-size: 100% 100%;
  border-radius: 50%;
`
export const SearchHeader = () => {
  const location = useLocation()
  return (
    <HeaderBox backGroundColor={`${location.pathname !== '/search' ? '#ffffff' : '#0b121c'}`}>
      <div className="w-am1200 m-auto h-am70 flex items-center ">
        <Img src={location.pathname === '/search' ? LOGO_white : LOGO_black} className="mr-14" />
        <div className="flex flex-row w-full items-center justify-between">
          <SearchTab />
          <Avatar />
        </div>
      </div>
    </HeaderBox>
  )
}
