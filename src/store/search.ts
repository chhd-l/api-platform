import { atom } from 'jotai'

type SearchAtomType = {
  current: number
}
export const SearchAtom = atom<SearchAtomType>({
  current: 0,
})
