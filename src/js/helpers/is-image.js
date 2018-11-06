(function() {

    // Block helper function definitions.
    var SampleHelpers = module.exports = {
  
      // A sample helper that returns the supplied value.
        isImage: function(url) {
            return String(url).match(/\.(jpeg|jpg|gif|png)$/) != null;            
        }
    };
  
  }).call(this);