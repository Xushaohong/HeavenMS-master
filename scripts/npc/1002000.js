var status = 0;
var imaps = [
  104000000,
  102000000,
  100000000,
  101000000,
  103000000,
  120000000,
  105040300
];
var maps = [102000000, 100000000, 101000000, 103000000, 120000000];
var cost = [1000, 1000, 800, 1000, 800];
var townText = [
  [
    "你所在的位置是明珠港！我会为你介绍更多关于#b明珠港#k的信息。这里是你乘坐维多利亚号着陆在金银岛的地点。许多从彩虹岛来的新手在这里开始他们的旅程。",
    "这里是一个安静的城镇，在它背后是一大片海水，这要归功于它的地理位置，这个港口位于金银岛的最西端。这里的大多数人都以捕鱼为生，因此他们看起来有点吓人，不过如果你主动与他们交谈，他们会非常友善。",
    "在城镇旁边还有一片美丽的草原。大部分的怪物都非常弱小温和，对新手尤佳。如果你还没有转职，那么这里会是一个升级的好去处。"
  ],
  [
    "我会为你介绍更多关于#b勇士部落#k的信息。他是一个战士村落，位于金银岛的北端，被落基山脉包围。那里大气稀薄，只有强者得以生存。",
    "在高原周边你会发现一株十分枯瘦的数目，狂奔的野猪与遍布全岛的猴子在这里出没。那里还有一个幽深的峡谷，当你深入其中，会发现堆积如山的恐龙，它们有着与其大小相称的力量。进入那里最好要小心，或者干脆不要进去。",
    "如果你想成为一名#b战士#k那么去找#r武术教练#k，勇士部落的首领。如果你已经有10级或者10级以上，并且有着不错的力量值，他会让你变成一名战士。否则，最好在你达到标准之前继续锻炼自己。"
  ],
  [
    "我会为你介绍更多关于#b魔法密林#k的信息。这是一个位于金银岛远东地带的魔法师城镇，被高大而神秘的树木笼罩。你也会在那里发现一些妖精。他们通常不喜欢人类，所以你最好成为他们的友好方并且保持安静。",
    "在森林附近你会发现一些绿水灵，行走的蘑菇，猴子和僵尸猴子都居住在那里。往森林深处走去你会发现带着飞行扫帚的巫师在指引天空。一句忠告：除非你十分强大，我建议你不要接近他们。",
    "如果你希望成为一名#b魔法师#k，寻找#r汉斯#k，魔法密林的首席巫师。如果你在8级以上并且智力尚佳，他会帮助你成为一名魔法师。如果你没有达标，那么你可能需要再受更多的伤来训练你自己。"
  ],
  [
    "我会为你介绍更多关于#b射手村#k的信息。它坐落于金银岛的最南端，是弓箭手的城镇，建造于草原中的一片平地。气候适宜，物产丰富，十分宜居。一定不要错过。",
    "在草原周边你会发现很多弱小的怪物，比如蜗牛，蘑菇和猪。根据我的听闻，在与城镇相连的猪猪公园的最深处，你时不时会发现一个叫做蘑菇王的巨大且强悍的蘑菇。",
    "如果你希望成为一名#b弓箭手#k，你需要去看望射手村的#r赫丽娜#k。如果你的等级在10级以上并且敏捷尚可的话，她会同意的。否则，使自己强大之后再去尝试。"
  ],
  [
    "我会为你介绍更多关于#b废弃都市#k的信息。这是位于金银岛西北部的一个飞侠的城镇。那里的建筑物风格怪异。通常它被笼罩在黑云之中，不过你可以攀爬到高处去观赏日落风光。",
    "从废弃都市出发你可以到达几个迷宫，你可以到达短吻鳄和青蛇出没的沼泽地，也可以进入满是幽灵和蝙蝠的地铁站。在地底深处，你会找到大绿水灵，他与恐龙一样巨大而强悍。",
    "如果你希望成为一名#b飞侠#k，寻找#r达克鲁#k，他在废弃都市黑暗的中心。如果你的等级在10级以上并且有足够的敏捷值，他会帮你成为一名飞侠。否则的话，继续去锻炼自身吧。"
  ],
  [
    "这是一点点关于#b#m120000000##k的信息。它是金银岛上一艘目前停靠在魔法密林与射手村之间的潜艇。同样它为许多海盗提供了一个家。你可以在那里见到如同明珠港一样的美丽海景。",
    "#m120000000#停靠在射手村和魔法密林之间，所以只要你稍微迈出几步，你就能享受到这两个城镇的风景。在城镇里遇到的海盗们也都非常乐于社交并且平易近人。",
    "如果你下定决心要成为一名#b海盗#k，那么你最好去见#m120000000#的船长，#r#p1090000##k。如果你在10级以上并且有20以上的敏捷，那么她会让你加入他们的。如果你没有达到需要的等级，那么继续努力吧！"
  ],
  [
    "我会为你介绍更多关于#b林中之城#k的信息。它位于金银岛的最南端。正好在射手村和蚂蚁洞穴之间。这里有一个宾馆，所以你可以在一整天的迷宫之旅后略作休整。总体来说这是一个安静的城镇...",
    "在宾馆钱有一个名为#rChrishrama#k的老僧侣。没有人知道关于他的任何事情。显然他在向旅行者收集材料并且在制作什么东西，不过我也不确定其中的细节。如果你有任何事情需要经过那片区域，请确认并且转告我。",
    "从林中之城出发往东走，你会发现连通金银岛最深处的蚂蚁洞穴。这里富含大量讨厌并且强大的怪物。所以如果你当这里是一个公园进去闲逛的话，你出来时会变成一具尸体。在进去之前务必做好充分准备。",
    "此外这是我听闻的... 显然，在林中之城里有一个带你去向未知空间的秘密入口。显然，一旦你深入，你会发现一堆会移动的黑色石头。在不久的将来我想亲眼去看看..."
  ]
];
var selectedMap = -1;
var town = false;

function start() {
  cm.sendNext(
    "Do you wanna head over to some other town? With a little money involved, I can make it happen. It's a tad expensive, but I run a special 90% discount for beginners."
  );
}

function action(mode, type, selection) {
  status++;
  if (mode != 1) {
    if ((mode == 0 && !town) || mode == -1) {
      if (type == 1 && mode != -1)
        cm.sendNext(
          "There's a lot to see in this town, too. Let me know if you want to go somewhere else."
        );
      cm.dispose();
      return;
    } else {
      status -= 2;

      if (status < 1) {
        cm.dispose();
        return;
      }
    }
  }
  if (status == 1)
    cm.sendSimple(
      "It's understandable that you may be confused about this place if this is your first time around. If you got any questions about this place, fire away.\r\n#L0##bWhat kind of towns are here in Victoria Island?#l\r\n#L1#Please take me somewhere else.#k#l"
    );
  else if (status == 2) {
    if (selection == 0) {
      town = true;
      var text =
        "There are 7 big towns here in Victoria Island. Which of those do you want to know more of?#b";
      for (var i = 0; i < imaps.length; i++)
        text += "\r\n#L" + i + "##m" + imaps[i] + "##l";
      cm.sendSimple(text);
    } else if (selection == 1) {
      var selStr =
        cm.getJobId() == 0
          ? "There's a special 90% discount for all beginners. Alright, where would you want to go?#b"
          : "Oh you aren't a beginner, huh? Then I'm afraid I may have to charge you full price. Where would you like to go?#b";
      for (var i = 0; i < maps.length; i++)
        selStr +=
          "\r\n#L" +
          i +
          "##m" +
          maps[i] +
          "# (" +
          cost[i] / (cm.getJobId() == 0 ? 10 : 1) +
          " mesos)#l";
      cm.sendSimple(selStr);
    }
  } else if (town) {
    if (selectedMap == -1) selectedMap = selection;
    if (status == 3) cm.sendNext(townText[selectedMap][status - 3]);
    else
      townText[selectedMap][status - 3] == undefined
        ? cm.dispose()
        : cm.sendNextPrev(townText[selectedMap][status - 3]);
  } else if (status == 3) {
    selectedMap = selection;
    cm.sendYesNo(
      "I guess you don't need to be here. Do you really want to move to #b#m" +
        maps[selection] +
        "##k? Well it'll cost you #b" +
        cost[selection] / (cm.getJobId() == 0 ? 10 : 1) +
        " mesos#k. What do you think?"
    );
  } else if (status == 4) {
    if (cm.getMeso() < cost[selectedMap] / (cm.getJobId() == 0 ? 10 : 1))
      cm.sendNext(
        "You don't have enough mesos. With your abilities, you should have more than that!"
      );
    else {
      cm.gainMeso(-(cost[selectedMap] / (cm.getJobId() == 0 ? 10 : 1)));
      cm.warp(maps[selectedMap]);
    }
    cm.dispose();
  }
}
