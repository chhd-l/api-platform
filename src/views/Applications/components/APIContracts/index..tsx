import { Button, Table, Typography } from "antd"
import { ColumnsType } from "antd/lib/table";
const { Title } = Typography

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
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
  ];

const APIContracts = () => {

    const columns: ColumnsType<DataType> = [
      {
        title: 'API',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Environment / Instance',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'SLA Tier',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Request Status',
        key: 'Credentials',
        render: (_: any, record: any) => (
          <div className='flex items-center'>
            <div className='CredentialsIcon' />
            <Button className='text-am_6CA100' type="text">
                Pending
            </Button>
          </div>
        ),
      },
    ];

    return <div className="w-am1200 m-auto text-left">
        <Title style={{ marginBottom: '17px', marginTop:'50px' }} level={4}>
            API Contracts
        </Title>
        <Table columns={columns} dataSource={data} pagination={false} />
    </div>
}

export default APIContracts