import useAPI from './useAPI';

const useSearch = (name) => {
  const {response: heroDetails, loading, error} = useAPI({mode: 'search', name});
  
  return {
    heroDetails,
    loading,
    error
  }
}

export default useSearch;