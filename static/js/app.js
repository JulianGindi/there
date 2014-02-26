(function() {
  var call, callButton, gotLocalDescription, gotLocalIceCandidate, gotRemoteDescription, gotRemoteIceCandidate, gotRemoteStream, gotStream, handleError, hangup, hangupButton, localVideo, remoteVideo, start, startButton, trace;

  localVideo = document.getElementById("localVideo");

  remoteVideo = document.getElementById("remoteVideo");

  startButton = document.getElementById("startButton");

  callButton = document.getElementById("callButton");

  hangupButton = document.getElementById("hangupButton");

  startButton.disabled = false;

  callButton.disabled = true;

  hangupButton.disabled = true;

  startButton.onclick = start;

  callButton.onclick = call;

  hangupButton.onclick = hangup;

  trace = function(text) {
    return console.log((performace.now() / 1000).toFixed(3) + ": " + text);
  };

  gotStream = function(stream) {
    var localStream;
    trace("Received local stream");
    localVideo.src = URL.createObjectURL(stream);
    localStream = stream;
    return callButton.disabled = false;
  };

  start = function() {
    trace("Requesting local stream");
    startButton.disabled = true;
    return getUserMedia({
      audio: true,
      video: true
    }, gotStream, function(error) {
      return trace("getUserMedia error: ", error);
    });
  };

  call = function() {
    var localPeerConnection, remotePeerConnection, servers;
    callButton.disabled = true;
    hangupButton.disabled = false;
    trace("Starting call");
    if (localStream.getVideoTracks().length > 0) {
      trace("Using video device: " + localStream.getVideoTracks()[0].label);
    }
    if (localStream.getAudio().length > 0) {
      trace("Using audio device: " + localStream.getAudioTracks()[0].label);
    }
    servers = null;
    localPeerConnection = new RTCPeerConnection(servers);
    trace("Created local peer connection object localPeerConnection");
    localPeerConnection.onicecandidate = gotLocalIceCandidate;
    remotePeerConnection = new RTCPeerConnection(servers);
    trace("Created remote peer connection object remotePeerConnection");
    remotePeerConnection.onicecandidate = gotRemoteIceCandidate;
    remotePeerConnection.onaddstream = gotRemoteStream;
    localPeerConnection.addStream(localStream);
    trace("Added localStream to localPeerConnection");
    return localPeerConnection.createOffer(gotLocalDescription, handleError);
  };

  gotLocalDescription = function(description) {
    localPeerConnection.setLocalDescription(description);
    trace("Offer from localPeerConnection: \n" + description.sdp);
    remotePeerConnection.setRemoteDescription(description);
    return remotePeerConnection.createAnswer(gotRemoteDescription, handleError);
  };

  gotRemoteDescription = function(description) {
    remotePeerConnection.setLocalDescription(description);
    trace("Answer from remotePeerConnection: \n" + description.sdp);
    return localPeerConnection.setRemoteDescription(description);
  };

  hangup = function() {
    var localPeerConnection, remotePeerConnection;
    trace("Ending call");
    localPeerConnection.close();
    remotePeerConnection.close();
    localPeerConnection = null;
    remotePeerConnection = null;
    hangupButton.disabled = true;
    return callButton.disabled = false;
  };

  gotRemoteStream = function(event) {
    remoteVideo.src = URL.createObjectURL(event.stream);
    return trace("Received remote stream");
  };

  gotLocalIceCandidate = function(event) {
    if (event.candidate) {
      remotePeerConnection.addIceCandidate(new RTCIceCandidate(event.candidate));
      return trace("Local ICE candidate: \n" + event.candidate.candidate);
    }
  };

  gotRemoteIceCandidate = function(event) {
    if (event.candidate) {
      localPeerConnection.addIceCandidate(new RTCIceCandidate(event.candidate));
      return trace("Remote ICE candidate: \n" + event.candidate.candidate);
    }
  };

  handleError = function() {};

}).call(this);
