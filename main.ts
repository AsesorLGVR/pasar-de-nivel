function start_level () {
    scene.setBackgroundColor(Math.randomRange(3, 7))
    count = 0
    for (let index = 0; index <= 5 - nivel; index++) {
        mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
        mySprite2.setPosition(Math.randomRange(20, 140), Math.randomRange(20, 100))
        mySprite.say("Nivel" + nivel, 5000)
        info.startCountdown(10)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    count += 1
    info.changeScoreBy(1)
    otherSprite.destroy()
    otherSprite.startEffect(effects.smiles, 200)
    if (count > 5 - nivel) {
        nivel += 1
        music.baDing.play()
        start_level()
        game.over(true)
    } else {
        music.powerUp.play()
    }
})
let mySprite2: Sprite = null
let count = 0
let mySprite: Sprite = null
let nivel = 0
game.splash("!Corre!", "!Recoge los cofres!")
nivel = 1
mySprite = sprites.create(img`
. . . . . . f f f f f . . . . . 
. . . . f f f f f f f f f . . . 
. . b b f f f f f f f f f b b . 
. b b b b f f d d d f f b b b b 
. b b b b f f d d d f f b b b b 
. . b b d d d d d d d d d b b . 
. . . d d d f d d d f d d d . . 
. . . d d d d d d d d d d d . . 
. . . d d d d d 3 d d d d d . . 
. . . . d d d d d d d d d . . . 
. . . . . . c c b c c . . . d d 
. d d d d d c c b c c d d d d d 
. d d d d c c b b b c c d d d d 
. d d . c c c c b c c c c . . . 
. . . c c c b b b b b c c c . . 
. . . . . d d d . d d d . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 70, 70)
start_level()
mySprite.setFlag(SpriteFlag.StayInScreen, true)
