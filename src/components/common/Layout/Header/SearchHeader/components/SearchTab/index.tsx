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
    url: '/applications',
  },
]

const urls = ['/detail', '/search', '/apis', '/apis/api-details', 'applicationsDetails', 'applications']

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
  const navigate = useNavigate()
  const location = useLocation()
  const [info, setInfo] = useAtom(SearchAtom)
  return (
    <div className="flex flx-row">
      {menu.map((item, index) => (
        <Tab
          key={item.name}
          className={`${index === info.current && 'border-b border-green text-green'} ${
            location.pathname === '/search' ? 'text-white' : 'text-am_333333'
          }`}
          color={index === info.current ? '#6CA100' : ''}
          onClick={() => {
            setInfo({ current: index })
            navigate(item.url)
          }}
        >
          {item.name}
        </Tab>
      ))}
    </div>
  )
}
