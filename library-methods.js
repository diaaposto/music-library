var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
          var libLists = this.playlists;

          for (let playlistName in libLists) {
            let fullItemInPlaylist = libLists[playlistName];
            this.id = fullItemInPlaylist.id;
            this.name = fullItemInPlaylist.name;
            this.tracksX = fullItemInPlaylist.tracks;

            console.log(`${this.id}: ${this.name} - ${this.tracksX.length} tracks`);

          }
        },
  printTracks: function () {
          var trackLists = this.tracks;

          for (let trackListName in trackLists) {
            let fullItemInTracklist = trackLists[trackListName];
            this.trackId = fullItemInTracklist.id;
            this.trackName = fullItemInTracklist.name;
            this.trackArtist = fullItemInTracklist.artist;
            this.trackAlbum = fullItemInTracklist.album;

            console.log(`${this.trackId}: ${this.trackName} by ${this.trackArtist} (${this.trackAlbum})`);
          }
        },
  printPlaylist: function (playlistId) {
        let listName = this.playlists[playlistId].name;
        let trackListName = this.playlists[playlistId].tracks;
        // console.log(trackListName)
        console.log(`${playlistId}: ${listName} - ${trackListName.length} tracks`);

        for (let key of trackListName) {
          let track = this.tracks[key];
          console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);

        }

      }


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var
}
// library.printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// var



// library.printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// var

// library.printPlaylist('p01');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);

// console.log(library.playlists[playlistId].tracks);

}

// addTrackToPlaylist('04', 'p01');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

var addTrack = function (name, artist, album) {
  let newTrackId = uid();
  // console.log(newTrackId);
  let trackLib = library.tracks;
  // console.log(trackLib);

  trackLib[newTrackId] = {
    id: newTrackId,
    name: name,
    artist: artist,
    album: album
  }

  // return true;
}

// printTracks();
// addTrack('Exploration in C# minor', 'Josie Jay', 'My favourite explorations');
// printTracks();


// adds a playlist to the library

var addPlaylist = function (name) {

  let newPlaylistId = uid();
  let playlistLib = library.playlists;

  playlistLib[newPlaylistId] = {
    id: newPlaylistId,
    name: name
  }
  console.log(playlistLib);


}

// printPlaylists();

// addPlaylist('country boy');


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

  // var regex = new RegExp(query), 'gi')
  //       var tracks = library.tracks

  //       for (var trackId in tracks) {
  //         var track = tracks[trackId];
  //         // Creating string out of the 3 values (name, artist, album)
  //         var trackInfo = track.name + track.artist + track.album;
  //         if ( !trackInfo.search(regex)=== -1) {
  //           printTrack(trackId);
  //         }
  //       }

}