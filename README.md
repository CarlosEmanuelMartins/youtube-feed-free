# youtube-feed-free

A simple webpage [carlosemanuelmartins.com/youtube-feed-free](carlosemanuelmartins.com/youtube-feed-free) with a darkmode youtube search bar, so you can block YouTube home page (feed) and take advantage of youtube tutorials without geting distracted. Built the search bar with html, styled it with css to look exacly like youtube search bar. Uses javascrip to revice the query and redirect it to youtube. 

![youtube-feed-free](https://user-images.githubusercontent.com/50026515/151962804-90f26ef7-6967-417b-a205-74ee71f18e85.png)

## The problem

> thumbails will draw you attention and take advange of you natural curiosity, with tools such as exagerated facial expression, erotic poses, dramatic and suspenseful titles, big red arrows and yellow letters they hack your brain into wanting to click the video. But alas seing the minimalistic seach bar immedialty stops you in your tracks and demands a answer: What do you want to watch ? More often then not the answee is nothing.

Youtube feed, like any social media feed, is made with the intent to maximise user time spent on the website as such will bring maximum amount of add revenue. This can be detrimental to the user, leading to focus problems and some times even addiction. By blocking the youtube home page with a application like [coldturky](https://getcoldturkey.com/) or [leachblock](https://chrome.google.com/webstore/detail/leechblock-ng/blaaajhemilngeeffpbfkdjjoefldkok) you can stop being manipulated by feed's algo and all the clickbait thumbnails.

## how to use

1. Book mark the carlosemanuelmartins.com/youtube-feed-free
2. Use an app like [coldturky](https://getcoldturkey.com/) or [leachblock](https://chrome.google.com/webstore/detail/leechblock-ng/blaaajhemilngeeffpbfkdjjoefldkok) to Block the youtube feed at `youtube.com` and `youtube.com/index`
3. Allow List at lest the urls `www.youtube.com/watch?v=*` and `www.youtube.com/results?search_query=*` so you can view videos and query youtube respectivly
4. set your blocker app of choise to redirect you to  youtube-feed-free when it blocks you from a page.
5. custumise the allow/block list of your app of choise to allow a more restictive or relaxed youtube experece blocking explore, subscription, history, playlist , specific channels, videos...

> if you dont feel confortable with blocker you can use rederect extencion, to rederect youtube.com and youtube.com/index to carlosemanuelmartins.com/youtube-feed-free

### Personal advice

You can use youtube enhanced or youtube df (distration free) to hide comments, related videos, enscren video recomendation amoung other thing to make youtube even less distracting. This 2 APPs have a feature to redirect youtube home page to a search. The problem is that you can't block it with an url blocker the youtube.com page making it super easy to circunvent the measure. It only takes 3 clicks and you can see the feed again.

> No one ever tought to them selfs I'm say cuz I'm not watching that 5 minutes meme compilation, people thing to them self I'm sad/stressed beacuse I'm not studing form my exam, or building that app idea or learning skill X. Block the feed it was never worth it.

Its also commun to have more then on activity that serves as a **time sink** at the computer, for example for me its music (spotify), youtube long format political videos and news and league of legends. This creates a **cicle of compulsion** sometimes called internet addiction, were 20 minute news video on the morming makes me agry, so I game for a few hour to feel better, after intece mental efford of esoports I feel tired so I leassen to music, conciencius rap leads me to search documentarys about social issues and the circle goes on the entire day. If youtube is your main addiction breaking it may lead to find the other component of the circle. You will find yourself procrastinating on this other activities, do not discurage you you now have one less compulsion and more knowladge about youself to aid the battle against procrastination.

If you are using youtube to study you only need, **search, video and channel pages** (studio page if you are a content creator). The truth is that anytime you are browsing, be it the explore page, or the subscription page, ect... you don't have a need for specifc information like how to fix a bug or solve a math problem. Non productive form of content will always win vs more productive activitys. If you are exposed to a 5 minute meme compilation and a 1 hour long java tutorial you will take the memes more ofthen then not. Its not worth the downside, just block all feeds and you lose nothing. The content you trully love you will remenber it and search for it. Bookmarks can also help with this. 

For me this App worked instantaneuslly for you it may be diferent I had used app like youtube distration free for 2 years now So I know myself and built the solution, dont give up. **Above all be positive and keep in mind small improvement over time are a big win**
 
## relevant url allowList

> [full list of plain text url](#plain-text-urls)

Must block this 2 url that lead to the youtube front page

* `www.youtube.com/index`
* `www.youtube.com/`

Must allow this to  watch videos
* `www.youtube.com/watch?v=*`

Must Allow to be able to search
* `www.youtube.com/results?search_query=*`

This are the 3 formats that a channel can take white list this so you can acess channel page

> CAUTION `www.youtube.com/c/*` can be abreviated to `www.youtube.com/*` , many youtuber do this to have more memorable links if you open a channel link and it does not work just add "righ-click-> copy link adress" past in the url bar and add the `c/*` part. Same is true for the `www.youtube.com/user/*` just add the `user/`

* `www.youtube.com/user/*`
* `www.youtube.com/c/*`
* `www.youtube.com/channel/*`

allow this will allow the explore page,subscriptions, library and history
* `www.youtube.com/feed/*`

specifc url for: explore, subscriptions, library and history respectivly:
* `www.youtube.com/feed/explore`
* `www.youtube.com/feed/subscriptions`
* `www.youtube.com/feed/library`
* `www.youtube.com/feed/history`

allow this url to have acess to the youtube creator studio: uplloading videos, managing videos, moderating coments...
* `studio.youtube.com/*`

//this will allow playlist
* `www.youtube.com/playlist?list=*`
* `https://www.youtube.com/watch?list=*`

I belive some youtube support pages and error messages have this url type
* `www.youtube.com/s/*`

This url is used to fallow links from youtube to outside of youtube
* `https://www.youtube.com/redirect?event=*`

This url blocks youtube shorts
* `https://www.youtube.com/shorts/*`

this url leads to the treading page
* `https://www.youtube.com/feed/trending*`

### Plain text urls

> `*` represents a whildcard, the simbol for this whild card may change depending no your program

```
youtube.com/
youtube.com/index
www.youtube.com/results?search_query=*
www.youtube.com/watch?v=*
youtube.com/channel/*
youtube.com/c/*
youtube.com/user/*
www.youtube.com/feed/*
www.youtube.com/feed/explore
www.youtube.com/feed/subscriptions
www.youtube.com/feed/library
www.youtube.com/feed/history
studio.youtube.com/*
www.youtube.com/playlist?list=*
www.youtube.com/watch?list=*
youtube.com/s/*
https://www.youtube.com/redirect?event=*
```
