const state = {friends: []}

export function manageFriends(state, action) {

  const filteredList = state.friends?.filter(friend => friend.id !== action.payload)
  switch(action.type) {
    case "friends/add":
      return {friends: [...state.friends , action.payload]} ;
    case 'friends/remove':
      return {friends: filteredList};
    default:
      return state
  }
}
