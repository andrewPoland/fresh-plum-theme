(function() {

    // Block helper function definitions.
    var SampleHelpers = module.exports = {
  
      // A sample helper that returns the supplied value.
        formatLevel: function(level) {            
            var levelNumber = Number(level);
            if(levelNumber == NaN) {
                return NaN;
            }

            if(levelNumber > 0 && levelNumber <= 5)  {
                return levelNumber;
            }

            if(levelNumber > 5 && levelNumber <= 10) {
                return Math.floor(levelNumber/2);
            }

            return NaN;
        }
    };
  
  }).call(this);