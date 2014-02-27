$(".connect").click (event) ->
    webrtc = new SimpleWebRTC({
        localVideoEl: 'mine',
        remoteVideoEl: '',
        autoRequestMedia: true
    })

    name = 'pipikaka'

    webrtc.once 'readyToCall', ->
        $(".video-container").removeClass('hide')
        console.log "Ready to call"
        console.log "Joining room isl"
        webrtc.joinRoom('isl')

$(".stop").click (event) ->
    console.log "Click stop"
    webrtc.stopLocalVideo()
    webrtc.leaveRoom(room)
    webrtc.hangUp()
