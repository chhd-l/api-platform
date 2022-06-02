import { Input } from 'antd'
import styled from 'styled-components'
import search_bg from '../../../../assets/image/search_bg.png'
import { IconFont } from '../../../../components/common/IconFont'

const Img = styled.div`
  background: url(${search_bg}) center no-repeat;
  height: 311px;
  width: 100%;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SearchInput = styled(Input)`
  width: 766px;
  height: 50px;
  border: 1px solid #8b8b8b;
  background: #191738;
  margin: 0 auto;
  .ant-input {
    background: #191738;
    color: #ffffff;
  }
`
export const AMSearch = () => {
  return (
    <Img>
      <SearchInput prefix={<IconFont type="icon-bianzu" />} placeholder="input search content" allowClear />
    </Img>
  )
}
