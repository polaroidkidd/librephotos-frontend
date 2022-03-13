import React, { useEffect, useState, useCallback } from "react";
import { fetchAlbumDateList, fetchAlbumDate } from "../../store/albums/albumsActions";
import { fetchPeople } from "../../actions/peopleActions";
import { PhotoListView } from "../../components/photolist/PhotoListView";
import type { PhotosState } from "../../reducers/photosReducer";
import { PhotosetType } from "../../reducers/photosReducer";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useTranslation } from "react-i18next";
import _ from "lodash";

type fetchedGroup = {
  id: string;
  page: number;
};

type Props = {
  match: any;
};

export const AlbumPersonGallery = (props: Props): JSX.Element => {
  const { fetchedPhotosetType, photosFlat, photosGroupedByDate } = useAppSelector((state) => state.photos);
  const { people } = useAppSelector((state) => state.people);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [group, setGroup] = useState({} as fetchedGroup);
  const person = people.filter((i: any) => i.key == props.match.params.albumID)[0];
  const personname = person ? person.value : undefined;

  useEffect(() => {
    if (group.id && group.page) {
      fetchAlbumDate(dispatch, {
        album_date_id: group.id,
        page: group.page,
        photosetType: PhotosetType.PERSON,
        person_id: props.match.params.albumID,
      });
    }
  }, [group.id, group.page]);

  useEffect(() => {
    if (people.length == 0) {
      fetchPeople(dispatch);
    }
    fetchAlbumDateList(dispatch, {
      photosetType: PhotosetType.PERSON,
      person_id: props.match.params.albumID,
    });
  }, [dispatch]); // Only run on first render

  const getAlbums = (visibleGroups: any) => {
    visibleGroups.forEach((group: any) => {
      const visibleImages = group.items;
      if (visibleImages.filter((i: any) => i.isTemp && i.isTemp != undefined).length > 0) {
        const firstTempObject = visibleImages.filter((i: any) => i.isTemp)[0];
        const page = Math.ceil((parseInt(firstTempObject.id) + 1) / 100);
        setGroup({ id: group.id, page: page });
      }
    });
  };

  const throttledGetAlbums = useCallback(
    _.throttle((visibleItems) => getAlbums(visibleItems), 500),
    []
  );

  // get person details
  return (
    <PhotoListView
      title={personname ? personname : t("loading")}
      loading={fetchedPhotosetType !== PhotosetType.PERSON}
      titleIconName={"user"}
      isDateView={true}
      photoset={photosGroupedByDate}
      idx2hash={photosFlat}
      updateGroups={throttledGetAlbums}
      selectable={true}
      match={props.match}
    />
  );
};
