// hackmyresume tries to be helpful and make every link in json an anchor tag. 
// it appears it also tries to stop you injecting html so then makes the tag text. 
(function() {

    // Block helper function definitions.
    var SampleHelpers = module.exports = {
  
      // A sample helper that returns the supplied value.
        fixLink: function(link) {    
            var linkText = String(link);           

            var regex = /<a href="([^"]+)">.*<\/a>/g;

            var result = regex.exec(linkText);
            
            if(result !== null && result[1] !== undefined) {
                return result[1];
            }

            return link;
        }
    };
  
  }).call(this);