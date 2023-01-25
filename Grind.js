/*===================Grind===================*/

/*==Over==*/
var OverMaterialUrl="",
    OverMaterialName="",
    Overtype="",
    OverProgress=100,
    OverMaterialNumber=0,
    OverMaterialLevel=0,
    OverTool;
function OverMaterial()
{
    if (OverProgress==100)
    {
        OverMaterialNumber = getRandomInt(OverMaterialLevel);
        /****/ if (OverMaterialNumber>=0&&OverMaterialNumber<=10)   /*wood 33%*/
        {
            Overtype = "Axe";
            SelectOverTool();
            OverMaterialName="Wood";
            OverMaterialUrl="./items/log_wood.png";
            OverProgress=0;
            var OverInterval;
            switch (MaxAxe) {
                case 0:
                    OverInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    OverInterval = setInterval(loadProgress, 20);
                    break;
                case 2:
                    OverInterval = setInterval(loadProgress, 15);
                    break;
                case 3:
                    OverInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    OverProgress=20;
                    OverInterval = setInterval(loadProgress, 4);
                    break;
                case 5:
                    OverProgress=50;
                    OverInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (OverProgress == 100) {
                    clearInterval(OverInterval);
                    document.getElementById("OverProgress").classList.remove("progress")
                    document.getElementById("OverTool").src="";
                    if (villagerOver>0) {log+=villagerOver; OverMaterial()} else log+=1;
                    document.getElementById('log').innerHTML= log;
                } else {
                    OverProgress++; 
                    document.getElementById("OverProgress").value=OverProgress;
                    document.getElementById("OverProgress").classList.add("progress")
                }
            }
        } else if (OverMaterialNumber>=11&&OverMaterialNumber<=24)  /*dirt 46%*/
        {
            Overtype = "Shovel";
            SelectOverTool();
            OverMaterialName="Dirt";
            OverMaterialUrl="./items/grass_block_side.png";
            OverProgress=0;
            var OverInterval;
            switch (MaxShovel) {
                case 0:
                    OverInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    OverInterval = setInterval(loadProgress, 7);
                    break;
                case 2:
                    OverInterval = setInterval(loadProgress, 1);
                    break;
                case 3:
                    OverProgress=50;
                    OverInterval = setInterval(loadProgress, 1);
                    break;
                case 4:
                    OverProgress=70;
                    OverInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    OverProgress=90;
                    OverInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (OverProgress == 100) {
                    clearInterval(OverInterval);
                    document.getElementById("OverProgress").classList.remove("progress")
                    document.getElementById("OverTool").src="";
                    if (villagerOver>0) {dirt+=villagerOver; OverMaterial()} else dirt+=1;
                    document.getElementById('dirt').innerHTML= dirt;
                } else {
                    OverProgress++; 
                    document.getElementById("OverProgress").value=OverProgress;
                    document.getElementById("OverProgress").classList.add("progress")
                }
            }
        } else if (OverMaterialNumber>=25&&OverMaterialNumber<=29)  /*seeds 16%*/
        {
            Overtype = "Sword";
            SelectOverTool();
            OverMaterialName="Grass";
            OverMaterialUrl="./items/grass.png";
            OverProgress=0;
            switch (MaxSword) {
                case 0:
                    OverInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    OverInterval = setInterval(loadProgress, 7);
                    break;
                case 2:
                    OverInterval = setInterval(loadProgress, 1);
                    break;
                case 3:
                    OverProgress=50;
                    OverInterval = setInterval(loadProgress, 1);
                    break;
                case 4:
                    OverProgress=70;
                    OverInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    OverProgress=90;
                    OverInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (OverProgress == 100) {
                    clearInterval(OverInterval);
                    document.getElementById("OverProgress").classList.remove("progress")
                    document.getElementById("OverTool").src="";
                    if (villagerOver>0) {seed+=villagerOver; OverMaterial()} else seed+=1;
                    document.getElementById('seed').innerHTML= seed;
                } else {
                    OverProgress++; 
                    document.getElementById("OverProgress").value=OverProgress;
                    document.getElementById("OverProgress").classList.add("progress")
                }
            }
        } else if (OverMaterialNumber==30)                          /*water 3%*/
        {
            Overtype = "bucket";
            SelectOverTool();
            OverMaterialName="Water";
            OverMaterialUrl="./items/water_bucket.png";
            OverProgress=0;
            if (bucket>0) {
                OverProgress=90;
                OverInterval = setInterval(loadProgress, 1);
            }
            function loadProgress() {
                if (OverProgress == 100) {
                    clearInterval(OverInterval);
                    document.getElementById("OverProgress").classList.remove("progress")
                    document.getElementById("OverTool").src="";
                    if (villagerOver>0) {water+=villagerOver; OverMaterial()} else water+=1;
                    document.getElementById('water').innerHTML= water;
                } else {
                    OverProgress++; 
                    document.getElementById("OverProgress").value=OverProgress;
                    document.getElementById("OverProgress").classList.add("progress")
                }
            }
        }
    }
    document.getElementById("OverMaterial").src=OverMaterialUrl;
    document.getElementById("OverInfo").innerHTML=OverMaterialName;
    //console.log("log", log, "dirt", dirt, "seed", seed, "water", water)
}
function SelectOverTool(){
    /**/ if (Overtype=="Sword") {
        switch (MaxSword) {
            case 0:
                break;
            case 1:
                OverTool = "./items/wooden_sword.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 2:
                OverTool = "./items/stone_sword.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 3:
                OverTool = "./items/iron_sword.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 4:
                OverTool = "./items/golden_sword.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 5:
                OverTool = "./items/diamond_sword.png"
                document.getElementById("OverTool").src=OverTool;
                break;
        }
    }
    else if (Overtype=="Pickaxe") {
        switch (MaxPickaxe) {
            case 0:
                break;
            case 1:
                OverTool = "./items/wooden_pickaxe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 2:
                OverTool = "./items/stone_pickaxe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 3:
                OverTool = "./items/iron_pickaxe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 4:
                OverTool = "./items/golden_pickaxe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 5:
                OverTool = "./items/diamond_pickaxe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
        }
    }
    else if (Overtype=="Axe") {
        switch (MaxAxe) {
            case 0:
                break;
            case 1:
                OverTool = "./items/wooden_axe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 2:
                OverTool = "./items/stone_axe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 3:
                OverTool = "./items/iron_axe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 4:
                OverTool = "./items/golden_axe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 5:
                OverTool = "./items/diamond_axe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
        }
    }
    else if (Overtype=="Shovel") {
        switch (MaxShovel) {
            case 0:
                break;
            case 1:
                OverTool = "./items/wooden_shovel.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 2:
                OverTool = "./items/stone_shovel.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 3:
                OverTool = "./items/iron_shovel.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 4:
                OverTool = "./items/golden_shovel.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 5:
                OverTool = "./items/diamond_shovel.png"
                document.getElementById("OverTool").src=OverTool;
                break;
        }
    }
    else if (Overtype=="Hoe") {
        switch (MaxHoe) {
            case 0:
                break;
            case 1:
                OverTool = "./items/wooden_hoe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 2:
                OverTool = "./items/stone_hoe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 3:
                OverTool = "./items/iron_hoe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 4:
                OverTool = "./items/golden_hoe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
            case 5:
                OverTool = "./items/diamond_hoe.png"
                document.getElementById("OverTool").src=OverTool;
                break;
        }
    }
    else if (Overtype=="Bucket") {
        if (bucket>0) {
            OverTool = "./items/bucket.png"
            document.getElementById("OverTool").src=OverTool;
        }
    }
}

/*==Mine==*/
var MineMaterialUrl="",
    MineMaterialName="",
    Minetype="",
    MineProgress=100,
    MineMaterialNumber=0,
    MineMaterialLevel=0,
    MineTool;
function MineMaterial()
{
    if (MineProgress==100)
    {
        MineMaterialNumber = getRandomInt(MineMaterialLevel);
        /****/ if (MineMaterialNumber>=0 &&MineMaterialNumber<=31)  /*stone 52%*/
        {
            Minetype = "Pickaxe";
            SelectMineTool();
            MineMaterialName="Stone";
            MineMaterialUrl="./items/stone.png";
            MineProgress=0;
            var MineInterval;
            switch (MaxPickaxe) {
                case 0:
                    MineInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MineInterval = setInterval(loadProgress, 20);
                    break;
                case 2:
                    MineInterval = setInterval(loadProgress, 10);
                    break;
                case 3:
                    MineInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    MineProgress=20;
                    MineInterval = setInterval(loadProgress, 4);
                    break;
                case 5:
                    MineProgress=60;
                    MineInterval = setInterval(loadProgress, 1);
                    break;
            } 
            function loadProgress() {
                if (MineProgress == 100) {
                    clearInterval(MineInterval);
                    document.getElementById("MineProgress").classList.remove("progress")
                    document.getElementById("MineTool").src="";
                    if (villagerMine>0) {cobblestone+=villagerMine; MineMaterial()} else cobblestone+=1;
                    document.getElementById('cobblestone').innerHTML= cobblestone;
                } else {
                    MineProgress++; 
                    document.getElementById("MineProgress").value=MineProgress;
                    document.getElementById("MineProgress").classList.add("progress")
                }
            }
        } else if (MineMaterialNumber>=32&&MineMaterialNumber<=37)  /*gravel 10%*/
        {
            Minetype = "Shovel";
            SelectMineTool();
            MineMaterialName="Gravel";
            MineMaterialUrl="./items/gravel.png";
            MineProgress=0;
            var MineInterval;
            switch (MaxShovel) {
                case 0:
                    MineInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MineInterval = setInterval(loadProgress, 7);
                    break;
                case 2:
                    MineInterval = setInterval(loadProgress, 1);
                    break;
                case 3:
                    MineProgress=50;
                    MineInterval = setInterval(loadProgress, 1);
                    break;
                case 4:
                    MineProgress=70;
                    MineInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MineProgress=90;
                    MineInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MineProgress == 100) {
                    clearInterval(MineInterval);
                    document.getElementById("MineProgress").classList.remove("progress")
                    document.getElementById("MineTool").src="";
                    if (villagerMine>0) {gravel+=villagerMine; MineMaterial()} else gravel+=1;
                    document.getElementById('gravel').innerHTML= gravel;
                } else {
                    MineProgress++; 
                    document.getElementById("MineProgress").value=MineProgress;
                    document.getElementById("MineProgress").classList.add("progress")
                }
            }
        } else if (MineMaterialNumber>=38&&MineMaterialNumber<=48)  /*coal_ore 17%*/
        {
            Minetype = "Pickaxe";
            SelectMineTool();
            MineMaterialName="Coal Ore";
            MineMaterialUrl="./items/coal_ore.png";
            MineProgress=0;
            var MineInterval;
            switch (MaxPickaxe) {
                case 0:
                    MineInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MineInterval = setInterval(loadProgress, 30);
                    break;
                case 2:
                    MineInterval = setInterval(loadProgress, 15);
                    break;
                case 3:
                    MineInterval = setInterval(loadProgress, 10);
                    break;
                case 4:
                    MineInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MineProgress = 80;
                    MineInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MineProgress == 100) {
                    clearInterval(MineInterval);
                    document.getElementById("MineProgress").classList.remove("progress")
                    document.getElementById("MineTool").src="";
                    if (villagerMine>0) {coal+=villagerMine; MineMaterial()} else coal+=1;
                    document.getElementById('coal').innerHTML= coal;
                } else {
                    MineProgress++; 
                    document.getElementById("MineProgress").value=MineProgress;
                    document.getElementById("MineProgress").classList.add("progress")
                }
            }
        } else if (MineMaterialNumber>=49&&MineMaterialNumber<=53)  /*iron_ore 6%*/
        {
            Minetype = "Pickaxe";
            SelectMineTool();
            MineMaterialName="Iron Ore";
            MineMaterialUrl="./items/iron_ore.png";
            MineProgress=0;
            var MineInterval;
            switch (MaxPickaxe) {
                case 0:
                    MineInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MineInterval = setInterval(loadProgress, 40);
                    break;
                case 2:
                    MineInterval = setInterval(loadProgress, 15);
                    break;
                case 3:
                    MineInterval = setInterval(loadProgress, 11);
                    break;
                case 4:
                    MineInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MineProgress = 60;
                    MineInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MineProgress == 100) {
                    clearInterval(MineInterval);
                    document.getElementById("MineProgress").classList.remove("progress");
                    document.getElementById("MineTool").src="";
                    if (villagerMine>0) {iron_ore+=villagerMine; MineMaterial()} else iron_ore+=1;
                    document.getElementById('iron_ore').innerHTML= iron_ore;
                } else {
                    MineProgress++; 
                    document.getElementById("MineProgress").value=MineProgress;
                    document.getElementById("MineProgress").classList.add("progress")
                }
            }
        } else if (MineMaterialNumber>=54&&MineMaterialNumber<=57)  /*gold_ore 5%*/
        {
            Minetype = "Pickaxe";
            SelectMineTool();
            MineMaterialName="Gold Ore";
            MineMaterialUrl="./items/gold_ore.png";
            MineProgress=0;
            var MineInterval;
            switch (MaxPickaxe) {
                case 0:
                    MineInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MineInterval = setInterval(loadProgress, 40);
                    break;
                case 2:
                    MineInterval = setInterval(loadProgress, 40);
                    break;
                case 3:
                    MineInterval = setInterval(loadProgress, 15);
                    break;
                case 4:
                    MineInterval = setInterval(loadProgress, 7);
                    break;
                case 5:
                    MineInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MineProgress == 100) {
                    clearInterval(MineInterval);
                    document.getElementById("MineProgress").classList.remove("progress")
                    document.getElementById("MineTool").src="";
                    if (villagerMine>0) {gold_ore+=villagerMine; MineMaterial()} else gold_ore+=1;
                    document.getElementById('gold_ore').innerHTML= gold_ore;
                } else {
                    MineProgress++; 
                    document.getElementById("MineProgress").value=MineProgress;
                    document.getElementById("MineProgress").classList.add("progress")
                }
            }
        } else if (MineMaterialNumber==58)                          /*lava 1,6%*/
        {
            Minetype = "bucket";
            SelectMineTool();
            MineMaterialName="Lava";
            MineMaterialUrl="./items/lava_bucket.png";
            MineProgress=0;
            if (bucket>0) {
                MineProgress=90;
                MineInterval = setInterval(loadProgress, 1);
            } else {MineProgress = 100; alert("get a bucket!");}
            function loadProgress() {
                if (MineProgress == 100) {
                    clearInterval(MineInterval);
                    document.getElementById("MineProgress").classList.remove("progress")
                    document.getElementById("MineTool").src="";
                    if (villagerMine>0) {lava+=villagerMine; MineMaterial()} else lava+=1;
                    document.getElementById('lava').innerHTML= lava;
                } else {
                    MineProgress++; 
                    document.getElementById("MineProgress").value=MineProgress;
                    document.getElementById("MineProgress").classList.add("progress")
                }
            }
        } else if (MineMaterialNumber==59)                          /*diamond_ore 1,6%*/
        {
            Minetype = "Pickaxe";
            SelectMineTool();
            MineMaterialName="Diamond Ore";
            MineMaterialUrl="./items/diamond_ore.png";
            MineProgress=0;
            var MineInterval;
            switch (MaxPickaxe) {
                case 0:
                    MineInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MineInterval = setInterval(loadProgress, 40);
                    break;
                case 2:
                    MineInterval = setInterval(loadProgress, 40);
                    break;
                case 3:
                    MineInterval = setInterval(loadProgress, 40);
                    break;
                case 4:
                    MineInterval = setInterval(loadProgress, 15);
                    break;
                case 5:
                    MineInterval = setInterval(loadProgress, 5);
                    break;
            }
            function loadProgress() {
                if (MineProgress == 100) {
                    clearInterval(MineInterval);
                    document.getElementById("MineProgress").classList.remove("progress")
                    document.getElementById("MineTool").src="";
                    if (villagerMine>0) {diamond+=villagerMine; MineMaterial()} else diamond+=1;
                    document.getElementById('diamond').innerHTML= diamond;
                } else {
                    MineProgress++; 
                    document.getElementById("MineProgress").value=MineProgress;
                    document.getElementById("MineProgress").classList.add("progress")
                }
            }
        }
    }
    document.getElementById("MineMaterial").src=MineMaterialUrl;
    document.getElementById("MineInfo").innerHTML=MineMaterialName;
    //console.log("cobblestone",cobblestone, "gravel",gravel, "coal",coal, "iron_ore",iron_ore, "gold_ore",gold_ore, "diamond",diamond, "lava",lava)
}
function SelectMineTool(){
    /**/ if (Minetype=="Sword") {
        switch (MaxSword) {
            case 0:
                break;
            case 1:
                MineTool = "./items/wooden_sword.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 2:
                MineTool = "./items/stone_sword.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 3:
                MineTool = "./items/iron_sword.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 4:
                MineTool = "./items/golden_sword.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 5:
                MineTool = "./items/diamond_sword.png"
                document.getElementById("MineTool").src=MineTool;
                break;
        }
    }
    else if (Minetype=="Pickaxe") {
        switch (MaxPickaxe) {
            case 0:
                break;
            case 1:
                MineTool = "./items/wooden_pickaxe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 2:
                MineTool = "./items/stone_pickaxe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 3:
                MineTool = "./items/iron_pickaxe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 4:
                MineTool = "./items/golden_pickaxe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 5:
                MineTool = "./items/diamond_pickaxe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
        }
    }
    else if (Minetype=="Axe") {
        switch (MaxAxe) {
            case 0:
                break;
            case 1:
                MineTool = "./items/wooden_axe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 2:
                MineTool = "./items/stone_axe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 3:
                MineTool = "./items/iron_axe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 4:
                MineTool = "./items/golden_axe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 5:
                MineTool = "./items/diamond_axe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
        }
    }
    else if (Minetype=="Shovel") {
        switch (MaxShovel) {
            case 0:
                break;
            case 1:
                MineTool = "./items/wooden_shovel.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 2:
                MineTool = "./items/stone_shovel.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 3:
                MineTool = "./items/iron_shovel.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 4:
                MineTool = "./items/golden_shovel.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 5:
                MineTool = "./items/diamond_shovel.png"
                document.getElementById("MineTool").src=MineTool;
                break;
        }
    }
    else if (Minetype=="Hoe") {
        switch (MaxHoe) {
            case 0:
                break;
            case 1:
                MineTool = "./items/wooden_hoe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 2:
                MineTool = "./items/stone_hoe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 3:
                MineTool = "./items/iron_hoe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 4:
                MineTool = "./items/golden_hoe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
            case 5:
                MineTool = "./items/diamond_hoe.png"
                document.getElementById("MineTool").src=MineTool;
                break;
        }
    }
    else if (Minetype=="Bucket") {
        if (bucket>0) {
            MineTool = "./items/bucket.png"
            document.getElementById("MineTool").src=MineTool;
        }
    }
}

/*==Food==*/
var FoodMaterialUrl="",
    FoodMaterialName="",
    Foodtype="",
    FoodProgress=100,
    FoodMaterialNumber=0,
    FoodMaterialLevel=0,
    FoodTool;
function FoodMaterial()
{
    if (FoodProgress==100)
    {
        FoodMaterialNumber = getRandomInt(FoodMaterialLevel);
        /****/ if (FoodMaterialNumber>=0&&FoodMaterialNumber<=2)  /*sugar_cane 66%*/
        {
            Foodtype = "Sword";
            SelectFoodTool();
            FoodMaterialName="Sugar Cane";
            FoodMaterialUrl="./items/sugar_cane.png";
            FoodProgress=0;
            switch (MaxSword) {
                case 0:
                    FoodInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    FoodInterval = setInterval(loadProgress, 17);
                    break;
                case 2:
                    FoodInterval = setInterval(loadProgress, 15);
                    break;
                case 3:
                    FoodInterval = setInterval(loadProgress, 10);
                    break;
                case 4:
                    FoodInterval = setInterval(loadProgress, 6);
                    break;
                case 5:
                    FoodInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (FoodProgress == 100) {
                    clearInterval(FoodInterval);
                    document.getElementById("FoodProgress").classList.remove("progress")
                    document.getElementById("FoodTool").src="";
                    if (villagerFood>0) {sugar_cane+=villagerFood; FoodMaterial()} else sugar_cane+=1;
                    document.getElementById('sugar_cane').innerHTML= sugar_cane;
                } else {
                    FoodProgress++; 
                    document.getElementById("FoodProgress").value=FoodProgress;
                    document.getElementById("FoodProgress").classList.add("progress")
                }
            }
        } else if (FoodMaterialNumber==3)                         /*wheat 33%*/
        {
            Foodtype = "Sword";
            SelectFoodTool();
            FoodMaterialName="Wheat";
            FoodMaterialUrl="./items/wheat.png";
            FoodProgress=0;
            switch (MaxSword) {
                case 0:
                    FoodInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    FoodInterval = setInterval(loadProgress, 17);
                    break;
                case 2:
                    FoodInterval = setInterval(loadProgress, 15);
                    break;
                case 3:
                    FoodInterval = setInterval(loadProgress, 10);
                    break;
                case 4:
                    FoodInterval = setInterval(loadProgress, 6);
                    break;
                case 5:
                    FoodInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (FoodProgress == 100) {
                    clearInterval(FoodInterval);
                    document.getElementById("FoodProgress").classList.remove("progress")
                    document.getElementById("FoodTool").src="";
                    if (villagerFood>0) {wheat+=villagerFood; FoodMaterial()} else wheat+=1;
                    document.getElementById('wheat').innerHTML= wheat;
                } else {
                    FoodProgress++; 
                    document.getElementById("FoodProgress").value=FoodProgress;
                    document.getElementById("FoodProgress").classList.add("progress")
                }
            }
        }
    }
    document.getElementById("FoodMaterial").src=FoodMaterialUrl;
    document.getElementById("FoodInfo").innerHTML=FoodMaterialName;
    //console.log("sugar_cane", sugar_cane, "wheat", wheat)
}
function SelectFoodTool(){
    /**/ if (Foodtype=="Sword") {
        switch (MaxSword) {
            case 0:
                break;
            case 1:
                FoodTool = "./items/wooden_sword.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 2:
                FoodTool = "./items/stone_sword.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 3:
                FoodTool = "./items/iron_sword.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 4:
                FoodTool = "./items/golden_sword.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 5:
                FoodTool = "./items/diamond_sword.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
        }
    }
    else if (Foodtype=="Pickaxe") {
        switch (MaxPickaxe) {
            case 0:
                break;
            case 1:
                FoodTool = "./items/wooden_pickaxe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 2:
                FoodTool = "./items/stone_pickaxe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 3:
                FoodTool = "./items/iron_pickaxe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 4:
                FoodTool = "./items/golden_pickaxe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 5:
                FoodTool = "./items/diamond_pickaxe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
        }
    }
    else if (Foodtype=="Axe") {
        switch (MaxAxe) {
            case 0:
                break;
            case 1:
                FoodTool = "./items/wooden_axe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 2:
                FoodTool = "./items/stone_axe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 3:
                FoodTool = "./items/iron_axe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 4:
                FoodTool = "./items/golden_axe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 5:
                FoodTool = "./items/diamond_axe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
        }
    }
    else if (Foodtype=="Shovel") {
        switch (MaxShovel) {
            case 0:
                break;
            case 1:
                FoodTool = "./items/wooden_shovel.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 2:
                FoodTool = "./items/stone_shovel.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 3:
                FoodTool = "./items/iron_shovel.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 4:
                FoodTool = "./items/golden_shovel.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 5:
                FoodTool = "./items/diamond_shovel.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
        }
    }
    else if (Foodtype=="Hoe") {
        switch (MaxHoe) {
            case 0:
                break;
            case 1:
                FoodTool = "./items/wooden_hoe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 2:
                FoodTool = "./items/stone_hoe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 3:
                FoodTool = "./items/iron_hoe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 4:
                FoodTool = "./items/golden_hoe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
            case 5:
                FoodTool = "./items/diamond_hoe.png"
                document.getElementById("FoodTool").src=FoodTool;
                break;
        }
    }
    else if (Foodtype=="Bucket") {
        if (bucket>0) {
            FoodTool = "./items/bucket.png"
            document.getElementById("FoodTool").src=FoodTool;
        }
    }
}

/*==Mobs==*/
var MobsMaterialUrl="",
    MobsMaterialName="",
    Mobstype="",
    MobsProgress=100,
    MobsMaterialNumber=0,
    MobsMaterialLevel=0,
    MobsTool;
function MobsMaterial()
{
    if (MobsProgress==100)
    {
        MobsMaterialNumber = getRandomInt(MobsMaterialLevel);
        /****/ if (MobsMaterialNumber>=0&&MobsMaterialNumber<=2)    /*zombie*/
        {
            Mobstype = "Sword";
            SelectMobsTool();
            MobsMaterialName="Zombie";
            MobsMaterialUrl="./mobs/zombie.png";
            MobsProgress=0;
            switch (MaxSword) {
                case 0:
                    MobsInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MobsInterval = setInterval(loadProgress, 30);
                    break;
                case 2:
                    MobsInterval = setInterval(loadProgress, 20);
                    break;
                case 3:
                    MobsInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MobsProgress=50;
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MobsProgress == 100) {
                    clearInterval(MobsInterval);
                    document.getElementById("MobsProgress").classList.remove("progress")
                    document.getElementById("MobsTool").src="";
                    if (villagerMobs>0) {MobsMaterial()}
                } else {
                    MobsProgress++; 
                    document.getElementById("MobsProgress").value=MobsProgress;
                    document.getElementById("MobsProgress").classList.add("progress")
                }
            }
        } else if (MobsMaterialNumber>=3&&MobsMaterialNumber<=4)    /*skeleton*/
        {
            Mobstype = "Sword";
            SelectMobsTool();
            MobsMaterialName="Skeleton";
            MobsMaterialUrl="./mobs/skeleton.png";
            MobsProgress=0;
            switch (MaxSword) {
                case 0:
                    MobsInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MobsInterval = setInterval(loadProgress, 30);
                    break;
                case 2:
                    MobsInterval = setInterval(loadProgress, 20);
                    break;
                case 3:
                    MobsInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MobsProgress=50;
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MobsProgress == 100) {
                    clearInterval(MobsInterval);
                    document.getElementById("MobsProgress").classList.remove("progress")
                    document.getElementById("MobsTool").src="";
                    if (villagerMobs>0) {arrow+=villagerMobs; MobsMaterial()} else arrow+=1;
                    document.getElementById('arrow').innerHTML= arrow;
                } else {
                    MobsProgress++; 
                    document.getElementById("MobsProgress").value=MobsProgress;
                    document.getElementById("MobsProgress").classList.add("progress")
                }
            }
        } else if (MobsMaterialNumber>=5&&MobsMaterialNumber<=6)    /*spider*/
        {
            Mobstype = "Sword";
            SelectMobsTool();
            MobsMaterialName="Spider";
            MobsMaterialUrl="./mobs/spider.png";
            MobsProgress=0;
            switch (MaxSword) {
                case 0:
                    MobsInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MobsInterval = setInterval(loadProgress, 30);
                    break;
                case 2:
                    MobsInterval = setInterval(loadProgress, 20);
                    break;
                case 3:
                    MobsInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MobsProgress=50;
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MobsProgress == 100) {
                    clearInterval(MobsInterval);
                    document.getElementById("MobsProgress").classList.remove("progress")
                    document.getElementById("MobsTool").src="";
                    if (villagerMobs>0) {spider_string+=villagerMobs; MobsMaterial()} else spider_string+=1;
                    document.getElementById('spider_string').innerHTML= spider_string;
                } else {
                    MobsProgress++; 
                    document.getElementById("MobsProgress").value=MobsProgress;
                    document.getElementById("MobsProgress").classList.add("progress")
                }
            }
        } else if (MobsMaterialNumber>=7&&MobsMaterialNumber<=8)    /*slime*/
        {
            Mobstype = "Sword";
            SelectMobsTool();
            MobsMaterialName="Slime";
            MobsMaterialUrl="./mobs/slime.png";
            MobsProgress=0;
            switch (MaxSword) {
                case 0:
                    MobsInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MobsInterval = setInterval(loadProgress, 30);
                    break;
                case 2:
                    MobsInterval = setInterval(loadProgress, 20);
                    break;
                case 3:
                    MobsInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MobsProgress=50;
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MobsProgress == 100) {
                    clearInterval(MobsInterval);
                    document.getElementById("MobsProgress").classList.remove("progress")
                    document.getElementById("MobsTool").src="";
                    if (villagerMobs>0) {slime+=villagerMobs; MobsMaterial()} else slime+=1;
                    document.getElementById('slime').innerHTML= slime;
                } else {
                    MobsProgress++; 
                    document.getElementById("MobsProgress").value=MobsProgress;
                    document.getElementById("MobsProgress").classList.add("progress")
                }
            }
        } else if (MobsMaterialNumber>=9&&MobsMaterialNumber<=12)    /*pig*/
        {
            Mobstype = "Sword";
            SelectMobsTool();
            MobsMaterialName="Pig";
            MobsMaterialUrl="./mobs/pig.png";
            MobsProgress=0;
            switch (MaxSword) {
                case 0:
                    MobsInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MobsInterval = setInterval(loadProgress, 30);
                    break;
                case 2:
                    MobsInterval = setInterval(loadProgress, 20);
                    break;
                case 3:
                    MobsInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MobsProgress=50;
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MobsProgress == 100) {
                    clearInterval(MobsInterval);
                    document.getElementById("MobsProgress").classList.remove("progress")
                    document.getElementById("MobsTool").src="";
                    if (villagerMobs>0) {MobsMaterial()}
                } else {
                    MobsProgress++; 
                    document.getElementById("MobsProgress").value=MobsProgress;
                    document.getElementById("MobsProgress").classList.add("progress")
                }
            }
        } else if (MobsMaterialNumber>=13&&MobsMaterialNumber<=15)    /*chicken*/
        {
            Mobstype = "Sword";
            SelectMobsTool();
            MobsMaterialName="Chicken";
            MobsMaterialUrl="./mobs/chicken.png";
            MobsProgress=0;
            switch (MaxSword) {
                case 0:
                    MobsInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MobsInterval = setInterval(loadProgress, 30);
                    break;
                case 2:
                    MobsInterval = setInterval(loadProgress, 20);
                    break;
                case 3:
                    MobsInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MobsProgress=50;
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MobsProgress == 100) {
                    clearInterval(MobsInterval);
                    document.getElementById("MobsProgress").classList.remove("progress")
                    document.getElementById("MobsTool").src="";
                    if (villagerMobs>0) {feather+=villagerMobs; MobsMaterial()} else feather+=1;
                    document.getElementById('feather').innerHTML= feather;
                } else {
                    MobsProgress++; 
                    document.getElementById("MobsProgress").value=MobsProgress;
                    document.getElementById("MobsProgress").classList.add("progress")
                }
            }
        } else if (MobsMaterialNumber>=16&&MobsMaterialNumber<=18)    /*cow*/
        {
            Mobstype = "Sword";
            SelectMobsTool();
            MobsMaterialName="Cow";
            MobsMaterialUrl="./mobs/cow.png";
            MobsProgress=0;
            switch (MaxSword) {
                case 0:
                    MobsInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MobsInterval = setInterval(loadProgress, 30);
                    break;
                case 2:
                    MobsInterval = setInterval(loadProgress, 20);
                    break;
                case 3:
                    MobsInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MobsProgress=50;
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MobsProgress == 100) {
                    clearInterval(MobsInterval);
                    document.getElementById("MobsProgress").classList.remove("progress")
                    document.getElementById("MobsTool").src="";
                    if (villagerMobs>0) {leather+=villagerMobs; MobsMaterial()} else leather+=1;
                    document.getElementById('leather').innerHTML= leather;
                } else {
                    MobsProgress++; 
                    document.getElementById("MobsProgress").value=MobsProgress;
                    document.getElementById("MobsProgress").classList.add("progress")
                }
            }
        } else if (MobsMaterialNumber>=19&&MobsMaterialNumber<=21)    /*sheep*/
        {
            Mobstype = "Sword";
            SelectMobsTool();
            MobsMaterialName="Sheep";
            MobsMaterialUrl="./mobs/sheep.png";
            MobsProgress=0;
            switch (MaxSword) {
                case 0:
                    MobsInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MobsInterval = setInterval(loadProgress, 30);
                    break;
                case 2:
                    MobsInterval = setInterval(loadProgress, 20);
                    break;
                case 3:
                    MobsInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MobsProgress=50;
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MobsProgress == 100) {
                    clearInterval(MobsInterval);
                    document.getElementById("MobsProgress").classList.remove("progress")
                    document.getElementById("MobsTool").src="";
                    if (villagerMobs>0) {wool+=villagerMobs; MobsMaterial()} else wool+=1;
                    document.getElementById('wool').innerHTML= wool;
                } else {
                    MobsProgress++; 
                    document.getElementById("MobsProgress").value=MobsProgress;
                    document.getElementById("MobsProgress").classList.add("progress")
                }
            }
        } else if (MobsMaterialNumber>=22&&MobsMaterialNumber<=24)    /*horse*/
        {
            Mobstype = "Sword";
            SelectMobsTool();
            MobsMaterialName="Horse";
            MobsMaterialUrl="./mobs/horse.png";
            MobsProgress=0;
            switch (MaxSword) {
                case 0:
                    MobsInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MobsInterval = setInterval(loadProgress, 30);
                    break;
                case 2:
                    MobsInterval = setInterval(loadProgress, 20);
                    break;
                case 3:
                    MobsInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MobsProgress=50;
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MobsProgress == 100) {
                    clearInterval(MobsInterval);
                    document.getElementById("MobsProgress").classList.remove("progress")
                    document.getElementById("MobsTool").src="";
                    if (villagerMobs>0) {horse+=villagerMobs; MobsMaterial()} else horse+=1;
                    document.getElementById('horse').innerHTML= horse;
                } else {
                    MobsProgress++; 
                    document.getElementById("MobsProgress").value=MobsProgress;
                    document.getElementById("MobsProgress").classList.add("progress")
                }
            }
        } else if (MobsMaterialNumber==25)    /*zombie_villager*/
        {
            Mobstype = "Sword";
            SelectMobsTool();
            MobsMaterialName="Zombie Villager";
            MobsMaterialUrl="./mobs/zombie_villager.png";
            MobsProgress=0;
            switch (MaxSword) {
                case 0:
                    MobsInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MobsInterval = setInterval(loadProgress, 30);
                    break;
                case 2:
                    MobsInterval = setInterval(loadProgress, 20);
                    break;
                case 3:
                    MobsInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MobsProgress=50;
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MobsProgress == 100) {
                    clearInterval(MobsInterval);
                    document.getElementById("MobsProgress").classList.remove("progress")
                    document.getElementById("MobsTool").src="";
                    if (villagerMobs>0) {zombie_villager+=villagerMobs; MobsMaterial()} else zombie_villager+=1;
                    document.getElementById('zombie_villager').innerHTML= zombie_villager;
                } else {
                    MobsProgress++; 
                    document.getElementById("MobsProgress").value=MobsProgress;
                    document.getElementById("MobsProgress").classList.add("progress")
                }
            }
        } else if (MobsMaterialNumber==26)    /*witch*/
        {
            Mobstype = "Sword";
            SelectMobsTool();
            MobsMaterialName="Witch";
            MobsMaterialUrl="./mobs/witch.png";
            MobsProgress=0;
            switch (MaxSword) {
                case 0:
                    MobsInterval = setInterval(loadProgress, 40);
                    break;
                case 1:
                    MobsInterval = setInterval(loadProgress, 30);
                    break;
                case 2:
                    MobsInterval = setInterval(loadProgress, 20);
                    break;
                case 3:
                    MobsInterval = setInterval(loadProgress, 7);
                    break;
                case 4:
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
                case 5:
                    MobsProgress=50;
                    MobsInterval = setInterval(loadProgress, 1);
                    break;
            }
            function loadProgress() {
                if (MobsProgress == 100) {
                    clearInterval(MobsInterval);
                    document.getElementById("MobsProgress").classList.remove("progress")
                    document.getElementById("MobsTool").src="";
                    if (villagerMobs>0) {witch+=villagerMobs; MobsMaterial()} else witch+=1;
                    document.getElementById('witch').innerHTML= witch;
                } else {
                    MobsProgress++; 
                    document.getElementById("MobsProgress").value=MobsProgress;
                    document.getElementById("MobsProgress").classList.add("progress")
                }
            }
        } 
    }
    document.getElementById("MobsMaterial").src=MobsMaterialUrl;
    document.getElementById("MobsInfo").innerHTML=MobsMaterialName;
    //console.log("arrow",arrow, "spider_string",spider_string, "slime",slime, "feather",feather, "leather",leather, "wool",wool, "horse",horse, "zombie_villager",zombie_villager, "witch",witch)
}
function SelectMobsTool(){
    /**/ if (Mobstype=="Sword") {
        switch (MaxSword) {
            case 0:
                break;
            case 1:
                MobsTool = "./items/wooden_sword.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 2:
                MobsTool = "./items/stone_sword.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 3:
                MobsTool = "./items/iron_sword.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 4:
                MobsTool = "./items/golden_sword.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 5:
                MobsTool = "./items/diamond_sword.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
        }
    }
    else if (Mobstype=="Pickaxe") {
        switch (MaxPickaxe) {
            case 0:
                break;
            case 1:
                MobsTool = "./items/wooden_pickaxe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 2:
                MobsTool = "./items/stone_pickaxe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 3:
                MobsTool = "./items/iron_pickaxe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 4:
                MobsTool = "./items/golden_pickaxe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 5:
                MobsTool = "./items/diamond_pickaxe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
        }
    }
    else if (Mobstype=="Axe") {
        switch (MaxAxe) {
            case 0:
                break;
            case 1:
                MobsTool = "./items/wooden_axe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 2:
                MobsTool = "./items/stone_axe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 3:
                MobsTool = "./items/iron_axe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 4:
                MobsTool = "./items/golden_axe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 5:
                MobsTool = "./items/diamond_axe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
        }
    }
    else if (Mobstype=="Shovel") {
        switch (MaxShovel) {
            case 0:
                break;
            case 1:
                MobsTool = "./items/wooden_shovel.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 2:
                MobsTool = "./items/stone_shovel.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 3:
                MobsTool = "./items/iron_shovel.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 4:
                MobsTool = "./items/golden_shovel.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 5:
                MobsTool = "./items/diamond_shovel.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
        }
    }
    else if (Mobstype=="Hoe") {
        switch (MaxHoe) {
            case 0:
                break;
            case 1:
                MobsTool = "./items/wooden_hoe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 2:
                MobsTool = "./items/stone_hoe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 3:
                MobsTool = "./items/iron_hoe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 4:
                MobsTool = "./items/golden_hoe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
            case 5:
                MobsTool = "./items/diamond_hoe.png"
                document.getElementById("MobsTool").src=MobsTool;
                break;
        }
    }
    else if (Mobstype=="Bucket") {
        if (bucket>0) {
            MobsTool = "./items/bucket.png"
            document.getElementById("MobsTool").src=MobsTool;
        }
    }
}
