<script type="text/javascript">
  $(function (){
  	$("#default").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality_default.html";
    });
    $("#edge_weight").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/edge_weight.html";
    });
    $("#degree").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality_degree.html";
    });
    $("#weighted_degree").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality_weighted_degree.html";
    });
    $("#betweenness").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality_betweenness.html";
    });
    $("#edge_betweenness").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality_edge_betweenness.html";
    });
    $("#closeness").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality_closeness.html";
    });
    $("#eigenvector").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality_eigenvector.html";
    });
    $("#weighted_eigenvector").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality_weighted_eigenvector.html";
    });
    $("#harmonic").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality_harmonic.html";
    });
    $("#katz").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality_katz.html";
    });
    $("#pagerank").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality_pagerank.html";
    });
});
</script>
