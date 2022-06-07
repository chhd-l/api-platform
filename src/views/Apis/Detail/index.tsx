import styled from 'styled-components'
import { Footer } from '../../../components/common/Layout/Footer'
import { SearchHeader } from '../../../components/common/Layout/Header/SearchHeader'
import { AMCard } from './components/AMCard'
const Button = styled.div`
  width: 160px;
  height: 40px;
  background-color: #6ca100;
  text-align: center;
  line-height: 40px;
  color: #ffffff;
  border-radius: 4px;
`
export const ApiDetail = () => {
  return (
    <>
      <SearchHeader />
      <div className="w-am1200 m-auto text-left">
        <div className="text-am26 font-bold mt-am60 mb-am6">Pet API V2</div>
        <div className="mb-am18">Retrieve and modify pet data.</div>
        <Button className="mb-am24">Request Access</Button>
        <div>
          <AMCard />
        </div>
      </div>
      <Footer />
    </>
  )
}
