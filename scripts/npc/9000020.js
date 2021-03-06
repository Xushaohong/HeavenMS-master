/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
status = -1;

// var travelFrom = [777777777, 541000000];
var travelFee = [3000, 10000];

var travelMap = [800000000, 550000000, 211042400, 240050400, 551030100];
var itemToGive = [0, 0, 4001017, 0, 4032246];
var travelPlace = [
  "日本蘑菇神社",
  "马来西亚闹市区",
  "扎昆祭坛入口",
  "黑龙洞穴入口",
  "梦幻公园入口"
];
var travelPlaceShort = [
  "蘑菇神社",
  "吉隆坡",
  "扎昆祭坛",
  "黑龙巢穴",
  "梦幻公园"
];
var travelPlaceCountry = ["日本", "马来西亚", "扎昆", "黑龙", "狮子与熊"];
var travelAgent = ["I", "#r#p9201135##k"];

var travelDescription = [
  "If you desire to feel the essence of Japan, there's nothing like visiting the Shrine, a Japanese cultural melting pot. Mushroom Shrine is a mythical place that serves the incomparable Mushroom God from ancient times.",
  "If you desire to feel the heat of the tropics on an upbeat environment, the residents of Malaysia are eager to welcome you. Also, the metropolis itself is the heart of the local economy, that place is known to always offer something to do or to visit around.",
  "Go slay the crab!",
  "Go get the head of dragon",
  "Go get the cotton of those dolls"
];

var travelDescription2 = [
  "Check out the female shaman serving the Mushroom God, and I strongly recommend trying Takoyaki, Yakisoba, and other delicious food sold in the streets of Japan. Now, let's head over to #bMushroom Shrine#k, a mythical place if there ever was one.",
  "Once there, I strongly suggest you to schedule a visit to Kampung Village. Why? Surely you've come to know about the fantasy theme park Spooky World? No? It's simply put the greatest theme park around there, it's worth a visit! Now, let's head over to the #bTrend Zone of Malaysia#k.",
  "It is a horrible stone",
  "A creepy 3 heads dragon",
  "Two poor dolls"
];

var travelType;
var travelStatus;

function start() {
  travelType = -1;
  travelStatus = getTravelingStatus(cm.getPlayer().getMapId());
  action(1, 0, 0);
}

function getTravelingStatus(mapid) {
  for (var i = 0; i < travelMap.length; i++) {
    if (mapid == travelMap[i]) {
      return i;
    }
  }

  return -1;
}

// function getTravelType(mapid) {
//   for (var i = 0; i < travelFrom.length; i++) {
//     if (mapid == travelFrom[i]) {
//       return i;
//     }
//   }

//   return 0;
// }

function action(mode, type, selection) {
  status++;
  if (mode != 1) {
    if (mode == 0 && status == 4) status -= 2;
    else {
      cm.dispose();
      return;
    }
  }

  if (travelStatus != -1) {
    if (status == 0)
      cm.sendSimple(
        "How's the traveling? Are you enjoying it?#b\r\n#L0#Yes, I'm done with traveling. Can I go back to #m" +
          cm.getPlayer().peekSavedLocation("WORLDTOUR") +
          "#?\r\n#L1#No, I'd like to continue exploring this place."
      );
    else if (status == 1) {
      if (selection == 0) {
        cm.sendNext(
          "Alright. I'll take you back to where you were before the visit to Japan. If you ever feel like traveling again down the road, please let me know!"
        );
      } else if (selection == 1) {
        cm.sendOk("OK. If you ever change your mind, please let me know.");
        cm.dispose();
      }
    } else if (status == 2) {
      var map = cm.getPlayer().getSavedLocation("WORLDTOUR");
      if (map == -1) map = 104000000;

      cm.warp(map);
      cm.dispose();
    }
  } else {
    if (status == 0) {
      //   travelType = getTravelType(cm.getPlayer().getMapId());
      cm.sendNext(
        "If you're tired of the monotonous daily life, how about getting out for a change? there's nothing quite like soaking up a new culture, learning something new by the minute! It's time for you to get out and travel. We, at the Maple Travel Agency recommend you going on a #bWorld Tour#k! Are you worried about the travel expense? You shouldn't be! We, the #bMaple Travel Agency#k, have carefully come up with a plan to let you travel "
        // for ONLY #b" +
        //   cm.numberWithCommas(travelFee[travelType]) +
        //   " mesos#k!"
      );
    } else if (status == 1) {
      var travelOptions = "";
      var travelLen = travelPlace.length;
      if (cm.getLevel() < 120) {
        //120以下不让进
        travelLen = 2;
      }
      for (var i = 0; i < travelLen; i++) {
        travelOptions +=
          "#b\r\n#L" +
          i +
          "#是的, 请带我去 " +
          travelPlaceShort[i] +
          " (" +
          travelPlaceCountry[i] +
          ")";
      }
      cm.sendSimple(
        "We currently offer this place for you traveling pleasure: #b" +
          travelPlace[0] +
          "#k and #b" +
          travelPlace[1] +
          "#k. " +
          travelAgent[0] +
          "'ll be there serving you as the travel guide. Rest assured, the number of destinations will be increase over time. Now, where would you like to head over " +
          "?" +
          travelOptions
      );
    } else if (status == 2) {
      if (travelType == -1) {
        travelType = selection;
      }

      cm.sendNext(
        "Would you like to travel to #b" +
          travelPlace[travelType] +
          "#k? " +
          travelDescription[travelType]
      );
    } else if (status == 3) {
      if (cm.getMeso() < travelFee[travelType]) {
        cm.sendNext("You don't have enough mesos to take the travel.");
        cm.dispose();
        return;
      }
      cm.sendNextPrev(travelDescription2[travelType]);
    } else if (status == 4) {
      cm.gainMeso(-travelFee[travelType]);
      cm.getPlayer().saveLocation("WORLDTOUR");
      cm.warp(travelMap[travelType], 0);
      if (itemToGive[travelType] > 0) {
        cm.gainItem(itemToGive[travelType], 1);
        // cm.gainItem(2049100, 99);
      }
      cm.dispose();
    }
  }
}
