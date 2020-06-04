import {CHANGE_TO_ENGLISH} from '../action/actionType';
import {CHANGE_TO_GERMAN} from '../action/actionType';
import english from '../translation/en/translation.json';
import german from '../translation/ge/translation.json';

const initialState = {
  language: english.text,
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TO_ENGLISH:
      console.log('English');
      // return {state:  {...state.initialState, languageData: action.payload}};
      return {...state, language: action.payload};
    case CHANGE_TO_GERMAN:
      console.log('German');
      return {...state, germanData: action.payload};
    default:
      return state;
  }
};

///real reduce
// import {ADD_METADATA} from "./actiontypes"
// const metadataReducer=(state={},action)=>{
// switch(action.type){
// case ADD_METADATA:
// return {...state,metaData:action.payload}
// default:
// return {...state}
// }
// }
// export default metadataReducer;

export default languageReducer;
