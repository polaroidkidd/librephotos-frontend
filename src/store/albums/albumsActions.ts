import _ from "lodash";
import { notify } from "reapop";

import { push } from "connected-react-router";

import type { Dispatch } from "react";

import type {
  AlbumInfo,
  ThingAlbum,
  UserAlbumInfo,
  UserAlbumDetails,
  PlaceAlbumInfo,
  AutoAlbumInfo,
  AutoAlbum,
} from "./albumActions.types";
import {
  _FetchThingAlbumsListResponseSchema,
  _FetchThingAlbumResponseSchema,
  _FetchUserAlbumsListResponseSchema,
  UserAlbumSchema,
  _UserAlbumEditResponseSchema,
  _FetchPlaceAlbumsListResponseSchema,
  PlaceAlbumSchema,
  _FetchAutoAlbumsListResponseSchema,
  _FetchUserAlbumsSharedResponseSchema,
  _FetchDateAlbumsListResponseSchema,
  AutoAlbumSchema,
  UserAlbumInfoSchema,
} from "./albumActions.types";
import { z } from "zod";
import { Server } from "../../api_client/apiClient";
import type { DatePhotosGroup, IncompleteDatePhotosGroup } from "../../actions/photosActions.types";
import { IncompleteDatePhotosGroupSchema } from "../../actions/photosActions.types";
import {
  addTempElementsToGroups,
  adjustDateFormat,
  adjustDateFormatForSingleGroup,
  getPhotosFlatFromGroupedByDate,
} from "../../util/util";
import i18n from "../../i18n";
import { PhotosetType } from "../../reducers/photosReducer";
import type { AppDispatch } from "../store";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { defaultSliceState } from "./albumsReducer";

export enum ALBUM_ACTIONS {
  FETCH_ALBUMS_SHARED_TO_ME = "FETCH_ALBUMS_SHARED_TO_ME",
  FETCH_ALBUMS_SHARED_TO_ME_FULFILLED = "FETCH_ALBUMS_SHARED_TO_ME_FULFILLED",
  FETCH_ALBUMS_SHARED_TO_ME_REJECTED = "FETCH_ALBUMS_SHARED_TO_ME_REJECTED",
  FETCH_ALBUMS_SHARED_FROM_ME = "FETCH_ALBUMS_SHARED_FROM_ME",
  FETCH_ALBUMS_SHARED_FROM_ME_FULFILLED = "FETCH_ALBUMS_SHARED_FROM_ME_FULFILLED",
  FETCH_ALBUMS_SHARED_FROM_ME_REJECTED = "FETCH_ALBUMS_SHARED_FROM_ME_REJECTED",
  FETCH_AUTO_ALBUMS = "FETCH_AUTO_ALBUMS",
  FETCH_AUTO_ALBUMS_REJECTED = "FETCH_AUTO_ALBUMS_REJECTED",
  FETCH_AUTO_ALBUMS_FULFILLED = "FETCH_AUTO_ALBUMS_FULFILLED",
  GENERATE_AUTO_ALBUMS = "GENERATE_AUTO_ALBUMS",
  GENERATE_AUTO_ALBUMS_REJECTED = "GENERATE_AUTO_ALBUMS_REJECTED",
  GENERATE_AUTO_ALBUMS_FULFILLED = "GENERATE_AUTO_ALBUMS_FULFILLED",
  FETCH_AUTO_ALBUMS_LIST = "FETCH_AUTO_ALBUMS_LIST",
  FETCH_AUTO_ALBUMS_LIST_REJECTED = "FETCH_AUTO_ALBUMS_LIST_REJECTED",
  FETCH_AUTO_ALBUMS_LIST_FULFILLED = "FETCH_AUTO_ALBUMS_LIST_FULFILLED",
  FETCH_AUTO_ALBUMS_RETRIEVE = "FETCH_AUTO_ALBUMS_RETRIEVE",
  FETCH_AUTO_ALBUMS_RETRIEVE_REJECTED = "FETCH_AUTO_ALBUMS_RETRIEVE_REJECTED",
  FETCH_AUTO_ALBUMS_RETRIEVE_FULFILLED = "FETCH_AUTO_ALBUMS_RETRIEVE_FULFILLED",
  SET_IDX_TO_IMAGE_HASH = "SET_IDX_TO_IMAGE_HASH",
  FETCH_THING_ALBUMS_LIST = "FETCH_THING_ALBUMS_LIST",
  FETCH_THING_ALBUMS_LIST_REJECTED = "FETCH_THING_ALBUMS_LIST_REJECTED",
  FETCH_THING_ALBUMS_LIST_FULFILLED = "FETCH_THING_ALBUMS_LIST_FULFILLED",
  GROUP_PLACE_ALBUMS_BY_GEOLOCATION_LEVEL = "GROUP_PLACE_ALBUMS_BY_GEOLOCATION_LEVEL",
  FETCH_PLACE_ALBUMS_LIST = "FETCH_PLACE_ALBUMS_LIST",
  FETCH_PLACE_ALBUMS_LIST_REJECTED = "FETCH_PLACE_ALBUMS_LIST_REJECTED",
  FETCH_PLACE_ALBUMS_LIST_FULFILLED = "FETCH_PLACE_ALBUMS_LIST_FULFILLED",
  FETCH_PLACE_ALBUMS = "FETCH_PLACE_ALBUMS",
  FETCH_PLACE_ALBUMS_REJECTED = "FETCH_PLACE_ALBUMS_REJECTED",
  FETCH_PLACE_ALBUMS_FULFILLED = "FETCH_PLACE_ALBUMS_FULFILLED",
  FETCH_THING_ALBUMS = "FETCH_THING_ALBUMS",
  FETCH_THING_ALBUMS_REJECTED = "FETCH_THING_ALBUMS_REJECTED",
  FETCH_THING_ALBUMS_FULFILLED = "FETCH_THING_ALBUMS_FULFILLED",
  FETCH_USER_ALBUMS_LIST = "FETCH_USER_ALBUMS_LIST",
  FETCH_USER_ALBUMS_LIST_REJECTED = "FETCH_USER_ALBUMS_LIST_REJECTED",
  FETCH_USER_ALBUMS_LIST_FULFILLED = "FETCH_USER_ALBUMS_LIST_FULFILLED",
  ETCH_USER_ALBUM_FULFILLE = "FETCH_USER_ALBUM_FULFILLED",
  ETCH_USER_ALBUM_REJECTE = "FETCH_USER_ALBUM_REJECTED",
  TOGGLE_ALBUM_AUTO_FAVORITE = "TOGGLE_ALBUM_AUTO_FAVORITE",
  TOGGLE_ALBUM_AUTO_FAVORITE_REJECTED = "TOGGLE_ALBUM_AUTO_FAVORITE_REJECTED",
  TOGGLE_ALBUM_AUTO_FAVORITE_FULFILLED = "TOGGLE_ALBUM_AUTO_FAVORITE_FULFILLED",
  FETCH_USER_ALBUM = "FETCH_USER_ALBUM",
  FETCH_USER_ALBUM_FULFILLED = "FETCH_USER_ALBUM_FULFILLED",
  FETCH_USER_ALBUM_REJECTED = "FETCH_USER_ALBUM_REJECTED",
  CREATE_USER_ALBUMS_LIST_REJECTED = "CREATE_USER_ALBUMS_LIST_REJECTED",
  CREATE_USER_ALBUMS_LIST_FULFILLED = "CREATE_USER_ALBUMS_LIST_FULFILLED",
  CREATE_USER_ALBUMS_LIST = "CREATE_USER_ALBUMS_LIST",
  RENAME_USER_ALBUM = "RENAME_USER_ALBUM",
  RENAME_USER_ALBUM_FULFILLED = "RENAME_USER_ALBUM_FULFILLED",
  RENAME_USER_ALBUM_REJECTED = "RENAME_USER_ALBUM_REJECTED",
  DELETE_USER_ALBUM = "DELETE_USER_ALBUM",
  DELETE_USER_ALBUM_FULFILLED = "DELETE_USER_ALBUM_FULFILLED",
  DELETE_USER_ALBUM_REJECTED = "DELETE_USER_ALBUM_REJECTED",
  SET_ALBUM_USER_SHARED_FULFILLED = "SET_ALBUM_USER_SHARED_FULFILLED",
  SET_ALBUM_USER_SHARED = "SET_ALBUM_USER_SHARED",
  FETCH_DATE_ALBUMS_RETRIEVE_REJECTED = "FETCH_DATE_ALBUMS_RETRIEVE_REJECTED",
  FETCH_DATE_ALBUMS_RETRIEVE_FULFILLED = "FETCH_DATE_ALBUMS_RETRIEVE_FULFILLED",
  FETCH_DATE_ALBUMS_RETRIEVE = "FETCH_DATE_ALBUMS_RETRIEVE",
  FETCH_DATE_ALBUMS_LIST_REJECTED = "FETCH_DATE_ALBUMS_LIST_REJECTED",
  FETCH_DATE_ALBUMS_LIST_FULFILLED = "FETCH_DATE_ALBUMS_LIST_FULFILLED",
  FETCH_DATE_ALBUMS_LIST = "FETCH_DATE_ALBUMS_LIST",
  EDIT_USER_ALBUMS_LIST_REJECTED = "EDIT_USER_ALBUMS_LIST_REJECTED",
  EDIT_USER_ALBUMS_LIST_FULFILLED = "EDIT_USER_ALBUMS_LIST_FULFILLED",
  EDIT_USER_ALBUMS_LIST = "EDIT_USER_ALBUMS_LIST",
  REMOVE_USER_ALBUMS_LIST_REJECTED = "REMOVE_USER_ALBUMS_LIST_REJECTED",
  REMOVE_USER_ALBUMS_LIST_FULFILLED = "REMOVE_USER_ALBUMS_LIST_FULFILLED",
  REMOVE_USER_ALBUMS_LIST = "REMOVE_USER_ALBUMS_LIST",
}

const albumActions = {
  fetchAlbumsSharedToMe: createAction(ALBUM_ACTIONS.FETCH_ALBUMS_SHARED_TO_ME),
  fetchAlbumsSharedToMeFulfilled: createAction<string[]>(ALBUM_ACTIONS.FETCH_ALBUMS_SHARED_TO_ME_FULFILLED),
  fetchAlbumsSharedToMeRejected: createAction(ALBUM_ACTIONS.FETCH_ALBUMS_SHARED_TO_ME_REJECTED),
  fetchAlbumsSharedFromMe: createAction(ALBUM_ACTIONS.FETCH_ALBUMS_SHARED_FROM_ME),
  fetchAlbumsSharedFromMeFulfilled: createAction(ALBUM_ACTIONS.FETCH_ALBUMS_SHARED_FROM_ME_FULFILLED),
  fetchAlbumsSharedFromMeRejected: createAction(ALBUM_ACTIONS.FETCH_ALBUMS_SHARED_FROM_ME_REJECTED),
  fetchAutoAlbums: createAction(ALBUM_ACTIONS.FETCH_AUTO_ALBUMS),
  fetchAutoAlbumsRejected: createAction(ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_REJECTED),
  fetchAutoAlbumsFulfilled: createAction(ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_FULFILLED),
  generateAutoAlbums: createAction(ALBUM_ACTIONS.GENERATE_AUTO_ALBUMS),
  generateAutoAlbumsRejected: createAction(ALBUM_ACTIONS.GENERATE_AUTO_ALBUMS_REJECTED),
  generateAutoAlbumsFulfilled: createAction(ALBUM_ACTIONS.GENERATE_AUTO_ALBUMS_FULFILLED),
  fetchAutoAlbumsList: createAction(ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_LIST),
  fetchAutoAlbumsListRejected: createAction(ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_LIST_REJECTED),
  fetchAutoAlbumsListFulfilled: createAction(ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_LIST_FULFILLED),
  fetchAutoAlbumsRetrieve: createAction(ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_RETRIEVE),
  fetchAutoAlbumsRetrieveRejected: createAction(ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_RETRIEVE_REJECTED),
  fetchAutoAlbumsRetrieveFulfilled: createAction(ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_RETRIEVE_FULFILLED),
  setIdxToImageHash: createAction(ALBUM_ACTIONS.SET_IDX_TO_IMAGE_HASH),
  fetchThingAlbumsList: createAction(ALBUM_ACTIONS.FETCH_THING_ALBUMS_LIST),
  fetchThingAlbumsListRejected: createAction(ALBUM_ACTIONS.FETCH_THING_ALBUMS_LIST_REJECTED),
  fetchThingAlbumsListFulfilled: createAction(ALBUM_ACTIONS.FETCH_THING_ALBUMS_LIST_FULFILLED),
  groupPlaceAlbumsByGeolocationLevel: createAction(ALBUM_ACTIONS.GROUP_PLACE_ALBUMS_BY_GEOLOCATION_LEVEL),
  fetchPlaceAlbumsList: createAction(ALBUM_ACTIONS.FETCH_PLACE_ALBUMS_LIST),
  fetchPlaceAlbumsListRejected: createAction(ALBUM_ACTIONS.FETCH_PLACE_ALBUMS_LIST_REJECTED),
  fetchPlaceAlbumsListFulfilled: createAction(ALBUM_ACTIONS.FETCH_PLACE_ALBUMS_LIST_FULFILLED),
  fetchPlaceAlbums: createAction(ALBUM_ACTIONS.FETCH_PLACE_ALBUMS),
  fetchPlaceAlbumsRejected: createAction(ALBUM_ACTIONS.FETCH_PLACE_ALBUMS_REJECTED),
  fetchPlaceAlbumsFulfilled: createAction(ALBUM_ACTIONS.FETCH_PLACE_ALBUMS_FULFILLED),
  fetchThingAlbums: createAction(ALBUM_ACTIONS.FETCH_THING_ALBUMS),
  fetchThingAlbumsRejected: createAction(ALBUM_ACTIONS.FETCH_THING_ALBUMS_REJECTED),
  fetchThingAlbumsFulfilled: createAction(ALBUM_ACTIONS.FETCH_THING_ALBUMS_FULFILLED),
  fetchUserAlbumsList: createAction(ALBUM_ACTIONS.FETCH_USER_ALBUMS_LIST),
  fetchUserAlbumsListRejected: createAction(ALBUM_ACTIONS.FETCH_USER_ALBUMS_LIST_REJECTED),
  fetchUserAlbumsListFulfilled: createAction(ALBUM_ACTIONS.FETCH_USER_ALBUMS_LIST_FULFILLED),
  etchUserAlbumFulfille: createAction(ALBUM_ACTIONS.ETCH_USER_ALBUM_FULFILLE),
  etchUserAlbumRejecte: createAction(ALBUM_ACTIONS.ETCH_USER_ALBUM_REJECTE),
  toggleAlbumAutoFavorite: createAction(ALBUM_ACTIONS.TOGGLE_ALBUM_AUTO_FAVORITE),
  toggleAlbumAutoFavoriteRejected: createAction(ALBUM_ACTIONS.TOGGLE_ALBUM_AUTO_FAVORITE_REJECTED),
  toggleAlbumAutoFavoriteFulfilled: createAction(ALBUM_ACTIONS.TOGGLE_ALBUM_AUTO_FAVORITE_FULFILLED),
  fetchUserAlbum: createAction(ALBUM_ACTIONS.FETCH_USER_ALBUM),
  fetchUserAlbumFulfilled: createAction(ALBUM_ACTIONS.FETCH_USER_ALBUM_FULFILLED),
  fetchUserAlbumRejected: createAction(ALBUM_ACTIONS.FETCH_USER_ALBUM_REJECTED),
  createUserAlbumsListRejected: createAction(ALBUM_ACTIONS.CREATE_USER_ALBUMS_LIST_REJECTED),
  createUserAlbumsListFulfilled: createAction(ALBUM_ACTIONS.CREATE_USER_ALBUMS_LIST_FULFILLED),
  createUserAlbumsList: createAction(ALBUM_ACTIONS.CREATE_USER_ALBUMS_LIST),
  renameUserAlbum: createAction(ALBUM_ACTIONS.RENAME_USER_ALBUM),
  renameUserAlbumFulfilled: createAction(ALBUM_ACTIONS.RENAME_USER_ALBUM_FULFILLED),
  renameUserAlbumRejected: createAction(ALBUM_ACTIONS.RENAME_USER_ALBUM_REJECTED),
  deleteUserAlbum: createAction(ALBUM_ACTIONS.DELETE_USER_ALBUM),
  deleteUserAlbumFulfilled: createAction(ALBUM_ACTIONS.DELETE_USER_ALBUM_FULFILLED),
  deleteUserAlbumRejected: createAction(ALBUM_ACTIONS.DELETE_USER_ALBUM_REJECTED),
  setAlbumUserSharedFulfilled: createAction(ALBUM_ACTIONS.SET_ALBUM_USER_SHARED_FULFILLED),
  setAlbumUserShared: createAction(ALBUM_ACTIONS.SET_ALBUM_USER_SHARED),
  fetchDateAlbumsRetrieveRejected: createAction(ALBUM_ACTIONS.FETCH_DATE_ALBUMS_RETRIEVE_REJECTED),
  fetchDateAlbumsRetrieveFulfilled: createAction(ALBUM_ACTIONS.FETCH_DATE_ALBUMS_RETRIEVE_FULFILLED),
  fetchDateAlbumsRetrieve: createAction(ALBUM_ACTIONS.FETCH_DATE_ALBUMS_RETRIEVE),
  fetchDateAlbumsListRejected: createAction(ALBUM_ACTIONS.FETCH_DATE_ALBUMS_LIST_REJECTED),
  fetchDateAlbumsListFulfilled: createAction(ALBUM_ACTIONS.FETCH_DATE_ALBUMS_LIST_FULFILLED),
  fetchDateAlbumsList: createAction(ALBUM_ACTIONS.FETCH_DATE_ALBUMS_LIST),
  editUserAlbumsListRejected: createAction(ALBUM_ACTIONS.EDIT_USER_ALBUMS_LIST_REJECTED),
  editUserAlbumsListFulfilled: createAction(ALBUM_ACTIONS.EDIT_USER_ALBUMS_LIST_FULFILLED),
  editUserAlbumsList: createAction(ALBUM_ACTIONS.EDIT_USER_ALBUMS_LIST),
  removeUserAlbumsListRejected: createAction(ALBUM_ACTIONS.REMOVE_USER_ALBUMS_LIST_REJECTED),
  removeUserAlbumsListFulfilled: createAction(ALBUM_ACTIONS.REMOVE_USER_ALBUMS_LIST_FULFILLED),
  removeUserAlbumsList: createAction(ALBUM_ACTIONS.REMOVE_USER_ALBUMS_LIST),
};

const albumsReducer = createReducer(defaultSliceState, (builder) => {
  builder

    .addCase(albumActions.fetchAlbumsSharedToMe, (state, action) => {
      return { ...state, fetchingAlbumsSharedToMe: true };
    })
    .addCase(albumActions.fetchAlbumsSharedToMeFulfilled, (state, action) => {
      return {
        ...state,
        fetchingAlbumsSharedToMe: false,
        fetchedAlbumsSharedToMe: true,
        albumsSharedToMe: action.payload,
      };
    })
    .addCase(albumActions.fetchAlbumsSharedToMeRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchAlbumsSharedFromMe, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchAlbumsSharedFromMeFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchAlbumsSharedFromMeRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchAutoAlbums, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchAutoAlbumsRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchAutoAlbumsFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.generateAutoAlbums, (state, action) => {
      return state;
    })
    .addCase(albumActions.generateAutoAlbumsRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.generateAutoAlbumsFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchAutoAlbumsList, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchAutoAlbumsListRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchAutoAlbumsListFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchAutoAlbumsRetrieve, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchAutoAlbumsRetrieveRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchAutoAlbumsRetrieveFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.setIdxToImageHash, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchThingAlbumsList, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchThingAlbumsListRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchThingAlbumsListFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.groupPlaceAlbumsByGeolocationLevel, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchPlaceAlbumsList, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchPlaceAlbumsListRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchPlaceAlbumsListFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchPlaceAlbums, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchPlaceAlbumsRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchPlaceAlbumsFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchThingAlbums, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchThingAlbumsRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchThingAlbumsFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchUserAlbumsList, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchUserAlbumsListRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchUserAlbumsListFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.etchUserAlbumFulfille, (state, action) => {
      return state;
    })
    .addCase(albumActions.etchUserAlbumRejecte, (state, action) => {
      return state;
    })
    .addCase(albumActions.toggleAlbumAutoFavorite, (state, action) => {
      return state;
    })
    .addCase(albumActions.toggleAlbumAutoFavoriteRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.toggleAlbumAutoFavoriteFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchUserAlbum, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchUserAlbumFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchUserAlbumRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.createUserAlbumsListRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.createUserAlbumsListFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.createUserAlbumsList, (state, action) => {
      return state;
    })
    .addCase(albumActions.renameUserAlbum, (state, action) => {
      return state;
    })
    .addCase(albumActions.renameUserAlbumFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.renameUserAlbumRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.deleteUserAlbum, (state, action) => {
      return state;
    })
    .addCase(albumActions.deleteUserAlbumFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.deleteUserAlbumRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.setAlbumUserSharedFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.setAlbumUserShared, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchDateAlbumsRetrieveRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchDateAlbumsRetrieveFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchDateAlbumsRetrieve, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchDateAlbumsListRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchDateAlbumsListFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.fetchDateAlbumsList, (state, action) => {
      return state;
    })
    .addCase(albumActions.editUserAlbumsListRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.editUserAlbumsListFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.editUserAlbumsList, (state, action) => {
      return state;
    })
    .addCase(albumActions.removeUserAlbumsListRejected, (state, action) => {
      return state;
    })
    .addCase(albumActions.removeUserAlbumsListFulfilled, (state, action) => {
      return state;
    })
    .addCase(albumActions.removeUserAlbumsList, (state, action) => {
      return state;
    });
});

export function fetchThingAlbumsList() {
  return function (dispatch: Dispatch<any>): void {
    dispatch({ type: ALBUM_ACTIONS.FETCH_THING_ALBUMS_LIST });
    Server.get("albums/thing/list/")
      .then((response) => {
        const data = _FetchThingAlbumsListResponseSchema.parse(response.data);
        const albumInfoList: AlbumInfo[] = data.results;
        dispatch({
          type: ALBUM_ACTIONS.FETCH_THING_ALBUMS_LIST_FULFILLED,
          payload: albumInfoList,
        });
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.FETCH_THING_ALBUMS_LIST_REJECTED, payload: err });
      });
  };
}

export function fetchThingAlbum(album_id: string) {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.FETCH_THING_ALBUMS });
    Server.get(`albums/thing/${album_id}/`)
      .then((response) => {
        const data = _FetchThingAlbumResponseSchema.parse(response.data);
        const thingAlbum: ThingAlbum = data.results;
        dispatch({
          type: ALBUM_ACTIONS.FETCH_THING_ALBUMS_FULFILLED,
          payload: thingAlbum,
        });
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.FETCH_THING_ALBUMS_REJECTED, payload: err });
      });
  };
}

export function fetchUserAlbumsList() {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.FETCH_USER_ALBUMS_LIST });
    Server.get("albums/user/list/")
      .then((response) => {
        const data = _FetchUserAlbumsListResponseSchema.parse(response.data);
        const userAlbumInfoList: UserAlbumInfo[] = data.results;
        dispatch({
          type: ALBUM_ACTIONS.FETCH_USER_ALBUMS_LIST_FULFILLED,
          payload: userAlbumInfoList,
        });
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.FETCH_USER_ALBUMS_LIST_REJECTED, payload: err });
      });
  };
}

export function fetchUserAlbum(album_id: number) {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.FETCH_USER_ALBUM });
    Server.get(`albums/user/${album_id}/`)
      .then((response) => {
        const data = UserAlbumSchema.parse(response.data);
        const photosGroupedByDate: DatePhotosGroup[] = data.grouped_photos;
        adjustDateFormat(photosGroupedByDate);
        const albumDetails: UserAlbumDetails = data;
        dispatch({
          type: ALBUM_ACTIONS.FETCH_USER_ALBUM_FULFILLED,
          payload: {
            photosGroupedByDate: photosGroupedByDate,
            photosFlat: getPhotosFlatFromGroupedByDate(photosGroupedByDate),
            albumDetails: albumDetails,
          },
        });
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.FETCH_USER_ALBUM_REJECTED, payload: err });
      });
  };
}

export function createNewUserAlbum(title: string, image_hashes: string[]) {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.CREATE_USER_ALBUMS_LIST });
    Server.post("albums/user/edit/", { title: title, photos: image_hashes })
      .then((response) => {
        const data = _UserAlbumEditResponseSchema.parse(response.data);
        dispatch({
          type: ALBUM_ACTIONS.CREATE_USER_ALBUMS_LIST_FULFILLED,
          payload: data,
        });
        dispatch(fetchUserAlbumsList());
        dispatch(
          notify(
            i18n.t("toasts.createnewalbum", {
              numberOfPhotos: image_hashes.length,
              title: title,
            }),
            {
              title: i18n.t("toasts.createalbumtitle"),
              status: "success",
              dismissible: true,
              dismissAfter: 3000,
              position: "bottom-right",
              buttons: [
                {
                  name: i18n.t("toasts.viewalbum"),
                  primary: true,
                  onClick: () => {
                    dispatch(fetchUserAlbum(data.id));
                    dispatch(push(`/useralbum/${data.id}/`));
                  },
                },
              ],
            }
          )
        );
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.CREATE_USER_ALBUMS_LIST_REJECTED, payload: err });
      });
  };
}

export function renameUserAlbum(albumID: string, albumTitle: string, newAlbumTitle: string) {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.RENAME_USER_ALBUM });
    Server.patch(`/albums/user/edit/${albumID}/`, {
      title: newAlbumTitle,
    })
      .then((response) => {
        dispatch({ type: ALBUM_ACTIONS.RENAME_USER_ALBUM_FULFILLED, payload: albumID });
        dispatch(fetchUserAlbumsList());
        dispatch(
          notify(
            i18n.t("toasts.renamealbum", {
              albumTitle: albumTitle,
              newAlbumTitle: newAlbumTitle,
            }),
            {
              title: i18n.t("toasts.renamealbumtitle"),
              status: "success",
              dismissible: true,
              dismissAfter: 3000,
              position: "bottom-right",
            }
          )
        );
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.RENAME_USER_ALBUM_REJECTED, payload: err });
      });
  };
}

export function deleteUserAlbum(albumID: string, albumTitle: string) {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.DELETE_USER_ALBUM });
    Server.delete(`/albums/user/${albumID}`)
      .then((response) => {
        dispatch({ type: ALBUM_ACTIONS.DELETE_USER_ALBUM_FULFILLED, payload: albumID });
        dispatch(fetchUserAlbumsList());
        dispatch(
          notify(
            i18n.t("toasts.deletealbum", {
              albumTitle: albumTitle,
            }),
            {
              title: i18n.t("toasts.deletealbumtitle"),
              status: "success",
              dismissible: true,
              dismissAfter: 3000,
              position: "bottom-right",
            }
          )
        );
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.DELETE_USER_ALBUM_REJECTED, payload: err });
      });
  };
}

export function removeFromUserAlbum(album_id: number, title: string, image_hashes: string[]) {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.REMOVE_USER_ALBUMS_LIST });
    Server.patch(`albums/user/edit/${album_id}/`, {
      removedPhotos: image_hashes,
    })
      .then((response) => {
        const data = _UserAlbumEditResponseSchema.parse(response.data);
        dispatch({
          type: ALBUM_ACTIONS.REMOVE_USER_ALBUMS_LIST_FULFILLED,
          payload: data,
        });
        dispatch(
          notify(
            i18n.t("toasts.removefromalbum", {
              numberOfPhotos: image_hashes.length,
              title: title,
            }),
            {
              title: i18n.t("toasts.removefromalbumtitle"),
              status: "success",
              dismissible: true,
              dismissAfter: 3000,
              position: "bottom-right",
            }
          )
        );
        dispatch(fetchUserAlbumsList());
        dispatch(fetchUserAlbum(album_id));
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.REMOVE_USER_ALBUMS_LIST_REJECTED, payload: err });
      });
  };
}

export function addToUserAlbum(album_id: number, title: string, image_hashes: string[]) {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.EDIT_USER_ALBUMS_LIST });
    Server.patch(`albums/user/edit/${album_id}/`, {
      title: title,
      photos: image_hashes,
    })
      .then((response) => {
        const data = _UserAlbumEditResponseSchema.parse(response.data);
        dispatch({
          type: ALBUM_ACTIONS.EDIT_USER_ALBUMS_LIST_FULFILLED,
          payload: data,
        });
        dispatch(
          notify(
            i18n.t("toasts.addtoalbum", {
              numberOfPhotos: image_hashes.length,
              title: title,
            }),
            {
              title: i18n.t("toasts.addtoalbumtitle"),

              status: "success",
              dismissible: true,
              dismissAfter: 3000,
              position: "bottom-right",
              buttons: [
                {
                  name: "View Album",
                  primary: true,
                  onClick: () => {
                    dispatch(fetchUserAlbum(album_id));
                    dispatch(push(`/useralbum/${album_id}/`));
                  },
                },
              ],
            }
          )
        );
        dispatch(fetchUserAlbumsList());
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.EDIT_USER_ALBUMS_LIST_REJECTED, payload: err });
      });
  };
}

export function fetchPlaceAlbumsList() {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.FETCH_PLACE_ALBUMS_LIST });
    Server.get("albums/place/list/")
      .then((response) => {
        const data = _FetchPlaceAlbumsListResponseSchema.parse(response.data);
        const placeAlbumInfoList: PlaceAlbumInfo[] = data.results;
        const byGeolocationLevel = _.groupBy(placeAlbumInfoList, (el) => el.geolocation_level);
        dispatch({
          type: ALBUM_ACTIONS.GROUP_PLACE_ALBUMS_BY_GEOLOCATION_LEVEL,
          payload: byGeolocationLevel,
        });
        dispatch({
          type: ALBUM_ACTIONS.FETCH_PLACE_ALBUMS_LIST_FULFILLED,
          payload: placeAlbumInfoList,
        });
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.FETCH_PLACE_ALBUMS_LIST_REJECTED, payload: err });
      });
  };
}

const PlaceAlbumResponseSchema = z.object({ results: PlaceAlbumSchema });
export function fetchPlaceAlbum(album_id: string) {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.FETCH_PLACE_ALBUMS });
    Server.get(`albums/place/${album_id}/`)
      .then((response) => {
        const data = PlaceAlbumResponseSchema.parse(response.data);
        dispatch({
          type: ALBUM_ACTIONS.FETCH_PLACE_ALBUMS_FULFILLED,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.FETCH_PLACE_ALBUMS_REJECTED, payload: err });
      });
  };
}

export function fetchAutoAlbumsList() {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_LIST });
    Server.get("albums/auto/list/")
      .then((response) => {
        const data = _FetchAutoAlbumsListResponseSchema.parse(response.data);
        const autoAlbumsList: AutoAlbumInfo[] = data.results;
        dispatch({
          type: ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_LIST_FULFILLED,
          payload: autoAlbumsList,
        });
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_LIST_REJECTED, payload: err });
      });
  };
}

type AlbumDateListOptions = {
  photosetType: PhotosetType;
  person_id?: number;
  username?: string;
};

export function fetchAlbumDateList(dispatch: AppDispatch, options: AlbumDateListOptions) {
  dispatch({
    type: ALBUM_ACTIONS.FETCH_DATE_ALBUMS_LIST,
  });

  const favorites = options.photosetType === PhotosetType.FAVORITES ? "?favorite=true" : "";
  const publicParam = options.photosetType === PhotosetType.PUBLIC ? "?public=true" : "";

  const deletedParam = options.photosetType === PhotosetType.DELETED ? "?deleted=true" : "";
  const usernameParam = options.username ? `&username=${options.username.toLowerCase()}` : "";
  const personidParam = options.person_id ? `?person=${options.person_id}` : "";
  Server.get("albums/date/list/" + favorites + publicParam + deletedParam + usernameParam + personidParam, {
    timeout: 100000,
  })
    .then((response) => {
      const data = _FetchDateAlbumsListResponseSchema.parse(response.data);
      const photosGroupedByDate: IncompleteDatePhotosGroup[] = data.results;
      adjustDateFormat(photosGroupedByDate);
      addTempElementsToGroups(photosGroupedByDate);
      dispatch({
        type: ALBUM_ACTIONS.FETCH_DATE_ALBUMS_LIST_FULFILLED,
        payload: {
          photosGroupedByDate: photosGroupedByDate,
          photosFlat: getPhotosFlatFromGroupedByDate(photosGroupedByDate),
          photosetType: options.photosetType,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ALBUM_ACTIONS.FETCH_DATE_ALBUMS_LIST_REJECTED, payload: err });
    });
}

type AlbumDateOption = {
  photosetType: PhotosetType;
  album_date_id: string;
  page: number;
  username?: string;
  person_id?: number;
};

export function fetchAlbumDate(dispatch: AppDispatch, options: AlbumDateOption) {
  dispatch({
    type: ALBUM_ACTIONS.FETCH_DATE_ALBUMS_RETRIEVE,
    payload: {
      album_id: options.album_date_id,
    },
  });
  const favorites = options.photosetType === PhotosetType.FAVORITES ? "&favorite=true" : "";
  const publicParam = options.photosetType === PhotosetType.PUBLIC ? "&public=true" : "";
  const usernameParam = options.username ? `&username=${options.username.toLowerCase()}` : "";
  const personidParam = options.person_id ? `&person=${options.person_id}` : "";
  const deletedParam = options.photosetType === PhotosetType.DELETED ? "&deleted=true" : "";
  Server.get(
    `albums/date/${options.album_date_id}/?page=${options.page}` +
      favorites +
      publicParam +
      usernameParam +
      personidParam +
      deletedParam
  )
    .then((response) => {
      const datePhotosGroup: IncompleteDatePhotosGroup = IncompleteDatePhotosGroupSchema.parse(response.data.results);
      adjustDateFormatForSingleGroup(datePhotosGroup);
      dispatch({
        type: ALBUM_ACTIONS.FETCH_DATE_ALBUMS_RETRIEVE_FULFILLED,
        payload: {
          datePhotosGroup: datePhotosGroup,
          page: options.page,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ALBUM_ACTIONS.FETCH_DATE_ALBUMS_RETRIEVE_REJECTED, payload: err });
    });
}

//actions using new retrieve view in backend
export function fetchAlbumsAutoGalleries(dispatch: AppDispatch, album_id: string) {
  dispatch({ type: ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_RETRIEVE });
  Server.get(`albums/auto/${album_id}/`)
    .then((response) => {
      const autoAlbum: AutoAlbum = AutoAlbumSchema.parse(response.data);
      dispatch({
        type: ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_RETRIEVE_FULFILLED,
        payload: autoAlbum,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ALBUM_ACTIONS.FETCH_AUTO_ALBUMS_RETRIEVE_REJECTED, payload: err });
    });
}

// share user album
export function setUserAlbumShared(album_id: number, target_user_id: string, val_shared: boolean) {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.SET_ALBUM_USER_SHARED });
    Server.post("useralbum/share/", {
      shared: val_shared,
      album_id: album_id,
      target_user_id: target_user_id,
    })
      .then((response) => {
        const userAlbumInfo: UserAlbumInfo = UserAlbumInfoSchema.parse(response.data);
        dispatch({
          type: ALBUM_ACTIONS.SET_ALBUM_USER_SHARED_FULFILLED,
          payload: userAlbumInfo,
        });
        dispatch(fetchUserAlbum(album_id));

        if (val_shared) {
          dispatch(
            notify(i18n.t("toasts.sharingalbum"), {
              title: i18n.t("toasts.sharingalbumtitle"),
              status: "success",
              dismissible: true,
              dismissAfter: 3000,
              position: "bottom-right",
            })
          );
        } else {
          dispatch(
            notify(i18n.t("toasts.unsharingalbum"), {
              title: i18n.t("toasts.unsharingalbumtitle"),
              status: "success",
              dismissible: true,
              dismissAfter: 3000,
              position: "bottom-right",
            })
          );
        }
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.SET_ALBUM_USER_SHARED_FULFILLED, payload: err });
        console.log(err.content);
      });
  };
}

export function fetchUserAlbumsSharedToMe() {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.FETCH_ALBUMS_SHARED_TO_ME });
    Server.get("/albums/user/shared/tome/")
      .then((response) => {
        const data = _FetchUserAlbumsSharedResponseSchema.parse(response.data);
        const userAlbumInfoList: UserAlbumInfo[] = data.results;
        const sharedAlbumsGroupedByOwner = _.toPairs(_.groupBy(userAlbumInfoList, "owner.id")).map((el) => {
          return { user_id: parseInt(el[0], 10), albums: el[1] };
        });
        dispatch({
          type: ALBUM_ACTIONS.FETCH_ALBUMS_SHARED_TO_ME_FULFILLED,
          payload: sharedAlbumsGroupedByOwner,
        });
      })
      .catch((err) => {
        dispatch({ type: ALBUM_ACTIONS.FETCH_ALBUMS_SHARED_TO_ME_REJECTED, payload: err });
      });
  };
}

export function fetchUserAlbumsSharedFromMe() {
  return function (dispatch: Dispatch<any>) {
    dispatch({ type: ALBUM_ACTIONS.FETCH_ALBUMS_SHARED_FROM_ME });
    Server.get("/albums/user/shared/fromme/")
      .then((response) => {
        const data = _FetchUserAlbumsSharedResponseSchema.parse(response.data);
        const userAlbumInfoList: UserAlbumInfo[] = data.results;
        dispatch({
          type: ALBUM_ACTIONS.FETCH_ALBUMS_SHARED_FROM_ME_FULFILLED,
          payload: userAlbumInfoList,
        });
      })
      .catch((err) => {
        dispatch({
          type: ALBUM_ACTIONS.FETCH_ALBUMS_SHARED_FROM_ME_REJECTED,
          payload: err,
        });
      });
  };
}
