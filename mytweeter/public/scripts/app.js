// Fake data taken from tweets.json
const data = [ // hardcoded database
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
$(document).ready(function() { // A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness
                               //for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM)
                               // is ready for JavaScript code to execute.

  function renderTweets(tweets) { // starting a function called renderTweets which will execust the following lines of code:
   for (var tweet of tweets) { //first we need to loops throught each tweet in our tweets database.
    var createdTweet= createTweetElement(tweet);// declaring a variable called createdTweet that will send each tweet from our loop above to
                                                // the createTweetElement on line 68. This line sends us to line 68.
    $("#tweetcontainer").prepend(createdTweet) // here we are appending our newly created tweets to the top of our #tweetcontainer on line 55 from our index.html file.
   }
  }

  var loadTweets = function() { // declaring a variable loadTweets that holds a function
    $.ajax({ // that function is equal to some AJAX magic
      url: '/tweets/', //location of where we want to GET something
      method: 'GET', // we are making a GET request to the url above
      success: renderTweets  // if we succesfully "GET"it, please run the renderTweets function on line 52.
      // $('textarea').val(null);
    });
  }

 function createTweetElement(tweet) { // declaring a function called createTweetElement, that takes a tweet from line 53 as an argument.

    let $tweet = $('<article>').addClass('tweet'); // declaring a variable $tweet, that will add the 'tweet' class from line 57 in our
                                                   // index.html file to a new JQuery created <article> tag that will be give the styles
                                                   // that our 'tweet' class has in our layout.css file. Please review layout.css
    let $tweetheader = $('<header>').addClass('tweetheader') // same concept as above
    let $tweetbody = $('<div>').addClass('tweetcontent') // same concept as above
    let $tweetfooter = $('<footer>').addClass('tweetfooter') // same concept as above

    let $img = $('<img>').addClass('userlogo').attr('src', tweet.user.avatars.small)
    let $username = $(`<p>`).addClass('username').text(tweet.user.name) // same concept as above
    let $useraccount = $(`<p>`).addClass('useraccount').text(tweet.user.handle) // same concept as above
    let $tweetcontent = $(`<p>`).addClass('thetweet').text(tweet.content.text) // same concept as above
    let $tweettime = $(`<p>`).addClass('tweettime').text(tweet.created_at)
    let $logodiv = $('<div>').addClass('footerlogos')
    let $divlogo1 = $('<div>').addClass('logo1')
    let $divlogo2 = $('<div>').addClass('logo2')
    let $divlogo3 = $('<div>').addClass('logo3') // do this for every logo. // append to footer.
    let $iretweet = $('<i>').addClass("fas fa-retweet")
    let $iheart = $('<i>').addClass("fas fa-heart")
    let $iflag = $('<i>').addClass("fas fa-flag")// do this for every image. // append to divlogo



    $tweet.append($tweetheader) // append our new $tweetheader from line 73 to our new $tweet article from line 70
    $tweet.append($tweetbody) // append our new $tweetbody from line 74 to our new $tweet article.
    $tweet.append($tweetfooter)// append our new $tweetfooter from line 75 to our new $tweet article.

    $tweetheader.append($img) // append our new $img from line 77 to our new $tweetheader
    $tweetheader.append($username) // append our new $username from line 78 to our new $tweetheader
    $tweetheader.append($useraccount) // append our new $useraccount from line 79 to our new $tweetheader

    $tweetbody.append($tweetcontent) // append our new $tweetcontent from line 80 to our new $tweetbody
    $logodiv.append($divlogo1)
    $logodiv.append($divlogo2)
    $logodiv.append($divlogo3)
    $divlogo1.append($iretweet)
    $divlogo2.append($iheart)
    $divlogo3.append($iflag)

    $tweetfooter.append($tweettime) // append our new $tweettime from line 81 to our new $tweetfooter
    $tweetfooter.append($logodiv)


      return $tweet; // returning our new $tweet article with all our

  } // going back to line 56.

loadTweets(); //calling our loadTweets function from line 60.


$("#textform").submit(function (event) { // declaring a .submit event on our #textform from line 44 in our index.html file
      event.preventDefault();
      console.log("form submit");
  if($(".textarea").val().length === 0) { // if the length of the value of what user is inputting into the .textarea is equal to 0, please do this:
    alert("You can't submit an empty tweet") // declaring an alert
  } else if ($('.textarea').val().length > 140) { // if the length of the value is superior to 140, please do this:
    alert("Your tweet can't exceed 140 characters ") // declaring an alert
  } else { // or else do this
    $.ajax({ // AJAX magic coming into play
      url: '/tweets/', // location of where we want something to go to.
      method: 'POST', // we are making a POST request to the url above
      data: $(this).serialize(),             // ????????????????????????????
      success: function(data) {  // if the we succesfully posted to the /tweets/ url, please run this function:
        $('#tweetcontainer').prepend(createTweetElement(data)); // prepending the newly created $tweet article to our #tweetcontainer.
      }

    });

  }

})

});
