const questions = [
    {
        question: "What is the capital of the United States?",
        options: ["Washington, D.C.", "New York", "Los Angeles", "Chicago", "Houston", "Miami"],
        correctAnswer: "Washington, D.C."
    },
    {
        question: "Which fruit is known for being yellow and curved?",
        options: ["Banana", "Apple", "Grapes", "Orange", "Strawberry", "Pineapple"],
        correctAnswer: "Banana"
    },
    {
        question: "What is the opposite of 'hot'?",
        options: ["Cold", "Warm", "Dry", "Wet", "Soft", "Hard"],
        correctAnswer: "Cold"
    },
    {
        question: "Which animal says 'meow'?",
        options: ["Cat", "Dog", "Cow", "Sheep", "Horse", "Pig"],
        correctAnswer: "Cat"
    },
    {
        question: "What is the first day of the week?",
        options: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        correctAnswer: "Sunday"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Mars", "Earth", "Venus", "Saturn", "Neptune"],
        correctAnswer: "Jupiter"
    },
    {
        question: "What is the main ingredient in a salad?",
        options: ["Lettuce", "Bread", "Rice", "Pasta", "Potato", "Chicken"],
        correctAnswer: "Lettuce"
    },
    {
        question: "What is the shape of a ball?",
        options: ["Round", "Square", "Triangle", "Rectangle", "Oval", "Hexagon"],
        correctAnswer: "Round"
    },
    {
        question: "What is the name of the fourth month of the year?",
        options: ["April", "March", "May", "June", "July", "August"],
        correctAnswer: "April"
    },
    {
        question: "Which vegetable is orange and long?",
        options: ["Carrot", "Tomato", "Broccoli", "Potato", "Cucumber", "Peas"],
        correctAnswer: "Carrot"
    },
    {
        question: "What time of day is called 'morning'?",
        options: ["6 AM to 12 PM", "12 PM to 6 PM", "6 PM to 12 AM", "12 AM to 6 AM", "3 PM to 9 PM", "9 AM to 3 PM"],
        correctAnswer: "6 AM to 12 PM"
    },
    {
        question: "How many days are there in a week?",
        options: ["Seven", "Five", "Three", "Ten", "Eight", "Six"],
        correctAnswer: "Seven"
    },
    {
        question: "Which bird is known for its bright pink color and long legs?",
        options: ["Flamingo", "Eagle", "Penguin", "Parrot", "Ostrich", "Sparrow"],
        correctAnswer: "Flamingo"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome", "Madrid", "Lisbon"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the primary color of an apple?",
        options: ["Red", "Blue", "Yellow", "Brown", "Orange", "Purple"],
        correctAnswer: "Red"
    },
    {
        question: "Which sea creature has eight legs?",
        options: ["Octopus", "Shark", "Dolphin", "Whale", "Seal", "Crab"],
        correctAnswer: "Octopus"
    },
    {
        question: "What is the first letter of the English alphabet?",
        options: ["A", "B", "C", "D", "E", "F"],
        correctAnswer: "A"
    },
    {
        question: "What is the name of Mickey Mouse's girlfriend?",
        options: ["Minnie Mouse", "Daisy Duck", "Goofy", "Pluto", "Donald Duck", "Clarabelle"],
        correctAnswer: "Minnie Mouse"
    },
    {
        question: "Which animal is known as man's best friend?",
        options: ["Dog", "Snake", "Bird", "Fish", "Rabbit", "Hamster"],
        correctAnswer: "Dog"
    },
    {
        question: "What is the color of grass?",
        options: ["Green", "Red", "Blue", "Pink", "Brown", "Orange"],
        correctAnswer: "Green"
    },
    {
        question: "What type of vehicle is used to travel through space?",
        options: ["Spaceship", "Car", "Bike", "Train", "Boat", "Plane"],
        correctAnswer: "Spaceship"
    },
    {
        question: "What is the opposite of 'up'?",
        options: ["Down", "Left", "Right", "Forward", "Backward", "Around"],
        correctAnswer: "Down"
    },
    {
        question: "What is the first month of the year?",
        options: ["January", "February", "March", "April", "May", "June"],
        correctAnswer: "January"
    },
    {
        question: "What do you use to eat soup?",
        options: ["Spoon", "Fork", "Knife", "Chopsticks", "Plate", "Glass"],
        correctAnswer: "Spoon"
    },
    {
        question: "Which day comes after Friday?",
        options: ["Saturday", "Sunday", "Thursday", "Wednesday", "Tuesday", "Monday"],
        correctAnswer: "Saturday"
    },
    {
        question: "What color are bananas when they are ripe?",
        options: ["Yellow", "Green", "Red", "Blue", "Purple", "Orange"],
        correctAnswer: "Yellow"
    },
    {
        question: "What is the past tense of 'go'?",
        options: ["Went", "Gone", "Go", "Going", "Goes", "Come"],
        correctAnswer: "Went"
    },
    {
        question: "Where do you usually sleep?",
        options: ["Bed", "Chair", "Desk", "Table", "floor", "Closet"],
        correctAnswer: "Bed"
    },
    {
        question: "What is the main ingredient in an omelet?",
        options: ["Eggs", "Milk", "Bread", "Cheese", "Butter", "Tomato"],
        correctAnswer: "Eggs"
    },
    {
        question: "What is the opposite of 'yes'?",
        options: ["No", "Maybe", "Okay", "Sure", "Yes", "Not"],
        correctAnswer: "No"
    },
    {
        question: "What time of day is it usually dark outside?",
        options: ["Night", "Morning", "Afternoon", "Evening", "Noon", "Dawn"],
        correctAnswer: "Night"
    },
    {
        question: "Which of these is a fruit?",
        options: ["Apple", "Carrot", "Broccoli", "Chicken", "Rice", "Cheese"],
        correctAnswer: "Apple"
    },
    {
        question: "What is used to write on a blackboard?",
        options: ["Chalk", "Pencil", "Pen", "Marker", "Brush", "Crayon"],
        correctAnswer: "Chalk"
    },
    {
        question: "What do you drink when you are thirsty?",
        options: ["Water", "Bread", "Rice", "Pasta", "Soup", "Salad"],
        correctAnswer: "Water"
    },
    {
        question: "What do you wear on your feet?",
        options: ["Shoes", "Hat", "Shirt", "Pants", "Gloves", "Scarf"],
        correctAnswer: "Shoes"
    },
    {
        question: "What do bees produce?",
        options: ["Honey", "Milk", "Bread", "Cheese", "Butter", "Jam"],
        correctAnswer: "Honey"
    },
    {
        question: "Where do you wash your hands?",
        options: ["Sink", "Stove", "Desk", "Chair", "Bed", "Table"],
        correctAnswer: "Sink"
    },
    {
        question: "What do you use to open a locked door?",
        options: ["Key", "Pen", "Book", "Cup", "Spoon", "Brush"],
        correctAnswer: "Key"
    },
    {
        question: "What do you use to brush your teeth?",
        options: ["Toothbrush", "Hairbrush", "Comb", "Towel", "Razor", "Soap"],
        correctAnswer: "Toothbrush"
    },
    {
        question: "What do you use to dry your hands?",
        options: ["Towel", "Soap", "Shampoo", "Toothpaste", "Comb", "Brush"],
        correctAnswer: "Towel"
    },
    {
        question: "What do you use to see in the dark?",
        options: ["Flashlight", "Mirror", "Book", "Cup", "Spoon", "Brush"],
        correctAnswer: "Flashlight"
    },
    {
        question: "What do you use to write a letter?",
        options: ["Pen", "Ruler", "Eraser", "Lighter", "Brush", "Cup"],
        correctAnswer: "Pen"
    },
    {
        question: "What do you use to cut paper?",
        options: ["Scissors", "Kettle", "Fork", "Spoon", "Brush", "Ruler"],
        correctAnswer: "Scissors"
    },
    {
        question: "What day comes after Monday?",
        options: ["Tuesday", "Sunday", "Friday", "Thursday", "Wednesday", "Saturday"],
        correctAnswer: "Tuesday"
    },
    {
        question: "How many wheels does a bicycle have?",
        options: ["Two", "Three", "Four", "Five", "Six", "Seven"],
        correctAnswer: "Two"
    },
    {
        question: "What is the past tense of 'eat'?",
        options: ["Ate", "Eating", "Eats", "Eaten", "Eat", "Eater"],
        correctAnswer: "Ate"
    },
    {
        question: "Where do you store food to keep it cold?",
        options: ["Refrigerator", "Microwave", "Oven", "Cabinet", "Sink", "Dishwasher"],
        correctAnswer: "Refrigerator"
    },
    {
        question: "What is the main ingredient in a sandwich?",
        options: ["Bread", "Rice", "Pasta", "Cheese", "Butter", "Tomato"],
        correctAnswer: "Bread"
    },
    {
        question: "What time of day is it usually bright outside?",
        options: ["Day", "Night", "Dusk", "Dawn", "Evening", "Midnight"],
        correctAnswer: "Day"
    },
    {
        question: "Which of these is a vegetable?",
        options: ["Carrot", "Apple", "Banana", "Grape", "Orange", "Strawberry"],
        correctAnswer: "Carrot"
    },
    {
        question: "What do you use to cut food?",
        options: ["Knife", "Spoon", "Fork", "Plate", "Cup", "Pan"],
        correctAnswer: "Knife"
    },
    {
        question: "What do you drink when you are cold?",
        options: ["Hot chocolate", "Soda", "Milkshake", "Iced tea", "Lemonade", "Water"],
        correctAnswer: "Hot chocolate"
    },
    {
        question: "What is the color of the sun?",
        options: ["Yellow", "Black", "Blue", "Green", "Purple", "Brown"],
        correctAnswer: "Yellow"
    },
    {
        question: "What do you wear on your hands?",
        options: ["Gloves", "Hat", "Shirt", "Pants", "Shoes", "Scarf"],
        correctAnswer: "Gloves"
    },
    {
        question: "What do cows produce?",
        options: ["Milk", "Honey", "Wool", "Fruit", "Bread", "Butter"],
        correctAnswer: "Milk"
    },
    {
        question: "Where do you cook food?",
        options: ["Stove", "Sink", "Desk", "Chair", "Bed", "Table"],
        correctAnswer: "Stove"
    },
    {
        question: "What do you use to clean your teeth?",
        options: ["Toothbrush", "Hairbrush", "Comb", "Towel", "Razor", "Soap"],
        correctAnswer: "Toothbrush"
    },
    {
        question: "What do you put on your head to keep dry in the rain?",
        options: ["Umbrella", "Hat", "Sunglasses", "Scarf", "Gloves", "Shoes"],
        correctAnswer: "Umbrella"
    },
    {
        question: "What do you use to boil water?",
        options: ["Kettle", "Spoon", "Cup", "Plate", "Fork", "Pan"],
        correctAnswer: "Kettle"
    },
    {
        question: "What do you use to tell time?",
        options: ["Clock", "Calendar", "Map", "Book", "Pen", "Ring"],
        correctAnswer: "Clock"
    },
    {
        question: "What do you use to wash dishes?",
        options: ["Dish soap", "Shampoo", "Conditioner", "Lotion", "Hand sanitizer", "Toothpaste"],
        correctAnswer: "Dish soap"
    },
    {
        question: "What do you use to bake cookies?",
        options: ["Oven", "Refrigerator", "Television", "Sink", "Toaster", "Blender"],
        correctAnswer: "Oven"
    },
    {
        question: "What do you use to dry your body after a shower?",
        options: ["Towel", "Soap", "Shampoo", "Conditioner", "Brush", "Comb"],
        correctAnswer: "Towel"
    },
    {
        question: "What do you use to clean a dirty floor?",
        options: ["Broom", "Spoon", "Knife", "Brush", "Plate", "Pen"],
        correctAnswer: "Broom"
    },
    {
        question: "What day comes before Thursday?",
        options: ["Wednesday", "Tuesday", "Monday", "Friday", "Saturday", "Sunday"],
        correctAnswer: "Wednesday"
    },
    {
        question: "What color are ripe tomatoes?",
        options: ["Red", "Green", "Blue", "Yellow", "Purple", "Orange"],
        correctAnswer: "Red"
    },
    {
        question: "How many fingers do humans have on one hand?",
        options: ["Five", "Four", "Six", "Three", "Two", "Seven"],
        correctAnswer: "Five"
    },
    {
        question: "What is the past tense of 'see'?",
        options: ["Saw", "See", "Seen", "Seeing", "Sew", "Sow"],
        correctAnswer: "Saw"
    },
    {
        question: "Where do you put your clothes after washing them?",
        options: ["Drawer", "Oven", "Sink", "Toaster", "Blender", "Counter"],
        correctAnswer: "Drawer"
    },
    {
        question: "What is the main ingredient in a pancake?",
        options: ["Flour", "Bread", "Rice", "Potato", "Cheese", "Tomato"],
        correctAnswer: "Flour"
    },
    {
        question: "What is the opposite of 'big'?",
        options: ["Small", "Tall", "Wide", "Heavy", "High", "Long"],
        correctAnswer: "Small"
    },
    {
        question: "What time of day is it usually sunrise?",
        options: ["Morning", "Night", "Noon", "Evening", "Afternoon", "Midnight"],
        correctAnswer: "Morning"
    },
    {
        question: "Which of these is a type of meat?",
        options: ["Chicken", "Apple", "Banana", "Grape", "Orange", "Strawberry"],
        correctAnswer: "Chicken"
    },
    {
        question: "What do you use to write on a whiteboard?",
        options: ["Marker", "Pencil", "Pen", "Chalk", "Crayon", "Brush"],
        correctAnswer: "Marker"
    },
    {
        question: "What is the color of the ocean?",
        options: ["Blue", "Red", "Yellow", "Green", "Purple", "Orange"],
        correctAnswer: "Blue"
    },
    {
        question: "What do you wear on your head to block the sun?",
        options: ["Hat", "Gloves", "Shirt", "Pants", "Shoes", "Scarf"],
        correctAnswer: "Hat"
    },
    {
        question: "What do chickens produce?",
        options: ["Eggs", "Milk", "Wool", "Cheese", "Bread", "Butter"],
        correctAnswer: "Eggs"
    },
    {
        question: "Where do you store your books?",
        options: ["Shelf", "Sink", "Desk", "Chair", "Bed", "Table"],
        correctAnswer: "Shelf"
    },
    {
        question: "What do you use to make a call?",
        options: ["Phone", "Hairbrush", "Comb", "Towel", "Razor", "Soap"],
        correctAnswer: "Phone"
    },
    {
        question: "What do you use to wash your hands?",
        options: ["Soap", "Spoon", "Cup", "Plate", "Fork", "Pan"],
        correctAnswer: "Soap"
    },
    {
        question: "What do you use to check the time on your wrist?",
        options: ["Watch", "Calendar", "Map", "Book", "Pen", "Phone"],
        correctAnswer: "Watch"
    },
    {
        question: "What do you use to clean your hair?",
        options: ["Shampoo", "Soap", "Conditioner", "Lotion", "Hand sanitizer", "Toothpaste"],
        correctAnswer: "Shampoo"
    },
    {
        question: "What do you wear on your feet inside the house?",
        options: ["Slippers", "Shoes", "Sandals", "Socks", "Boots", "Gloves"],
        correctAnswer: "Slippers"
    },
    {
        question: "What is the color of a sunflower?",
        options: ["Yellow", "Red", "Blue", "Green", "Purple", "Orange"],
        correctAnswer: "Yellow"
    },
    {
        question: "How many legs does a butterfly have?",
        options: ["Six", "Four", "Eight", "Ten", "Twelve", "Two"],
        correctAnswer: "Six"
    },
    {
        question: "What do you use to carry water while hiking?",
        options: ["Water bottle", "Backpack", "Tent", "Hat", "Shoes", "Map"],
        correctAnswer: "Water bottle"
    },
    {
        question: "What type of animal is a deer?",
        options: ["Mammal", "Bird", "Fish", "Reptile", "Amphibian", "Insect"],
        correctAnswer: "Mammal"
    },
    {
        question: "Which plant has thorns and flowers?",
        options: ["Rose", "Sunflower", "Tulip", "Daisy", "Lily", "Orchid"],
        correctAnswer: "Rose"
    },
    {
        question: "What do bees collect from flowers?",
        options: ["Nectar", "Water", "Leaves", "Pollen", "Seeds", "Fruit"],
        correctAnswer: "Nectar"
    },
    {
        question: "What is the opposite of 'day'?",
        options: ["Night", "Morning", "Evening", "Afternoon", "Dawn", "Dusk"],
        correctAnswer: "Night"
    },
    {
        question: "What do you use to find your way in the forest?",
        options: ["Map", "Knife", "Book", "Pen", "Cup", "Spoon"],
        correctAnswer: "Map"
    },
    {
        question: "What do you put up to sleep in while camping?",
        options: ["Tent", "Sofa", "Chair", "Table", "Bed", "Desk"],
        correctAnswer: "Tent"
    },
    {
        question: "What do frogs need to live?",
        options: ["Water", "Sand", "Grass", "Trees", "Rocks", "Wind"],
        correctAnswer: "Water"
    },
    {
        question: "Which bird is known for its beautiful singing?",
        options: ["Nightingale", "Eagle", "Penguin", "Ostrich", "Flamingo", "Parrot"],
        correctAnswer: "Nightingale"
    },
    {
        question: "What do you use to light a campfire?",
        options: ["Matches", "Rocks", "Water", "Knife", "Tent", "Shoes"],
        correctAnswer: "Matches"
    },
    {
        question: "What type of animal is a snake?",
        options: ["Reptile", "Mammal", "Bird", "Fish", "Amphibian", "Insect"],
        correctAnswer: "Reptile"
    },
    {
        question: "Which plant is known for its large, colorful flowers?",
        options: ["Hibiscus", "Cactus", "Fern", "Moss", "Pine", "Bamboo"],
        correctAnswer: "Hibiscus"
    },
    {
        question: "What do you use to see faraway objects while hiking?",
        options: ["Binoculars", "Compass", "Map", "Book", "match", "Flashlight"],
        correctAnswer: "Binoculars"
    },
    {
        question: "What is the color of a ripe pumpkin?",
        options: ["Orange", "Blue", "Red", "Green", "Yellow", "Purple"],
        correctAnswer: "Orange"
    },
    {
        question: "What type of animal is a frog?",
        options: ["Amphibian", "Mammal", "Bird", "Fish", "Reptile", "Insect"],
        correctAnswer: "Amphibian"
    },
    {
        question: "What do you use to navigate while hiking?",
        options: ["Compass", "Hat", "Bottle", "Pen", "Cup", "Spoon"],
        correctAnswer: "Compass"
    },
    {
        question: "What type of animal is a trout?",
        options: ["Fish", "Bird", "Mammal", "Reptile", "Amphibian", "Insect"],
        correctAnswer: "Fish"
    },
    {
        question: "What do you use to cook food over a campfire?",
        options: ["Skewer", "Fork", "Belt", "Phone", "Plate", "Cup"],
        correctAnswer: "Skewer"
    },
    {
        question: "How many legs does a spider have?",
        options: ["Eight", "Four", "Six", "Ten", "Twelve", "Two"],
        correctAnswer: "Eight"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Blue Whale", "Elephant", "Giraffe", "Orca", "Hippopotamus", "Rhino"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which plant has prickly spines?",
        options: ["Cactus", "Rose", "Sunflower", "Tulip", "Lily", "Daisy"],
        correctAnswer: "Cactus"
    },
    {
        question: "What do birds use to build nests?",
        options: ["Twigs", "Water", "Leaves", "Stones", "Sand", "Logs"],
        correctAnswer: "Twigs"
    },
    {
        question: "What is the opposite of 'tall'?",
        options: ["Short", "Long", "Big", "Wide", "Heavy", "Narrow"],
        correctAnswer: "Short"
    },
    {
        question: "What do you use to navigate in the wilderness?",
        options: ["Compass", "Stone", "Book", "Pen", "Cup", "Spoon"],
        correctAnswer: "Compass"
    },
    {
        question: "What color are flamingos?",
        options: ["Pink", "Blue", "Red", "Green", "Yellow", "Purple"],
        correctAnswer: "Pink"
    },
    {
        question: "What do fish use to breathe underwater?",
        options: ["Gills", "Legs", "Fins", "Scales", "Teeth", "Eyes"],
        correctAnswer: "Gills"
    },
    {
        question: "Which bird is known for its colorful plumage?",
        options: ["Peacock", "Eagle", "Penguin", "Ostrich", "Seagull", "Crow"],
        correctAnswer: "Peacock"
    },
    {
        question: "What do you use to start a campfire?",
        options: ["Matches", "Water", "Knife", "Tent", "Shoes", "Bottles"],
        correctAnswer: "Matches"
    },
    {
        question: "What type of animal is a rabbit?",
        options: ["Mammal", "Bird", "Fish", "Reptile", "Amphibian", "Insect"],
        correctAnswer: "Mammal"
    },
    {
        question: "Which plant is known for its medicinal properties?",
        options: ["Aloe Vera", "Cactus", "Fern", "Moss", "Pine", "Bamboo"],
        correctAnswer: "Aloe Vera"
    },
    {
        question: "What do you use to look at the stars?",
        options: ["Telescope", "Compass", "Map", "Book", "Glasses", "Flashlight"],
        correctAnswer: "Telescope"
    },
    {
        question: "What type of animal is a penguin?",
        options: ["Bird", "Mammal", "Fish", "Reptile", "Amphibian", "Insect"],
        correctAnswer: "Bird"
    },
    {
        question: "What do you use to protect yourself from insects while hiking?",
        options: ["Bug spray", "Water bottle", "Backpack", "Tent", "Knife", "Shoes"],
        correctAnswer: "Bug spray"
    },
    {
        question: "What do you use to navigate at night while hiking?",
        options: ["Flashlight", "Compass", "Map", "Book", "Bug spray", "Telescope"],
        correctAnswer: "Flashlight"
    },
    {
        question: "What type of animal is a squirrel?",
        options: ["Mammal", "Bird", "Fish", "Reptile", "Amphibian", "Insect"],
        correctAnswer: "Mammal"
    },
    {
        question: "What color are strawberries when they are ripe?",
        options: ["Red", "Blue", "Green", "Yellow", "Purple", "Black"],
        correctAnswer: "Red"
    },
    {
        question: "Which place is known for its Eiffel Tower?",
        options: ["Paris", "New York", "Tokyo", "London", "Sydney", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "What do you use to pay for a taxi ride?",
        options: ["Money", "Food", "Passport", "License", "Book", "Pen"],
        correctAnswer: "Money"
    },
    {
        question: "What is the main language spoken in Mexico?",
        options: ["Spanish", "English", "French", "German", "Italian", "Portuguese"],
        correctAnswer: "Spanish"
    },
    {
        question: "Which place is known for the Great Wall?",
        options: ["China", "India", "Egypt", "Greece", "Italy", "Japan"],
        correctAnswer: "China"
    },
    {
        question: "What do you need to stay in a hotel?",
        options: ["Reservation", "Notebook", "Laptop", "License", "Pen", "Map"],
        correctAnswer: "Reservation"
    },
    {
        question: "Which place is known for its pyramids?",
        options: ["Egypt", "Australia", "Brazil", "Canada", "Russia", "Spain"],
        correctAnswer: "Egypt"
    },
    {
        question: "What do you use to capture photos on a trip?",
        options: ["Camera", "Suitcase", "Book", "Pen", "Map", "Ticket"],
        correctAnswer: "Camera"
    },
    {
        question: "What is the currency used in the United States?",
        options: ["Dollar", "Euro", "Yen", "Pound", "Rupee", "Peso"],
        correctAnswer: "Dollar"
    },
    {
        question: "Which city is known as the Big Apple?",
        options: ["New York", "Los Angeles", "Chicago", "San Francisco", "Miami", "Houston"],
        correctAnswer: "New York"
    },
    {
        question: "Which place is known for its canals and gondolas?",
        options: ["Venice", "Paris", "London", "Rome", "Amsterdam", "Berlin"],
        correctAnswer: "Venice"
    },
    {
        question: "Which place is known for the Statue of Liberty?",
        options: ["New York", "Los Angeles", "Chicago", "San Francisco", "Miami", "Houston"],
        correctAnswer: "New York"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima", "Nagoya", "Fukuoka"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Which place is known for the Colosseum?",
        options: ["Rome", "Paris", "London", "Athens", "Berlin", "Madrid"],
        correctAnswer: "Rome"
    },
    {
        question: "What do you use to listen to music while traveling?",
        options: ["Headphones", "Book", "Pen", "Ticket", "Camera", "Lock"],
        correctAnswer: "Headphones"
    },
    {
        question: "Which place is known for its kangaroos?",
        options: ["Australia", "Canada", "Brazil", "India", "China", "Mexico"],
        correctAnswer: "Australia"
    },
    {
        question: "What do you use to carry your clothes on a trip?",
        options: ["Suitcase", "Book", "Pen", "Ticket", "Camera", "Purse"],
        correctAnswer: "Suitcase"
    },
    {
        question: "Which city is known for its Golden Gate Bridge?",
        options: ["San Francisco", "New York", "Los Angeles", "Chicago", "Miami", "Houston"],
        correctAnswer: "San Francisco"
    },
    {
        question: "What do you need to enter another country?",
        options: ["Passport", "Library card", "Student ID", "Bus ticket", "Credit card", "Book"],
        correctAnswer: "Passport"
    },
    {
        question: "Which place is known for its deserts and camels?",
        options: ["Sahara", "Amazon", "Arctic", "Savanna", "Everglades", "Taiga"],
        correctAnswer: "Sahara"
    },
    {
        question: "What do you use to check the time while traveling?",
        options: ["Watch", "Book", "Pen", "Ticket", "Camera", "Lock"],
        correctAnswer: "Watch"
    },
    {
        question: "Which place is known for its cherry blossoms?",
        options: ["Japan", "China", "France", "India", "Australia", "Brazil"],
        correctAnswer: "Japan"
    },
    {
        question: "What do you need to rent a car?",
        options: ["Driver's license", "Library card", "Invitation card", "Bus ticket", "Credit card", "Camera"],
        correctAnswer: "Driver's license"
    },
    {
        question: "What do you use to fly a kite?",
        options: ["String", "Box", "Chain", "Wire", "Blanket", "Net"],
        correctAnswer: "String"
    },
    {
        question: "What is the color of the grass in a park?",
        options: ["Green", "Blue", "Red", "Pink", "Purple", "Orange"],
        correctAnswer: "Green"
    },
    {
        question: "What animal is known for its quacking sound?",
        options: ["Duck", "Cat", "Dog", "Cow", "Sheep", "Horse"],
        correctAnswer: "Duck"
    },
    {
        question: "Which plant has leaves that change color in the fall?",
        options: ["Maple", "Cactus", "Palm", "Fern", "Moss", "Pine"],
        correctAnswer: "Maple"
    },
    {
        question: "What do you use to sit on in a park?",
        options: ["Bench", "Sofa", "Table", "Desk", "Oven", "Washing machine"],
        correctAnswer: "Bench"
    },
    {
        question: "What do you use to play catch with a friend?",
        options: ["Ball", "Frisbee", "Stick", "Rock", "Leaf", "Flower"],
        correctAnswer: "Ball"
    },
    {
        question: "What is the opposite of 'inside'?",
        options: ["Outside", "Under", "Over", "Near", "Far", "Behind"],
        correctAnswer: "Outside"
    },
    {
        question: "What do you need to ride a bike safely?",
        options: ["Helmet", "Necktie", "belt", "Socks", "Scarf", "Hat"],
        correctAnswer: "Helmet"
    },
    {
        question: "What do you use to swim in the pool?",
        options: ["Swimsuit", "Pajamas", "Shoes", "Scarf", "Hat", "Gloves"],
        correctAnswer: "Swimsuit"
    },
    {
        question: "What do you use to protect your eyes from the sun?",
        options: ["Sunglasses", "Gloves", "Hat", "Scarf", "Shoes", "Pants"],
        correctAnswer: "Sunglasses"
    },
    {
        question: "Which fruit grows on a tree?",
        options: ["Apple", "Tomato", "Cucumber", "Carrot", "Potato", "Onion"],
        correctAnswer: "Apple"
    },
    {
        question: "What do you use to ride down a hill?",
        options: ["Bicycle", "Car", "Bus", "Train", "Boat", "Plane"],
        correctAnswer: "Bicycle"
    },
    {
        question: "What do you use to paddle a canoe?",
        options: ["Oar", "Stick", "Pole", "Rope", "Chain", "Net"],
        correctAnswer: "Oar"
    },
    {
        question: "Which animal is known for building dams?",
        options: ["Beaver", "Duck", "Cat", "Dog", "Horse", "Sheep"],
        correctAnswer: "Beaver"
    },
    {
        question: "What do you use to keep your drink cold?",
        options: ["Cooler", "Microwave", "Oven", "Cabinet", "Sink", "Dishwasher"],
        correctAnswer: "Cooler"
    },
    {
        question: "Which animal is known for its long trunk?",
        options: ["Elephant", "Dog", "Cat", "Cow", "Sheep", "Horse"],
        correctAnswer: "Elephant"
    },
    {
        question: "What do you use to see faraway objects?",
        options: ["Binoculars", "Book", "Pen", "Map", "Sunglasses", "Ticket"],
        correctAnswer: "Binoculars"
    },
    {
        question: "What do you use to print documents?",
        options: ["Printer", "Scanner", "Monitor", "Keyboard", "Mouse", "Lamp"],
        correctAnswer: "Printer"
    },
    {
        question: "What do you use to write emails?",
        options: ["Computer", "Calculator", "Printer", "File cabinet", "Monitor", "Lamp"],
        correctAnswer: "Computer"
    },
    {
        question: "What do you use to staple papers together?",
        options: ["Stapler", "Tape", "Paper clip", "Binder", "Pin", "Glue"],
        correctAnswer: "Stapler"
    },
    {
        question: "What do you use to store files and folders?",
        options: ["File cabinet", "Desk", "Chair", "Monitor", "Lamp", "Keyboard"],
        correctAnswer: "File cabinet"
    },
    {
        question: "What do you use to take notes during a meeting?",
        options: ["Notebook", "Calculator", "Stapler", "Mouse", "Monitor", "Lamp"],
        correctAnswer: "Notebook"
    },
    {
        question: "What do you use to view documents on a computer?",
        options: ["Monitor", "Keyboard", "Mouse", "Printer", "Scanner", "File cabinet"],
        correctAnswer: "Monitor"
    },
    {
        question: "What do you use to hold pens and pencils?",
        options: ["Pen holder", "File cabinet", "Stapler", "Binder", "Notebook", "Lamp"],
        correctAnswer: "Pen holder"
    },
    {
        question: "What do you use to measure the length of objects?",
        options: ["Ruler", "Calculator", "Keyboard", "Mouse", "Stapler", "Tape"],
        correctAnswer: "Ruler"
    },
    {
        question: "What do you use to connect a computer to the internet?",
        options: ["Router", "Printer", "Scanner", "Monitor", "Keyboard", "Lamp"],
        correctAnswer: "Router"
    },
    {
        question: "What do you use to check the date?",
        options: ["Calendar", "Mouse", "Keyboard", "Lamp", "Stapler", "Ruler"],
        correctAnswer: "Calendar"
    },
    {
        question: "What do you use to send documents electronically?",
        options: ["Email", "Fax machine", "Printer", "Scanner", "Monitor", "Lamp"],
        correctAnswer: "Email"
    },
    {
        question: "What do you use to type on a computer?",
        options: ["Keyboard", "Mouse", "Monitor", "Printer", "Scanner", "Lamp"],
        correctAnswer: "Keyboard"
    },
    {
        question: "What do you use to click and select items on a computer screen?",
        options: ["Mouse", "Keyboard", "Monitor", "Printer", "Scanner", "File cabinet"],
        correctAnswer: "Mouse"
    },
    {
        question: "Which country is known for sushi?",
        options: ["Japan", "China", "Korea", "Thailand", "Vietnam", "Malaysia"],
        correctAnswer: "Japan"
    },
    {
        question: "What is the main ingredient in pizza?",
        options: ["Dough", "Rice", "Pasta", "Bread", "Beans", "Corn"],
        correctAnswer: "Dough"
    },
    {
        question: "Which dish is traditionally made with raw fish?",
        options: ["Sashimi", "Tempura", "Teriyaki", "Ramen", "Sukiyaki", "Yakitori"],
        correctAnswer: "Sashimi"
    },
    {
        question: "Which country is famous for tacos?",
        options: ["Mexico", "Spain", "Brazil", "Argentina", "Chile", "Peru"],
        correctAnswer: "Mexico"
    },
    {
        question: "Which country is known for spaghetti?",
        options: ["Italy", "France", "Germany", "Spain", "Portugal", "Greece"],
        correctAnswer: "Italy"
    },
    {
        question: "What is the main ingredient in curry?",
        options: ["Spices", "Rice", "Pasta", "Bread", "Corn", "Beans"],
        correctAnswer: "Spices"
    },
    {
        question: "Which country is known for croissants?",
        options: ["France", "Italy", "Germany", "Spain", "Portugal", "Greece"],
        correctAnswer: "France"
    },
    {
        question: "What is the main ingredient in ramen?",
        options: ["Noodles", "Rice", "Bread", "Beans", "Corn", "Pasta"],
        correctAnswer: "Noodles"
    },
    {
        question: "Which country is famous for dim sum?",
        options: ["China", "Japan", "Korea", "Thailand", "Vietnam", "Malaysia"],
        correctAnswer: "China"
    },
    {
        question: "Which country is known for pho?",
        options: ["Vietnam", "Thailand", "China", "Japan", "Korea", "Malaysia"],
        correctAnswer: "Vietnam"
    },
    {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Africa", "Asia", "Europe", "North America", "South America", "Australia"],
        correctAnswer: "Africa"
    },
    {
        question: "Which landmark is located in Paris, France?",
        options: ["Eiffel Tower", "Statue of Liberty", "Big Ben", "Colosseum", "Taj Mahal", "Great Wall"],
        correctAnswer: "Eiffel Tower"
    },
    {
        question: "Which ocean is the largest?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean", "Mediterranean Sea"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Which country is known for the Great Wall?",
        options: ["China", "India", "Japan", "Russia", "Brazil", "Egypt"],
        correctAnswer: "China"
    },
    {
        question: "Which mountain is the tallest in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu", "Cho Oyu"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "Which landmark is located in New York City, USA?",
        options: ["Statue of Liberty", "Eiffel Tower", "Big Ben", "Colosseum", "Taj Mahal", "Great Wall"],
        correctAnswer: "Statue of Liberty"
    },
    {
        question: "Which country is known for the Sydney Opera House?",
        options: ["Australia", "USA", "UK", "France", "Germany", "Italy"],
        correctAnswer: "Australia"
    },
    {
        question: "Which river is the longest in the world?",
        options: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River", "Yellow River", "Ganges River"],
        correctAnswer: "Nile River"
    },
    {
        question: "Which landmark is located in Rome, Italy?",
        options: ["Colosseum", "Eiffel Tower", "Statue of Liberty", "Big Ben", "Taj Mahal", "Great Wall"],
        correctAnswer: "Colosseum"
    },
    {
        question: "Which country is home to Mount Fuji?",
        options: ["Japan", "China", "India", "Russia", "South Korea", "Thailand"],
        correctAnswer: "Japan"
    },
    {
        question: "Which continent is the Amazon Rainforest located on?",
        options: ["South America", "North America", "Asia", "Africa", "Europe", "Australia"],
        correctAnswer: "South America"
    },
    {
        question: "Which landmark is located in London, UK?",
        options: ["Big Ben", "Eiffel Tower", "Statue of Liberty", "Colosseum", "Taj Mahal", "Great Wall"],
        correctAnswer: "Big Ben"
    },
    {
        question: "Which country is known for the Taj Mahal?",
        options: ["India", "China", "Japan", "Egypt", "Turkey", "Thailand"],
        correctAnswer: "India"
    },
    {
        question: "Which sea is the largest in the world?",
        options: ["Mediterranean Sea", "Caribbean Sea", "Red Sea", "Arabian Sea", "Baltic Sea", "Black Sea"],
        correctAnswer: "Mediterranean Sea"
    },
    {
        question: "Which landmark is located in Egypt?",
        options: ["Pyramids of Giza", "Eiffel Tower", "Statue of Liberty", "Big Ben", "Colosseum", "Taj Mahal"],
        correctAnswer: "Pyramids of Giza"
    },
    {
        question: "Which country is known for the Great Barrier Reef?",
        options: ["Australia", "USA", "UK", "France", "Germany", "Italy"],
        correctAnswer: "Australia"
    },
    {
        question: "Which landmark is located in India?",
        options: ["Taj Mahal", "Eiffel Tower", "Statue of Liberty", "Big Ben", "Colosseum", "Great Wall"],
        correctAnswer: "Taj Mahal"
    },
    {
        question: "Which country is home to the Amazon Rainforest?",
        options: ["Brazil", "USA", "Canada", "China", "Australia", "Russia"],
        correctAnswer: "Brazil"
    },
    {
        question: "Which continent is known for its kangaroos?",
        options: ["Australia", "Asia", "Africa", "North America", "South America", "Europe"],
        correctAnswer: "Australia"
    },
    {
        question: "Which country is known for the Eiffel Tower?",
        options: ["France", "Italy", "Germany", "Spain", "Portugal", "Greece"],
        correctAnswer: "France"
    },
    {
        question: "Which river is the main river flowing through Egypt?",
        options: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River", "Yellow River", "Ganges River"],
        correctAnswer: "Nile River"
    },
    {
        question: "Which landmark is located in Rio de Janeiro, Brazil?",
        options: ["Christ the Redeemer", "Eiffel Tower", "Statue of Liberty", "Big Ben", "Colosseum", "Taj Mahal"],
        correctAnswer: "Christ the Redeemer"
    },
    {
        question: "What type of weather involves strong winds and heavy rain?",
        options: ["Storm", "Sunny", "Snowy", "Cloudy", "Windy", "Foggy"],
        correctAnswer: "Storm"
    },
    {
        question: "Which country is known for its rainforests?",
        options: ["Brazil", "Egypt", "Russia", "Canada", "Australia", "France"],
        correctAnswer: "Brazil"
    },
    {
        question: "What is the coldest season of the year?",
        options: ["Winter", "Spring", "Summer", "Autumn", "Monsoon", "Dry"],
        correctAnswer: "Winter"
    },
    {
        question: "What is the climate like in the Arctic region?",
        options: ["Cold", "Hot", "Humid", "Dry", "Rainy", "Mild"],
        correctAnswer: "Cold"
    },
    {
        question: "Which mountain range is the longest in the world?",
        options: ["Andes", "Himalayas", "Rockies", "Alps", "Appalachians", "Ural"],
        correctAnswer: "Andes"
    },
    {
        question: "Which country is known for its desert climate?",
        options: ["Saudi Arabia", "Japan", "Germany", "Canada", "Brazil", "Italy"],
        correctAnswer: "Saudi Arabia"
    },
    {
        question: "What type of weather involves frozen precipitation?",
        options: ["Snowy", "Rainy", "Sunny", "Stormy", "Windy", "Foggy"],
        correctAnswer: "Snowy"
    },
    {
        question: "Which continent is the Amazon Rainforest located on?",
        options: ["South America", "North America", "Asia", "Africa", "Europe", "Australia"],
        correctAnswer: "South America"
    },
    {
        question: "Which country is known for its fjords?",
        options: ["Norway", "Japan", "Australia", "Canada", "Brazil", "Italy"],
        correctAnswer: "Norway"
    },
    {
        question: "What type of weather involves low visibility due to water droplets in the air?",
        options: ["Foggy", "Sunny", "Rainy", "Windy", "Snowy", "Stormy"],
        correctAnswer: "Foggy"
    },
    {
        question: "Which desert is the largest in the world?",
        options: ["Sahara", "Gobi", "Atacama", "Kalahari", "Arabian", "Great Victoria"],
        correctAnswer: "Sahara"
    },
    {
        question: "What type of weather involves loud noises and flashes of light?",
        options: ["Thunderstorm", "Sunny", "Snowy", "Foggy", "Windy", "Cloudy"],
        correctAnswer: "Thunderstorm"
    },
    {
        question: "Which country is home to Mount Everest?",
        options: ["Nepal", "China", "India", "Russia", "Japan", "Brazil"],
        correctAnswer: "Nepal"
    },
    {
        question: "What is the climate like in a desert region?",
        options: ["Dry", "Humid", "Cold", "Rainy", "Snowy", "Foggy"],
        correctAnswer: "Dry"
    },
    {
        question: "Which river is the main river flowing through China?",
        options: ["Yangtze River", "Nile River", "Amazon River", "Mississippi River", "Yellow River", "Ganges River"],
        correctAnswer: "Yangtze River"
    },
    {
        question: "What type of weather involves water droplets falling from the sky?",
        options: ["Rainy", "Sunny", "Snowy", "Windy", "Foggy", "Cloudy"],
        correctAnswer: "Rainy"
    },
    {
        question: "Which country is known for its volcanoes?",
        options: ["Iceland", "China", "Russia", "Germany", "Brazil", "Canada"],
        correctAnswer: "Iceland"
    },
    {
        question: "What is the main type of weather in a polar climate?",
        options: ["Cold", "Hot", "Humid", "Dry", "Rainy", "Mild"],
        correctAnswer: "Cold"
    },
    {
        question: "Which mountain is the tallest in North America?",
        options: ["Denali", "Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"],
        correctAnswer: "Denali"
    },
    {
        question: "What is the climate like in a tropical rainforest?",
        options: ["Humid", "Dry", "Cold", "Snowy", "Windy", "Foggy"],
        correctAnswer: "Humid"
    },
    {
        question: "Which animal is known for its long neck?",
        options: ["Giraffe", "Elephant", "Lion", "Zebra", "Hippo", "Tiger"],
        correctAnswer: "Giraffe"
    },
    {
        question: "Which bird is known for its colorful feathers and ability to talk?",
        options: ["Parrot", "Eagle", "Penguin", "Sparrow", "Owl", "Peacock"],
        correctAnswer: "Parrot"
    },
    {
        question: "What is the main diet of a panda?",
        options: ["Bamboo", "Fish", "Insects", "Fruit", "Leaves", "Grass"],
        correctAnswer: "Bamboo"
    },
    {
        question: "Where do penguins live?",
        options: ["Antarctica", "Africa", "Asia", "Europe", "North America", "Australia"],
        correctAnswer: "Antarctica"
    },
    {
        question: "Which animal is known as the king of the jungle?",
        options: ["Lion", "Tiger", "Elephant", "Giraffe", "Bear", "Wolf"],
        correctAnswer: "Lion"
    },
    {
        question: "What do cows eat?",
        options: ["Grass", "Meat", "Fish", "Insects", "Fruit", "Leaves"],
        correctAnswer: "Grass"
    },
    {
        question: "Which animal is known for its ability to change colors?",
        options: ["Chameleon", "Elephant", "Lion", "Giraffe", "Zebra", "Tiger"],
        correctAnswer: "Chameleon"
    },
    {
        question: "What is the main diet of a lion?",
        options: ["Meat", "Grass", "Fruit", "Fish", "Insects", "Leaves"],
        correctAnswer: "Meat"
    },
    {
        question: "Which animal is known for its distinctive black and white stripes?",
        options: ["Zebra", "Tiger", "Elephant", "Giraffe", "Lion", "Bear"],
        correctAnswer: "Zebra"
    },
    {
        question: "Which bird is known for its impressive speed and hunting ability?",
        options: ["Falcon", "Eagle", "Penguin", "Sparrow", "Owl", "Peacock"],
        correctAnswer: "Falcon"
    },
    {
        question: "What is the main diet of a shark?",
        options: ["Fish", "Grass", "Fruit", "Insects", "Leaves", "Bamboo"],
        correctAnswer: "Fish"
    },
    {
        question: "Which animal is known for its hump and ability to store water?",
        options: ["Camel", "Elephant", "Lion", "Giraffe", "Zebra", "Tiger"],
        correctAnswer: "Camel"
    },
    {
        question: "What do squirrels eat?",
        options: ["Nuts", "Meat", "Fish", "Insects", "Bamboo", "Grass"],
        correctAnswer: "Nuts"
    },
    {
        question: "Where do polar bears live?",
        options: ["Arctic", "Africa", "Asia", "Europe", "North America", "Australia"],
        correctAnswer: "Arctic"
    },
    {
        question: "What is the main diet of a koala?",
        options: ["Eucalyptus leaves", "Fish", "Insects", "Fruit", "Grass", "Bamboo"],
        correctAnswer: "Eucalyptus leaves"
    },
    {
        question: "Which animal is known for its slow movement and long lifespan?",
        options: ["Tortoise", "Elephant", "Lion", "Giraffe", "Zebra", "Tiger"],
        correctAnswer: "Tortoise"
    },
    {
        question: "Which animal is known for its large ears and excellent memory?",
        options: ["Elephant", "Lion", "Tiger", "Giraffe", "Zebra", "Bear"],
        correctAnswer: "Elephant"
    }
];
