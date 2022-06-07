import { Collapse } from 'antd'
import styled from 'styled-components'

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
const MyCollapse = styled(Collapse)`
  .ant-collapse-header {
    font-weight: 700;
    font-size: 14px;
    padding: 12px 24px !important;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0 0 0 24px;
    font-size: 14px;
  }
  .ant-collapse > .ant-collapse-item {
    border: none;
  }
  .ant-collapse {
    border: none;
  }
`

export const AMCollapse = () => {
  return (
    <MyCollapse
      defaultActiveKey={['1']}
      // onChange={onChange}
      expandIconPosition="right"
    >
      <Panel header="Endpoints" key="1">
        <div className="leading-am26 h-am26">General Concepts</div>
        <div className="leading-am26 h-am26">API Contract</div>
        <div className="leading-am26 h-am26">Limits</div>
        <div className="leading-am26 h-am26">Common Types</div>
      </Panel>
      <Panel header="Documentation" key="2">
        <div>{text}</div>
      </Panel>
      <Panel header="Types" key="3">
        <div>{text}</div>
      </Panel>
    </MyCollapse>
  )
}
