const randomNum = (num) => Math.floor(Math.random()* num);

const good = {
    affirmation: ["beautiful", "smart", "worthy", "empowered", "unique", "called"],
    gratitude: ["family", "friends", "work", "food", "love"],
    verse:["Colossians 2:10", "1 Thessalonians 1:4", "1 John 3:1", "Matthew 5:14", "Romans 8:37", "Galatians 4:7"],
};

let positive = () => {
    console.log(`I am ${good.affirmation[randomNum(good.affirmation.length)]}.`);
    console.log(`I am thankful for ${good.gratitude[randomNum(good.gratitude.length)]}.`);
    console.log(`Today's Verse: ${good.verse[randomNum(good.verse.length)]}`);
}
positive();

document.getElementById("inspiration").innerHTML = positive;