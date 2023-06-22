const videoContainer = document.getElementById('videoContainer');


let videoStopper = function(id) {
    let containerElement = document.getElementById(id);
    let iframe_tag = containerElement.querySelector( 'iframe');
    let video_tag = containerElement.querySelector( 'video' );
    if ( iframe_tag) {
        let iframeSrc = iframe_tag.src;
        iframe_tag.src = iframeSrc; 
    }
    if ( video_tag) {
        video_tag.pause();
    }
}   


function stop_video() {
    videoStopper("videoContainer");
}