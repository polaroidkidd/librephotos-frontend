import { store } from "../store/store";
import _ from "lodash";

store.subscribe(listener);

function select(state) {
  return state.ui;
}

let gridType = "dense";

function listener() {
  let ui = select(store.getState());
  gridType = ui.gridType;
}

export const calculateSharedPhotoGridCells = (groupedBySharerList, itemsPerRow) => {
  let gridContents = [];
  let rowCursor = [];

  groupedBySharerList.forEach((group) => {
    gridContents.push([group]);
    _.reverse(_.sortBy(group.photos, "exif_timestamp")).forEach((photo, idx) => {
      if (idx === 0) {
        rowCursor = [];
      }
      if (idx > 0 && idx % itemsPerRow === 0) {
        gridContents.push(rowCursor);
      }
      if (idx % itemsPerRow === 0) {
        rowCursor = [];
      }
      rowCursor.push(photo);
      if (idx === group.photos.length - 1) {
        gridContents.push(rowCursor);
      }
    });
  });
  return { cellContents: gridContents };
};

export const calculateSharedAlbumGridCells = (groupedBySharerList, itemsPerRow) => {
  let gridContents = [];
  let rowCursor = [];

  groupedBySharerList.forEach((group) => {
    gridContents.push([group]);
    group.albums.forEach((album, idx) => {
      if (idx === 0) {
        rowCursor = [];
      }
      if (idx > 0 && idx % itemsPerRow === 0) {
        gridContents.push(rowCursor);
      }
      if (idx % itemsPerRow === 0) {
        rowCursor = [];
      }
      rowCursor.push(album);
      if (idx === group.albums.length - 1) {
        gridContents.push(rowCursor);
      }
    });
  });
  return { cellContents: gridContents };
};

export const calculateGridCells = (groupedByDateList, itemsPerRow) => {
  let gridContents = [];
  let rowCursor = [];
  let hash2row = {};

  groupedByDateList.forEach((day) => {
    gridContents.push([day]);
    let currRowIdx = gridContents.length;
    day.photos.forEach((photo, idx) => {
      if (idx === 0) {
        rowCursor = [];
      }
      if (idx > 0 && idx % itemsPerRow === 0) {
        gridContents.push(rowCursor);
      }
      if (idx % itemsPerRow === 0) {
        rowCursor = [];
      }
      rowCursor.push(photo);
      hash2row[[photo.image_hash]] = currRowIdx;
      if (idx === day.photos.length - 1) {
        gridContents.push(rowCursor);
      }
    });
  });
  return { cellContents: gridContents, hash2row: hash2row };
};

export const calculateGridCellSize = (gridWidth) => {
  let numEntrySquaresPerRow;

  if (gridType === "dense") {
    if (gridWidth < 600) {
      numEntrySquaresPerRow = 2;
    } else if (gridWidth < 800) {
      numEntrySquaresPerRow = 3;
    } else if (gridWidth < 1000) {
      numEntrySquaresPerRow = 5;
    } else if (gridWidth < 1200) {
      numEntrySquaresPerRow = 7;
    } else if (gridWidth < 1400) {
      numEntrySquaresPerRow = 9;
    } else if (gridWidth < 1600) {
      numEntrySquaresPerRow = 11;
    } else if (gridWidth < 1800) {
      numEntrySquaresPerRow = 13;
    } else if (gridWidth < 2000) {
      numEntrySquaresPerRow = 15;
    } else if (gridWidth < 2200) {
      numEntrySquaresPerRow = 17;
    } else {
      numEntrySquaresPerRow = 19;
    }
  } else {
    if (gridWidth < 600) {
      numEntrySquaresPerRow = 1;
    } else if (gridWidth < 800) {
      numEntrySquaresPerRow = 2;
    } else if (gridWidth < 1000) {
      numEntrySquaresPerRow = 3;
    } else if (gridWidth < 1200) {
      numEntrySquaresPerRow = 4;
    } else if (gridWidth < 1400) {
      numEntrySquaresPerRow = 5;
    } else if (gridWidth < 1600) {
      numEntrySquaresPerRow = 6;
    } else if (gridWidth < 1800) {
      numEntrySquaresPerRow = 7;
    } else if (gridWidth < 2000) {
      numEntrySquaresPerRow = 6;
    } else if (gridWidth < 2200) {
      numEntrySquaresPerRow = 9;
    } else {
      numEntrySquaresPerRow = 10;
    }
  }

  let entrySquareSize = gridWidth / numEntrySquaresPerRow;

  return {
    entrySquareSize: entrySquareSize,
    numEntrySquaresPerRow: numEntrySquaresPerRow,
  };
};

export const calculateFaceGridCells = (groupedByPersonList, itemsPerRow) => {
  let gridContents = [];
  let rowCursor = [];
  let hash2row = {};

  groupedByPersonList.forEach((person) => {
    gridContents.push([person]);
    let currRowIdx = gridContents.length;
    person.faces.forEach((face, idx) => {
      if (idx === 0) {
        rowCursor = [];
      }
      if (idx > 0 && idx % itemsPerRow === 0) {
        gridContents.push(rowCursor);
      }
      if (idx % itemsPerRow === 0) {
        rowCursor = [];
      }
      rowCursor.push(face);
      hash2row[[face.image_hash]] = currRowIdx;
      if (idx === person.faces.length - 1) {
        gridContents.push(rowCursor);
      }
    });
  });
  return { cellContents: gridContents, hash2row: hash2row };
};

export const calculateFaceGridCellSize = (gridWidth) => {
  let numEntrySquaresPerRow = 10;
  if (gridWidth < 300) {
    numEntrySquaresPerRow = 2;
  } else if (gridWidth < 600) {
    numEntrySquaresPerRow = 3;
  } else if (gridWidth < 800) {
    numEntrySquaresPerRow = 4;
  } else if (gridWidth < 1000) {
    numEntrySquaresPerRow = 6;
  } else if (gridWidth < 1200) {
    numEntrySquaresPerRow = 8;
  }

  let entrySquareSize = gridWidth / numEntrySquaresPerRow;

  return {
    entrySquareSize: entrySquareSize,
    numEntrySquaresPerRow: numEntrySquaresPerRow,
  };
};
