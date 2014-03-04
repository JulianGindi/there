webrtc = new SimpleWebRTC
    localVideoEl: 'localVideo'
    remoteVideosEl: 'remotesVideos'
    autoRequestMedia: false


name = $("#roomname").val()
webrtc.on 'readyToCall', ->
    console.log('ready to call')
    console.log('joining room isl')
    webrtc.joinRoom('isl')
