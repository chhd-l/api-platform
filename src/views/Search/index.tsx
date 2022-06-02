import { SearchHeader } from '../../components/common/Layout/Header/SearchHeader'
import { AMCarousel } from './components/AMCarousel'
import { AMSearch } from './components/AMSearch'

export const Search = () => {
  return (
    <>
      <SearchHeader />
      <AMSearch />
      <AMCarousel />
    </>
  )
}
