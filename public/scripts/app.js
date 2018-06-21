// Fake data taken from tweets.json
const data = [
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
$(document).ready(function() {

  function renderTweets(tweets) {
    // loops through tweets. are objects within objects within an array.
   for (var tweet of tweets) {
    // calls createTweetElement for each tweet
    var createdTweet= createTweetElement(tweet);
    $("#tweetcontainer").prepend(createdTweet)
   }
  }

  var loadTweets = function() {
    $.ajax({
      url: '/tweets/',
      method: 'GET',
      success: renderTweets
    });
  }

 function createTweetElement(tweet) {

    let $tweet = $('<article>').addClass('tweet');
    let $tweetheader = $('<header>').addClass('tweetheader')
    let $tweetbody = $('<div>').addClass('tweetcontent')
    let $tweetfooter = $('<footer>').addClass('tweetfooter')

    let $img = $('<img>').addClass('userlogo').attr('src', tweet.user.avatars.small)
    let $username = $(`<p>${tweet.user.name}</p>`).addClass('username')
    let $useraccount = $(`<p>${tweet.user.handle}</p>`).addClass('useraccount')
    let $tweetcontent = $(`<p>${tweet.content.text}</p>`).addClass('thetweet').text()
    let $tweettime = $(`<p>${tweet.created_at}</p>`).addClass('tweettime footerlogo')

    // let $tweetcontent1 =  $(`<p>${tweet.content.text}</p>`).text()
    // let $tweetcontent2 = $tweetcontent1.addClass('thetweet')

    $tweet.append($tweetheader)
    $tweet.append($tweetbody)
    $tweet.append($tweetfooter)

    $tweetheader.append($img)
    $tweetheader.append($username)
    $tweetheader.append($useraccount)

    $tweetbody.append($tweetcontent)

    $tweetfooter.append($tweettime)


      return $tweet;
      // return $tweetbody
      // return $tweetheader;
      // return $tweetfooter;
  }

loadTweets();


$("#textform").submit(function (event) {
  if($(".textarea").val().length === 0) {
    alert("You can't submit an empty tweet")
  } else if ($('.textarea').val().length > 140) {
    alert("Your tweet can't exceed 140 characters ")
  } else {
    console.log('hello world');
    $.ajax({
      url: '/tweets/',
      method: 'POST',
      data: $(this).serialize(),
      success: function(data) {
        $('#tweetcontainer').prepend(createTweetElement(data));
      }

    });
      event.preventDefault();
  }
  event.preventDefault();
})

});





// var $button = $('.myButton');
// $button.on('click', function() {
//   alert('hey');
// });

$('#myButton').on('click', function() {
  alert('test it out')
});





