define(function(require){
  var _ = require('underscore');

  var YoutubePlayer = function(iframeId) {
    this.id = iframeId;
  };

  _.extend(YoutubePlayer.prototype, {
    iframe: function() {
      return document.getElementById(this.id);
    },

    action: function(func, args) {
      var _args = args === undefined ? [] : [args]

      this.iframe().contentWindow.postMessage(
        JSON.stringify({
          "event": "command",
          "func": func,
          "args": _args,
          "id": this.id
        }),
        "http://www.youtube.com"
      );
    }
  });

  return YoutubePlayer;
});
