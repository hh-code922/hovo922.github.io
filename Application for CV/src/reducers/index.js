import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import tracks from './tracks';
import playLists from './playLists';
import findeName from './findeName'
import Info from '../component/info.js'
import Social from '../component/social.js'
import Experiance from '../component/experiance'
import Skills from '../component/sills.js'
import Languages from '../component/languages.js'
import Education from '../component/education'
import AddImg from '../component/addImg.js'
import Profession from '../component/profession.js'



export default combineReducers({
  routing: routerReducer,
  tracks,
  playLists,
  findeName,
  AddImg,
  Info,
  Social,
  Experiance,
  Skills,
  Languages,
  Education,
  Profession
})