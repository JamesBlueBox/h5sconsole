function stream () {
  this.strName = 'LobbyCamera';
  this.strToken = '';
  this.strUrl = 'rtsp://192.168.1.1/stream';
  this.strUser = 'admin';
  this.strPasswd = 'admin';
  this.strSrcIpAddress = '192.168.1.1';// ip1

  this.strSrcPort = '80';
  this.nType = 'RTSP_STREAM';
}
export default stream
