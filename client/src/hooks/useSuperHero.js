import useAPI from './useAPI';

const useSuperHero = (id) => {
  const {response: heroDetails, loading, error} = useAPI({mode: 'id', id});
  
  return {
    heroDetails,
    loading,
    error
  }
}

export default useSuperHero;