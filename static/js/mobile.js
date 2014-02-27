(function() {
  var name, webrtc;

  $(".connect").click(function(event) {
    webrtc = new SimpleWebRTC({
        localVideoEl: 'mine',
        remoteVideosEl: '',
        autoRequestMedia: true
    });

      name = 'pipikaka';

    webrtc.on('readyToCall', function() {
        $(".video-container").removeClass('hide');
        console.log('ready to call');
        console.log('joining room isl');
        return webrtc.joinRoom('isl');
    });

  });

  $(".stop").click(function(event) {
    console.log('click stop');
    webrtc.leaveRoom(name);
  });

}).call(this);