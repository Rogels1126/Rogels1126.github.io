document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 3100, npcCollisionRadius: 100, npcSpeed:300, actionDuration:800, pointsPerNPCInteracted:5, heroSpeed:300, removeNPCAfterInteractedDelay:2000, jumpHeight: 300});
});