import { Action } from 'redux'
// import { sendMessage } from './store/chat/actions'
// import { RootState } from './store'
import { ThunkAction } from 'redux-thunk'



// export function setCommands(newEntries: TerminalHistoryEntry[]): TerminalHistoryActionTypes {
//     return {
//       type: ADD_TERMINAL_HISTORY_ENTRIES,
//       payload: newEntries,
//     }
//   }

// export const thunkFetchCommands = (message: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
//   fetch('/commands')
//   .then(response => {
//     // setFiles(response.formData)
//     console.log(response.json())
//     dispatch()
//   })
//   .catch(error => console.log('error'))
    
//   // const asyncResp = await exampleAPI()
//   // dispatch(
//   //   sendMessage({
//   //     message,
//   //     user: asyncResp,
//   //     timestamp: new Date().getTime()
//   //   })
//   // )
// }

// should not be an export
export function exampleAPI() {
  return Promise.resolve('Async Chat Bot')
}
