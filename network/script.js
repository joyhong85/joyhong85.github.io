
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
    $("#triangles").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/clustering_view_triangle.html";
    });
    $("#clustering").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/centrality/clustering.html";
    });
  	$("#girvan_newman").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/community/communities_girvan_newman.html";
    });
    $("#asyn_fluidc").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/community/communities_asyn_fluidc.html";
    });
    $("#louvain").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/community/communities_louvain_communities.html";
    });
    $("#kernighan_lin").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/community/communities_kernighan_lin_bisection.html";
    });
    $("#k_clique").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/community/communities_k_clique.html";
    });
    $("#greedy_modularity").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/community/communities_greedy_modularity.html";
    });
    $("#asyn_lpa").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/community/communities_asyn_lpa_communities.html";
    });
    $("#label_propagation").click(function (){
      $("button.cateBtn").removeClass("on");
      $(this).addClass("on");
      document.getElementById("iframeDisplay").src = "https://joyhong85.github.io/network/community/communities_label_propagation.html";
    });
});
