import styled from 'styled-components'

type HeaderBoxProps = {
  backGroundColor?: string
}
export const HeaderBox = styled.div<HeaderBoxProps>`
  background-color: ${(props) => props.backGroundColor || '#0b121c'};
  height: 70px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
`
