import styled from 'styled-components'
import LOGO_black from '../../../assets/image/LOGO_black.png'

const Wrapper = styled.div`
  height: 340px;
  background-color: #f4f4f4;
  padding-left: 19%;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
`
const Logo = styled.img`
  height: 16px;
  width: 80px;
`
const Developer = [
  'HTTP API',
  'GraphQL API',
  'Platform Release Notes',
  'Custom Applications',
  'SDKs & Client Libraries',
  'Import & Export',
  'SUNRISE Starter Frontends',
  'Tutorials',
  'FAQ',
]
const MerchantCenter = ['Documentation', 'Release Notes']
const SignUp = ['Sign up', 'Log in', 'Tech Blog', 'Integrations', 'Status', 'Support', 'User Research Program']
const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className="text-left">
          <Logo src={LOGO_black} />
          <span className="text-am_373737">德勤</span>
        </div>
        <div className="text-am_333333 text-am12 text-left mx-20">
          <p className="font-bold">Developer Center</p>
          {Developer.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="text-am_333333 text-am12 text-left mr-20">
          <p className=" font-bold">Merchant Center</p>
          {MerchantCenter.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="text-am_333333 text-am12 text-left mr-20 border-l border-gray-400 pl-10 h-18">
          {SignUp.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Wrapper>
      <div className="border-t border-gray-400 ml-am_19 w-am1200" />
      <div className="flex ml-am_19 justify-between text-am12 text-am_333333 w-am1200">
        <span>Copyright © 2022 commercetools</span>
        <span>
          <span className="border-r border-gray-400 pr-2">Privacy Policy</span>
          <span className="ml-2">Imprint</span>
        </span>
      </div>
    </>
  )
}

export default Footer
