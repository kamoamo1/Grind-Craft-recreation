function StartVillagers(){
    if(villagerOver>0) OverMaterial();
    if(villagerMine>0) MineMaterial();
    if(villagerFood>0) FoodMaterial();
    if(villagerMobs>0) MobsMaterial();
}
function GetMaxes(){
    MaxPickaxe=0;
    MaxAxe=0;
    MaxSword=0;
    MaxShovel=0;
    MaxHoe=0;
if (wooden_pickaxe>=1)  {MaxPickaxe=1};
if (stone_pickaxe>=1)   {MaxPickaxe=2};
if (iron_pickaxe>=1)    {MaxPickaxe=3};
if (golden_pickaxe>=1)  {MaxPickaxe=4};
if (diamond_pickaxe>=1) {MaxPickaxe=5};
if (wooden_axe>=1)      {MaxAxe=1};
if (stone_axe>=1)       {MaxAxe=2};
if (iron_axe>=1)        {MaxAxe=3};
if (golden_axe>=1)      {MaxAxe=4};
if (diamond_axe>=1)     {MaxAxe=5};
if (wooden_sword>=1)    {MaxSword=1};
if (stone_sword>=1)     {MaxSword=2};
if (iron_sword>=1)      {MaxSword=3};
if (golden_sword>=1)    {MaxSword=4};
if (diamond_sword>=1)   {MaxSword=5};
if (wooden_shovel>=1)   {MaxShovel=1};
if (stone_shovel>=1)    {MaxShovel=2};
if (iron_shovel>=1)     {MaxShovel=3};
if (golden_shovel>=1)   {MaxShovel=4};
if (diamond_shovel>=1)  {MaxShovel=5};
if (wooden_hoe>=1)      {MaxHoe=1};
if (stone_hoe>=1)       {MaxHoe=2};
if (iron_hoe>=1)        {MaxHoe=3};
if (golden_hoe>=1)      {MaxHoe=4};
if (diamond_hoe>=1)     {MaxHoe=5};

if (MaxAxe>0)       {OverMaterialLevel=10};    /*wood 33%*/
if (MaxShovel>0)    {OverMaterialLevel=24};    /*dirt 46%*/
if (MaxSword>0)     {OverMaterialLevel=29};    /*seeds 16%*/
if (bucket>0)       {OverMaterialLevel=30};    /*water 3%*/

if (MaxPickaxe>0)   {MineMaterialLevel=31};    /*stone 52%*/
if (MaxShovel>0)    {MineMaterialLevel=37};    /*gravel 10%*/
if (MaxPickaxe>0)   {MineMaterialLevel=48};    /*coal_ore 17%*/
if (MaxPickaxe>1)   {MineMaterialLevel=53};    /*iron_ore 6%*/
if (MaxPickaxe>2)   {MineMaterialLevel=57};    /*gold_ore 5%*/
if (bucket>0)       {MineMaterialLevel=58};    /*lava 1,6%*/
if (MaxPickaxe>3)   {MineMaterialLevel=59};    /*diamond_ore 1,6%*/

//if (MaxSword>0)     {FoodMaterialLevel=2};     /*sugar_cane 66%*/
if (MaxSword>0)     {FoodMaterialLevel=3};     /*wheat 33%*/

//if (MaxSword>0)     {MobsMaterialLevel=2};     /*zombie*/
//if (MaxSword>0)     {MobsMaterialLevel=4};     /*skeleton*/
//if (MaxSword>0)     {MobsMaterialLevel=6};     /*spider*/
//if (MaxSword>0)     {MobsMaterialLevel=8};     /*slime*/
//if (MaxSword>0)     {MobsMaterialLevel=12};    /*pig*/
//if (MaxSword>0)     {MobsMaterialLevel=15};    /*chicken*/
//if (MaxSword>0)     {MobsMaterialLevel=18};    /*cow*/
if (MaxSword>0)     {MobsMaterialLevel=21};    /*sheep*/
//if (MaxSword>0)     {MobsMaterialLevel=24};    /*horse*/
//if (MaxSword>0)     {MobsMaterialLevel=25};    /*zombie_villager*/
if (lead>0)     {MobsMaterialLevel=26};    /*witch*/
    
unlock();
}