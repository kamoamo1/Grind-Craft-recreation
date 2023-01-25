function unlock(){
        document.getElementById("Over").classList.remove("locked")
    if (MineMaterialLevel>0){
        document.getElementById("Mine").classList.remove("locked")
    }
    if (FoodMaterialLevel>0){
        document.getElementById("Food").classList.remove("locked")
    }
    if (MobsMaterialLevel>0){
        document.getElementById("Mobs").classList.remove("locked")
    }
}
function update_count() {
    for (let i = 0; i < arguments.length; i++) {
        var varname = Object.keys(arguments[i])[0];
        document.getElementById(varname).innerHTML = arguments[i][varname];
    }
}

function debug(){
    if (document.getElementById("debug").style.display == "none") {
        document.getElementById("debug").style.display = "flex";
    } else{
        document.getElementById("debug").style.display = "none";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * (max+1));
}