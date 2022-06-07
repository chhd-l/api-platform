import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

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

  return (
    <div className="flex flx-row">
      {menu.map((item) => (
        <Tab
          key={item.name}
          className={`${location.pathname === item.url && 'border-b border-green text-green'} ${
            location.pathname === '/search' ? 'text-white' : 'text-am_333333'
          }`}
          color={location.pathname === item.url ? '#6CA100' : ''}
          onClick={() => {
            navigate(item.url)
          }}
        >
          {item.name}
        </Tab>
      ))}
    </div>
  )
}
