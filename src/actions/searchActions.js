import { Server } from "../api_client/apiClient";
import _ from "lodash";
import { adjustDateFormat, getPhotosFlatFromGroupedByDate } from "../util/util";

export const SEARCH_EMPTY_QUERY_ERROR = "SEARCH_EMPTY_QUERY_ERROR";
export const SEARCH_PHOTOS = "SEARCH_PHOTOS";
export const SEARCH_PHOTOS_FULFILLED = "SEARCH_PHOTOS_FULFILLED";
export const SEARCH_PHOTOS_REJECTED = "SEARCH_PHOTOS_REJECTED";
export function searchPhotos(query) {
  return function (dispatch) {
    if (query.trim().length === 0) {
      dispatch({ type: SEARCH_EMPTY_QUERY_ERROR });
    } else {
      dispatch({ type: SEARCH_PHOTOS, payload: query });
      Server.get(`photos/searchlist/?search=${query}`, { timeout: 100000 })
        .then((response) => {
          let photosGroupedByDate = response.data.results;
          adjustDateFormat(photosGroupedByDate);
          dispatch({
            type: SEARCH_PHOTOS_FULFILLED,
            payload: {
              photosFlat: getPhotosFlatFromGroupedByDate(response.data.results),
              photosGroupedByDate: photosGroupedByDate,
            },
          });
        })
        .catch((err) => {
          dispatch({ type: SEARCH_PHOTOS_REJECTED, payload: err });
        });
    }
  };
}

export function searchPeople(query) {
  return function (dispatch) {
    if (query.trim().length === 0) {
      dispatch({ type: SEARCH_EMPTY_QUERY_ERROR });
    } else {
      let url = `persons/?search=${query}`;
      dispatch({ type: "SEARCH_PEOPLE" });
      Server.get(url)
        .then((response) => {
          let mappedPeopleDropdownOptions = response.data.results.map(function (person) {
            return {
              key: person.id,
              value: person.name,
              text: person.name,
              face_url: person.face_url,
              face_count: person.face_count,
              face_photo_url: person.face_photo_url,
            };
          });
          dispatch({
            type: "SEARCH_PEOPLE_FULFILLED",
            payload: mappedPeopleDropdownOptions,
          });
        })
        .catch((err) => {
          dispatch({ type: "SEARCH_PEOPLE_REJECTED", payload: err });
        });
    }
  };
}

export function searchThingAlbums(query) {
  return function (dispatch) {
    dispatch({ type: "SEARCH_THING_ALBUMS" });
    Server.get(`albums/thing/list/?search=${query}`)
      .then((response) => {
        dispatch({
          type: "SEARCH_THING_ALBUMS_FULFILLED",
          payload: response.data.results,
        });
      })
      .catch((err) => {
        dispatch({ type: "SEARCH_THING_ALBUMS_REJECTED", payload: err });
      });
  };
}

export function searchPlaceAlbums(query) {
  return function (dispatch) {
    dispatch({ type: "SEARCH_PLACE_ALBUMS" });
    Server.get(`albums/place/list/?search=${query}`)
      .then((response) => {
        dispatch({
          type: "SEARCH_PLACE_ALBUMS_FULFILLED",
          payload: response.data.results,
        });
      })
      .catch((err) => {
        dispatch({ type: "SEARCH_PLACE_ALBUMS_REJECTED", payload: err });
      });
  };
}
