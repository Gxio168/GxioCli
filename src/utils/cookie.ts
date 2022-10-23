export const docCookies = {
  // 获取某一个 cookie
  getItem(sKey: string) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  // 设置 cookie
  setItem(sKey: string, sValue: any, sPath?: string, sDomain?: string, bSecure?: string) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  // 移除 cookie
  removeItem(sKey: string, sPath: string, sDomain: string) {
    if (!sKey || !this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  },
  // 判断是否含有某个 cookie
  hasItem(sKey: string) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
};