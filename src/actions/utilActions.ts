import { showNotification } from "@mantine/notifications";

import { api } from "../api_client/api";
import { Server } from "../api_client/apiClient";
import i18n from "../i18n";
import { ManageUser, UserSchema } from "../store/user/user.zod";
import { userActions } from "../store/user/userSlice";
import { scanPhotos } from "./photosActions";
import {
  CountStats,
  DeleteMissingPhotosResponse,
  DirTree,
  GenerateEventAlbumsResponse,
  GenerateEventAlbumsTitlesResponse,
  Job,
  LocationSunburst,
  LocationTimeline,
  PhotoMonthCount,
  SearchTermExamples,
  SiteSettings,
  WordCloudResponse,
} from "./utilActions.types";

export enum UtilActions {
  FETCH_JOB_LIST = "fetch-job-list",
  FETCH_JOB_LIST_FULFILLED = "fetch-job-list-fulfilled",
  FETCH_JOB_LIST_REJECTED = "fetch-job-list-rejected",
  DELETE_JOB = "delete-job",
  DELETE_JOB_FULFILLED = "delete-job-fulfilled",
  DELETE_JOB_REJECTED = "delete-job-rejected",
  SET_SITE_SETTINGS = "set-site-settings",
  SET_SITE_SETTINGS_FULFILLED = "set-site-settings-fulfilled",
  SET_SITE_SETTINGS_REJECTED = "set-site-settings-rejected",
  FETCH_SITE_SETTINGS = "fetch-site-settings",
  FETCH_SITE_SETTINGS_FULFILLED = "fetch-site-settings-fulfilled",
  FETCH_SITE_SETTINGS_REJECTED = "fetch-site-settings-rejected",
  FETCH_USER_LIST = "fetch-user-list",
  FETCH_USER_LIST_FULFILLED = "fetch-user-list-fulfilled",
  FETCH_USER_LIST_REJECTED = "fetch-user-list-rejected",
  FETCH_DIRECTORY_TREE = "fetch-directory-tree",
  FETCH_DIRECTORY_TREE_FULFILLED = "fetch-directory-tree-fulfilled",
  FETCH_DIRECTORY_TREE_REJECTED = "fetch-directory-tree-rejected",
  FETCH_NEXTCLOUD_DIRECTORY_TREE = "fetch-nextcloud-directory-tree",
  FETCH_NEXTCLOUD_DIRECTORY_TREE_FULFILLED = "fetch-nextcloud-directory-tree-fulfilled",
  FETCH_NEXTCLOUD_DIRECTORY_TREE_REJECTED = "fetch-nextcloud-directory-tree-rejected",
  UPDATE_USER_REJECTED = "update-user-rejected",
  DELETE_MISSING_PHOTOS = "delete-missing-photos",
  DELETE_MISSING_PHOTOS_FULFILLED = "delete-missing-photos-fulfilled",
  DELETE_MISSING_PHOTOS_REJECTED = "delete-missing-photos-rejected",
  GENERATE_EVENT_ALBUMS = "generate-event-albums",
  GENERATE_EVENT_ALBUMS_FULFILLED = "generate-event-albums-fulfilled",
  GENERATE_EVENT_ALBUMS_REJECTED = "generate-event-albums-rejected",
  GENERATE_EVENT_ALBUMS_TITLES = "generate-event-albums-titles",
  SET_WORKER_AVAILABILITY = "set-worker-availability",
  SET_WORKER_RUNNING_JOB = "set-worker-running-job",
  GENERATE_EVENT_ALBUMS_TITLES_FULFILLED = "generate-event-albums-titles-fulfilled",
  GENERATE_EVENT_ALBUMS_TITLES_REJECTED = "generate-event-albums-titles-rejected",
  FETCH_EXAMPLE_SEARCH_TERMS = "fetch-example-search-terms",
  FETCH_EXAMPLE_SEARCH_TERMS_FULFILLED = "fetch-example-search-terms-fulfilled",
  FETCH_EXAMPLE_SEARCH_TERMS_REJECTED = "fetch-example-search-terms-rejected",
  FETCH_LOCATION_SUNBURST = "fetch-location-sunburst",
  FETCH_LOCATION_SUNBURST_FULFILLED = "fetch-location-sunburst-fulfilled",
  FETCH_LOCATION_SUNBURST_REJECTED = "fetch-location-sunburst-rejected",
  FETCH_LOCATION_TIMELINE = "fetch-location-timeline",
  FETCH_LOCATION_TIMELINE_FULFILLED = "fetch-location-timeline-fulfilled",
  FETCH_LOCATION_TIMELINE_REJECTED = "fetch-location-timeline-rejected",
  FETCH_TIMEZONE_LIST = "fetch-timezone-list",
  FETCH_TIMEZONE_LIST_FULFILLED = "fetch-timezone-list-fulfilled",
  FETCH_TIMEZONE_LIST_REJECTED = "fetch-timezone-list-rejected",
  FETCH_COUNT_STATS = "fetch-count-stats",
  FETCH_COUNT_STATS_FULFILLED = "fetch-count-stats-fulfilled",
  FETCH_COUNT_STATS_REJECTED = "fetch-count-stats-rejected",
  FETCH_LOCATION_CLUSTERS = "fetch-location-clusters",
  FETCH_LOCATION_CLUSTERS_FULFILLED = "fetch-location-clusters-fulfilled",
  FETCH_LOCATION_CLUSTERS_REJECTED = "fetch-location-clusters-rejected",
  FETCH_PHOTO_MONTH_COUNTS = "fetch-photo-month-counts",
  FETCH_PHOTO_MONTH_COUNTS_FULFILLED = "fetch-photo-month-counts-fulfilled",
  FETCH_PHOTO_MONTH_COUNTS_REJECTED = "fetch-photo-month-counts-rejected",
  FETCH_WORDCLOUD = "fetch-wordcloud",
  FETCH_WORDCLOUD_FULFILLED = "fetch-wordcloud-fulfilled",
  FETCH_WORDCLOUD_REJECTED = "fetch-wordcloud-rejected",
}

export enum UtilApiEndpoints {
  jobs = "jobs",
  sitesettings = "sitesettings",
  user = "user",
  dirtree = "dirtree",
  nextcloud = "nextcloud",
  manage = "manage",
  deletemissingphotos = "deletemissingphotos",
  autoalbumgen = "autoalbumgen",
  autoalbumtitlegen = "autoalbumtitlegen",
  searchtermexamples = "searchtermexamples",
  locationsunburst = "locationsunburst",
  locationtimeline = "locationtimeline",
  timezones = "timezones",
  stats = "stats",
  locclust = "locclust",
  photomonthcounts = "photomonthcounts",
  wordcloud = "wordcloud",
}

export function fetchJobList(page: number, page_size: number = 10) {
  return function (dispatch) {
    dispatch({ type: UtilActions.FETCH_JOB_LIST });
    // TODO Migrate to API
    Server.get(`jobs/?page_size=${page_size}&page=${page}`)
      .then(response => {
        const data = Job.array().parse(response.data.results);
        dispatch({ type: UtilActions.FETCH_JOB_LIST_FULFILLED, payload: response.data });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: UtilActions.FETCH_JOB_LIST_REJECTED, payload: error });
      });
  };
}

export function deleteJob(job_id, page = 1, page_size = 10) {
  return function (dispatch) {
    dispatch({ type: UtilActions.DELETE_JOB });
    // TODO Migrate to API
    Server.delete(`jobs/${job_id}`)
      .then(response => {
        dispatch(fetchJobList(page, page_size));
        dispatch({ type: UtilActions.DELETE_JOB_FULFILLED, payload: response.data });
        showNotification({
          message: i18n.t<string>("toasts.deletejob", { id: job_id }),
          title: i18n.t<string>("toasts.deletejobtitle"),
          color: "teal",
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: UtilActions.DELETE_JOB_REJECTED, payload: error });
      });
  };
}

export function setSiteSettings(siteSettings) {
  return function (dispatch) {
    dispatch({ type: UtilActions.SET_SITE_SETTINGS });
    // TODO Migrate to API
    Server.post("sitesettings/", siteSettings)
      .then(response => {
        const data = SiteSettings.parse(response.data);
        dispatch({
          type: UtilActions.SET_SITE_SETTINGS_FULFILLED,
          payload: response.data,
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: UtilActions.SET_SITE_SETTINGS_REJECTED, payload: error });
      });
  };
}

export function fetchSiteSettings(dispatch) {
  dispatch({ type: UtilActions.FETCH_SITE_SETTINGS });
  // TODO Migrate to API
  Server.get("sitesettings/")
    .then(response => {
      const data = SiteSettings.parse(response.data);
      dispatch({
        type: UtilActions.FETCH_SITE_SETTINGS_FULFILLED,
        payload: response.data,
      });
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: UtilActions.FETCH_SITE_SETTINGS_REJECTED, payload: error });
    });
}

// Todo: put this under userActions.js
export function fetchUserList() {
  return function (dispatch) {
    dispatch({ type: UtilActions.FETCH_USER_LIST });
    // TODO Migrate to API
    Server.get("user/")
      .then(response => {
        const data = UserSchema.array().parse(response.data.results);
        dispatch({
          type: UtilActions.FETCH_USER_LIST_FULFILLED,
          payload: response.data.results,
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: UtilActions.FETCH_USER_LIST_REJECTED, payload: error });
      });
  };
}

export function fetchDirectoryTree(path) {
  return function (dispatch) {
    dispatch({ type: UtilActions.FETCH_DIRECTORY_TREE });
    // TODO Migrate to API
    Server.get(`dirtree/?path=${path}`)
      .then(response => {
        const data = DirTree.array().parse(response.data);
        dispatch({
          type: UtilActions.FETCH_DIRECTORY_TREE_FULFILLED,
          payload: response.data,
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: UtilActions.FETCH_DIRECTORY_TREE_REJECTED, payload: error });
      });
  };
}

export function fetchNextcloudDirectoryTree(path) {
  return function (dispatch) {
    dispatch({ type: UtilActions.FETCH_NEXTCLOUD_DIRECTORY_TREE });
    // TODO Migrate to API
    Server.get(`nextcloud/listdir/?fpath=${path}`)
      .then(response => {
        // To-Do: Needs to be tested...
        // const data = DirTree.array().parse(response.data);
        dispatch({
          type: UtilActions.FETCH_NEXTCLOUD_DIRECTORY_TREE_FULFILLED,
          payload: response.data,
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: UtilActions.FETCH_NEXTCLOUD_DIRECTORY_TREE_REJECTED,
          payload: error,
        });
      });
  };
}

export function updateAvatar(user, form_data) {
  return function (dispatch) {
    // TODO Migrate to API
    Server.patch(`user/${user.id}/`, form_data)
      .then(response => {
        const data = UserSchema.parse(response.data);
        dispatch(userActions.updateRules(response.data));
        dispatch(fetchUserList());
        dispatch(fetchNextcloudDirectoryTree("/"));
        showNotification({
          message: i18n.t<string>("toasts.updateuser", { username: user.username }),
          title: i18n.t<string>("toasts.updateusertitle"),
          color: "teal",
        });

        dispatch(api.endpoints.fetchUserSelfDetails.initiate(user.id)).refetch();
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: UtilActions.UPDATE_USER_REJECTED, payload: error });
      });
  };
}

export function updateUser(user, dispatch) {
  // TODO Migrate to API
  Server.patch(`user/${user.id}/`, user)
    .then(response => {
      const data = UserSchema.parse(response.data);
      dispatch(api.endpoints.fetchUserSelfDetails.initiate(user.id)).refetch();
      dispatch(userActions.updateRules(response.data));
      // dispatch(fetchUserList());
      dispatch(
        showNotification({
          message: i18n.t<string>("toasts.updateuser", { username: user.username }),
          title: i18n.t<string>("toasts.updateusertitle"),
          color: "teal",
        })
      );
      dispatch(fetchNextcloudDirectoryTree("/"));
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: UtilActions.UPDATE_USER_REJECTED, payload: error });
    });
}

export function updateUserAndScan(user) {
  return function (dispatch) {
    // TODO Migrate to API
    Server.patch(`manage/user/${user.id}/`, user)
      .then(response => {
        const data = ManageUser.parse(response.data);
        dispatch(userActions.updateRules(response.data));
        dispatch(fetchUserList());
        showNotification({
          message: i18n.t<string>("toasts.updateuser", { username: user.username }),
          title: i18n.t<string>("toasts.updateusertitle"),
          color: "teal",
        });

        dispatch(api.endpoints.fetchUserSelfDetails.initiate(user.id)).refetch();
        dispatch(scanPhotos());
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: UtilActions.UPDATE_USER_REJECTED, payload: error });
      });
  };
}

export function manageUpdateUser(user) {
  return function (dispatch) {
    // TODO Migrate to API
    Server.patch(`manage/user/${user.id}/`, user)
      .then(response => {
        const data = ManageUser.parse(response.data);
        dispatch(userActions.updateRules(response.data));
        dispatch(fetchUserList());
        showNotification({
          message: i18n.t<string>("toasts.updateuser", { username: user.username }),
          title: i18n.t<string>("toasts.updateusertitle"),
          color: "teal",
        });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: UtilActions.UPDATE_USER_REJECTED, payload: error });
      });
  };
}

export function deleteMissingPhotos() {
  return function (dispatch) {
    dispatch({ type: UtilActions.DELETE_MISSING_PHOTOS });
    dispatch({ type: UtilActions.SET_WORKER_AVAILABILITY, payload: false });
    dispatch({
      type: UtilActions.SET_WORKER_RUNNING_JOB,
      payload: { job_type_str: "Delete Missing Photos" },
    });
    // TODO Migrate to API
    Server.get(`deletemissingphotos`)
      .then(response => {
        const data = DeleteMissingPhotosResponse.parse(response.data);
        showNotification({
          message: i18n.t<string>("toasts.deletemissingphotos"),
          title: i18n.t<string>("toasts.deletemissingphotostitle"),
          color: "teal",
        });

        dispatch({
          type: UtilActions.DELETE_MISSING_PHOTOS_FULFILLED,
          payload: response.data,
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: UtilActions.DELETE_MISSING_PHOTOS_REJECTED, payload: err });
      });
  };
}

export function generateEventAlbums() {
  return function (dispatch) {
    dispatch({ type: UtilActions.GENERATE_EVENT_ALBUMS });
    dispatch({ type: UtilActions.SET_WORKER_AVAILABILITY, payload: false });
    dispatch({
      type: UtilActions.SET_WORKER_RUNNING_JOB,
      payload: { job_type_str: "Generate Event Albums" },
    });
    // TODO Migrate to API
    Server.get(`autoalbumgen/`)
      .then(response => {
        const data = GenerateEventAlbumsResponse.parse(response.data);
        showNotification({
          message: i18n.t<string>("toasts.generateeventalbums"),
          title: i18n.t<string>("toasts.generateeventalbumstitle"),
          color: "teal",
        });

        dispatch({
          type: UtilActions.GENERATE_EVENT_ALBUMS_FULFILLED,
          payload: response.data,
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: UtilActions.GENERATE_EVENT_ALBUMS_REJECTED, payload: err });
      });
  };
}

export function generateEventAlbumTitles() {
  return function (dispatch) {
    dispatch({ type: UtilActions.GENERATE_EVENT_ALBUMS_TITLES });
    dispatch({ type: UtilActions.SET_WORKER_AVAILABILITY, payload: false });
    dispatch({
      type: UtilActions.SET_WORKER_RUNNING_JOB,
      payload: { job_type_str: "Regenerate Event Titles" },
    });

    // TODO Migrate to API
    Server.get("autoalbumtitlegen/")
      .then(response => {
        const data = GenerateEventAlbumsTitlesResponse.parse(response.data);
        showNotification({
          message: i18n.t<string>("toasts.regenerateevents"),
          title: i18n.t<string>("toasts.regenerateeventstitle"),
          color: "teal",
        });

        dispatch({
          type: UtilActions.GENERATE_EVENT_ALBUMS_TITLES_FULFILLED,
          payload: response.data,
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({
          type: UtilActions.GENERATE_EVENT_ALBUMS_TITLES_REJECTED,
          payload: err,
        });
      });
  };
}

export function fetchExampleSearchTerms() {
  return function (dispatch) {
    dispatch({ type: UtilActions.FETCH_EXAMPLE_SEARCH_TERMS });
    // TODO Migrate to API
    Server.get(`searchtermexamples/`)
      .then(response => {
        const data = SearchTermExamples.parse(response.data.results);
        dispatch({
          type: UtilActions.FETCH_EXAMPLE_SEARCH_TERMS_FULFILLED,
          payload: response.data.results,
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: UtilActions.FETCH_EXAMPLE_SEARCH_TERMS_REJECTED, payload: err });
      });
  };
}

export function fetchLocationSunburst() {
  return function (dispatch) {
    dispatch({ type: UtilActions.FETCH_LOCATION_SUNBURST });
    // TODO Migrate to API
    Server.get(`locationsunburst/`)
      .then(response => {
        const data = LocationSunburst.parse(response.data);
        dispatch({
          type: UtilActions.FETCH_LOCATION_SUNBURST_FULFILLED,
          payload: response.data,
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: UtilActions.FETCH_LOCATION_SUNBURST_REJECTED, payload: err });
      });
  };
}

export function fetchLocationTimeline(dispatch) {
  dispatch({ type: UtilActions.FETCH_LOCATION_TIMELINE });
  // TODO Migrate to API
  Server.get(`locationtimeline/`)
    .then(response => {
      const data = LocationTimeline.parse(response.data);
      dispatch({
        type: UtilActions.FETCH_LOCATION_TIMELINE_FULFILLED,
        payload: response.data,
      });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: UtilActions.FETCH_LOCATION_TIMELINE_REJECTED, payload: err });
    });
}

export function fetchTimezoneList(dispatch) {
  dispatch({ type: UtilActions.FETCH_TIMEZONE_LIST });
  // TODO Migrate to API
  Server.get(`timezones/`)
    .then(response => {
      dispatch({
        type: UtilActions.FETCH_TIMEZONE_LIST_FULFILLED,
        payload: response.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UtilActions.FETCH_TIMEZONE_LIST_REJECTED, payload: err });
    });
}

export function fetchCountStats() {
  return function (dispatch) {
    dispatch({ type: UtilActions.FETCH_COUNT_STATS });
    // TODO Migrate to API
    Server.get(`stats/`)
      .then(response => {
        const data = CountStats.parse(response.data);
        dispatch({
          type: UtilActions.FETCH_COUNT_STATS_FULFILLED,
          payload: response.data,
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: UtilActions.FETCH_COUNT_STATS_REJECTED, payload: err });
      });
  };
}

export function fetchLocationClusters() {
  return function (dispatch) {
    dispatch({ type: UtilActions.FETCH_LOCATION_CLUSTERS });
    // TODO Migrate to API
    Server.get(`locclust/`)
      .then(response => {
        // To-Do: Weird response from server
        // const data = LocationCluster.array().parse(response.data);
        dispatch({
          type: UtilActions.FETCH_LOCATION_CLUSTERS_FULFILLED,
          payload: response.data,
        });
      })
      .catch(err => {
        dispatch({ type: UtilActions.FETCH_LOCATION_CLUSTERS_REJECTED, payload: err });
      });
  };
}

export function fetchPhotoMonthCounts(dispatch) {
  dispatch({ type: UtilActions.FETCH_PHOTO_MONTH_COUNTS });
  // TODO Migrate to API
  Server.get(`photomonthcounts/`)
    .then(response => {
      const data = PhotoMonthCount.array().parse(response.data);
      dispatch({
        type: UtilActions.FETCH_PHOTO_MONTH_COUNTS_FULFILLED,
        payload: response.data,
      });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: UtilActions.FETCH_PHOTO_MONTH_COUNTS_REJECTED, payload: err });
    });
}

export function fetchWordCloud(dispatch) {
  dispatch({ type: UtilActions.FETCH_WORDCLOUD });
  // TODO Migrate to API
  Server.get(`wordcloud/`)
    .then(response => {
      const data = WordCloudResponse.parse(response.data);
      dispatch({ type: UtilActions.FETCH_WORDCLOUD_FULFILLED, payload: response.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: UtilActions.FETCH_WORDCLOUD_REJECTED, payload: err });
    });
}
