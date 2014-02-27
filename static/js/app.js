(function() {
  var name, webrtc;

  webrtc = new SimpleWebRTC({
    localVideoEl: 'localVideo',
    remoteVideosEl: 'remotesVideos',
    autoRequestMedia: true
  });

  name = $("#roomname").val();

  webrtc.on('readyToCall', function() {
    console.log('ready to call');
    console.log('joining room isl');
    return webrtc.joinRoom('isl');
  });

}).call(this);
