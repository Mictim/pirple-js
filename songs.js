/*Artist's object
* contains artistName,
* albums and songs which is contains name, duration and logo
*/
var artistObj = {
    'artistName': 'Linkin Park',
    'albums': ['Meteora', 'Hybrid Theory'],
    'songs': [{
      'name': 'Crawling',
      'duration': 315,
      'logo': 'crawling.png'
    },
           {
            'name': 'In the End',
             'duration': 248,
             'logo': 'in the end.png'
           }]
  };
  //all songs duration
  var songsDuration = artistObj.songs[0].duration + artistObj.songs[1].duration;
  
  //all album names
  var albums = artistObj.albums.join(", ");

  //Output:
  console.log(artistObj);
  console.log(artistObj.artistName);
  console.log(artistObj.songs);
  console.log(artistObj.albums[1]);
  console.log(songsDuration);
  console.log(albums);