var playlist = {"shlomo": "shlomosong"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
