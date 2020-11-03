export const ADD_SUPERHERO = 'ADD_SUPERHERO';
export const ADD_SUPERPOWER = 'ADD_SUPERPOWER';


const dataReducer = (state, action) => {

// action
// {type: ADD_SUPERPOWER, superpower: 'Laser'}

  const actions = {

    ADD_SUPERHERO: {
      ...state,
      loading: false,
      superheros: [...state.superheros, action.superhero]
    },

    ADD_SUPERPOWER: {
      ...state,
      superpower: action.superpower
    }



  }


  return actions[action.type] || state;

  
}

export default dataReducer;