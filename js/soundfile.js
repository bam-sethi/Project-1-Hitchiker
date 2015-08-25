console.log('hi sound')

soundManager.setup({
    // where to find the SWF files, if needed
    url: '../music/',

    onready: function() {
      var soundtrack = soundManager.createSound({
      url: '/Users/ambar/fundamentals/Projects/project-1/hitchiker/sounds/inverse.mp3'
      });
      soundtrack.play();

    },

    ontimeout: function() {
      // Uh-oh. No HTML5 support, SWF missing, Flash blocked or other issue
    }
});