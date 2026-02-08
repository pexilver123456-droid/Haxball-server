const room = HBInit({
  roomName: "MÓJ SERWER",
  maxPlayers: 12,
  public: true,
  noPlayer: true
});

room.setDefaultStadium("Classic");
room.setScoreLimit(5);
room.setTimeLimit(0);

room.onPlayerJoin = function(player) {
  room.sendAnnouncement(
    "Witaj " + player.name,
    player.id,
    0x00ff00,
    "bold"
  );
};
