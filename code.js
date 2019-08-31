const searchYoutube = require('youtube-api-v3-search');

const api_key = "AIzaSyASq87JMNPgJ9TJj2CmVYUvaKKGCV-3DhQ"
const options = {
    q:'javascript|python -basics',
    part:'snippet',
    type:'video',
    maxResults: 15,
    publishedAfter: '2019-08-04T00:00:00Z',
    order:'date'
}

function callback(error,result){
    if (error !== null) {
        throw new Error(error);
    }
     //Because results are sorted in reverse chronological order based on the date they were created
    //we need to sort them in the right order
    var items = result.items;
    items.sort(function(a,b){
        return new Date(a.snippet.publishedAt) - new Date(b.snippet.publishedAt);
    });

    items.forEach(function(element) {
        var a = element.snippet;
        console.log("Title: \"" +  a.title + '\" ' + "Date: " + a.publishedAt + '\r\n');
    });
}

searchYoutube(api_key, options, callback);