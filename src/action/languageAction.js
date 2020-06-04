import {CHANGE_TO_ENGLISH} from './actionType';
import {CHANGE_TO_GERMAN} from './actionType';
import english from '../translation/en/translation.json';
import german from '../translation/ge/translation.json';

// const eng = english.text;
// const ger = german.text;
export const changeToEnglish = (lang) => {
  // if (typeof lang == 'function') lang(eng);
  return (dispatch) => {
    dispatch({type: CHANGE_TO_ENGLISH, payload: lang});
  };
};

export const changeToGerman = (lang) => {
  return (dispatch) => {
    dispatch({type: CHANGE_TO_GERMAN, payload: lang});
  };
};
