 document.getElementById("urlForm").addEventListener("submit", function(event) {
      event.preventDefault();

      // Get form values
      var nameValue = document.getElementById("name").value;
      var yearValue = document.getElementById("year").value;

      // Generate query string
      var queryString = "name=" + encodeURIComponent(nameValue) + "&year=" + encodeURIComponent(yearValue);

      // Update URL
      var urlElement = document.getElementById("url");
      urlElement.textContent = "https://localhost:8080/?" + queryString;
    });