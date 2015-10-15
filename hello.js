var page = require('webpage').create();

page.open('file:///home/sokunthearith/Documents/Kudos%20Team/index.html', function() {
  // being the actual size of the headless browser
  page.viewportSize = { width: 1440, height: 900 };

  var clipRect = page.evaluate(function(){
    return document.querySelector('#form').getBoundingClientRect();
  });

  page.clipRect = {
    top:    clipRect.top,
    left:   clipRect.left,
    width:  clipRect.width,
    height: clipRect.height
  };

  page.render('form.jpeg');
  phantom.exit();
});