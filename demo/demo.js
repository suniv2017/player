var player = require('../index');

// 播放demo.mp3
var song = player.add( __dirname + '/demo.mp3');
var song2 = player.add( __dirname + '/demo2.mp3');

// 马上播放demo.mp3
player.play([song,song2]);

// 3秒后停止播放
// setTimeout(function(){
//     player.stop(song);
// },3000);