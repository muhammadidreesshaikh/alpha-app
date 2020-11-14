import { 
    GET_USERS,
    ADD_TO_CART,
    REMOVE_ITEM,
    UPDATE_ITEM
  } from "../actions/actions";
  
  let INITIAL_STATE = {
    loading : false,
    Users: [],
    Items: [],
    AddedItems: [],
    Total: 0
  };

  let AddedItems = [];
  let Total = 0;
  
  export default (state = INITIAL_STATE, action) => {
    //  console.log("task reducer"  , action);
  
    switch (action.type) {
      case GET_USERS: {
        return {
          ...state,
          Users: action.users,
          loading: false
        };
      }
      case ADD_TO_CART: {
        if (AddedItems.some(item => item.id == action.item.id)) {
          AddedItems = [...AddedItems];

          let total = 0;
          AddedItems.forEach((element, i) => {
              total = total + parseFloat(element.tamount);
          });
          Total = total;

        } else {
          AddedItems = [...AddedItems, action.item];

          let total = 0;
          AddedItems.forEach((element, i) => {
              total = total + parseFloat(element.tamount);
          });
          Total = total;
        }

        return {
            ...state,
            AddedItems: [...new Set(AddedItems)],
            Total: Total,
            loading: false
        };
      }
      case REMOVE_ITEM: {
        AddedItems = AddedItems.filter(item => item.id != action.item.id);

        let total = 0;
        AddedItems.forEach((element, i) => {
            total = total + parseFloat(element.tamount);
        });
        Total = total;

        return {
            ...state,
            AddedItems: [...new Set(AddedItems)],
            Total: Total,
            loading: false
        };
      }
      case UPDATE_ITEM: {
        AddedItems = AddedItems.filter(item => item.id != action.item.id);

        let total = 0;
        AddedItems.forEach((element, i) => {
            total = total + parseFloat(element.tamount);
        });
        Total = total;

        return {
            ...state,
            AddedItems: [...AddedItems, action.item],
            Total: Total,
            loading: false
        };
      }
      default:
        return state;
    }
  };