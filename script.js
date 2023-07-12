$(document).ready(function() {
    var apiKey = '1f9c3b8b0adf468badacae95cd422893'; // Replace with your NewsAPI API key
  
    // Function to load news feed
    function loadNewsFeed() {
      $.ajax({
        url: 'https://newsapi.org/v2/top-headlines',
        method: 'GET',
        data: {
          country: 'us', // Replace with your desired country code
          apiKey: apiKey
        },
        dataType: 'json',
        success: function(response) {
          displayNewsFeed(response.articles);
        },
        error: function(xhr, status, error) {
          console.log('Error:', error);
        }
      });
    }
  
    // Function to display news feed
    function displayNewsFeed(articles) {
      var newsFeed = $('#news-feed');
      newsFeed.empty();
  
      if (articles.length === 0) {
        newsFeed.append('<p>No news articles found.</p>');
      } else {
        for (var i = 0; i < articles.length; i++) {
          var article = articles[i];
          var newsItem = $('<div>').addClass('news-item');
          var title = $('<h2>').text(article.title);
          var description = $('<p>').text(article.description);
  
          newsItem.append(title, description);
          newsFeed.append(newsItem);
        }
      }
    }
  
    // Load news feed initially
    loadNewsFeed();
  
    // Refresh news feed every 5 seconds
    setInterval(loadNewsFeed, 5000);
  });