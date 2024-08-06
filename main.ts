mobs.onMobKilled(CHICKEN, function () {
	
})
// if you see this, Hi!
player.onChat("cx", function (item) {
    player.teleport(pos(item, 0, 0))
})
player.onChat("help3", function () {
    player.say("xp amount - gives you xp")
    player.say("day - sets time to day")
    player.say("one-shot - one shot any mob")
    player.say("speedhack - run faster")
    player.say("explode - blow up anything and anyone's base")
    player.say("suicide - kill urself")
    player.say("mass-suicide - kill everyone")
    player.say("mob-suicide - kill every entity")
    player.say("fastbreak - break blocks fast")
    player.say("water-br. - breathe underwater")
    player.say("panic - turns off every hack")
    player.say("nuker - mines blocks")
    player.say("nukeroff - turns nuker off")
    player.say("fullbright - allows you to see in dark")
    player.say("autobase - automatically builds a base for u")
})
player.onChat("suicide", function () {
    mobs.kill(
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("help2", function (num1) {
    player.say("food - gives you 16 cooked beef")
    player.say("deez -  nuts")
    player.say("cw - clear weather")
    player.say("portal - gives you 16 obsidian and 1 flint and steel")
    player.say("kit - gives you full diamond armor and tools")
    player.say("gmc - sets gamemode to creative")
    player.say("gms - sets gamemode to survival")
    player.say("bedrock - gives you a stack of bedrock")
    player.say("barrier - gives you a stack of barrier blocks")
    player.say("type help3 for next page")
})
player.onChat("give", function (item, Amount) {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    blocks.blockById(item),
    Amount
    )
})
player.onChat("xp", function (num1) {
    gameplay.xp(num1, mobs.target(LOCAL_PLAYER))
    player.say("gave you " + num1 + " xp")
})
player.onChat("nukeroff", function () {
    nuker = 0
    player.say("Nuker off")
})
player.onChat("nuker", function () {
    if (nuker == 1) {
        nuker = 0
        player.say("Nuker off")
    } else {
        nuker = 1
        player.say("Nuker on.")
    }
    while (nuker == 1) {
        blocks.fill(
        AIR,
        pos(-5, 0, -5),
        pos(5, 6, 5),
        FillOperation.Destroy
        )
    }
})
player.onChat("portal", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    OBSIDIAN,
    16
    )
    loops.pause(50)
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    FLINT_AND_STEEL,
    1
    )
})
player.onChat("fullbright", function () {
    mobs.applyEffect(NIGHT_VISION, mobs.target(LOCAL_PLAYER), 999999, 1)
})
player.onChat("gms", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("stopscaffold", function () {
    Scaffoldhack = 0
    player.say("Scaffold off.")
})
player.onChat("mob-suicide", function () {
    mobs.kill(
    mobs.target(ALL_ENTITIES)
    )
})
player.onChat("cw", function () {
    gameplay.setWeather(CLEAR)
})
player.onChat("cy", function (item) {
    player.teleport(pos(0, item, 0))
})
player.onChat("help", function () {
    player.say("cx number - teleport on the x axis ")
    player.say("cy number - same as cx but on the y axis")
    player.say("cz number - same as cx but on the z axis")
    player.say("scaffold - places blocks under you")
    player.say("stopscaffold - stops scaffold")
    player.say("give itemid amount - gives you any item")
    player.say("link to id list: https://www.digminecraft.com/lists/item_id_list_edu.php")
    player.say("sblock blockid - changes scaffold block")
    player.say("dia - gives you 10 diamonds")
    player.say("type help2 for next page")
})
player.onChat("scaffold", function () {
    if (Scaffoldhack == 1) {
        Scaffoldhack = 0
        player.say("Scaffold off")
    } else {
        Scaffoldhack = 1
        player.say("Scaffold on.")
    }
    while (Scaffoldhack == 1) {
        blocks.place(Blockid, pos(0, -1, 0))
    }
})
player.onChat("cz", function (item) {
    player.teleport(pos(0, 0, item))
})
player.onChat("panic", function () {
    mobs.clearEffect(mobs.target(LOCAL_PLAYER))
    Scaffoldhack = 0
    nuker = 0
})
player.onChat("food", function () {
    player.say("Gave you 16 steak.")
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    COOKED_BEEF,
    16
    )
})
player.onChat("water-br.", function () {
    mobs.applyEffect(WATER_BREATHING, mobs.target(LOCAL_PLAYER), 999999, 1)
})
player.onChat("deez", function () {
    player.say("nuts")
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    POTATO,
    1
    )
})
player.onChat("speedhack", function () {
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 999999, 20)
})
player.onChat("explode", function () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
    }
})
player.onChat("gmc", function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("dia", function () {
    player.say("Gave you 10 diamonds.")
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND,
    10
    )
})
player.onChat("sblock", function (num1) {
    Blockid = num1
})
player.onChat("day", function () {
    player.say("Set time to day.")
    gameplay.timeSet(gameplay.time(DAY))
})
player.onChat("mass-suicide", function () {
    mobs.kill(
    mobs.target(ALL_PLAYERS)
    )
})
player.onChat("barrier", function () {
    player.execute(
    "give @s barrier 64"
    )
})
// https://www.youtube.com/watch?v=IIJM3S9H5m0
player.onChat("kit", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_HELMET,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_CHESTPLATE,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_LEGGINGS,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_BOOTS,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_SWORD,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_PICKAXE,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_AXE,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    NETHERITE_SWORD,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    ENCHANTED_APPLE,
    64
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    TOTEM,
    5
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    SHIELD,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    ARROW,
    64
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    BOW,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    BOAT,
    2
    )
})
player.onChat("autobase", function () {
    blocks.fill(
    PLANKS_OAK,
    pos(-5, 0, -5),
    pos(5, 5, 5),
    FillOperation.Hollow
    )
})
player.onChat("bedrock", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    BEDROCK,
    64
    )
})
player.onChat("one-shot", function () {
    mobs.applyEffect(STRENGTH, mobs.target(LOCAL_PLAYER), 999999, 255)
})
player.onChat("fastbreak", function () {
    mobs.applyEffect(HASTE, mobs.target(LOCAL_PLAYER), 999999, 18)
})
let nuker = 0
let Scaffoldhack = 0
let Blockid = 0
let item = DIRT
Blockid = 3
Scaffoldhack = 0
player.say("EDU CLIENT V2")
player.say("type help for a list of commands")
