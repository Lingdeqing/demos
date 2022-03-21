const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 9999,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();

// 推流
// ffmpeg -re -i ./videos/test_live.mp4 -vcodec libx264 -acodec aac -f flv rtmp://localhost:9999/live/test