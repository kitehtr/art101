/*
    lab.js - Lab 12: Conditionals
    Requirements: Working with your partner, create a function that depends on conditionals.
    Authors: Keith Tran & Josh Chow
    Date: 11/11/24
*/

function sortingHat(str) {
    // Task Bonus 1 and Task Bonus 2: adding a description to each house in addition to their house name and turning it into an array
    const houseArray = [
        { name: "Gryffindor", description: "Gryffindor house is where you would find the pluckiest and most daring students (there’s a reason the house symbol is the brave lion). The house colours are scarlet and gold, the common room lies up in Gryffindor Tower and the Head of House is Professor Minerva McGonagall. If the Sorting Hat placed you here, you would have demonstrated qualities like courage, bravery and determination. Some of the wizarding world’s best and brightest belonged to this house – Harry Potter and Albus Dumbledore are just a couple that spring to mind! If you are lucky enough to end up in Gryffindor, we imagine you’re the type of person who likes to stand up for the little guy, challenges authority, has a tendency to act first and think later, is known as a class clown and takes board games very seriously." },
        { name: "Ravenclaw", description: "If you are looking for the brainiest students – you would find them in Ravenclaw (with a couple of notable exceptions like Hermione Granger). The Ravenclaw colours are blue and bronze, the emblem is an eagle, the Head of House is Professor Filius Flitwick and the common room sits at the top of Ravenclaw Tower behind an enchanted knocker. The Sorting Hat would only put you in this house if you demonstrated excellent wisdom, wit and a skill for learning. Ravenclaws are often known for being quite eccentric and most of the great wizarding inventors and innovators have come from this house. We can imagine that you would get to sit up in Ravenclaw Tower, while surveying the excellent views, if you’re the type of person who analyses everything, is an overachiever, can be described as away with the fairies, is not afraid to be an individual and has a head stuffed full of interesting facts." },
        { name: "Slytherin", description: "Slytherin house has an unfortunate reputation. While it is true that a lot of dark witches and wizards were sorted into Slytherin, not all who belong to this house are bad. In fact, there are a lot of excellent qualities the Sorting Hat looks for in potential Slytherins and Merlin himself even belonged to this misunderstood house! The house colours for Slytherin are silver and emerald green and the emblem is a serpent. The Head of House is Professor Severus Snape, and the common room can be found down in the dungeons under the lake (which only adds to the Slytherin air of mystery). If the Sorting Hat placed you in this noble house, then you are most likely ambitious, shrewd and possibly destined for greatness. We can imagine you’re the kind of person who is always one step ahead, has a dark sense of humour, thinks reputation is important, takes pride in their appearance and doesn’t let anyone see their soft side." },
        { name: "Hufflepuff", description: "Hufflepuff is where you will find the most trustworthy and hardworking students. In fact, out of all the houses Hufflepuff has produced the least number of dark witches and wizards. The badger is the symbol of this house, the colours are yellow and black, the Head of House is Professor Pomona Sprout and the common room can be found near the kitchens in Hogwarts. There is an idea that Hufflepuffs are the least clever of all Hogwarts students – but that is not true. Hufflepuffs are just the most humble of all the houses and don’t feel the need to shout about their achievements in the same way as the others. If you were lucky enough to be sorted into this house, we can imagine you’re the type of person who has a strong moral compass, always works hard, is the most loyal friend, knows it is the taking part that counts and always has the best snacks." }
    ];
    
    //Task Bonus 4: Hash Function
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;  
    }
    // Return absolute value if negative number
    hash = Math.abs(hash); 

    //Task Bonus 3: Can you make it so it is easy to add more houses to your list? Hint: houseArray.length
    mod = hash % houseArray.length;
    house = houseArray[mod];

    return house;
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = `<p class="indent">Greetings ${name}. <br><br> The Sorting Hat has sorted you into ${house.name}.</p> <p class = "indent"> ${house.description}</p> <br> <p class = 'indent'>Descriptions found at https://www.harrypotter.com/features/hogwarts-house-meanings</p>` ;
    document.getElementById("output").innerHTML = newText;
});

