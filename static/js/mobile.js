(function() {
  $(".connect").click(function(event) {
    var name, webrtc;
    webrtc = new SimpleWebRTC({
      localVideoEl: 'mine',
      remoteVideoEl: '',
      autoRequestMedia: true
    });
    name = 'pipikaka';
    return webrtc.once('readyToCall', function() {
      $(".video-container").removeClass('hide');
      console.log("Ready to call");
      console.log("Joining room isl");
      return webrtc.joinRoom('isl');
    });
  });

  $(".stop").click(function(event) {
    console.log("Click stop");
    webrtc.stopLocalVideo();
    webrtc.leaveRoom(room);
    return webrtc.hangUp();
  });

}).call(this);
