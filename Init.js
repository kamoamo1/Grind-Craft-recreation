window.onbeforeunload = () => {
    localStorage.setItem('log',log)
    localStorage.setItem('dirt',dirt)
    localStorage.setItem('seed',seed)
    localStorage.setItem('water',water)
    localStorage.setItem('cobblestone',cobblestone)
    localStorage.setItem('gravel',gravel)
    localStorage.setItem('coal',coal)
    localStorage.setItem('iron_ore',iron_ore)
    localStorage.setItem('gold_ore',gold_ore)
    localStorage.setItem('diamond',diamond)
    localStorage.setItem('lava',lava)
    localStorage.setItem('sugar_cane',sugar_cane)
    localStorage.setItem('wheat',wheat)
    localStorage.setItem('feather',feather)
    localStorage.setItem('leather',leather)
    localStorage.setItem('wool',wool)
    localStorage.setItem('horse',horse)
    localStorage.setItem('arrow',arrow)
    localStorage.setItem('spider_string',spider_string)
    localStorage.setItem('slime',slime)
    localStorage.setItem('witch',witch)
    localStorage.setItem('zombie_villager',zombie_villager)
    localStorage.setItem('MaxPickaxe',MaxPickaxe)
    localStorage.setItem('MaxAxe',MaxAxe)
    localStorage.setItem('MaxSword',MaxSword)
    localStorage.setItem('MaxShovel',MaxShovel)
    localStorage.setItem('MaxHoe',MaxHoe)
    localStorage.setItem('bucket',bucket)
    localStorage.setItem('lead',lead)
    localStorage.setItem('villagerOver',villagerOver)
    localStorage.setItem('villagerMine',villagerMine)
    localStorage.setItem('villagerFood',villagerFood)
    localStorage.setItem('villagerMobs',villagerMobs)
    localStorage.setItem('wooden_sword',wooden_sword)
    localStorage.setItem('wooden_pickaxe',wooden_pickaxe)
    localStorage.setItem('wooden_axe',wooden_axe)
    localStorage.setItem('wooden_shovel',wooden_shovel)
    localStorage.setItem('wooden_hoe',wooden_hoe)
    localStorage.setItem('stone_sword',stone_sword)
    localStorage.setItem('stone_pickaxe',stone_pickaxe)
    localStorage.setItem('stone_axe',stone_axe)
    localStorage.setItem('stone_shovel',stone_shovel)
    localStorage.setItem('stone_hoe',stone_hoe)
    localStorage.setItem('iron_sword',iron_sword)
    localStorage.setItem('iron_pickaxe',iron_pickaxe)
    localStorage.setItem('iron_axe',iron_axe)
    localStorage.setItem('iron_shovel',iron_shovel)
    localStorage.setItem('iron_hoe',iron_hoe)
    localStorage.setItem('golden_sword',golden_sword)
    localStorage.setItem('golden_pickaxe',golden_pickaxe)
    localStorage.setItem('golden_axe',golden_axe)
    localStorage.setItem('golden_shovel',golden_shovel)
    localStorage.setItem('golden_hoe',golden_hoe)
    localStorage.setItem('diamond_sword',diamond_sword)
    localStorage.setItem('diamond_pickaxe',diamond_pickaxe)
    localStorage.setItem('diamond_axe',diamond_axe)
    localStorage.setItem('diamond_shovel',diamond_shovel)
    localStorage.setItem('diamond_hoe',diamond_hoe)
    localStorage.setItem('planks',planks)
    localStorage.setItem('stick',stick)
    localStorage.setItem('door',door)
    localStorage.setItem('furnace',furnace)
    localStorage.setItem('iron_ingot',iron_ingot)
    localStorage.setItem('gold_ingot',gold_ingot)
    localStorage.setItem('farm',farm)
    localStorage.setItem('bucket',bucket)
    localStorage.setItem('flint',flint)
    localStorage.setItem('small_house',small_house)
    localStorage.setItem('hut',hut)
    localStorage.setItem('villager',villager)
}
window.onload = () => {
    // (parseInt(localStorage.getItem('a'))) || 0
    /* Over */
    log=(parseInt(localStorage.getItem('log'))) || 0
    dirt=(parseInt(localStorage.getItem('dirt'))) || 0
    seed=(parseInt(localStorage.getItem('seed'))) || 0
    water=(parseInt(localStorage.getItem('water'))) || 0
    /* Mine */
    cobblestone=(parseInt(localStorage.getItem('cobblestone'))) || 0
    gravel=(parseInt(localStorage.getItem('gravel'))) || 0
    coal=(parseInt(localStorage.getItem('coal'))) || 0
    iron_ore=(parseInt(localStorage.getItem('iron_ore'))) || 0
    gold_ore=(parseInt(localStorage.getItem('gold_ore'))) || 0
    diamond=(parseInt(localStorage.getItem('diamond'))) || 0
    lava=(parseInt(localStorage.getItem('lava'))) || 0
    /* Food */
    sugar_cane=(parseInt(localStorage.getItem('sugar_cane'))) || 0
    wheat=(parseInt(localStorage.getItem('wheat'))) || 0
    /* Mobs */
    feather=(parseInt(localStorage.getItem('feather'))) || 0
    leather=(parseInt(localStorage.getItem('leather'))) || 0
    wool=(parseInt(localStorage.getItem('wool'))) || 0
    horse=(parseInt(localStorage.getItem('horse'))) || 0
    arrow=(parseInt(localStorage.getItem('arrow'))) || 0
    spider_string=(parseInt(localStorage.getItem('spider_string'))) || 0
    slime=(parseInt(localStorage.getItem('slime'))) || 0
    witch=(parseInt(localStorage.getItem('witch'))) || 0
    zombie_villager=(parseInt(localStorage.getItem('zombie_villager'))) || 0
    /* Max Tools */
    MaxPickaxe=(parseInt(localStorage.getItem('MaxPickaxe'))) || 0
    MaxAxe=(parseInt(localStorage.getItem('MaxAxe'))) || 0
    MaxSword=(parseInt(localStorage.getItem('MaxSword'))) || 0
    MaxShovel=(parseInt(localStorage.getItem('MaxShovel'))) || 0
    MaxHoe=(parseInt(localStorage.getItem('MaxHoe'))) || 0
    bucket=(parseInt(localStorage.getItem('bucket'))) || 0
    lead=(parseInt(localStorage.getItem('lead'))) || 0
    /* Vilagers */
    villagerOver=(parseInt(localStorage.getItem('villagerOver'))) || 0
    villagerMine=(parseInt(localStorage.getItem('villagerMine'))) || 0
    villagerFood=(parseInt(localStorage.getItem('villagerFood'))) || 0
    villagerMobs=(parseInt(localStorage.getItem('villagerMobs'))) || 0
    StartVillagers();

    /*Tools*/
    wooden_sword=(parseInt(localStorage.getItem('wooden_sword'))) || 0
    wooden_pickaxe=(parseInt(localStorage.getItem('wooden_pickaxe'))) || 0
    wooden_axe=(parseInt(localStorage.getItem('wooden_axe'))) || 0
    wooden_shovel=(parseInt(localStorage.getItem('wooden_shovel'))) || 0
    wooden_hoe=(parseInt(localStorage.getItem('wooden_hoe'))) || 0
    stone_sword=(parseInt(localStorage.getItem('stone_sword'))) || 0
    stone_pickaxe=(parseInt(localStorage.getItem('stone_pickaxe'))) || 0
    stone_axe=(parseInt(localStorage.getItem('stone_axe'))) || 0
    stone_shovel=(parseInt(localStorage.getItem('stone_shovel'))) || 0
    stone_hoe=(parseInt(localStorage.getItem('stone_hoe'))) || 0
    iron_sword=(parseInt(localStorage.getItem('iron_sword'))) || 0
    iron_pickaxe=(parseInt(localStorage.getItem('iron_pickaxe'))) || 0
    iron_axe=(parseInt(localStorage.getItem('iron_axe'))) || 0
    iron_shovel=(parseInt(localStorage.getItem('iron_shovel'))) || 0
    iron_hoe=(parseInt(localStorage.getItem('iron_hoe'))) || 0
    golden_sword=(parseInt(localStorage.getItem('golden_sword'))) || 0
    golden_pickaxe=(parseInt(localStorage.getItem('golden_pickaxe'))) || 0
    golden_axe=(parseInt(localStorage.getItem('golden_axe'))) || 0
    golden_shovel=(parseInt(localStorage.getItem('golden_shovel'))) || 0
    golden_hoe=(parseInt(localStorage.getItem('golden_hoe'))) || 0
    diamond_sword=(parseInt(localStorage.getItem('diamond_sword'))) || 0
    diamond_pickaxe=(parseInt(localStorage.getItem('diamond_pickaxe'))) || 0
    diamond_axe=(parseInt(localStorage.getItem('diamond_axe'))) || 0
    diamond_shovel=(parseInt(localStorage.getItem('diamond_shovel'))) || 0
    diamond_hoe=(parseInt(localStorage.getItem('diamond_hoe'))) || 0
    GetMaxes();

    /*crafted*/
    planks=(parseInt(localStorage.getItem('planks'))) || 0
    stick=(parseInt(localStorage.getItem('stick'))) || 0
    door=(parseInt(localStorage.getItem('door'))) || 0
    furnace=(parseInt(localStorage.getItem('furnace'))) || 0
    iron_ingot=(parseInt(localStorage.getItem('iron_ingot'))) || 0
    gold_ingot=(parseInt(localStorage.getItem('gold_ingot'))) || 0
    farm=(parseInt(localStorage.getItem('farm'))) || 0
    bucket=(parseInt(localStorage.getItem('bucket'))) || 0
    flint=(parseInt(localStorage.getItem('flint'))) || 0
    small_house=(parseInt(localStorage.getItem('small_house'))) || 0
    hut=(parseInt(localStorage.getItem('hut'))) || 0
    villager=(parseInt(localStorage.getItem('villager'))) || 0

    refreshcrafting();
}
function refreshcrafting(){
    document.getElementById('log').innerHTML = log;
    document.getElementById('dirt').innerHTML = dirt;
    document.getElementById('seed').innerHTML = seed;
    document.getElementById('water').innerHTML = water;
    document.getElementById('cobblestone').innerHTML = cobblestone;
    document.getElementById('gravel').innerHTML = gravel;
    document.getElementById('coal').innerHTML = coal;
    document.getElementById('iron_ore').innerHTML = iron_ore;
    document.getElementById('gold_ore').innerHTML = gold_ore;
    document.getElementById('diamond').innerHTML = diamond;
    document.getElementById('lava').innerHTML = lava;
    document.getElementById('sugar_cane').innerHTML = sugar_cane;
    document.getElementById('wheat').innerHTML = wheat;
    document.getElementById('feather').innerHTML = feather;
    document.getElementById('leather').innerHTML = leather;
    document.getElementById('wool').innerHTML = wool;
    document.getElementById('horse').innerHTML = horse;
    document.getElementById('arrow').innerHTML = arrow;
    document.getElementById('spider_string').innerHTML = spider_string;
    document.getElementById('slime').innerHTML = slime;
    document.getElementById('witch').innerHTML = witch;
    document.getElementById('zombie_villager').innerHTML = zombie_villager;
    //document.getElementById('MaxPickaxe').innerHTML = MaxPickaxe;
    //document.getElementById('MaxAxe').innerHTML = MaxAxe;
    //document.getElementById('MaxSword').innerHTML = MaxSword;
    //document.getElementById('MaxShovel').innerHTML = MaxShovel;
    //document.getElementById('MaxHoe').innerHTML = MaxHoe;
    document.getElementById('bucket').innerHTML = bucket;
    document.getElementById('lead').innerHTML = lead;
    document.getElementById('villagerOver').innerHTML = villagerOver;
    document.getElementById('villagerMine').innerHTML = villagerMine;
    document.getElementById('villagerFood').innerHTML = villagerFood;
    document.getElementById('villagerMobs').innerHTML = villagerMobs;
    document.getElementById('wooden_sword').innerHTML = wooden_sword;
    document.getElementById('wooden_pickaxe').innerHTML = wooden_pickaxe;
    document.getElementById('wooden_axe').innerHTML = wooden_axe;
    document.getElementById('wooden_shovel').innerHTML = wooden_shovel;
    document.getElementById('wooden_hoe').innerHTML = wooden_hoe;
    document.getElementById('stone_sword').innerHTML = stone_sword;
    document.getElementById('stone_pickaxe').innerHTML = stone_pickaxe;
    document.getElementById('stone_axe').innerHTML = stone_axe;
    document.getElementById('stone_shovel').innerHTML = stone_shovel;
    document.getElementById('stone_hoe').innerHTML = stone_hoe;
    document.getElementById('iron_sword').innerHTML = iron_sword;
    document.getElementById('iron_pickaxe').innerHTML = iron_pickaxe;
    document.getElementById('iron_axe').innerHTML = iron_axe;
    document.getElementById('iron_shovel').innerHTML = iron_shovel;
    document.getElementById('iron_hoe').innerHTML = iron_hoe;
    document.getElementById('golden_sword').innerHTML = golden_sword;
    document.getElementById('golden_pickaxe').innerHTML = golden_pickaxe;
    document.getElementById('golden_axe').innerHTML = golden_axe;
    document.getElementById('golden_shovel').innerHTML = golden_shovel;
    document.getElementById('golden_hoe').innerHTML = golden_hoe;
    document.getElementById('diamond_sword').innerHTML = diamond_sword;
    document.getElementById('diamond_pickaxe').innerHTML = diamond_pickaxe;
    document.getElementById('diamond_axe').innerHTML = diamond_axe;
    document.getElementById('diamond_shovel').innerHTML = diamond_shovel;
    document.getElementById('diamond_hoe').innerHTML = diamond_hoe;
    document.getElementById('planks').innerHTML = planks;
    document.getElementById('stick').innerHTML = stick;
    document.getElementById('door').innerHTML = door;
    document.getElementById('furnace').innerHTML = furnace;
    document.getElementById('iron_ingot').innerHTML = iron_ingot;
    document.getElementById('gold_ingot').innerHTML = gold_ingot;
    document.getElementById('farm').innerHTML = farm;
    document.getElementById('bucket').innerHTML = bucket;
    document.getElementById('flint').innerHTML = flint;
    document.getElementById('small_house').innerHTML = small_house;
    document.getElementById('hut').innerHTML = hut;
    document.getElementById('villager').innerHTML = villager;
    //show game
    document.getElementById("loading").style.display = "none"
    document.getElementById("body").style.visibility = "visible"
}

function user_log(){
    console.log('log',log)
    console.log('dirt',dirt)
    console.log('seed',seed)
    console.log('water',water)
    console.log('cobblestone',cobblestone)
    console.log('gravel',gravel)
    console.log('coal',coal)
    console.log('iron_ore',iron_ore)
    console.log('gold_ore',gold_ore)
    console.log('diamond',diamond)
    console.log('lava',lava)
    console.log('sugar_cane',sugar_cane)
    console.log('wheat',wheat)
    console.log('feather',feather)
    console.log('leather',leather)
    console.log('wool',wool)
    console.log('horse',horse)
    console.log('arrow',arrow)
    console.log('spider_string',spider_string)
    console.log('slime',slime)
    console.log('witch',witch)
    console.log('zombie_villager',zombie_villager)
    console.log('MaxPickaxe',MaxPickaxe)
    console.log('MaxAxe',MaxAxe)
    console.log('MaxSword',MaxSword)
    console.log('MaxShovel',MaxShovel)
    console.log('MaxHoe',MaxHoe)
    console.log('bucket',bucket)
    console.log('lead',lead)
    console.log('villagerOver',villagerOver)
    console.log('villagerMine',villagerMine)
    console.log('villagerFood',villagerFood)
    console.log('villagerMobs',villagerMobs)
    console.log('wooden_sword',wooden_sword)
    console.log('wooden_pickaxe',wooden_pickaxe)
    console.log('wooden_axe',wooden_axe)
    console.log('wooden_shovel',wooden_shovel)
    console.log('wooden_hoe',wooden_hoe)
    console.log('stone_sword',stone_sword)
    console.log('stone_pickaxe',stone_pickaxe)
    console.log('stone_axe',stone_axe)
    console.log('stone_shovel',stone_shovel)
    console.log('stone_hoe',stone_hoe)
    console.log('iron_sword',iron_sword)
    console.log('iron_pickaxe',iron_pickaxe)
    console.log('iron_axe',iron_axe)
    console.log('iron_shovel',iron_shovel)
    console.log('iron_hoe',iron_hoe)
    console.log('golden_sword',golden_sword)
    console.log('golden_pickaxe',golden_pickaxe)
    console.log('golden_axe',golden_axe)
    console.log('golden_shovel',golden_shovel)
    console.log('golden_hoe',golden_hoe)
    console.log('diamond_sword',diamond_sword)
    console.log('diamond_pickaxe',diamond_pickaxe)
    console.log('diamond_axe',diamond_axe)
    console.log('diamond_shovel',diamond_shovel)
    console.log('diamond_hoe',diamond_hoe)
    console.log('planks',planks)
    console.log('stick',stick)
    console.log('door',door)
    console.log('furnace',furnace)
    console.log('iron_ingot',iron_ingot)
    console.log('gold_ingot',gold_ingot)
    console.log('farm',farm)
    console.log('bucket',bucket)
    console.log('flint',flint)
    console.log('small_house',small_house)
    console.log('hut',hut)
    console.log('villager',villager)
}
function user_reset(){
/*-------MATERIALS-------*/
    /* Over */
    log=0
    dirt=0
    seed=0
    water=0
    /* Mine */
    cobblestone=0
    gravel=0
    coal=0
    iron_ore=0
    gold_ore=0
    diamond=0
    lava=0
    /* Food */
    sugar_cane=0
    wheat=0
    /* Mobs */
    feather=0
    leather=0
    wool=0
    horse=0
    arrow=0
    spider_string=0
    slime=0
    witch=0
    zombie_villager=0
    /* Max Tools */
    MaxPickaxe=0
    MaxAxe=0
    MaxSword=0
    MaxShovel=0
    MaxHoe=0
    bucket=0
    lead=0
    /* Vilagers */
    villagerOver=0
    villagerMine=0
    villagerFood=0
    villagerMobs=0
    //StartVillagers();

    /*Tools*/
    wooden_sword=0
    wooden_pickaxe=0
    wooden_axe=0
    wooden_shovel=0
    wooden_hoe=0
    stone_sword=0
    stone_pickaxe=0
    stone_axe=0
    stone_shovel=0
    stone_hoe=0
    iron_sword=0
    iron_pickaxe=0
    iron_axe=0
    iron_shovel=0
    iron_hoe=0
    golden_sword=0
    golden_pickaxe=0
    golden_axe=0
    golden_shovel=0
    golden_hoe=0
    diamond_sword=0
    diamond_pickaxe=0
    diamond_axe=0
    diamond_shovel=0
    diamond_hoe=0
    //GetMaxes();

    /*crafted*/
    planks=0
    stick=0
    door=0
    furnace=0
    iron_ingot=0
    gold_ingot=0
    farm=0
    bucket=0
    flint=0

    location.reload();
}