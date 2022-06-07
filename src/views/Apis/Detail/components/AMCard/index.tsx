import { Card } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'
import { IconFont } from '../../../../../components/common/IconFont'
import { SearchInput } from '../../../../../components/common/Layout/Header/components/SearchInput'
import { AMCollapse } from '../AMCollapse'

const tabList = [
  {
    key: 'tab1',
    tab: 'API Documentation',
  },
  {
    key: 'tab2',
    tab: 'API Console',
  },
]
const tabItems = ['Home', 'Technical Section']
const contentList: Record<string, React.ReactNode> = {
  tab1: (
    <div className="">
      {tabItems.map((item, index) => (
        <div
          className="border-t border-gray-500 h-am49 flex items-center pl-am_9 cursor-pointer text-am14 bg-gray-200"
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  ),
  tab2: (
    <>
      <div className="flex items-center justify-center py-am14 px-am20 h-am49 bg-gray-200">
        <SearchInput prefix={<IconFont type="icon-bianzu" />} placeholder=" search " allowClear />
      </div>
      <div className="text-am16 font-black bg-gray-700 h-am49 pl-am_9 flex items-center">Summary</div>
      <div>
        <AMCollapse />
      </div>
    </>
  ),
}

const MyCardTab = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
  .ant-card-head {
    padding: 0;
  }
  .ant-tabs-large > .ant-tabs-nav .ant-tabs-tab {
    font-size: 14px;
    font-weight: 500;
  }
  .ant-tabs-nav-list {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .ant-tabs-tab-active {
    border-bottom: 1px solid;
  }
`

export const AMCard = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>('tab1')
  return (
    <MyCardTab
      style={{ width: 273 }}
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={(key) => setActiveTabKey(key)}
    >
      {contentList[activeTabKey]}
    </MyCardTab>
  )
}
