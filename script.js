document.getElementById('randomJokeBtn').addEventListener('click', () => {
    const jokes = [
        "What kind of dogs do magicians like? Labracadabradors",
        "Why do frogs never park illegally? They are afraid of getting toad",
        "Why do frogs never park illegally? They are afraid of getting toad.",
        "Why do spiders know everything? They get their information from the Web.",
        "Where do sheep go on vacation? The Baaa-hamas.",
        "What did the duck say after he finished dinner? Put it on my bill.",
        "What do you call a snail on a ship? A snailor",
        "What writing utensil does a boar use in class? A pig pen.",
        "What kind of lion doesn't roar? A dandelion.",
        "Why was 6 afraid of 7? Because 7,8,9.",
        "How much does a pirate pay to get his ears pierced? A buck an ear.",
        "What game do tornadoes play at parties? Twister.",
        "What did the apple say to the kangaroo? Nothing. Apples can't talk.",
        "What awards do dentists receive? Plaques.",
        "Who keeps the ocean floor clean? Mer-maids.",
        "How did one wave greet the other wave? She waved.",
        "Why are volcanoes so popular? They are lava-able.",
        "What does a cow read every day? The moos-paper.",
        "What is it called when a prisoner takes their own picture? A cell-fie.",
        "What did one candy bar say to the other candy bar? I've got some Twix up my sleeve.",
        "Why are circles bad at telling stories? Because they are pointless.",
        "What has hands but can't clap? A clock.",
        "How did the man like to watch fishing tournaments? Live stream.",
        "Why did the computer go to the doctor? It had a virus.",
        "Why don't dogs like walking in the rain? They are afraid of Poodles.",
        "Why did the tomato blush? Because it saw salad dressing.",
        "Why are shrimp bad at sharing? They are shellfish.",
        "What did the daddy buffalo say to his son when he left for camp? Bison.",
        "Why did the cookie go to the hospital? He felt crumby.",
        "Why are pirates bad at singing the alphabet song? They get stuck at C.",
        "How can you tell when a vampire is sick? He's coffin a lot.",
        "What animal is always at a baseball game? A bat.",
        "Where do pencils come from? Pennsylvania.",
        "Why was the broom late for school? It over-swept.",
        "Why are ghosts bad liars? You can see right through them.",
        "Why didn't the bicycle stand up? It was two tired. ",


    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];

    document.getElementById("th").innerText = `${randomJoke}`
});
