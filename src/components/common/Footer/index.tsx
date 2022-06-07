import styled from 'styled-components'
import LOGO_black from '../../../assets/image/LOGO_black.png'

const Wrapper = styled.div`
  background-color: #f4f4f4;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  width: 1200px;
  margin: 0 auto;
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
    <div className="bg-gray-600">
      <Wrapper>
        <div className="text-left mr-am_5">
          <Logo src={LOGO_black} />
          <span className="text-am_373737">德勤</span>
        </div>
        <div className="text-am_333333 text-am12 text-left mr-am_5">
          <p className="font-bold">Developer Center</p>
          {Developer.map((item) => (
            <p key={item}>
              {item}
              {item === 'Custom Applications' && (
                <span className="text-am_058CDF bg-blue-500  p-1 rounded-sm">BETA</span>
              )}
            </p>
          ))}
        </div>
        <div className="text-am_333333 text-am12 text-left mr-am_33">
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
      <div className="border-t border-gray-400 w-am1200 m-auto" />
      <div className="flex  justify-between text-am12 text-am_333333  py-2 w-am1200 m-auto">
        <span>Copyright © 2022 Deloitte</span>
        <span>
          <span className="border-r border-gray-400 pr-2">Privacy Policy</span>
          <span className="ml-2">Imprint</span>
        </span>
      </div>
    </div>
  )
}

export default Footer
