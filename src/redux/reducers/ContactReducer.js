const initialState = [
  {
    id: 0,
    firstName: "John",
    lastName: "Doe",
    Mobile: 1234567890,
  },
  {
    id: 1,
    firstName: "Smitesh",
    lastName: "Patil",
    Mobile: 8698727129,
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;

    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;

    case "DELETE_CONTACT":
      const filterContacts = state.filter((contact) =>
        contact.id !== action.payload ? contact : null
      );
      state = filterContacts;
      return state;

    default:
      return state;
  }
};

export default contactReducer;
