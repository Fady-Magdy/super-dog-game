export function drawStatusText(context, input, player) {
  context.font = "30px Helvetica";
  context.fillText("Last Input: " + input.lastKey, 20, 40);
  context.fillText("Active State: " + player.currentState.state, 20, 80);
}
