/**
 * Created by Администратор on 12.09.2016.
 */
/**
 * Created by pahlavaubivca on 27.07.2016.
 */

var totalSize = 0;
var startByte = 0;
var chunkSize = 100000;
var counter = false;
var endByte = chunkSize;

//var FILE = 'http://localhost:666/storage/frag_bunny.mp4';
//var FILE = 'http://test.admixer.net/test1/76a277a9-8ec2-48a3-aa12-86afc932dde4/frag_bunny.mp4';
//var FILE = 'http://ua2cdn.admixer.net/test1/76a277a9-8ec2-48a3-aa12-86afc932dde4/video.mp4';
var FILE = 'http://ua2cdn.admixer.net/test1/38ce5c05-5c5c-43bf-b612-0e5d25ef0257/5f4b9323-35f7-4f51-8eac-3c560039bf9d.mp4';
//var FILE = 'http://ua2cdn.admixer.net/supportdir/aTestBanners/banners/test/mobile/videoOnMobile/config2/nginx-1.11.3/data/storage/frag_bunny.mp4';


var NUM_CHUNKS = 25;
var video = document.getElementById('player');
video.muted = true;
window.MediaSource = window.MediaSource || window.WebKitMediaSource;
var mediaSource = new MediaSource();
var sourceBuffer = 0;
var file = 0;
var reader = 0;
var i = 0;
video.src = window.URL.createObjectURL(mediaSource);
video.addEventListener('error', function () {
    console.log(video.error.code)
})
function call(uInt8Array) {
    //var sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp9, vorbis"');
    if (!counter)sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
    file = new Blob([uInt8Array], {type: 'video/mp4'});
    reader = new FileReader();
    counter = true;
    reader.onload = function (e) {
        sourceBuffer.appendBuffer(new Uint8Array(e.target.result));
        if (video.paused) {
            if (this.promise && this.promise.then) {
                this.promise.then(function () {
                    video.play();
                })
            } else {
                this.promise = video.play()
                video.play();
            }
        }
        startByte = startByte + chunkSize + 1;
        if (startByte < totalSize) {
            if (totalSize != 0 && (startByte + chunkSize) < totalSize) {
                endByte = (startByte + chunkSize);
            } else {
                endByte = ((totalSize - startByte) + startByte);
            }
            GET(FILE, call);
        }
    }
    var chunk = file;
    reader.readAsArrayBuffer(chunk);
}
function callback(e) {
    GET(FILE, call);
}
var first = true;
mediaSource.addEventListener('sourceopen', callback, false);
mediaSource.addEventListener('webkitsourceopen', callback, false);
function GET(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Range', 'bytes=' + startByte + '-' + endByte);
    xhr.responseType = 'arraybuffer';
    xhr.send();
    xhr.onload = function (e) {
        if (xhr.status != 200 && xhr.status != 206) {
            return false;
        }
        totalSize = xhr.getResponseHeader('Content-Range')!=null?parseInt(xhr.getResponseHeader('Content-Range').split('/')[1]) : 0;
        console.log(xhr.getResponseHeader('Content-Range'))
        callback(new Uint8Array(xhr.response));
    };

}

