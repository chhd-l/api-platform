import { Card } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'
import { SearchHeader } from '../../../components/common/Layout/Header/SearchHeader'

const Button = styled.div`
  width: 160px;
  height: 40px;
  background-color: #6ca100;
  text-align: center;
  line-height: 40px;
  color: #ffffff;
  border-radius: 4px;
`
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

const contentList: Record<string, React.ReactNode> = {
  tab1: (
    <div className="">
      <p className="border-b border-gray-500 h-am49">Home</p>
      <p className="border-b border-gray-500 h-am49">Technical Section</p>
    </div>
  ),
  tab2: <p>content2</p>,
}
const AMCard = styled(Card)`
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
export const ApiDetail = () => {
  const [activeTabKey1, setActiveTabKey] = useState<string>('tab1')
  return (
    <>
      <SearchHeader />
      <div className="w-am1200 m-auto text-left">
        <div className="text-am26 font-bold mt-am60 mb-am6">Pet API V2</div>
        <div className="mb-am18">Retrieve and modify pet data.</div>
        <Button className="mb-am24">Request Access</Button>
        {/* <div>
          <div className="w-am273 flex text-am14">
            <span className="flex-1 font-medium">API Documentation</span>
            <span className="flex-1 font-medium">API Console</span>
          </div>
        </div> */}
        <AMCard
          style={{ width: 273 }}
          tabList={tabList}
          activeTabKey={activeTabKey1}
          onTabChange={(key) => setActiveTabKey(key)}
        >
          {contentList[activeTabKey1]}
        </AMCard>
      </div>
    </>
  )
}
