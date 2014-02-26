localVideo = document.getElementById("localVideo")
remoteVideo = document.getElementById("remoteVideo")

startButton = document.getElementById("startButton")
callButton = document.getElementById("callButton")
hangupButton = document.getElementById("hangupButton")

startButton.disabled = false
callButton.disabled = true
hangupButton.disabled = true
startButton.onclick = start
callButton.onclick = call
hangupButton.onclick = hangup

trace = (text) ->
    console.log((performace.now() / 1000).toFixed(3) + ": " + text)

gotStream = (stream) ->
    trace("Received local stream")
    localVideo.src = URL.createObjectURL(stream)
    localStream = stream
    callButton.disabled = false

start = ->
    trace("Requesting local stream")
    startButton.disabled = true
    getUserMedia({audio:true, video:true}, gotStream, (error) -> trace("getUserMedia error: ", error))


call = ->
    callButton.disabled = true
    hangupButton.disabled = false
    trace("Starting call")

    if localStream.getVideoTracks().length > 0
        trace("Using video device: " + localStream.getVideoTracks()[0].label)

    if localStream.getAudio().length > 0
        trace("Using audio device: " + localStream.getAudioTracks()[0].label)

    servers = null

    localPeerConnection = new RTCPeerConnection(servers)
    trace("Created local peer connection object localPeerConnection")
    localPeerConnection.onicecandidate = gotLocalIceCandidate

    remotePeerConnection = new RTCPeerConnection(servers)
    trace("Created remote peer connection object remotePeerConnection")
    remotePeerConnection.onicecandidate = gotRemoteIceCandidate
    remotePeerConnection.onaddstream = gotRemoteStream

    localPeerConnection.addStream(localStream)
    trace("Added localStream to localPeerConnection")
    localPeerConnection.createOffer(gotLocalDescription, handleError)

gotLocalDescription = (description) ->
    localPeerConnection.setLocalDescription(description)
    trace("Offer from localPeerConnection: \n" + description.sdp)
    remotePeerConnection.setRemoteDescription(description)
    remotePeerConnection.createAnswer(gotRemoteDescription, handleError)

gotRemoteDescription = (description) ->
    remotePeerConnection.setLocalDescription(description)
    trace("Answer from remotePeerConnection: \n" + description.sdp)
    localPeerConnection.setRemoteDescription(description)

hangup = ->
    trace("Ending call")
    localPeerConnection.close()
    remotePeerConnection.close()
    localPeerConnection = null
    remotePeerConnection = null
    hangupButton.disabled = true
    callButton.disabled = false

gotRemoteStream = (event) ->
    remoteVideo.src = URL.createObjectURL(event.stream)
    trace("Received remote stream")

gotLocalIceCandidate = (event) ->
    if event.candidate
        remotePeerConnection.addIceCandidate(new RTCIceCandidate(event.candidate))
        trace("Local ICE candidate: \n" + event.candidate.candidate)

gotRemoteIceCandidate = (event) ->
    if event.candidate
        localPeerConnection.addIceCandidate(new RTCIceCandidate(event.candidate))
        trace("Remote ICE candidate: \n" + event.candidate.candidate)


handleError = () ->
