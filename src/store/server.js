function server () {
  this.strName = 'NXServer';
  this.strToken = '';
  this.strUrl = 'rtsp://192.168.1.1/stream';
  this.strUser = 'admin';
  this.strPasswd = 'admin';
  this.strDevIpAddress = '192.168.1.1';// ip1

  this.strDevPort = '7001';
  this.nType = 'STREAM_SERVER';
}
export default server
