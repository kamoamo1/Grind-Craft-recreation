function wooden_sword_f(){
    if(planks>1&&stick>0){
        planks -= 2;
        stick -= 1;
        wooden_sword++;
        GetMaxes();
    }
    update_count({planks},{stick},{wooden_sword})
}
function wooden_pickaxe_f(){
    if(planks>2&&stick>1){
        planks -= 3;
        stick -= 2;
        wooden_pickaxe++;
        GetMaxes();
    }
    update_count({planks},{stick},{wooden_pickaxe})
}
function wooden_axe_f(){
    if(planks>2&&stick>1){
        planks -= 3;
        stick -= 2;
        wooden_axe++;
        GetMaxes();
    }
    update_count({planks},{stick},{wooden_axe})
}
function wooden_shovel_f(){
    if(planks>0&&stick>1){
        planks -= 1;
        stick -= 2;
        wooden_shovel++;
        GetMaxes();
    }
    update_count({planks},{stick},{wooden_shovel})
}
function wooden_hoe_f(){
    if(planks>1&&stick>1){
        planks -= 2;
        stick -= 2;
        wooden_hoe++;
        GetMaxes();
    }
    update_count({planks},{stick},{wooden_hoe})
}
function planks_f(){
    if(log>0){
        log--;
        planks+=4;
    }
    update_count({planks},{log})
}
function stick_f(){
    if(planks>1){
        planks-=2;
        stick+=4;
    }
    update_count({planks},{stick})
}
function stone_sword_f(){
    if(cobblestone>1&&stick>0){
        cobblestone -= 2;
        stick -= 1;
        stone_sword++;
        GetMaxes();
    }
    update_count({cobblestone},{stick},{stone_sword})
}
function stone_pickaxe_f(){
    if(cobblestone>2&&stick>1){
        cobblestone -= 3;
        stick -= 2;
        stone_pickaxe++;
        GetMaxes();
    }
    update_count({cobblestone},{stick},{stone_pickaxe})
}
function stone_axe_f(){
    if(cobblestone>2&&stick>1){
        cobblestone -= 3;
        stick -= 2;
        stone_axe++;
        GetMaxes();
    }
    update_count({cobblestone},{stick},{stone_axe})
}
function stone_shovel_f(){
    if(cobblestone>0&&stick>1){
        cobblestone -= 1;
        stick -= 2;
        stone_shovel++;
        GetMaxes();
    }
    update_count({cobblestone},{stick},{stone_shovel})
}
function stone_hoe_f(){
    if(cobblestone>1&&stick>1){
        cobblestone -= 2;
        stick -= 2;
        stone_hoe++;
        GetMaxes();
    }
    update_count({cobblestone},{stick},{stone_hoe})
}
function door_f(){
    if(planks>5){
        planks -= 6;
        door+=3;
    }
    update_count({planks},{door})
}
function furnace_f(){
    if(cobblestone>7){
        cobblestone -= 8;
        furnace++;
    }
    update_count({cobblestone},{furnace})
}
function iron_ingot_f(){
    if(iron_ore>0&&coal>0&&furnace>0){
        iron_ore --;
        coal --;
        iron_ingot++;
    }
    update_count({iron_ore},{coal},{iron_ingot})
}
function iron_sword_f(){
    if(iron_ingot>1&&stick>0){
        iron_ingot -= 2;
        stick -= 1;
        iron_sword++;
        GetMaxes();
    }
    update_count({iron_ingot},{stick},{iron_sword})
}
function iron_pickaxe_f(){
    if(iron_ingot>2&&stick>1){
        iron_ingot -= 3;
        stick -= 2;
        iron_pickaxe++;
        GetMaxes();
    }
    update_count({iron_ingot},{stick},{iron_pickaxe})
}
function iron_axe_f(){
    if(iron_ingot>2&&stick>1){
        iron_ingot -= 3;
        stick -= 2;
        iron_axe++;
        GetMaxes();
    }
    update_count({iron_ingot},{stick},{iron_axe})
}
function iron_shovel_f(){
    if(iron_ingot>0&&stick>1){
        iron_ingot -= 1;
        stick -= 2;
        iron_shovel++;
        GetMaxes();
    }
    update_count({iron_ingot},{stick},{iron_shovel})
}
function iron_hoe_f(){
    if(iron_ingot>1&&stick>1){
        iron_ingot -= 2;
        stick -= 2;
        iron_hoe++;
        GetMaxes();
    }
    update_count({iron_ingot},{stick},{iron_hoe})
}
function gold_ingot_f(){
    if(gold_ore>0&&coal>0&&furnace>0){
        gold_ore --;
        coal --;
        gold_ingot++;
    }
    update_count({gold_ingot},{coal},{gold_ore})
}
function golden_sword_f(){
    if(gold_ingot>1&&stick>0){
        gold_ingot -= 2;
        stick -= 1;
        golden_sword++;
        GetMaxes();
    }
    update_count({gold_ingot},{stick},{golden_sword})
}
function golden_pickaxe_f(){
    if(gold_ingot>2&&stick>1){
        gold_ingot -= 3;
        stick -= 2;
        golden_pickaxe++;
        GetMaxes();
    }
    update_count({gold_ingot},{stick},{golden_pickaxe})
}
function golden_axe_f(){
    if(gold_ingot>2&&stick>1){
        gold_ingot -= 3;
        stick -= 2;
        golden_axe++;
        GetMaxes();
    }
    update_count({gold_ingot},{stick},{golden_axe})
}
function golden_shovel_f(){
    if(gold_ingot>0&&stick>1){
        gold_ingot -= 1;
        stick -= 2;
        golden_shovel++;
        GetMaxes();
    }
    update_count({gold_ingot},{stick},{golden_shovel})
}
function golden_hoe_f(){
    if(gold_ingot>1&&stick>1){
        gold_ingot -= 2;
        stick -= 2;
        golden_hoe++;
        GetMaxes();
    }
    update_count({gold_ingot},{stick},{golden_hoe})
}
function lead_f(){
    if(slime>0&&spider_string>3){
        slime --;
        spider_string -= 4;
        lead++;
    }
    update_count({lead},{slime},{spider_string})
    GetMaxes();
}
function bucket_f(){
    if(iron_ingot>2){
        iron_ingot -=2;
        bucket++;
    }
    update_count({bucket},{iron_ingot})
    GetMaxes();
}
function flint_f(){
    if(gravel>9){
        gravel -=10;
        flint++;
    }
    update_count({gravel},{flint})
}
function wool_f(){
    if(spider_string>3){
        spider_string -=4;
        wool++;
    }
    update_count({spider_string},{wool})
}
function arrow_f(){
    if(feather>0&&stick>0&&flint>0){
        feather -=1;
        stick -=1;
        flint -=1;
        arrow +=8;
    }
    update_count({feather},{stick},{flint},{arrow})
}
function farm_f(){
    if(MaxHoe>0&&dirt>31&&water>1&&log>10&&seed>9){
        dirt -=32;
        water -=2;
        log -=11;
        seed -=10;
        farm +=1;
    }
    update_count({dirt},{water},{log},{seed},{farm})
}
function hut_f(){
    if(planks>31&&door>0&&log>19&&cobblestone>19){
        planks -=32;
        door -=1;
        log -=20;
        cobblestone -=20;
        hut +=1;
    }
    update_count({planks},{door},{log},{cobblestone},{hut})
}
function small_house_f(){
    if(hut>0&&farm>0&&planks>19){
        hut -=1;
        farm -=1;
        planks -=20;
        small_house +=1;
    }
    update_count({hut},{farm},{planks},{small_house})
}
function villager_f(){
    if(hut>0&&farm>0){
        hut -=1;
        farm -=1;
        villager +=1;
    }
    update_count({hut},{farm},{planks},{villager})
}
function villagerOver_f(){
    if(villager>0&&stone_axe>0&&stone_shovel>0){
        villager -=1;
        stone_axe -=1;
        stone_shovel -=1;
        villagerOver +=1;
    }
    update_count({villager},{stone_axe},{stone_shovel},{villagerOver})
}
function villagerMine_f(){
    if(villager>0&&stone_pickaxe>0){
        villager -=1;
        stone_pickaxe -=1;
        villagerMine +=1;
    }
    update_count({villager},{stone_pickaxe},{villagerMine})
}
function villagerFood_f(){
    if(villager>0&&stone_hoe>0&&stone_sword>0){
        villager -=1;
        stone_hoe -=1;
        stone_sword -=1;
        villagerFood +=1;
    }
    update_count({villager},{stone_hoe},{stone_sword},{villagerFood})
}
function villagerMobs_f(){
    if(villager>0&&stone_sword>0){
        villager -=1;
        stone_sword -=1;
        villagerMobs +=1;
    }
    update_count({villager},{stone_sword},{villagerMobs})
}