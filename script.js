var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    playerVars: {
      listType: 'playlist',
      list: playlistId,
      fs: 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    // Reklama je počela
    hideAds(); // Sakrijte reklame ili elemente koji sadrže reklame
  } else if (event.data === YT.PlayerState.ENDED) {
    // Reklama je završena
    showAds(); // Ponovo prikažite reklame ili elemente koji sadrže reklame
  }
}

function hideAds() {
  // Implementirajte kod za sakrivanje reklama ili elemenata koji sadrže reklame
  // Na primer, možete koristiti jQuery za dodavanje CSS klase koja će sakriti reklame:
  // $('.ad-element').hide();
}

function showAds() {
  // Implementirajte kod za ponovno prikazivanje reklama ili elemenata koji sadrže reklame
  // Na primer, možete koristiti jQuery za uklanjanje CSS klase koja sakriva reklame:
  // $('.ad-element').show();
}

onYouTubeIframeAPIReady();