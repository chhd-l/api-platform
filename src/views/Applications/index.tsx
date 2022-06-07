import { SearchHeader } from '../../components/common/Layout/Header/SearchHeader'
import { Button, Table, Typography } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import { useNavigate } from 'react-router-dom'
import './Style.less'
import { Footer } from '../../components/common/Layout/Footer'
const { Title } = Typography

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

const Applications = () => {
  const navigator = useNavigate()

  const columns: ColumnsType<DataType> = [
    {
      title: 'Client Application',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Credentials',
      key: 'Credentials',
      width: 280,
      render: (_: any, record: any) => (
        <div className="flex items-center">
          <div className="CredentialsIcon" />
          <Button className="CredentialsBtn ml-3" type="primary">
            Delete
          </Button>
          <Button
            className="CredentialsBtn ml-3"
            type="primary"
            onClick={() => navigator('/applications/applicationsDetails')}
          >
            View
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="w-am1200 m-auto text-left Applications">
      <SearchHeader />
      <Title className="mt-12" level={3}>
        Applications
      </Title>
      <Table columns={columns} dataSource={data} pagination={false} />
      <Footer />
    </div>
  )
}

export default Applications
