//REDUCERS

const initialState = {
    isLoading: false,
    smurfs: [],
    selectedSmurf: null
}

export const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'FETCHING_DATA_START':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCHING_DATA_SUCCESS':
            console.log(action.payload)
            return {
                ...state,
                smurfs: [
                    ...action.payload
                ],
                isLoading: false
            }
        case 'POSTING_DATA_START':
            return {
                ...state,
                isLoading: true
            }

        case 'POSTING_DATA_SUCCESS':
            return state

        case 'TEST_CALL':
            console.log('test worked!'); 
            return state
        
        case 'SELECT_SMURF':
            return {
                ...state,
                selectedSmurf: action.payload
            }
        
        default:
            return state;
    }
}