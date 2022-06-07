import { atom } from 'jotai'
const urls = [
  {
    path: ['/search'],
    key: 0,
  },
  {
    path: ['/apis', '/apis/api-details'],
    key: 1,
  },
  {
    path: ['/applications', '/applications/applicationsDetails'],
    key: 2,
  },
]
const currentPath = () => {
  // console.log(window.location.pathname)
  const current = urls.filter((item) => item.path.includes(window.location.pathname))?.[0]?.key
  return current ?? 0
}

type SearchAtomType = {
  current: number
}
export const SearchAtom = atom<SearchAtomType>({
  current: currentPath(),
})
