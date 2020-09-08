export const ADD_SUPERHERO = 'ADD_SUPERHERO';


const dataReducer = (state, action) => {

  const actions = {

    ADD_SUPERHERO: {
      ...state,
      loading: false,
      superheros: [...state.superheros, action.superhero]
    }

  }


  return actions[action.type] || state;

  
}

export default dataReducer;