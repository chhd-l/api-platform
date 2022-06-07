import { Pagination } from 'antd'
import { Footer } from '../../components/common/Layout/Footer'
import { SearchHeader } from '../../components/common/Layout/Header/SearchHeader'
import { Catalog } from './components/Catalog'

export const Apis = () => {
  return (
    <>
      <SearchHeader />
      <Catalog />
      <Pagination total={60} showQuickJumper showSizeChanger={false} pageSizeOptions={[12]} />
      <Footer />
    </>
  )
}
