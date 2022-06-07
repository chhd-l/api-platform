import styled from 'styled-components'
import MyTitle from '../MyTitle'

const Wrapper = styled.div`
  background: #ffffff;
  border: 1px dashed #e6e6e6;
  border-radius: 4px 4px 0px;
  /* margin-right: 7%; */
  width: 1200px;
  margin: 0 auto;
`
const List = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px dashed #e6e6e6;
  line-height: 56px;
  font-size: 16px;
`
const data = [
  {
    date: '9 May 2022',
    text: 'Introduced Standalone Prices in Beta',
  },
  {
    date: '27 April 2022',
    text: 'OrderFromCartDraft Custom Fields now merge with Cart Custom Fields.',
  },
  {
    date: '14 April 2022',
    text: 'Added Cart replication to My Carts',
  },
  {
    date: '12 April 2022',
    text: "Added 'deleteAt' and 'deleteDaysAfterCreation' fields to API Clients in the GraphQL API",
  },
  {
    date: '8 April 2022',
    text: 'Added total tax to Carts, Orders, and Line Items',
  },
  {
    date: '1 April 2022',
    text: 'Added Reference Expansion for Product Attributes in the GraphQL API',
  },
  {
    date: '29 March 2022',
    text: 'Custom Applications v21.3',
  },
  {
    date: '24 March 2022',
    text: 'OrderFromCartDraft can now be extended with Custom Fields.',
  },
]

const ReleaseNotes = () => {
  return (
    <div className="pb-8">
      <MyTitle>Release Notes</MyTitle>
      <Wrapper>
        {data.map((item) => (
          <List key={item.text}>
            <div className=" text-left flex flex-row ml-6 text-am_568300">
              <div className="w-40 text-left">{item.date}</div>
              <div className="w-20 text-left">HTTP API</div>
            </div>
            <div className=" text-left ml-28">{item.text}</div>
          </List>
        ))}
      </Wrapper>
    </div>
  )
}

export default ReleaseNotes
