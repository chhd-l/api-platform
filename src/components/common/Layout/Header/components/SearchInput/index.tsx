import { Input } from 'antd'
import styled from 'styled-components'

type SearchInputProps = {
  backgroundcolor?: string
}
export const SearchInput = styled(Input)<SearchInputProps>`
  width: 220px;
  color: red;
  background-color: ${(props) => props.backgroundcolor || ''};
  .ant-input {
    background-color: ${(props) => props.backgroundcolor || ''};
    color: ${(props) => (props?.backgroundcolor === '#0B121C' ? '#fff' : '#0B121C' || '')};
  }
`
