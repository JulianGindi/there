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

        /* full screen video */
        var width = $(window).width();
        var height = $(window).height();

        var currentWidth = $('video').width();
        var currentHeight = $('video').height();

        var containerEq = width / height;

        var videoEq = currentWidth / currentHeight;

        console.log(containerEq, videoEq);

        var vw = width;
        var vh = height;

        if(containerEq <= videoEq){
            vw = height * videoEq;
            vh = height;
        }else{
            vw = width;
            vh = width/videoEq;
        }

        $("video").css({'width':vw,"height":vh});

        return webrtc.joinRoom('isl');
    });

  });

  $(".stop").click(function(event) {
    console.log('click stop');
    webrtc.leaveRoom(name);
  });

}).call(this);