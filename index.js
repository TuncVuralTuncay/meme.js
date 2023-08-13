const fetch = require("node-fetch");
const moment = require("moment")
var search_url = url => "https://www.reddit.com/search.json?q=" + url
var random_url = name => "https://www.reddit.com/r/"+name+"/random/.json"
module.exports ={
    meme: async function(rname) {
        if(typeof(rname) != "string" || !rname) {
            throw new TypeError("Please enter a valid subreddit name or enter the subreddit name.")
        }
        else 
        {
            var search = await fetch(search_url(rname))
            var json = await search.json()
            var result = await json.data.dist
            if(result = 0) { throw new TypeError("Subreddit not found") }
            else
            {
                var getRandom = await fetch(random_url(rname))
                var json = await getRandom.json()
                var result = await json[0].data.children[0].data
                var media_url = (result.is_video == true) ? result.secure_media.reddit_video.fallback_url : result.url
                const sendf = {
                    author:result.author,
                    subreddit_name:result.subreddit_name_prefixed,
                    title:result.title,
                    upvotes:result.ups,
                    downs:result.downs,
                    media_url:media_url,
                    is_video:result.is_video,
                    is_image: (result.is_video == true) ? false : true, 
                    created_timestamp:Number(result.created),
                    created_utc: moment.unix(result.created).format("DD/MM/YYYY, h:mm:ss, ") + moment.unix(result.created).startOf('day').fromNow()
                }
                return sendf
            }
        }
    }
}
