import styled from 'styled-components'

export type WrapperProps = { width: string; height: string }

const Wrapper = styled.div<WrapperProps>`
  margin-right: 20px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  &:hover {
    border: 1px solid #95b94f;
    background-color: #fdfff8;
  }
`

export default Wrapper
