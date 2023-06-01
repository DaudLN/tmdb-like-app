import { create } from "zustand";

interface QueryParams {
  genreIds?: number[]; // Change the name to genreIds and make it an array
  searchParam?: string;
}

interface QueryParamsStore {
  queryParams: QueryParams;
  setGenreIds: (genreIds: number[]) => void; // Update the setter function name
  setSearchParam: (search: string) => void;
}

const useQueryParams = create<QueryParamsStore>((set) => ({
  queryParams: {},
  setSearchParam: (search) =>
    set(() => ({ queryParams: { searchParam: search } })),
  setGenreIds: (genreIds) =>
    set((state) => ({ queryParams: { ...state.queryParams, genreIds } })), // Update the property name to genreIds
}));

export default useQueryParams;
