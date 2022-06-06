import { useAtom } from 'jotai'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { SearchAtom } from '../../../../../../../store/search'

type TabProps = {
  color: string
}

const menu = [
  {
    name: 'Home',
    url: '/search',
  },
  {
    name: 'APIs',
    url: '/apis',
  },
  {
    name: 'Applications',
    url: '/apis',
  },
]

const Tab = styled.div<TabProps>`
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid ${(props) => props.color || 'transparent'};
  color: ${(props) => props.color};
  font-size: 16px;
  cursor: pointer;
  margin-right: 60px;
`

export const SearchTab = () => {
  const [info, setInfo] = useAtom(SearchAtom)
  const navigate = useNavigate()
  return (
    <div className="flex flx-row">
      {menu.map((item, index) => (
        <Tab
          key={item.name}
          className={`${info.current === index && 'border-b border-green text-green'} ${
            info.current === 0 ? 'text-white' : 'text-am_333333'
          }`}
          color={info.current === Number(index) ? '#6CA100' : ''}
          onClick={() => {
            setInfo({ current: Number(index) })
            navigate(item.url)
          }}
        >
          {item.name}
        </Tab>
      ))}
    </div>
  )
}
