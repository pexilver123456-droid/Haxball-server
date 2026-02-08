const HB = require('haxball-headless');

const room = HB.createRoom({
  roomName: "Mój Serwer 24/7",
  maxPlayers: 12,
  public: true
});

room.setDefaultStadium("Classic");
room.setScoreLimit(5);
room.setTimeLimit(0);

room.onPlayerJoin = (player) => {
  room.sendAnnouncement(
    "Witaj " + player.name + " na serwerze!",
    player.id,
    0x00ff00,
    "bold"
  );
};

console.log("Serwer wystartował! Możesz wejść: https://www.haxball.com/play?c=" + room.getRoomLink());
