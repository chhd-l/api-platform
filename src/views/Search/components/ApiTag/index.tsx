import DownLoad from '../../../../assets/image/download.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

type ApiTagProps = {
  title: string
  desc: string
}

export const Button = styled.div`
  background: #6ca100;
  border-radius: 45px;
  width: 150px;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  color: #ffffff;
  text-align: center;
  /* margin: 0 auto; */
`

export const ApiTag = ({ title, desc }: ApiTagProps) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="mt-am20 flex flex-row items-center w-am342 m-auto">
        <img src={DownLoad} alt="" style={{ width: 34, height: 28, marginRight: 11 }} />
        <div className="text-am20 text-am_333333 font-bold ">{title}</div>
      </div>
      <div className="text-am16 text-am_666666 text-left mt-am25 mb-am30 w-am342 m-auto h-am57">{desc}</div>
      <div className="w-am342 m-auto text-left">
        <Button onClick={() => navigate('./api-details')}>API Details</Button>
      </div>
    </>
  )
}
