
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

$(document).ready(function() {
  function renderTweets(tweets) {
   for (var tweet of tweets) {
    var createdTweet= createTweetElement(tweet)
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
    let $username = $(`<p>`).addClass('username').text(tweet.user.name)
    let $useraccount = $(`<p>`).addClass('useraccount').text(tweet.user.handle)
    let $tweetcontent = $(`<p>`).addClass('thetweet').text(tweet.content.text)
    let $tweettime = $(`<p>`).addClass('tweettime').text(tweet.created_at)
    let $logodiv = $('<div>').addClass('footerlogos')
    let $divlogo1 = $('<div>').addClass('logo1')
    let $divlogo2 = $('<div>').addClass('logo2')
    let $divlogo3 = $('<div>').addClass('logo3')
    let $iretweet = $('<i>').addClass("fas fa-retweet")
    let $iheart = $('<i>').addClass("fas fa-heart")
    let $iflag = $('<i>').addClass("fas fa-flag")



    $tweet.append($tweetheader)
    $tweet.append($tweetbody)
    $tweet.append($tweetfooter)

    $tweetheader.append($img)
    $tweetheader.append($username)
    $tweetheader.append($useraccount)

    $tweetbody.append($tweetcontent)
    $logodiv.append($divlogo1)
    $logodiv.append($divlogo2)
    $logodiv.append($divlogo3)
    $divlogo1.append($iretweet)
    $divlogo2.append($iheart)
    $divlogo3.append($iflag)

    $tweetfooter.append($tweettime)
    $tweetfooter.append($logodiv)


      return $tweet;
  }

loadTweets();


$("#textform").submit(function (event) {
      event.preventDefault();
      console.log("form submit");
  if($(".textarea").val().length === 0) {
    alert("You can't submit an empty tweet")
  } else if ($('.textarea').val().length > 140) {
    alert("Your tweet can't exceed 140 characters ")
  } else {
    $.ajax({
      url: '/tweets/',
      method: 'POST',
      data: $(this).serialize(),
      success: function(data) {
        $('#tweetcontainer').prepend(createTweetElement(data));
        $('.textarea').val("");
        $('.counter').text('140');
      }
     });
    }
  })
});








