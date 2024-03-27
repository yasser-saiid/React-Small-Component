import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true }
  }

  if (action.type === SET_STORIES) {
    return {
      ...state,
      hits: action.payload.hits,
      nbPages: action.payload.nbPages,
      isLoading: false,
    }
  }

  if (action.type === REMOVE_STORY) {
    const newStories = state.hits.filter(
      (story) => story.objectID !== action.payload
    )
    return { ...state, hits: newStories }
  }

  if (action.type === HANDLE_SEARCH) {
    return { ...state, query: action.payload }
  }

  if (action.type === HANDLE_PAGE) {
    if (action.payload === 'increase') {
      let nextPage = state.page + 1
      if (nextPage > state.nbPages - 1) {
        return { ...state, page: state.nbPages - 1 }
      }
      return { ...state, page: nextPage }
    }
    if (action.payload === 'decrease') {
      let prevPage = state.page - 1
      if (prevPage < 0) {
        return { ...state, page: 0 }
      }
      return { ...state, page: prevPage }
    }
  }

  throw new Error(`no matching ${action.type} your action`)
}

export default reducer
