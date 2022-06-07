import styled from 'styled-components'
import _ from 'lodash'

const style = `underline text-green cursor-pointer`
const Box = styled.div`
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  height: 212px;
  width: 545px;
  text-align: left;
  padding: 19px 24px;
  margin-right: 24px;
  margin-top: 35px;
`

const data = [
  {
    title: 'HTTP API',
    desc: 'The HTTP API documentation contains data representations for each resource together with the HTTP methods for accessing them on the Platform. The configuration parameters for commercetools Projects are listed there as well as methods for customizing resources and the behavior of API calls.',
  },
  {
    title: 'GraphQL',
    desc: (
      <span>
        Our <span className={style}>GraphQL API</span> allows network efficient and expressive data queries and
        mutations of resources on the commercetools platform.
      </span>
    ),
  },
  {
    title: 'General Topics',
    desc: (
      <span>
        This chapter is about the topics that apply to all API endpoints, such as
        <span className={style}>Authorization</span> ,<span className={style}>Versioning</span> , and
        <span className={style}>Consistency</span> .There you will find the
        <span className={style}>Regions</span> in which the platforms are available foryour project as well as the
        <span className={style}>APl Contract</span> .
      </span>
    ),
  },
  {
    title: 'Best Practices',
    desc: (
      <span>
        Please follow our <span className={style}> Performance Tips</span> to get fast responses for your API calls to
        the platform. There you will find best practices about optimizing query and search requests, for instance.
      </span>
    ),
  },
]

export const ReleaseNotes = () => {
  return (
    <div className="pb-8">
      {_.chunk(data, 2).map((item, key) => (
        <div className="flex flex-row items-center  justify-center" key={key}>
          {item.map((child, index) => (
            <Box key={index}>
              <div className="text-am24 font-bold">{child.title}</div>
              <div className="text-am16">{child.desc}</div>
            </Box>
          ))}
        </div>
      ))}
    </div>
  )
}
