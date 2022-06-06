import { Col, Row } from 'antd'
import _ from 'lodash'
import { IconFont } from '../../../../components/common/IconFont'
import { SearchInput } from '../../../../components/common/Layout/Header/components/SearchInput'
import Wrapper from '../../../../components/common/Wrapper'
import { ApiTag } from '../../../Search/components/ApiTag'

const data = [
  {
    title: 'Product API',
    desc: 'Outputs product data, breed reference data and product image meta data from WeShare.',
  },
  {
    title: 'Consumer API',
    desc: 'Create, update  and  retrieve  Company data.',
  },
  {
    title: 'Order API',
    desc: 'API to store and retrieve coupon data',
  },
  {
    title: 'Event API',
    desc: 'Permit to send an event to the Digital Factory EventGrid',
  },
  {
    title: 'Litter API',
    desc: 'Returns litter information created on Royal Start to enable markets to advertise litters, allocate welcome kits or feed loyalty programs',
  },
  {
    title: 'Metadata API',
    desc: 'Permit to retrieve APIF metadata',
  },
  {
    title: 'Nutrition API',
    desc: 'Consumes pet data and feeds an algorithm (Smart Algo); outputs a list of products with individual coverage percentage scores and rationing volumes (Smart RECO).',
  },
  {
    title: 'Pet API',
    desc: 'To retrieve and modify pet data.',
  },
  {
    title: 'Pet API V2',
    desc: 'Retrieve and modify pet data.',
  },
  {
    title: 'Pet Profile API',
    desc: 'The Pet Profile API allows you to get specific values to build a Pet Profile, depending on the breed, age and gender of your Pet.',
  },
  {
    title: 'Prescription API',
    desc: 'Create and retrieve prescriptions in the Royal Canin ecosystem for your pets',
  },
  {
    title: 'Subscription API',
    desc: 'Outputs product data, breed reference data and product image meta data from WeShare.',
  },
]
export const Catalog = () => {
  return (
    <div className="w-am1200 m-auto text-left">
      <div className=" text-am26 font-bold my-am50">API Catalog (23)</div>
      <div>Filter by Keywords</div>
      <SearchInput
        prefix={<IconFont type="icon-bianzu" />}
        allowClear
        style={{ width: 379, marginTop: 14 }}
        placeholder="input search content"
      />
      {_.chunk(data, 3).map((item: any, index: number) => (
        <Row key={index} gutter={25}>
          {item.map((child: any, key: number) => (
            <Col span={8} key={key}>
              <Wrapper width="382px" height="227px" className="my-am28">
                <ApiTag desc={child.desc} title={child.title} />
              </Wrapper>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  )
}
