
  $(function (){
  	$("#default").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/centrality_default.html";
    });
    $("#edge_weight").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/edge_weight.html";
    });
    $("#degree").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/centrality_degree.html";
    });
    $("#weighted_degree").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/centrality_weighted_degree.html";
    });
    $("#betweenness").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/centrality_betweenness.html";
    });
    $("#edge_betweenness").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/centrality_edge_betweenness.html";
    });
    $("#closeness").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/centrality_closeness.html";
    });
    $("#eigenvector").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/centrality_eigenvector.html";
    });
    $("#weighted_eigenvector").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/centrality_weighted_eigenvector.html";
    });
    $("#harmonic").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/centrality_harmonic.html";
    });
    $("#katz").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/centrality_katz.html";
    });
    $("#pagerank").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/centrality_pagerank.html";
    });
});

