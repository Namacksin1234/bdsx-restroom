"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const form_1 = require("bdsx/bds/form");
const event_1 = require("bdsx/event");
let urine = {};
let feces = {};
event_1.events.playerJoin.on(ev => {
    const player = ev.player;
    if (urine[player.getName()] == null) {
        urine[player.getName()] = 0;
    }
    if (feces[player.getName()] == null) {
        feces[player.getName()] = 0;
    }
});
command_1.command.register("화장실", "화장실 매뉴를 띄웁니다").overload(async (param, origin) => {
    const player = origin.getEntity();
    if (player === null)
        return;
    const ni = player.getNetworkIdentifier();
    const res = await form_1.Form.sendTo(ni, {
        type: "form",
        title: "§d§l[ §f화장실 §d]",
        content: "",
        buttons: [
            {
                text: `§l§8소변\n§l§f소변을 봅니다`
            },
            {
                text: `§l§8대변\n§l§f대변을 봅니다`
            }
        ]
    });
    if (res === null)
        return;
    if (res == 0) {
        if (urine[player.getNameTag()] == 0) {
            player.sendMessage("소변을 보기 시작합니다 15초 기다려주세요");
            urine[player.getNameTag()] = 15;
            setTimeout(function () {
                player.sendMessage("소변을 모두 보았습니다");
                urine[player.getNameTag()] = 0;
            }, 15000);
        }
        else {
            player.sendMessage("이미 소변을 보는 중입니다");
        }
        ;
    }
    if (res == 1) {
        if (feces[player.getNameTag()] == 0) {
            player.sendMessage("대변을 보기 시작합니다 30초 기다려주세요");
            feces[player.getNameTag()] = 30;
            setTimeout(function () {
                player.sendMessage("대변을 모두 보았습니다");
                feces[player.getNameTag()] = 0;
            }, 3123);
        }
        else {
            player.sendMessage("이미 대변을 보는 중입니다");
        }
        ;
    }
    ;
}, {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQXVDO0FBQ3ZDLHdDQUFxQztBQUNyQyxzQ0FBb0M7QUFFcEMsSUFBSSxLQUFLLEdBQVEsRUFBRSxDQUFDO0FBQ3BCLElBQUksS0FBSyxHQUFRLEVBQUUsQ0FBQztBQUVwQixjQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUMsRUFBRTtJQUN2QixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ3pCLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNqQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQy9CO0lBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ2pDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0I7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUN0RSxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEMsSUFBSSxNQUFNLEtBQUssSUFBSTtRQUFFLE9BQU87SUFDNUIsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDekMsTUFBTSxHQUFHLEdBQUcsTUFBTSxXQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtRQUM5QixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsT0FBTyxFQUFFLEVBQUU7UUFDWCxPQUFPLEVBQUU7WUFDTDtnQkFDSSxJQUFJLEVBQUUscUJBQXFCO2FBQzlCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLHFCQUFxQjthQUM5QjtTQUNKO0tBQ0osQ0FBQyxDQUFBO0lBQ0YsSUFBSSxHQUFHLEtBQUssSUFBSTtRQUFFLE9BQU87SUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ1YsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM5QyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLFVBQVUsQ0FBQztnQkFDUCxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNiO2FBQU07WUFDSCxNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDeEM7UUFBQSxDQUFDO0tBQ0w7SUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDVixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsTUFBTSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzlDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEMsVUFBVSxDQUFFO2dCQUNSLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ25DLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7YUFBTTtZQUNILE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUN4QztRQUFBLENBQUM7S0FDTDtJQUFBLENBQUM7QUFDTixDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMifQ==