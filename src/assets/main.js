$(function() {
$.ajax("https://www.codeschool.com/users/1064151.json", {
  dataType: "jsonp",
  success: function (response) {
      var completedCourses = response.courses.completed;
      $.each(completedCourses, function (index, item) {
         var divNode = $("<div></div>");
         var h3Node = $("<h3></h3>");
         var imgNode = $("<img>");
         var aNode = $("<a></a>");
         $("#badges").append(divNode);
         divNode.addClass("course")
                .append(h3Node)
                .append(imgNode)
                .append(aNode);
         h3Node.text(item.title);
         imgNode.attr("src", item.badge);
         aNode.attr("href", item.url)
              .attr("target", "_blank")
              .addClass("btn btn-primary")
              .text("See Course");
      })
    }
  });
});
