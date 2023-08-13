## Hi 👋 !!!!

#
<p><a href="https://npmjs.com/package/meme.js"><img src="https://badgen.net/npm/dt/meme.js" alt="Total Downloads"></a></p>

## How To Install ? 
```npm
npm i meme.js
```

# Available data :
```
Author: Name of the post creator
Subreddit Name: Name of the subreddit
Title: Title of the post
Upvotes: Number of upvotes
Downs: Number of downvotes (currently not functioning correctly)
Media URL: URL of the media (video, image, etc.)
Is Video: Is the media a video?
Is Image: Is the media an image?
Created Timestamp: Timestamp of creation (in UTC format)
Created UTC: UTC format (DAY/MONTH/YEAR, HOUR/MINUTE/SECOND, X days ago)
```

# How to use ?
## Examples : 

----
### Get author name
```javascript
const memejs = require("meme.js")

memejs.meme("burdurland").then(data => {
    console.log(data.author)
    // Output : Tuncvrdev
})
```
### Get all data 
```javascript
const memejs = require("meme.js")

memejs.meme("burdurland").then(data => {
    console.log(data)
    //Output bellow
})
```
## Example of JSON input :
```json
{
  author: 'Tunç',
  subreddit_name: 'r/burdurland',
  title: 'biraz tanıdık',
  upvotes: 85,
  downs: 0,
  media_url: 'media_url',
  is_video: false,
  is_image: true,
  created_timestamp: 1691158236,
  created_time: '04/08/2023, 5:10:36, 10 days ago'
}
```

# [node-file-creator-cli](https://npmjs.com/package/node-file-creator-cli)

Create file using a cli (cmd,terminal etc.) 

# [randm-user-agent](https://npmjs.com/package/randm-user-agent)

Get random user agent

# [tuncvr-db](https://npmjs.com/package/tuncvr-db) 

Simple database module

# [doviz-api-tr](https://npmjs.com/package/doviz-api-tr)

Get currently currency only TR (TURKEY) 