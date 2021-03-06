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
/* Author: Xterminator
	NPC Name: 		Pison
	Map(s): 		Victoria Road : Lith Harbor (104000000)
	Description: 		Florina Beach Tour Guide
 */
var status = 0;

function start() {
    cm.sendSimple("你听说过黄金海岸吗？ 就在明珠港旁边。给我1500块我送你去那, 你要是有VIP那就算了，免费送你去吧");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1)
        if((mode == 0 && type == 1) || mode == -1 || (mode == 0 && status == 1)){
            if(type == 1)
                cm.sendNext("在这办事小心点！ 这里的怪都贼凶. 歇逼吧，完了再来跟我说.");
            cm.dispose();
            return;
        } else
            status -= 2;
    if (selection == 0)
        status++;
    if(status == 1){
        if(selection == 1)
            cm.sendYesNo("所以搞了半天你是VIP啊? 你可以免费去黄金海岸了不过在哪落地我可不敢保证. 好，准备走起了吗？");
        else if (selection == 2)
            cm.sendNext("VIP就是你能白嫖去黄金海岸");
    } else if (status == 2){
        if(type != 1 && selection != 0) {
            cm.sendNextPrev("我啥也不知道，只知道有个人把它丢在了某个安全的地方。 算了，你们不爱我了，你自己去找吧. 你要是脑子不好，我也没办法。");
			cm.dispose();
		} else{
            if (cm.getMeso() < 1500 && selection == 0)
                cm.sendNext("你好像没钱啊穷逼. 去路边乞讨吧穷逼。");
            else if(!cm.haveItem(4031134) && selection != 0){
                cm.sendNext("所以你到底是不是VIP啊? 别装逼了行吗？");
            }else{
                if(selection == 0)
                    cm.gainMeso(-1500);
                cm.getPlayer().saveLocation("FLORINA");
                cm.warp(110000000, "st00");
            }
            cm.dispose();
        }
    }
}
