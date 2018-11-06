(function() {

    // Block helper function definitions.
    var SampleHelpers = module.exports = {
  
      // A sample helper that returns the supplied value.
        times: function(n, block) {
            var accum = '';
            for(var i = 0; i < n; ++i) {
                block.data.index = i;
                block.data.first = i === 0;
                block.data.last = i === (n - 1);
                accum += block.fn(this);
            }
            return accum;
        }
    };
  
  }).call(this);