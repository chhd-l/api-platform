import { Form } from "antd"
import { SearchHeader } from "../../../../components/common/Layout/Header/SearchHeader"
import APIContracts from "../APIContracts/index."
import BasicInformation from "../BasicInformation"
import Metrics from "../Metrics"
import './Style.less'

const ApplicationsDetails = () => {
    return <div className="w-am1200 m-auto text-left pb-am110 ApplicationsDetails">
        <SearchHeader />
        <div style={{marginTop:'49px'}}>
            <Form
                wrapperCol={{ span: 16 }}
                layout='vertical'
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <BasicInformation />
            </Form>
            <Metrics />
            <APIContracts />
        </div>
    </div>
}

export default ApplicationsDetails