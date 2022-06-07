import { Form, Input, Typography } from "antd"
import { ProfileOutlined } from '@ant-design/icons';
const { Title } = Typography

const BasicInformation = () => {
    return <div>
        <Title className="title" style={{ marginBottom: '23px' }} level={4}>
            Basic Information
        </Title>
        <div className="flex">
            <div className="flex-1">
                <Form.Item
                    label="Application Name"
                    name="ApplicationName"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description( Optional )"
                    name="Description"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="OAuth 2.0 redirect URIS ( Optional )"
                    name="redirect"
                >
                    <Input />
                </Form.Item>
            </div>
            <div className="flex-1">
                <Form.Item
                    label="OAuth 2.0 redirect URIS ( Optional )"
                    shouldUpdate={(prevValues, curValues) => true}
                >
                    {
                        ({ getFieldValue }) => <div className="border p-4 border-solid border-gray-100">
                            <div className="flex items-center">
                                <div className="text-am_666666">Client id: </div>
                                <div className="flex-1"></div>
                                <div className="text-am_6CA100 flex items-center cursor-pointer"><ProfileOutlined className="mr-2" />Copy</div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-am_666666">Client Secret: </div>
                                <div className="flex-1"></div>
                                <div className="text-am_6CA100 flex items-center cursor-pointer"><ProfileOutlined className="mr-2" />Copy</div>
                            </div>
                        </div>
                    }
                </Form.Item>
            </div>
        </div>
    </div>
}

export default BasicInformation