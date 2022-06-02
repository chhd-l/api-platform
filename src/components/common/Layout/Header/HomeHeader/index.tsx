import styled from 'styled-components'
import LOGO_white from '../../../../../assets/image/LOGO_white.png'
import { IconFont } from '../../../IconFont'
import { SearchInput } from '../components/SearchInput'
import { useNavigate } from 'react-router-dom'
import { HeaderBox } from '../components/HeaderBox'

const Img = styled.img`
  width: 118px;
  height: 22px;
  line-height: 22px;
`

const HomeHeader = () => {
  const navigate = useNavigate()

  return (
    <HeaderBox>
      <div className="w-am1200 m-auto h-am70 flex items-center justify-between">
        <Img src={LOGO_white} />
        <div className="text-am16 text-white">
          {/* <SearchInput
            suffix={<IconFont type="icon-bianzu" onClick={() => navigate('/search')} />}
            style={{ border: '1px solid #7F7F7F', marginRight: 23 }}
            backgroundcolor="#0B121C"
          /> */}
          <div onClick={() => navigate('/search')}>Console</div>
        </div>
      </div>
    </HeaderBox>
  )
}

export default HomeHeader
