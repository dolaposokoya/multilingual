// languagr action
import {GET_LANGUAGE_TYPE, GET_LANGUAGE_TYPE_FAIL} from './actionType';
export const LanguageFetchReducer = (selectedLanguage) => {
  return (dispatch) => {
    dispatch({type: GET_LANGUAGE_TYPE, payload: selectedLanguage});
  };
};
