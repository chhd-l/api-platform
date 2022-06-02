import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { SearchAtom } from '../../../../../../../store/search'

type TabProps = {
  color: string
}
const Tab = styled.div<TabProps>`
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid ${(props) => props.color || 'transparent'};
  color: ${(props) => props.color || '#ffffff'};
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;
`

const menu = [
  {
    name: 'Home',
    src: '/search',
  },
  {
    name: 'APIs',
    src: '/apis',
  },
  {
    name: 'Applications',
    src: '/apis',
  },
]
export const SearchTab = () => {
  const [info, setInfo] = useAtom(SearchAtom)
  const navigate = useNavigate()
  return (
    <>
      {menu.map((item, index) => (
        <Tab
          key={item.name}
          className={`${info.current === index && 'border-b border-green text-green'}`}
          color={info.current === Number(index) ? '#6CA100' : ''}
          onClick={() => {
            setInfo({ current: Number(index) })
            navigate(item.src!)
          }}
        >
          {item.name}
        </Tab>
      ))}
    </>
  )
}
