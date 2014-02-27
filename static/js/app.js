var webrtc = new SimpleWebRTC({
    localVideoEl: 'localVideo',
    remoteVideosEl: 'remotesVideos',
    autoRequestMedia: true
});


var name = $("#roomname").val();
webrtc.on('readyToCall', function () {
    console.log('ready to call');
        console.log('joining room pipikaka');
    webrtc.joinRoom('pipikaka');
});