# Fresh-Plum Theme
Project for a FRESH template called Plum, the template attempts to create a tidy single page resume which can be used on both a website and sending a pdf for printing purposes. 

After working on this for a bit I would advise against trying to use this template or any FRESH, Json resume related templates. I've found that the schema for these projects are very relaxed. This means when creating the theme I required the theme to be setup in certain ways for the template to build and look correct. If certain fields are longer than my assumptions the end result will look bad. 

resume's tend to be very personal and it's unlikely you'll be happy with the end result or be able to re-use your .json resume against a wide range of themes without re-working it for specific themes. 

## Building a resume
Current usage 

### npm run build-bundle 
this will conver the sass to css and bundle it all into index.js which is added to the a dist folder. 

### npm run build-resume
this will look for your resume at example/resume.json and create an html version of the json. Currently the templates are very specific to my personal usage. This will output the html page to the dist folder so that the reference to the index.js will work as expected. 

### npm run build 
this will run build-bundle and then build-resume on windows. No guarantees on linux. 

## Tools/links
1. https://github.com/fresh-standard/fresh-themes
2. https://handlebarsjs.com/
3. https://github.com/hacksalot/HackMyResume/tree/ab6e7ee1a0f55608b531f4e644c298426291bb17
4. https://webpack.js.org/guides/getting-started/
5. https://getbootstrap.com/docs/4.0/getting-started/webpack/


## Example
TODO - after first run add an example of the theme.