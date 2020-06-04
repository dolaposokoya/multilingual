import languageReducer from './languageReducer';
import LanguageReducer from './languageFetchReducer';
import {combineReducers} from 'redux';

const allreducer = combineReducers({
  languages: languageReducer,
  LanguageReducer: LanguageReducer,
});

export default allreducer;
