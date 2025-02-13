const questions = [
    {
        question: "What is the capital of Japan?",
        options: ["Kyoto", "Osaka", "Nagoya", "Fukuoka", "Tokyo", "Sapporo"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["South Africa", "India", "Brazil", "Australia", "Argentina", "Canada"],
        correctAnswer: "Australia"
    },
    {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein", "Isaac Newton", "Michael Faraday"],
        correctAnswer: "Alexander Graham Bell"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Kalahari", "Antarctic", "Patagonian"],
        correctAnswer: "Antarctic"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mars", "Earth", "Mercury", "Jupiter", "Saturn"],
        correctAnswer: "Mercury"
    },
    {
        question: "Who wrote '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: "George Orwell"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu", "Pb", "Hg"],
        correctAnswer: "Au"
    },
    {
        question: "Which country is famous for inventing pizza?",
        options: ["France", "Italy", "Spain", "Greece", "United States", "Mexico"],
        correctAnswer: "Italy"
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "San Marino", "Liechtenstein", "Vatican City", "Andorra", "Maldives"],
        correctAnswer: "Vatican City"
    },
    {
        question: "Who painted the 'Starry Night'?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí", "Rembrandt", "Leonardo da Vinci"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi", "Yellow River", "Congo"],
        correctAnswer: "Nile"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Lithium", "Oxygen", "Carbon", "Nitrogen"],
        correctAnswer: "Hydrogen"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch", "Joseph Lister", "Edward Jenner"],
        correctAnswer: "Alexander Fleming"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa", "Calgary", "Quebec City"],
        correctAnswer: "Ottawa"
    },
    {
        question: "Which country has the most natural lakes?",
        options: ["United States", "Canada", "Russia", "Brazil", "China", "Australia"],
        correctAnswer: "Canada"
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "110°C", "120°C", "80°C", "95°C"],
        correctAnswer: "100°C"
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs", "Ada Lovelace", "John von Neumann"],
        correctAnswer: "Charles Babbage"
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Tiger", "Elephant", "Lion", "Gorilla", "Leopard", "Bear"],
        correctAnswer: "Lion"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Dollar", "Euro", "Pound"],
        correctAnswer: "Yen"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        correctAnswer: "Saturn"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Virginia Woolf", "George Eliot", "Mary Shelley"],
        correctAnswer: "Jane Austen"
    },
    {
        question: "What is the largest bone in the human body?",
        options: ["Femur", "Tibia", "Fibula", "Humerus", "Pelvis", "Skull"],
        correctAnswer: "Femur"
    },
    {
        question: "Which country is known as the Land of the Midnight Sun?",
        options: ["Sweden", "Finland", "Norway", "Iceland", "Canada", "Russia"],
        correctAnswer: "Norway"
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s", "225,000 km/s", "750,000 km/s"],
        correctAnswer: "300,000 km/s"
    },
    {
        question: "Who is the author of 'The Theory of Relativity'?",
        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr", "Galileo Galilei", "Max Planck"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "What is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar", "Baffin Island", "Sumatra"],
        correctAnswer: "Greenland"
    },
    {
        question: "Which gas is known as laughing gas?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Nitrous Oxide", "Methane", "Helium"],
        correctAnswer: "Nitrous Oxide"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Dorothy Hodgkin", "Lise Meitner", "Barbara McClintock"],
        correctAnswer: "Marie Curie"
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Cape Town", "Pretoria", "Johannesburg", "Durban", "Bloemfontein", "Port Elizabeth"],
        correctAnswer: "Pretoria"
    },
    {
        question: "Which country is the largest producer of coffee?",
        options: ["Colombia", "Vietnam", "Brazil", "Indonesia", "Ethiopia", "Honduras"],
        correctAnswer: "Brazil"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Onion", "Avocado", "Lime", "Cilantro", "Jalapeño"],
        correctAnswer: "Avocado"
    },
    {
        question: "Who discovered gravity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nicolaus Copernicus", "Stephen Hawking", "Johannes Kepler"],
        correctAnswer: "Isaac Newton"
    },
    {
        question: "What is the largest species of shark?",
        options: ["Great White Shark", "Tiger Shark", "Hammerhead Shark", "Whale Shark", "Bull Shark", "Mako Shark"],
        correctAnswer: "Whale Shark"
    },
    {
        question: "Which country invented tea?",
        options: ["India", "China", "Japan", "Sri Lanka", "United Kingdom", "Kenya"],
        correctAnswer: "China"
    },
    {
        question: "What is the capital of New Zealand?",
        options: ["Auckland", "Wellington", "Christchurch", "Queenstown", "Hamilton", "Dunedin"],
        correctAnswer: "Wellington"
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune", "Mars", "Venus"],
        correctAnswer: "Saturn"
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain", "John Steinbeck", "William Faulkner", "Harper Lee"],
        correctAnswer: "F. Scott Fitzgerald"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs", "Brain", "Kidneys"],
        correctAnswer: "Skin"
    },
    {
        question: "Which country is known for the tulip?",
        options: ["France", "Netherlands", "Belgium", "Germany", "Switzerland", "Austria"],
        correctAnswer: "Netherlands"
    },
    {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "H2O", "CO2", "C6H12O6", "HCl", "NaOH"],
        correctAnswer: "NaCl"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln", "James Madison", "Benjamin Franklin"],
        correctAnswer: "George Washington"
    },
    {
        question: "What is the largest bird in the world?",
        options: ["Eagle", "Ostrich", "Albatross", "Emu", "Condor", "Pelican"],
        correctAnswer: "Ostrich"
    },
    {
        question: "Which country is the largest by land area?",
        options: ["China", "United States", "Canada", "Russia", "Brazil", "Australia"],
        correctAnswer: "Russia"
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Santiago", "Lima", "Montevideo", "Asunción", "La Paz"],
        correctAnswer: "Buenos Aires"
    },
    {
        question: "Which element is essential for human bones?",
        options: ["Iron", "Calcium", "Potassium", "Magnesium", "Sodium", "Zinc"],
        correctAnswer: "Calcium"
    },
    {
        question: "Who composed 'The Four Seasons'?",
        options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Antonio Vivaldi", "Franz Schubert", "Richard Wagner"],
        correctAnswer: "Antonio Vivaldi"
    },
    {
        question: "What is the largest continent by area?",
        options: ["Africa", "Europe", "Asia", "North America", "South America", "Australia"],
        correctAnswer: "Asia"
    },
    {
        question: "Which country is known for the Great Wall?",
        options: ["Japan", "South Korea", "China", "Vietnam", "Mongolia", "Thailand"],
        correctAnswer: "China"
    },
    {
        question: "What is the capital of Egypt?",
        options: ["Alexandria", "Cairo", "Giza", "Luxor", "Aswan", "Port Said"],
        correctAnswer: "Cairo"
    },
    {
        question: "Which animal is known as the 'Ship of the Desert'?",
        options: ["Camel", "Elephant", "Horse", "Donkey", "Yak", "Llama"],
        correctAnswer: "Camel"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin", "Madrid", "Lisbon"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn", "Venus", "Neptune"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Orca", "Hippopotamus", "Rhino"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Oganesson", "Oxinium", "Octium", "Orbium"],
        correctAnswer: "Oxygen"
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["1900", "1912", "1920", "1930", "1940", "1950"],
        correctAnswer: "1912"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain", "Jane Austen", "Ernest Hemingway"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the smallest unit of matter?",
        options: ["Atom", "Molecule", "Electron", "Proton", "Neutron", "Quark"],
        correctAnswer: "Atom"
    },
    {
        question: "What is the fastest land animal?",
        options: ["Cheetah", "Lion", "Elephant", "Giraffe", "Horse", "Kangaroo"],
        correctAnswer: "Cheetah"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand", "Vietnam", "India"],
        correctAnswer: "Japan"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn", "Venus", "Neptune"],
        correctAnswer: "Jupiter"
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "O2", "CO2", "NaCl", "H2SO4", "CH4"],
        correctAnswer: "H2O"
    },
    {
        question: "What is the main language spoken in Brazil?",
        options: ["Portuguese", "Spanish", "English", "French", "German", "Italian"],
        correctAnswer: "Portuguese"
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen", "Methane", "Argon"],
        correctAnswer: "Nitrogen"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Michelangelo", "Rembrandt"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Brisbane", "Perth", "Canberra", "Adelaide"],
        correctAnswer: "Canberra"
    },
    {
        question: "What is the freezing point of water?",
        options: ["0 degrees Celsius", "32 degrees Celsius", "100 degrees Celsius", "-10 degrees Celsius", "10 degrees Celsius", "50 degrees Celsius"],
        correctAnswer: "0 degrees Celsius"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Diamond", "Gold", "Iron", "Quartz", "Platinum", "Emerald"],
        correctAnswer: "Diamond"
    },
    {
        question: "Who was the first man to walk on the Moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin", "Alan Shepard", "John Glenn"],
        correctAnswer: "Neil Armstrong"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean", "Pacific Ocean", "Mediterranean Sea"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Which country is known for the maple leaf?",
        options: ["USA", "Canada", "Mexico", "Australia", "New Zealand", "Ireland"],
        correctAnswer: "Canada"
    },
    {
        question: "Which country is known as the Land of Fire and Ice?",
        options: ["Iceland", "Norway", "Finland", "Sweden", "Canada", "Russia"],
        correctAnswer: "Iceland"
    },
    {
        question: "What is the capital of Thailand?",
        options: ["Phuket", "Chiang Mai", "Bangkok", "Pattaya", "Krabi", "Ayutthaya"],
        correctAnswer: "Bangkok"
    },
    {
        question: "Who developed the theory of evolution?",
        options: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Louis Pasteur", "Carl Linnaeus", "Thomas Huxley"],
        correctAnswer: "Charles Darwin"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Earth", "Mars", "Mercury", "Venus", "Pluto", "Neptune"],
        correctAnswer: "Mercury"
    },
    {
        question: "Which country is famous for the pyramids?",
        options: ["Greece", "Mexico", "Egypt", "Peru", "Sudan", "Iraq"],
        correctAnswer: "Egypt"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Si", "Ag", "Au", "Sr", "Al", "S"],
        correctAnswer: "Ag"
    },
    {
        question: "Who wrote 'The Odyssey'?",
        options: ["Homer", "Virgil", "Plato", "Aristotle", "Socrates", "Sophocles"],
        correctAnswer: "Homer"
    },
    {
        question: "What is the largest lake in the world?",
        options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Baikal", "Lake Tanganyika", "Lake Michigan"],
        correctAnswer: "Caspian Sea"
    },
    {
        question: "Which animal is known as the 'King of the Beasts'?",
        options: ["Tiger", "Lion", "Elephant", "Gorilla", "Bear", "Wolf"],
        correctAnswer: "Lion"
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Busan", "Incheon", "Seoul", "Daegu", "Gwangju", "Daejeon"],
        correctAnswer: "Seoul"
    },
    {
        question: "Which gas is used in balloons to make them float?",
        options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen", "Carbon Dioxide", "Methane"],
        correctAnswer: "Helium"
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello", "Caravaggio", "Botticelli"],
        correctAnswer: "Michelangelo"
    },
    {
        question: "What is the largest species of penguin?",
        options: ["Emperor Penguin", "King Penguin", "Adélie Penguin", "Gentoo Penguin", "Chinstrap Penguin", "Macaroni Penguin"],
        correctAnswer: "Emperor Penguin"
    },
    {
        question: "Which country is known for the Taj Mahal?",
        options: ["Pakistan", "Bangladesh", "India", "Nepal", "Sri Lanka", "Afghanistan"],
        correctAnswer: "India"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Venice", "Florence", "Milan", "Rome", "Naples", "Turin"],
        correctAnswer: "Rome"
    },
    {
        question: "Which planet is known as the 'Morning Star'?",
        options: ["Mars", "Venus", "Mercury", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Venus"
    },
    {
        question: "Who is the Greek god of the sea?",
        options: ["Zeus", "Poseidon", "Hades", "Apollo", "Ares", "Hermes"],
        correctAnswer: "Poseidon"
    },
    {
        question: "What is the largest species of bear?",
        options: ["Polar Bear", "Grizzly Bear", "Black Bear", "Panda Bear", "Brown Bear", "Sun Bear"],
        correctAnswer: "Polar Bear"
    },
    {
        question: "Which country is known for the Eiffel Tower?",
        options: ["Germany", "France", "Spain", "Italy", "Belgium", "Netherlands"],
        correctAnswer: "France"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador", "Fortaleza", "Curitiba"],
        correctAnswer: "Brasília"
    },
    {
        question: "Which animal is known as the 'River Horse'?",
        options: ["Crocodile", "Hippopotamus", "Rhino", "Elephant", "Giraffe", "Buffalo"],
        correctAnswer: "Hippopotamus"
    },
    {
        question: "What is the chemical symbol for potassium?",
        options: ["K", "P", "Po", "Pt", "Ka", "Ko"],
        correctAnswer: "K"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        options: ["J.D. Salinger", "Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain", "John Steinbeck", "George Orwell"],
        correctAnswer: "J.D. Salinger"
    },
    {
        question: "What is the largest species of turtle?",
        options: ["Green Sea Turtle", "Leatherback Turtle", "Loggerhead Turtle", "Hawksbill Turtle", "Olive Ridley Turtle", "Box Turtle"],
        correctAnswer: "Leatherback Turtle"
    },
    {
        question: "Which country is known for the Colosseum?",
        options: ["Greece", "Italy", "Turkey", "Spain", "France", "Egypt"],
        correctAnswer: "Italy"
    },
    {
        question: "What is the capital of Germany?",
        options: ["Munich", "Berlin", "Hamburg", "Frankfurt", "Cologne", "Stuttgart"],
        correctAnswer: "Berlin"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Jupiter", "Saturn", "Venus", "Mercury", "Neptune"],
        correctAnswer: "Mars"
    },
    {
        question: "Who is the Roman god of war?",
        options: ["Jupiter", "Mars", "Apollo", "Neptune", "Pluto", "Mercury"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest species of dolphin?",
        options: ["Bottlenose Dolphin", "Orca", "Spinner Dolphin", "Common Dolphin", "Risso's Dolphin", "Atlantic Spotted Dolphin"],
        correctAnswer: "Orca"
    },
    {
        question: "Which country is known for the Angkor Wat?",
        options: ["Thailand", "Vietnam", "Cambodia", "Laos", "Myanmar", "Indonesia"],
        correctAnswer: "Cambodia"
    },
    {
        question: "What is the capital of Spain?",
        options: ["Barcelona", "Madrid", "Valencia", "Seville", "Zaragoza", "Malaga"],
        correctAnswer: "Madrid"
    },
    {
        question: "Which animal is known as the 'Mountain Lion'?",
        options: ["Cheetah", "Leopard", "Cougar", "Jaguar", "Lynx", "Bobcat"],
        correctAnswer: "Cougar"
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["So", "Na", "No", "Sa", "Sd", "Nu"],
        correctAnswer: "Na"
    },
    {
        question: "Who wrote 'The Adventures of Tom Sawyer'?",
        options: ["Mark Twain", "Charles Dickens", "H.G. Wells", "Jules Verne", "Robert Louis Stevenson", "Jack London"],
        correctAnswer: "Mark Twain"
    },
    {
        question: "What is the largest species of eagle?",
        options: ["Bald Eagle", "Golden Eagle", "Harpy Eagle", "Philippine Eagle", "Steller's Sea Eagle", "Martial Eagle"],
        correctAnswer: "Philippine Eagle"
    },
    {
        question: "Which country is known for the Machu Picchu?",
        options: ["Peru", "Chile", "Bolivia", "Ecuador", "Colombia", "Argentina"],
        correctAnswer: "Peru"
    },
    {
        question: "What is the capital of Russia?",
        options: ["St. Petersburg", "Moscow", "Novosibirsk", "Yekaterinburg", "Kazan", "Nizhny Novgorod"],
        correctAnswer: "Moscow"
    },
    {
        question: "Which planet is known as the 'Ice Giant'?",
        options: ["Uranus", "Neptune", "Saturn", "Jupiter", "Mars", "Venus"],
        correctAnswer: "Neptune"
    },
    {
        question: "Who is the Norse god of thunder?",
        options: ["Odin", "Thor", "Loki", "Freya", "Balder", "Tyr"],
        correctAnswer: "Thor"
    },
    {
        question: "What is the largest species of shark?",
        options: ["Great White Shark", "Tiger Shark", "Hammerhead Shark", "Whale Shark", "Bull Shark", "Mako Shark"],
        correctAnswer: "Whale Shark"
    },
    {
        question: "Which country is known for the Great Barrier Reef?",
        options: ["Australia", "New Zealand", "Fiji", "Indonesia", "Philippines", "Papua New Guinea"],
        correctAnswer: "Australia"
    },
    {
        question: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir", "Antalya", "Bursa", "Adana"],
        correctAnswer: "Ankara"
    },
    {
        question: "Which animal is known as the 'Laughing Hyena'?",
        options: ["Spotted Hyena", "Striped Hyena", "Brown Hyena", "Aardwolf", "African Wild Dog", "Jackal"],
        correctAnswer: "Spotted Hyena"
    },
    {
        question: "What is the chemical symbol for iron?",
        options: ["Ir", "Fe", "In", "Io", "Fi", "Fr"],
        correctAnswer: "Fe"
    },
    {
        question: "Who wrote 'The Iliad'?",
        options: ["Homer", "Virgil", "Plato", "Aristotle", "Socrates", "Sophocles"],
        correctAnswer: "Homer"
    },
    {
        question: "What is the largest species of owl?",
        options: ["Snowy Owl", "Great Horned Owl", "Eurasian Eagle-Owl", "Barn Owl", "Barred Owl", "Screech Owl"],
        correctAnswer: "Eurasian Eagle-Owl"
    },
    {
        question: "Which country is known for the Petra?",
        options: ["Jordan", "Egypt", "Israel", "Saudi Arabia", "Iraq", "Syria"],
        correctAnswer: "Jordan"
    },
    {
        question: "What is the capital of China?",
        options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Hong Kong", "Chengdu"],
        correctAnswer: "Beijing"
    },
    {
        question: "What is the primary color of the sky during a clear day?",
        options: ["Blue", "Green", "Red", "Yellow", "Purple", "Orange"],
        correctAnswer: "Blue"
    },
    {
        question: "What is the largest continent on Earth?",
        options: ["Asia", "Africa", "North America", "South America", "Antarctica", "Europe"],
        correctAnswer: "Asia"
    },
    {
        question: "What is the smallest country in the world by land area?",
        options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein", "Malta", "Andorra"],
        correctAnswer: "Vatican City"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe", "Hg", "Pt"],
        correctAnswer: "Au"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Thomas Jefferson", "John Adams", "James Madison", "Abraham Lincoln", "Andrew Jackson"],
        correctAnswer: "George Washington"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mercury"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Avocado", "Tomato", "Onion", "Pepper", "Lime", "Garlic"],
        correctAnswer: "Avocado"
    },
    {
        question: "What is the capital city of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton"],
        correctAnswer: "Ottawa"
    },
    {
        question: "Which language has the most native speakers in the world?",
        options: ["Mandarin Chinese", "Spanish", "English", "Hindi", "Arabic", "Portuguese"],
        correctAnswer: "Mandarin Chinese"
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi", "James Watt", "Michael Faraday"],
        correctAnswer: "Alexander Graham Bell"
    },
    {
        question: "What is the hardest known material?",
        options: ["Diamond", "Steel", "Graphene", "Titanium", "Tungsten", "Kevlar"],
        correctAnswer: "Diamond"
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        options: ["France", "Spain", "Italy", "Germany", "United Kingdom", "Portugal"],
        correctAnswer: "France"
    },
    {
        question: "What is the name of the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi", "Mekong", "Ganges"],
        correctAnswer: "Nile"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Won", "Yuan", "Baht", "Peso", "Ruble"],
        correctAnswer: "Yen"
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Saturn", "Jupiter", "Uranus", "Neptune", "Mars", "Venus"],
        correctAnswer: "Saturn"
    },
    {
        question: "What is the speed of light?",
        options: ["299,792,458 meters per second", "150,000,000 meters per second", "30,000,000 meters per second", "1,000,000 meters per second", "50,000,000 meters per second", "10,000,000 meters per second"],
        correctAnswer: "299,792,458 meters per second"
    },
    {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        options: ["Miso paste", "Soy sauce", "Tofu", "Seaweed", "Noodles", "Rice"],
        correctAnswer: "Miso paste"
    },
    {
        question: "What is the name of the highest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu", "Cho Oyu"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello", "Titian", "Caravaggio"],
        correctAnswer: "Michelangelo"
    },
    {
        question: "Which country is famous for the Great Wall?",
        options: ["China", "India", "Japan", "South Korea", "Vietnam", "Mongolia"],
        correctAnswer: "China"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "F. Scott Fitzgerald", "Mark Twain", "Ernest Hemingway", "John Steinbeck", "J.D. Salinger"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the smallest bone in the human body?",
        options: ["Stapes", "Femur", "Tibia", "Humerus", "Radius", "Ulna"],
        correctAnswer: "Stapes"
    },
    {
        question: "What is the capital city of Italy?",
        options: ["Rome", "Milan", "Florence", "Venice", "Naples", "Turin"],
        correctAnswer: "Rome"
    },
    {
        question: "Which element has the chemical symbol 'C'?",
        options: ["Carbon", "Calcium", "Chlorine", "Copper", "Cobalt", "Chromium"],
        correctAnswer: "Carbon"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert", "Antarctic Desert", "Patagonian Desert"],
        correctAnswer: "Antarctic Desert"
    },
    {
        question: "Who is the author of '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov", "Philip K. Dick", "Kurt Vonnegut"],
        correctAnswer: "George Orwell"
    },
    {
        question: "Which organ is responsible for pumping blood throughout the human body?",
        options: ["Heart", "Liver", "Kidney", "Lung", "Brain", "Stomach"],
        correctAnswer: "Heart"
    },
    {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "CaCl2", "MgCl2", "LiCl", "AlCl3"],
        correctAnswer: "NaCl"
    },
    {
        question: "Which country is known as the Land of the Thunder Dragon?",
        options: ["Bhutan", "Nepal", "Thailand", "Sri Lanka", "Laos", "Myanmar"],
        correctAnswer: "Bhutan"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Skin", "Liver", "Brain", "Heart", "Lung", "Kidney"],
        correctAnswer: "Skin"
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs", "John von Neumann", "Tim Berners-Lee"],
        correctAnswer: "Charles Babbage"
    },
    {
        question: "What is the capital city of Spain?",
        options: ["Madrid", "Barcelona", "Valencia", "Seville", "Malaga", "Bilbao"],
        correctAnswer: "Madrid"
    },
    {
        question: "Which organ in the human body produces insulin?",
        options: ["Pancreas", "Liver", "Heart", "Kidney", "Stomach", "Intestine"],
        correctAnswer: "Pancreas"
    },
    {
        question: "What is the chemical formula for carbon dioxide?",
        options: ["CO2", "O2", "CO", "CH4", "H2O", "C2H6"],
        correctAnswer: "CO2"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Jane Austen", "Charlotte Bronte", "Mary Shelley", "Emily Bronte", "Louisa May Alcott", "George Eliot"],
        correctAnswer: "Jane Austen"
    },
    {
        question: "What is the tallest building in the world as of 2021?",
        options: ["Burj Khalifa", "Shanghai Tower", "Abraj Al-Bait Clock Tower", "Ping An Finance Centre", "Lotte World Tower", "One World Trade Center"],
        correctAnswer: "Burj Khalifa"
    },
    {
        question: "Which element has the chemical symbol 'H'?",
        options: ["Hydrogen", "Helium", "Hafnium", "Hassium", "Holmium", "Hassium"],
        correctAnswer: "Hydrogen"
    },
    {
        question: "What is the largest species of bear?",
        options: ["Polar Bear", "Grizzly Bear", "Black Bear", "Brown Bear", "Panda Bear", "Spectacled Bear"],
        correctAnswer: "Polar Bear"
    },
    {
        question: "Which planet in our solar system has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune", "Mars", "Earth"],
        correctAnswer: "Jupiter"
    },
    {
        question: "What is the main ingredient in traditional Italian risotto?",
        options: ["Rice", "Pasta", "Bread", "Tomato", "Cheese", "Potato"],
        correctAnswer: "Rice"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Jane Goodall", "Ada Lovelace", "Lise Meitner", "Rachel Carson"],
        correctAnswer: "Marie Curie"
    },
    {
        question: "What is the longest bone in the human body?",
        options: ["Femur", "Humerus", "Tibia", "Fibula", "Radius", "Ulna"],
        correctAnswer: "Femur"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Joseph Lister", "Robert Koch", "Edward Jenner", "Paul Ehrlich"],
        correctAnswer: "Alexander Fleming"
    },
    {
        question: "What is the capital city of Brazil?",
        options: ["Brasilia", "Rio de Janeiro", "São Paulo", "Salvador", "Fortaleza", "Belo Horizonte"],
        correctAnswer: "Brasilia"
    },
    {
        question: "What is the chemical formula for common table sugar?",
        options: ["C12H22O11", "C6H12O6", "C2H6O", "CH4", "C2H4", "C3H8"],
        correctAnswer: "C12H22O11"
    },
    {
        question: "Who was the first person to circumnavigate the globe?",
        options: ["Ferdinand Magellan", "Christopher Columbus", "Vasco da Gama", "Marco Polo", "James Cook", "Francis Drake"],
        correctAnswer: "Ferdinand Magellan"
    },
    {
        question: "Which country has the largest population in the world?",
        options: ["China", "India", "USA", "Indonesia", "Brazil", "Pakistan"],
        correctAnswer: "China"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Neptune"],
        correctAnswer: "Mercury"
    },
    {
        question: "Who wrote 'Moby-Dick'?",
        options: ["Herman Melville", "Mark Twain", "Nathaniel Hawthorne", "Henry James", "Edgar Allan Poe", "Walt Whitman"],
        correctAnswer: "Herman Melville"
    },
    {
        question: "What is the primary language spoken in Egypt?",
        options: ["Arabic", "English", "French", "Italian", "Spanish", "Portuguese"],
        correctAnswer: "Arabic"
    },
    {
        question: "Which planet is known for its Great Red Spot?",
        options: ["Jupiter", "Mars", "Saturn", "Venus", "Mercury", "Neptune"],
        correctAnswer: "Jupiter"
    },
    {
        question: "What is the main ingredient in traditional Greek tzatziki?",
        options: ["Yogurt", "Cheese", "Tomato", "Olive", "Bread", "Rice"],
        correctAnswer: "Yogurt"
    },
    {
        question: "Who painted 'Starry Night'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci", "Salvador Dali", "Edvard Munch"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["Australia", "New Zealand", "South Africa", "Brazil", "India", "Canada"],
        correctAnswer: "Australia"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking", "Niels Bohr", "Max Planck"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "Who invented the light bulb?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Michael Faraday", "James Watt", "Benjamin Franklin"],
        correctAnswer: "Thomas Edison"
    },
    {
        question: "What is the primary language spoken in Argentina?",
        options: ["Spanish", "Portuguese", "English", "Italian", "German", "French"],
        correctAnswer: "Spanish"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Lion", "Tiger", "Elephant", "Leopard", "Gorilla", "Wolf"],
        correctAnswer: "Lion"
    },
    {
        question: "What is the main ingredient in hummus?",
        options: ["Chickpeas", "Lentils", "Beans", "Peas", "Corn", "Potato"],
        correctAnswer: "Chickpeas"
    },
    {
        question: "Who was the first President of South Africa?",
        options: ["Nelson Mandela", "F. W. de Klerk", "Thabo Mbeki", "Jacob Zuma", "Cyril Ramaphosa", "P. W. Botha"],
        correctAnswer: "Nelson Mandela"
    },
    {
        question: "What is the capital city of Greece?",
        options: ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos"],
        correctAnswer: "Athens"
    },
    {
        question: "Which element has the chemical symbol 'N'?",
        options: ["Nitrogen", "Neon", "Nickel", "Niobium", "Nobelium", "Neptunium"],
        correctAnswer: "Nitrogen"
    },
    {
        question: "What is the highest waterfall in the world?",
        options: ["Angel Falls", "Niagara Falls", "Victoria Falls", "Yosemite Falls", "Iguazu Falls", "Tugela Falls"],
        correctAnswer: "Angel Falls"
    },
    {
        question: "Which planet is known as the Morning Star?",
        options: ["Venus", "Mars", "Mercury", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Venus"
    },
    {
        question: "What is the main component of the Earth's core?",
        options: ["Iron", "Nickel", "Silicon", "Magnesium", "Carbon", "Oxygen"],
        correctAnswer: "Iron"
    },
    {
        question: "Who painted 'The Persistence of Memory'?",
        options: ["Salvador Dali", "Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: "Salvador Dali"
    },
    {
        question: "What is the capital city of Russia?",
        options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan", "Nizhny Novgorod"],
        correctAnswer: "Moscow"
    },
    {
        question: "What is the chemical formula for sulfuric acid?",
        options: ["H2SO4", "HCl", "HNO3", "H3PO4", "CH3COOH", "H2CO3"],
        correctAnswer: "H2SO4"
    },
    {
        question: "Who wrote 'The Odyssey'?",
        options: ["Homer", "Virgil", "Sophocles", "Euripides", "Ovid", "Plato"],
        correctAnswer: "Homer"
    },
    {
        question: "Which country is known for its pyramids?",
        options: ["Egypt", "Mexico", "Peru", "India", "China", "Sudan"],
        correctAnswer: "Egypt"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Neptune"],
        correctAnswer: "Mercury"
    },
    {
        question: "Who developed the theory of general relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking", "Niels Bohr", "Max Planck"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean", "Mediterranean Sea"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Which country is known for the maple leaf?",
        options: ["Canada", "USA", "Mexico", "Australia", "New Zealand", "Ireland"],
        correctAnswer: "Canada"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Joseph Lister", "Robert Koch", "Edward Jenner", "Paul Ehrlich"],
        correctAnswer: "Alexander Fleming"
    },
    {
        question: "What is the capital city of Japan?",
        options: ["Tokyo", "Osaka", "Kyoto", "Nagoya", "Sapporo", "Fukuoka"],
        correctAnswer: "Tokyo"
    },
    {
        question: "What is the freezing point of water in Fahrenheit?",
        options: ["32 degrees", "0 degrees", "100 degrees", "-10 degrees", "50 degrees", "10 degrees"],
        correctAnswer: "32 degrees"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Diamond", "Gold", "Iron", "Quartz", "Platinum", "Emerald"],
        correctAnswer: "Diamond"
    },
    {
        question: "What is the main language spoken in Brazil?",
        options: ["Portuguese", "Spanish", "English", "French", "German", "Italian"],
        correctAnswer: "Portuguese"
    },
    {
        question: "Who was the first man to walk on the Moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin", "Alan Shepard", "John Glenn"],
        correctAnswer: "Neil Armstrong"
    },
    {
        question: "What is the tallest mountain in Africa?",
        options: ["Mount Kilimanjaro", "Mount Kenya", "Mount Elgon", "Simien Mountains", "Drakensberg", "Mount Meru"],
        correctAnswer: "Mount Kilimanjaro"
    },
    {
        question: "Who wrote 'War and Peace'?",
        options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Vladimir Nabokov", "Alexander Pushkin", "Ivan Turgenev"],
        correctAnswer: "Leo Tolstoy"
    },
    {
        question: "What is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar", "Baffin Island", "Sumatra"],
        correctAnswer: "Greenland"
    },
    {
        question: "Who was the first person to reach the South Pole?",
        options: ["Roald Amundsen", "Robert Falcon Scott", "Ernest Shackleton", "James Clark Ross", "Edmund Hillary", "George Washington De Long"],
        correctAnswer: "Roald Amundsen"
    },
    {
        question: "Which planet has the shortest day?",
        options: ["Jupiter", "Saturn", "Earth", "Mars", "Venus", "Mercury"],
        correctAnswer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for potassium?",
        options: ["K", "P", "Po", "Pt", "Pb", "Kr"],
        correctAnswer: "K"
    },
    {
        question: "Who painted 'The Last Supper'?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello", "Titian", "Caravaggio"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the main language spoken in Iran?",
        options: ["Persian", "Arabic", "Turkish", "Kurdish", "Pashto", "Armenian"],
        correctAnswer: "Persian"
    },
    {
        question: "What is the capital city of Mexico?",
        options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Cancun", "Tijuana"],
        correctAnswer: "Mexico City"
    },
    {
        question: "What is the boiling point of water in Fahrenheit?",
        options: ["212 degrees", "100 degrees", "32 degrees", "0 degrees", "180 degrees", "240 degrees"],
        correctAnswer: "212 degrees"
    },
    {
        question: "Who discovered the law of gravity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Johannes Kepler", "Nicolaus Copernicus", "James Clerk Maxwell"],
        correctAnswer: "Isaac Newton"
    },
    {
        question: "What is the largest bone in the human body?",
        options: ["Femur", "Tibia", "Fibula", "Humerus", "Radius", "Ulna"],
        correctAnswer: "Femur"
    },
    {
        question: "Which country is home to the Eiffel Tower?",
        options: ["France", "Italy", "Spain", "Germany", "United Kingdom", "Switzerland"],
        correctAnswer: "France"
    },
    {
        question: "What is the primary language spoken in Australia?",
        options: ["English", "French", "Spanish", "German", "Italian", "Portuguese"],
        correctAnswer: "English"
    },
    {
        question: "What is the chemical formula for methane?",
        options: ["CH4", "C2H6", "C3H8", "C4H10", "CO2", "H2O"],
        correctAnswer: "CH4"
    },
    {
        question: "Who was the first person to fly solo nonstop across the Atlantic Ocean?",
        options: ["Charles Lindbergh", "Amelia Earhart", "Howard Hughes", "Wiley Post", "Louis Blériot", "Bessie Coleman"],
        correctAnswer: "Charles Lindbergh"
    },
    {
        question: "What is the primary ingredient in the Brazilian dish feijoada?",
        options: ["Black beans", "Rice", "Corn", "Chicken", "Beef", "Fish"],
        correctAnswer: "Black beans"
    },
    {
        question: "Which planet is known as the Earth's twin?",
        options: ["Venus", "Mars", "Jupiter", "Saturn", "Mercury", "Neptune"],
        correctAnswer: "Venus"
    },
    {
        question: "What is the main currency of the European Union?",
        options: ["Euro", "Pound", "Dollar", "Yen", "Franc", "Krona"],
        correctAnswer: "Euro"
    },
    {
        question: "What is the capital city of South Korea?",
        options: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju"],
        correctAnswer: "Seoul"
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "S", "Sn", "N", "Si", "Sc"],
        correctAnswer: "Na"
    },
    {
        question: "Who was the first woman to win a Nobel Prize in Literature?",
        options: ["Selma Lagerlöf", "Toni Morrison", "Alice Munro", "Nadine Gordimer", "Doris Lessing", "Wislawa Szymborska"],
        correctAnswer: "Selma Lagerlöf"
    },
    {
        question: "What is the primary ingredient in a traditional Spanish paella?",
        options: ["Rice", "Pasta", "Bread", "Potato", "Beans", "Corn"],
        correctAnswer: "Rice"
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner", "J.D. Salinger", "Truman Capote"],
        correctAnswer: "F. Scott Fitzgerald"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["Japan", "China", "South Korea", "Thailand", "Vietnam", "India"],
        correctAnswer: "Japan"
    },
    {
        question: "What is the largest lake in the world by surface area?",
        options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Huron", "Lake Michigan", "Lake Tanganyika"],
        correctAnswer: "Caspian Sea"
    },
    {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        options: ["Margaret Thatcher", "Theresa May", "Elizabeth I", "Queen Victoria", "Mary I", "Catherine of Aragon"],
        correctAnswer: "Margaret Thatcher"
    },
    {
        question: "Which element has the chemical symbol 'Fe'?",
        options: ["Iron", "Lead", "Zinc", "Copper", "Tin", "Silver"],
        correctAnswer: "Iron"
    },
    {
        question: "What is the highest mountain in South America?",
        options: ["Aconcagua", "Mount Everest", "Mount McKinley", "K2", "Mount Kilimanjaro", "Mount Elbrus"],
        correctAnswer: "Aconcagua"
    },
    {
        question: "Who painted 'The Scream'?",
        options: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Salvador Dali", "Leonardo da Vinci"],
        correctAnswer: "Edvard Munch"
    },
    {
        question: "What is the main language spoken in Switzerland?",
        options: ["German", "French", "Italian", "Romansh", "Spanish", "Dutch"],
        correctAnswer: "German"
    },
    {
        question: "What is the chemical formula for ammonia?",
        options: ["NH3", "H2O", "CO2", "CH4", "O2", "NaCl"],
        correctAnswer: "NH3"
    },
    {
        question: "Who was the first person to swim across the English Channel?",
        options: ["Matthew Webb", "Gertrude Ederle", "Lynne Cox", "Michael Phelps", "Florence Chadwick", "Diana Nyad"],
        correctAnswer: "Matthew Webb"
    },
    {
        question: "What is the main ingredient in traditional Russian borscht?",
        options: ["Beetroot", "Potato", "Cabbage", "Carrot", "Tomato", "Onion"],
        correctAnswer: "Beetroot"
    },
    {
        question: "Which planet is known as the Earth's sister planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn", "Mercury", "Neptune"],
        correctAnswer: "Venus"
    },
    {
        question: "What is the currency of India?",
        options: ["Rupee", "Dollar", "Euro", "Yen", "Pound", "Ruble"],
        correctAnswer: "Rupee"
    },
    {
        question: "What is the capital city of Turkey?",
        options: ["Ankara", "Istanbul", "Izmir", "Bursa", "Antalya", "Konya"],
        correctAnswer: "Ankara"
    },
    {
        question: "Which element has the chemical symbol 'He'?",
        options: ["Helium", "Hydrogen", "Hassium", "Holmium", "Hafnium", "Heliotope"],
        correctAnswer: "Helium"
    },
    {
        question: "What is the name of the deepest ocean trench?",
        options: ["Mariana Trench", "Tonga Trench", "Philippine Trench", "Kuril-Kamchatka Trench", "Java Trench", "Peru-Chile Trench"],
        correctAnswer: "Mariana Trench"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Joseph Lister", "Robert Koch", "Edward Jenner", "Paul Ehrlich"],
        correctAnswer: "Alexander Fleming"
    },
    {
        question: "What is the main language spoken in Portugal?",
        options: ["Portuguese", "Spanish", "French", "Italian", "English", "German"],
        correctAnswer: "Portuguese"
    },
    {
        question: "What is the chemical formula for hydrogen peroxide?",
        options: ["H2O2", "H2O", "CO2", "CH4", "NH3", "NaCl"],
        correctAnswer: "H2O2"
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        options: ["Amelia Earhart", "Bessie Coleman", "Jacqueline Cochran", "Harriet Quimby", "Elinor Smith", "Florence Lowe"],
        correctAnswer: "Amelia Earhart"
    },
    {
        question: "What is the primary ingredient in traditional Japanese sushi?",
        options: ["Rice", "Fish", "Seaweed", "Soy Sauce", "Ginger", "Wasabi"],
        correctAnswer: "Rice"
    },
    {
        question: "Which planet is known as the Gas Giant?",
        options: ["Jupiter", "Mars", "Earth", "Venus", "Mercury", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "What is the capital city of Norway?",
        options: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Kristiansand", "Tromsø"],
        correctAnswer: "Oslo"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        options: ["J.D. Salinger", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner", "Truman Capote"],
        correctAnswer: "J.D. Salinger"
    },
    {
        question: "Which country is known for its maple syrup?",
        options: ["Canada", "USA", "Australia", "New Zealand", "Ireland", "United Kingdom"],
        correctAnswer: "Canada"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert", "Antarctic Desert", "Patagonian Desert"],
        correctAnswer: "Antarctic Desert"
    },
    {
        question: "Who developed the polio vaccine?",
        options: ["Jonas Salk", "Louis Pasteur", "Alexander Fleming", "Robert Koch", "Edward Jenner", "Paul Ehrlich"],
        correctAnswer: "Jonas Salk"
    },
    {
        question: "What is the longest river in Asia?",
        options: ["Yangtze River", "Yellow River", "Mekong River", "Ganges River", "Irrawaddy River", "Brahmaputra River"],
        correctAnswer: "Yangtze River"
    },
    {
        question: "Who developed the theory of evolution by natural selection?",
        options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Isaac Newton", "Albert Einstein", "James Watson"],
        correctAnswer: "Charles Darwin"
    },
    {
        question: "What is the capital city of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton"],
        correctAnswer: "Ottawa"
    },
    {
        question: "What is the chemical formula for glucose?",
        options: ["C6H12O6", "C2H5OH", "H2SO4", "CO2", "CH4", "H2O"],
        correctAnswer: "C6H12O6"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "Andrew Jackson"],
        correctAnswer: "George Washington"
    },
    {
        question: "What is the largest landlocked country in the world?",
        options: ["Kazakhstan", "Mongolia", "Niger", "Chad", "Mali", "Ethiopia"],
        correctAnswer: "Kazakhstan"
    },
    {
        question: "Which planet is known as the Blue Planet?",
        options: ["Earth", "Neptune", "Uranus", "Venus", "Mars", "Mercury"],
        correctAnswer: "Earth"
    },
    {
        question: "What is the main ingredient in the Italian dish risotto?",
        options: ["Rice", "Pasta", "Bread", "Potato", "Corn", "Beans"],
        correctAnswer: "Rice"
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran", "Elinor Smith", "Pancho Barnes"],
        correctAnswer: "Amelia Earhart"
    },
    {
        question: "What is the main language spoken in Egypt?",
        options: ["Arabic", "English", "French", "Spanish", "Italian", "Portuguese"],
        correctAnswer: "Arabic"
    },
    {
        question: "Which element has the chemical symbol 'Ca'?",
        options: ["Calcium", "Carbon", "Chlorine", "Cobalt", "Copper", "Cesium"],
        correctAnswer: "Calcium"
    },
    {
        question: "Who wrote 'The Divine Comedy'?",
        options: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "William Shakespeare", "Homer", "Virgil"],
        correctAnswer: "Dante Alighieri"
    },
    {
        question: "What is the smallest unit of life?",
        options: ["Cell", "Molecule", "Atom", "Organ", "Organism", "Tissue"],
        correctAnswer: "Cell"
    },
    {
        question: "What is the capital city of Italy?",
        options: ["Rome", "Milan", "Florence", "Venice", "Naples", "Turin"],
        correctAnswer: "Rome"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Skin", "Liver", "Brain", "Heart", "Lung", "Kidney"],
        correctAnswer: "Skin"
    },
    {
        question: "Which country is known as the Land of the Midnight Sun?",
        options: ["Norway", "Sweden", "Finland", "Iceland", "Denmark", "Russia"],
        correctAnswer: "Norway"
    },
    {
        question: "Who developed the polio vaccine?",
        options: ["Jonas Salk", "Louis Pasteur", "Alexander Fleming", "Joseph Lister", "Robert Koch", "Edward Jenner"],
        correctAnswer: "Jonas Salk"
    },
    {
        question: "What is the main ingredient in a traditional Japanese miso soup?",
        options: ["Miso paste", "Tofu", "Seaweed", "Rice", "Noodles", "Fish"],
        correctAnswer: "Miso paste"
    },
    {
        question: "What is the chemical formula for common table salt?",
        options: ["NaCl", "KCl", "CaCl2", "MgCl2", "LiCl", "AlCl3"],
        correctAnswer: "NaCl"
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello", "Titian", "Caravaggio"],
        correctAnswer: "Michelangelo"
    },
    {
        question: "What is the longest bone in the human body?",
        options: ["Femur", "Tibia", "Fibula", "Humerus", "Radius", "Ulna"],
        correctAnswer: "Femur"
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["Australia", "New Zealand", "South Africa", "India", "Canada", "Brazil"],
        correctAnswer: "Australia"
    },
    {
        question: "What is the capital city of Brazil?",
        options: ["Brasilia", "Rio de Janeiro", "São Paulo", "Salvador", "Fortaleza", "Belo Horizonte"],
        correctAnswer: "Brasilia"
    },
    {
        question: "Who invented the light bulb?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Michael Faraday", "James Watt", "Benjamin Franklin"],
        correctAnswer: "Thomas Edison"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Earth", "Venus", "Neptune"],
        correctAnswer: "Mars"
    }
];
