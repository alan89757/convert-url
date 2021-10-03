// url参数转json
export const convertUrlToJson = () => {
    var url = window.location.search;
    if (!url) {
      return {};
    }
    let paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    let paraObj = {};
    for (var i = 0; i < paraString.length; i++) {
      var j = paraString[i];
      paraObj[j.substring(0, j.indexOf("="))] = j.substring(j.indexOf("=") + 1, j.length);
    }
    return paraObj;
  };

  //json转url参数
export const  convertJsonToUrl = function(data) {
    var _result = [];
    for (var key in data) {
      var value = data[key];
      if (value.constructor == Array) {
        value.forEach(function(_value) {
          _result.push(key + "=" + _value);
        });
      } else {
        _result.push(key + '=' + value);
      }
    }
    return _result.join('&');
};