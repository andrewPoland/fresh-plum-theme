// hackmyresume tries to be helpful and wraps a specific section in a p tag.
(function() {

    // Block helper function definitions.
    var SampleHelpers = module.exports = {
  
      // A sample helper that returns the supplied value.
        fixParagraph: function(link) {    
            var linkText = String(link);           

            var regex = /<p>([^"]+)<\/p>/g;
           
            linkText = linkText.replace("&#39;", "'");

            var result = regex.exec(linkText);
            
            if(result !== null && result[1] !== undefined) {
                return result[1];
            }

            return link;
        }
    };
  
  }).call(this);