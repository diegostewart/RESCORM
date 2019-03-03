function screenRenderReducer(state = 0, action){
  switch (action.type){
  case 'RENDER_SCREEN':
  
    return action.screen
  
  default:
    return state
  }
}

export default screenRenderReducer;