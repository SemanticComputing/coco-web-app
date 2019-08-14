import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
// import {createResponsiveStateReducer} from 'redux-responsive';
import manuscripts from './manuscripts';
import works from './works';
import events from './events';
import actors from './actors';
import places from './places';
import collections from './collections';
import expressions from './expressions';
import error from './error';
import manuscriptsFacets from './manuscriptsFacets';
import worksFacets from './worksFacets';
import eventsFacets from './eventsFacets';
import actorsFacets from './actorsFacets';
import placesFacets from './placesFacets';
import clientSideFacetedSearch from './clientSideFacetedSearch';

const reducer = combineReducers({
  manuscripts,
  manuscriptsFacets,
  works,
  worksFacets,
  events,
  eventsFacets,
  actors,
  actorsFacets,
  places,
  placesFacets,
  collections,
  expressions,
  clientSideFacetedSearch,
  error,
  toastr: toastrReducer,
  // browser: createResponsiveStateReducer({
  //   extraSmall: 500,
  //   small: 700,
  //   medium: 1000,
  //   large: 1400,
  //   extraLarge: 1600,
  // }),
});

export default reducer;
