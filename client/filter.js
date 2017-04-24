// var arr = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   { },
//   { id: null },
//   { id: NaN },
//   { id: 'undefined' }
// ];

// var invalidEntries = 0;
//
// function filterByID(obj) {
//   if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
//     return true;
//   } else {
//     invalidEntries++;
//     return false;
//   }
// }

function filterByImageURL(paintings) {
  if ('url' in paintings && typeof(paintings.artObjects.webImage) === null ) {
    return false;
  } else {
    return true;
  }
}

var newArrayImageUrl = arr.filter(filterByImageURL);


// var arrByID = arr.filter(filterByID);

// console.log('Gefilterde Array\n', arrByID);
// // Gefilterde Array
// // [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]
//
// console.log('Number of Invalid Entries = ', invalidEntries);
// // Number of Invalid Entries = 4
