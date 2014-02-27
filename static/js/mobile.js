var name = 'pipikaka';

var webrtc = new SimpleWebRTC({
        localVideoEl: 'mine',
        remoteVideosEl: 'yours',
        autoRequestMedia: true
    });

webrtc.on('readyToCall', function () {
        console.log('hi')
        console.log('joining room pipikaka');
        webrtc.joinRoom('pipikaka');
    });


$("a").click(function(event) {
    event.preventDefault();
});