$(document).ready(function(){
    $("#btn").on('click', function(){
      $(".container").html("<p>Older Jiang Cheng</p>");
      $(".container").prepend("<img src='./images/old jiang cheng.jpg' alt=''>");
      $(".container").append("<p>the leader of the Yunmeng Jiang Clan</p>")
    });
});