export const initialState = {
  avatar: '',
  favorites: [],
  appointments: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'USER_SET_AVATAR':
      return {...state, avatar: action.payload.avatar};
    default:
      return state;
  }
};
