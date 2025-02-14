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
    },
    {
        question: "Which mysterious crop circle formation appeared in England in 1996 and gained worldwide attention?",
        options: ["Julia Set", "Barbury Castle", "Milk Hill", "Chilbolton", "East Field", "Stonehenge"],
        correctAnswer: "Julia Set"
    },
    {
        question: "What unexplained event involved thousands of blackbirds falling from the sky in Arkansas on New Year's Eve 2010?",
        options: ["Beebe Bird Deaths", "Arkansas Avian Incident", "Blackbird Massacre", "Mysterious Bird Fall", "New Year Bird Plunge", "Unexplained Avian Event"],
        correctAnswer: "Beebe Bird Deaths"
    },
    {
        question: "Which famous unsolved case involves the disappearance of flight MH370 in 2014?",
        options: ["Malaysia Airlines", "Air France 447", "TWA Flight 800", "Pan Am Flight 103", "Aloha Airlines", "Delta Flight 191"],
        correctAnswer: "Malaysia Airlines"
    },
    {
        question: "What strange phenomenon occurred in 1994 when a gelatinous substance fell from the sky in Oakville, Washington?",
        options: ["Oakville Blobs", "Jelly Rain", "Mysterious Goo", "Sky Slime", "Gelatinous Downpour", "Mysterious Pudding"],
        correctAnswer: "Oakville Blobs"
    },
    {
        question: "Which unexplained event involved a series of loud, ground-shaking booms heard in Clintonville, Wisconsin in 2012?",
        options: ["Clintonville Booms", "Wisconsin Rumbles", "Mysterious Tremors", "Unexplained Explosions", "Midwest Shakes", "Clintonville Quakes"],
        correctAnswer: "Clintonville Booms"
    },
    {
        question: "What unexplained phenomenon was captured on video in Phoenix, Arizona in 1997, involving a series of lights in a V-shaped formation?",
        options: ["Phoenix Lights", "Arizona UFO", "V-shaped Lights", "Desert Glows", "Mysterious Luminations", "Phoenix UFOs"],
        correctAnswer: "Phoenix Lights"
    },
    {
        question: "Which eerie sound was recorded in the ocean in 1997, believed to be one of the loudest underwater noises ever detected?",
        options: ["The Bloop", "The Hum", "The Echo", "The Boom", "The Rumble", "The Buzz"],
        correctAnswer: "The Bloop"
    },
    {
        question: "Which mysterious incident in 2007 involved lights and a possible UFO sighting over O'Hare International Airport in Chicago?",
        options: ["O'Hare UFO", "Chicago Lights", "Airport Incident", "Mysterious Airshow", "O'Hare Sighting", "Sky Anomaly"],
        correctAnswer: "O'Hare UFO"
    },
    {
        question: "What unexplained object was discovered on the Baltic Sea floor in 2011, sparking theories about its origin?",
        options: ["Baltic Sea Anomaly", "Nordic UFO", "Underwater Mystery", "Seafloor Object", "Marine Enigma", "Ocean Puzzle"],
        correctAnswer: "Baltic Sea Anomaly"
    },
    {
        question: "Which mysterious event involved the sudden disappearance of nine hikers in the Ural Mountains in 1959, with unexplained injuries?",
        options: ["Dyatlov Pass Incident", "Ural Disappearance", "Mysterious Hiker Deaths", "Mountain Mystery", "Soviet Tragedy", "Hiker Enigma"],
        correctAnswer: "Dyatlov Pass Incident"
    },
    {
        question: "Which unexplained phenomenon occurred in Taos, New Mexico, involving a persistent and low-frequency sound heard by residents?",
        options: ["Taos Hum", "Desert Buzz", "New Mexico Noise", "Mysterious Murmur", "Southwest Sound", "Taos Rumble"],
        correctAnswer: "Taos Hum"
    },
    {
        question: "Which eerie phenomena involved thousands of fish appearing dead on the shores of various countries in 2011?",
        options: ["Fish Kill Phenomenon", "Aqua Mortality", "Mass Fish Deaths", "Sea Life Extinction", "Marine Mystery", "Ocean Dead Zone"],
        correctAnswer: "Fish Kill Phenomenon"
    },
    {
        question: "Which unsolved mystery involves the disappearance of an entire colony from Roanoke Island in the 16th century?",
        options: ["Lost Colony of Roanoke", "Roanoke Mystery", "Colonial Vanishing", "Island Enigma", "Disappearing Settlers", "Roanoke Enigma"],
        correctAnswer: "Lost Colony of Roanoke"
    },
    {
        question: "What is the name of the strange, loud, and unexplained noises heard worldwide, often described as sounding like a trumpet?",
        options: ["Sky Trumpets", "Heavenly Horns", "Mysterious Sounds", "Celestial Music", "Atmospheric Whistles", "Trumpet Phenomenon"],
        correctAnswer: "Sky Trumpets"
    },
    {
        question: "Which infamous cryptid was reportedly sighted multiple times in Point Pleasant, West Virginia in the late 1960s?",
        options: ["Mothman", "Chupacabra", "Bigfoot", "Jersey Devil", "Loch Ness Monster", "Thunderbird"],
        correctAnswer: "Mothman"
    },
    {
        question: "Which unexplained event involved the sudden and unexplained mass death of bees starting in the early 2000s?",
        options: ["Colony Collapse Disorder", "Bee Die-off", "Honeybee Crisis", "Bee Mortality", "Apiary Anomaly", "Beekeeper's Blight"],
        correctAnswer: "Colony Collapse Disorder"
    },
    {
        question: "Which supernatural event took place in Enfield, London, involving alleged poltergeist activity in the late 1970s?",
        options: ["Enfield Poltergeist", "London Haunting", "Supernatural Enfield", "British Ghost", "Haunted House", "Enfield Mystery"],
        correctAnswer: "Enfield Poltergeist"
    },
    {
        question: "Which strange, glowing, red lights were reported over Hessdalen Valley in Norway since the 1980s?",
        options: ["Hessdalen Lights", "Norwegian Glow", "Valley Illumination", "Nordic Lights", "Mysterious Red Lights", "Hessdalen Phenomenon"],
        correctAnswer: "Hessdalen Lights"
    },
    {
        question: "Which mysterious event occurred in 2013, involving hundreds of starfish washing ashore along the West Coast of the United States?",
        options: ["Starfish Die-off", "Marine Mortality", "Sea Star Wasting Syndrome", "Oceanic Death", "Tidal Tragedy", "Beach Enigma"],
        correctAnswer: "Sea Star Wasting Syndrome"
    },
    {
        question: "Which island, also known as Easter Island, is famous for its giant, mysterious stone statues called Moai?",
        options: ["Rapa Nui", "Galapagos", "Maldives", "Cook Islands", "Hawaii", "Samoa"],
        correctAnswer: "Rapa Nui"
    },
    {
        question: "Which strange incident involved a large, unexplained explosion over Siberia in 1908?",
        options: ["Tunguska Event", "Siberian Blast", "Russian Explosion", "Meteor Mystery", "Taiga Boom", "Siberian Anomaly"],
        correctAnswer: "Tunguska Event"
    },
    {
        question: "Which unsolved case involves the murder of six-year-old beauty queen JonBenét Ramsey in 1996?",
        options: ["JonBenét Ramsey Case", "Black Dahlia Murder", "Zodiac Killer", "Jack the Ripper", "Green River Killer", "Ted Bundy"],
        correctAnswer: "JonBenét Ramsey Case"
    },
    {
        question: "Which legendary sea creature is said to inhabit Loch Ness in Scotland?",
        options: ["Loch Ness Monster", "Kraken", "Mermaid", "Leviathan", "Charybdis", "Sea Serpent"],
        correctAnswer: "Loch Ness Monster"
    },
    {
        question: "Which mysterious and famous case involves the disappearance of Amelia Earhart in 1937?",
        options: ["Amelia Earhart Disappearance", "Bermuda Triangle Mystery", "Lost Flight", "Aviator Vanishing", "Historic Missing Pilot", "Amelia's Last Flight"],
        correctAnswer: "Amelia Earhart Disappearance"
    },
    {
        question: "Which country hosted the 2000 Summer Olympics?",
        options: ["Australia", "China", "Greece", "USA", "UK", "Japan"],
        correctAnswer: "Australia"
    },
    {
        question: "What major global event occurred on November 4, 2008?",
        options: ["Election of Barack Obama as US President", "Brexit Referendum", "Invasion of Iraq", "Financial Crisis", "Fall of Berlin Wall", "Hurricane Katrina"],
        correctAnswer: "Election of Barack Obama as US President"
    },
    {
        question: "Which natural disaster struck Haiti in 2010?",
        options: ["Earthquake", "Tsunami", "Hurricane", "Flood", "Volcanic Eruption", "Wildfire"],
        correctAnswer: "Earthquake"
    },
    {
        question: "Which global sporting event took place in Brazil in 2014?",
        options: ["FIFA World Cup", "Olympic Games", "Rugby World Cup", "Cricket World Cup", "Tennis Grand Slam", "Formula One Grand Prix"],
        correctAnswer: "FIFA World Cup"
    },
    {
        question: "Which significant environmental disaster occurred in 2010 in the Gulf of Mexico?",
        options: ["Deepwater Horizon oil spill", "Exxon Valdez spill", "Bhopal disaster", "Chernobyl disaster", "Fukushima disaster", "Three Mile Island incident"],
        correctAnswer: "Deepwater Horizon oil spill"
    },
    {
        question: "Which event in 2016 resulted in the UK voting to leave the European Union?",
        options: ["Brexit Referendum", "General Election", "Scottish Independence Referendum", "Eurozone Crisis", "Paris Agreement", "G7 Summit"],
        correctAnswer: "Brexit Referendum"
    },
    {
        question: "Which country hosted the 2018 Winter Olympics?",
        options: ["South Korea", "Japan", "China", "USA", "Canada", "Germany"],
        correctAnswer: "South Korea"
    },
    {
        question: "Which natural disaster struck Indonesia in 2004, resulting in a massive loss of life?",
        options: ["Tsunami", "Earthquake", "Hurricane", "Flood", "Volcanic Eruption", "Landslide"],
        correctAnswer: "Tsunami"
    },
    {
        question: "Which event in 2015 marked the agreement to combat climate change?",
        options: ["Paris Agreement", "Kyoto Protocol", "Copenhagen Accord", "Rio Earth Summit", "Montreal Protocol", "G20 Summit"],
        correctAnswer: "Paris Agreement"
    },
    {
        question: "Which country won the 2014 FIFA World Cup?",
        options: ["Germany", "Brazil", "Argentina", "France", "Spain", "Italy"],
        correctAnswer: "Germany"
    },
    {
        question: "Which pandemic outbreak in 2002-2003 raised global health concerns?",
        options: ["SARS", "Ebola", "Swine Flu", "COVID-19", "Zika Virus", "Bird Flu"],
        correctAnswer: "SARS"
    },
    {
        question: "Which country hosted the 2012 Summer Olympics?",
        options: ["United Kingdom", "China", "Brazil", "USA", "Australia", "Japan"],
        correctAnswer: "United Kingdom"
    },
    {
        question: "Which country won the 2006 FIFA World Cup?",
        options: ["Italy", "France", "Brazil", "Germany", "Argentina", "Spain"],
        correctAnswer: "Italy"
    },
    {
        question: "Which event in 2011 led to the death of a prominent terrorist leader?",
        options: ["Death of Osama bin Laden", "Death of Saddam Hussein", "Death of Muammar Gaddafi", "Death of Kim Jong-il", "Death of Ayman al-Zawahiri", "Death of Abu Bakr al-Baghdadi"],
        correctAnswer: "Death of Osama bin Laden"
    },
    {
        question: "Which country hosted the 2006 Winter Olympics?",
        options: ["Italy", "Canada", "USA", "Germany", "Russia", "South Korea"],
        correctAnswer: "Italy"
    },
    {
        question: "Which event in 2009 marked the first time a black man was inaugurated as US President?",
        options: ["Inauguration of Barack Obama", "Election of Donald Trump", "Inauguration of Joe Biden", "Election of George W. Bush", "Election of Bill Clinton", "Inauguration of George H.W. Bush"],
        correctAnswer: "Inauguration of Barack Obama"
    },
    {
        question: "Which country won the 2010 FIFA World Cup?",
        options: ["Spain", "Germany", "Brazil", "Argentina", "France", "Italy"],
        correctAnswer: "Spain"
    },
    {
        question: "Which significant global event occurred in 2020, impacting millions of lives and economies?",
        options: ["COVID-19 Pandemic", "Brexit", "US Presidential Election", "Global Financial Crisis", "Fukushima Disaster", "Syrian Refugee Crisis"],
        correctAnswer: "COVID-19 Pandemic"
    },
    {
        question: "Which global sporting event took place in Japan in 2020?",
        options: ["Summer Olympics", "Winter Olympics", "FIFA World Cup", "Rugby World Cup", "Cricket World Cup", "Formula One Grand Prix"],
        correctAnswer: "Summer Olympics"
    },
    {
        question: "Which significant event took place in 2007, marking the first launch of a smartphone that revolutionized communication?",
        options: ["Launch of the iPhone", "Google's IPO", "Facebook's launch", "Amazon's creation", "Microsoft's launch", "Netflix's launch"],
        correctAnswer: "Launch of the iPhone"
    },
    {
        question: "Which natural disaster struck Japan in 2011, causing widespread damage and a nuclear crisis?",
        options: ["Tsunami and Fukushima Disaster", "Earthquake", "Hurricane", "Volcanic Eruption", "Flood", "Landslide"],
        correctAnswer: "Tsunami and Fukushima Disaster"
    },
    {
        question: "Which country hosted the 2004 Summer Olympics, returning to its historical origins?",
        options: ["Greece", "China", "Australia", "USA", "UK", "Japan"],
        correctAnswer: "Greece"
    },
    {
        question: "Which event in 2008 marked the beginning of a severe global economic downturn?",
        options: ["Global Financial Crisis", "Dot-com Bubble Burst", "Asian Financial Crisis", "European Debt Crisis", "Great Depression", "Oil Crisis"],
        correctAnswer: "Global Financial Crisis"
    },
    {
        question: "Which event in 2016 marked the peace agreement between the Colombian government and FARC rebels?",
        options: ["Colombian Peace Agreement", "Oslo Accords", "Camp David Accords", "Geneva Convention", "Treaty of Versailles", "Dayton Agreement"],
        correctAnswer: "Colombian Peace Agreement"
    },
    {
        question: "Which country hosted the 2022 Winter Olympics?",
        options: ["China", "Japan", "South Korea", "USA", "Canada", "Germany"],
        correctAnswer: "China"
    },
    {
        question: "Which event in 2001 led to significant changes in global security and air travel?",
        options: ["Terrorist attacks on September 11", "Launch of the iPhone", "Indian Ocean Tsunami", "Iraq War", "Global Financial Crisis"],
        correctAnswer: "Terrorist attacks on September 11"
    },
    {
        question: "Which natural disaster in 2004 caused widespread devastation in Southeast Asia?",
        options: ["Hurricane Katrina", "Indian Ocean Tsunami", "Chernobyl Disaster", "Fukushima Disaster", "Earthquake in Haiti"],
        correctAnswer: "Indian Ocean Tsunami"
    },
    {
        question: "Which country hosted the 2008 Summer Olympics, marking a significant moment in its global presence?",
        options: ["China", "Brazil", "South Africa", "Russia", "India"],
        correctAnswer: "China"
    },
    {
        question: "Which global financial crisis in 2008 had a profound impact on economies worldwide?",
        options: ["Global Financial Crisis", "Dot-com Bubble Burst", "Asian Financial Crisis", "European Debt Crisis", "Great Recession"],
        correctAnswer: "Global Financial Crisis"
    },
    {
        question: "Which event in 2011 led to the overthrow of a long-standing dictator in Libya?",
        options: ["Arab Spring", "Egyptian Revolution", "Syrian Civil War", "Libyan Civil War", "Yemeni Crisis"],
        correctAnswer: "Libyan Civil War"
    },
    {
        question: "Which country legalized same-sex marriage nationwide in 2015?",
        options: ["United States", "Canada", "Australia", "Germany", "France"],
        correctAnswer: "United States"
    },
    {
        question: "Which global health crisis began in 2019 and led to widespread lockdowns and travel restrictions?",
        options: ["COVID-19 Pandemic", "Ebola Outbreak", "Swine Flu Pandemic", "SARS Outbreak", "Zika Virus Epidemic"],
        correctAnswer: "COVID-19 Pandemic"
    },
    {
        question: "Which event in 2020 led to the death of George Floyd and sparked global protests against racial injustice?",
        options: ["Black Lives Matter Protests", "Brexit Referendum", "Hong Kong Protests", "Arab Spring", "Yellow Vest Movement"],
        correctAnswer: "Black Lives Matter Protests"
    },
    {
        question: "Which country left the European Union in 2020, an event known as Brexit?",
        options: ["United Kingdom", "France", "Germany", "Italy", "Spain"],
        correctAnswer: "United Kingdom"
    },
    {
        question: "Which event in 2021 saw the United States withdraw its troops from Afghanistan after 20 years of war?",
        options: ["Fall of Kabul", "Taliban Takeover", "Osama bin Laden's Death", "Iraq War", "Syrian Civil War"],
        correctAnswer: "Fall of Kabul"
    },
    {
        question: "Which global climate agreement set 2025 as a key checkpoint for nations to showcase progress in reducing carbon emissions?",
        options: ["Kyoto Protocol", "Paris Agreement", "Copenhagen Accord", "Montreal Protocol", "Rio Earth Summit"],
        correctAnswer: "Paris Agreement"
    },
    {
        question: "Which event in 2022 led to a significant energy crisis in Europe?",
        options: ["Russian Invasion of Ukraine", "COVID-19 Pandemic", "Global Financial Crisis", "Brexit", "Arab Spring"],
        correctAnswer: "Russian Invasion of Ukraine"
    },
    {
        question: "Which country hosted the 2022 FIFA World Cup, marking the first time it was held in the Middle East?",
        options: ["Qatar", "United Arab Emirates", "Saudi Arabia", "Egypt", "Bahrain"],
        correctAnswer: "Qatar"
    },
    {
        question: "Which event in 2023 saw the first successful human landing on Mars?",
        options: ["NASA's Artemis Mission", "China's Tianwen-1 Mission", "SpaceX's Starship Mission", "Blue Origin's New Shepard Mission", "Roscosmos's Luna Mission"],
        correctAnswer: "SpaceX's Starship Mission"
    },
    {
        question: "In which year did the first manned Moon landing occur?",
        options: ["1969", "1957", "1963", "1972", "1980", "1991"],
        correctAnswer: "1969"
    },
    {
        question: "In which year did the Soviet Union dissolve, marking the end of the Cold War?",
        options: ["1991", "1989", "1985", "2000", "1979", "1995"],
        correctAnswer: "1991"
    },
    {
        question: "Which pandemic occurred in 1918 and caused millions of deaths worldwide?",
        options: ["Spanish Flu", "Black Death", "Swine Flu", "SARS", "Ebola", "H1N1"],
        correctAnswer: "Spanish Flu"
    },
    {
        question: "Which treaty ended World War I and imposed harsh penalties on Germany?",
        options: ["Treaty of Versailles", "Geneva Convention", "Treaty of Paris", "Yalta Agreement", "Potsdam Agreement", "NATO Treaty"],
        correctAnswer: "Treaty of Versailles"
    },
    {
        question: "Which major technological event happened in 2007 that changed communication forever?",
        options: ["Launch of the iPhone", "Facebook becoming public", "Google's IPO", "First YouTube video", "Amazon's creation", "Windows 95 launch"],
        correctAnswer: "Launch of the iPhone"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Lion", "Tiger", "Elephant", "Leopard", "Gorilla", "Wolf"],
        correctAnswer: "Lion"
    },
    {
        question: "Which bird is known for its distinctive colorful plumage and long tail feathers?",
        options: ["Peacock", "Parrot", "Swan", "Eagle", "Owl", "Falcon"],
        correctAnswer: "Peacock"
    },
    {
        question: "Which animal is the largest mammal in the world?",
        options: ["Blue Whale", "Elephant", "Giraffe", "Orca", "Hippopotamus", "Rhino"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which animal is known for its ability to change colors to blend in with its surroundings?",
        options: ["Chameleon", "Octopus", "Squid", "Cuttlefish", "Seahorse", "Jellyfish"],
        correctAnswer: "Chameleon"
    },
    {
        question: "Which bird is the fastest land animal?",
        options: ["Cheetah", "Lion", "Elephant", "Giraffe", "Horse", "Kangaroo"],
        correctAnswer: "Cheetah"
    },
    {
        question: "Which animal is known for its distinctive black and white stripes?",
        options: ["Zebra", "Tiger", "Panda", "Skunk", "Penguin", "Raccoon"],
        correctAnswer: "Zebra"
    },
    {
        question: "Which animal is known as the largest land animal?",
        options: ["Elephant", "Giraffe", "Hippo", "Rhino", "Bear", "Bison"],
        correctAnswer: "Elephant"
    },
    {
        question: "Which bird is known for its impressive mimicry of human speech?",
        options: ["Parrot", "Crow", "Raven", "Sparrow", "Canary", "Finch"],
        correctAnswer: "Parrot"
    },
    {
        question: "Which animal is known for its long neck and distinctive spotted coat?",
        options: ["Giraffe", "Cheetah", "Leopard", "Jaguar", "Tiger", "Zebra"],
        correctAnswer: "Giraffe"
    },
    {
        question: "Which aquatic animal is known for its intelligence and playful behavior?",
        options: ["Dolphin", "Shark", "Whale", "Seal", "Octopus", "Sea Otter"],
        correctAnswer: "Dolphin"
    },
    {
        question: "Which animal is known for its ability to climb trees and hang from branches using its tail?",
        options: ["Monkey", "Koala", "Sloth", "Leopard", "Panda", "Squirrel"],
        correctAnswer: "Monkey"
    },
    {
        question: "Which animal is known for its powerful and majestic antlers?",
        options: ["Deer", "Moose", "Elk", "Caribou", "Reindeer", "Antelope"],
        correctAnswer: "Deer"
    },
    {
        question: "Which animal is known for its unique black and white fur and is native to China?",
        options: ["Panda", "Tiger", "Zebra", "Penguin", "Skunk", "Raccoon"],
        correctAnswer: "Panda"
    },
    {
        question: "Which animal is known for its remarkable migration across the Serengeti?",
        options: ["Wildebeest", "Elephant", "Giraffe", "Lion", "Zebra", "Cheetah"],
        correctAnswer: "Wildebeest"
    },
    {
        question: "Which marine animal is known for its eight arms and ability to squirt ink?",
        options: ["Octopus", "Squid", "Cuttlefish", "Jellyfish", "Seahorse", "Starfish"],
        correctAnswer: "Octopus"
    },
    {
        question: "Which animal is known for its exceptional sense of smell and hunting skills?",
        options: ["Wolf", "Lion", "Tiger", "Leopard", "Cheetah", "Hyena"],
        correctAnswer: "Wolf"
    },
    {
        question: "Which animal is known for its hump and ability to store water?",
        options: ["Camel", "Elephant", "Giraffe", "Hippo", "Rhino", "Bison"],
        correctAnswer: "Camel"
    },
    {
        question: "Which animal is known for its ability to regrow lost limbs?",
        options: ["Starfish", "Octopus", "Seahorse", "Jellyfish", "Crab", "Lobster"],
        correctAnswer: "Starfish"
    },
    {
        question: "Which animal is known for its role in pollination and producing honey?",
        options: ["Bee", "Butterfly", "Moth", "Ant", "Beetle", "Dragonfly"],
        correctAnswer: "Bee"
    },
    {
        question: "Which animal is known for its sharp quills used for defense?",
        options: ["Porcupine", "Hedgehog", "Armadillo", "Pangolin", "Beaver", "Groundhog"],
        correctAnswer: "Porcupine"
    },
    {
        question: "Which animal is the national symbol of the United States?",
        options: ["Bald Eagle", "Grizzly Bear", "Bison", "Alligator", "Wolf", "Coyote"],
        correctAnswer: "Bald Eagle"
    },
    {
        question: "Which animal is known for its strong beak and ability to crack open nuts?",
        options: ["Parrot", "Crow", "Raven", "Sparrow", "Canary", "Finch"],
        correctAnswer: "Parrot"
    },
    {
        question: "Which animal is known for its distinctive pouch used for carrying its young?",
        options: ["Kangaroo", "Koala", "Wombat", "Possum", "Wallaby", "Sugar Glider"],
        correctAnswer: "Kangaroo"
    },
    {
        question: "Which animal is known for its ability to fly backwards?",
        options: ["Hummingbird", "Eagle", "Hawk", "Falcon", "Owl", "Raven"],
        correctAnswer: "Hummingbird"
    },
    {
        question: "Which animal is known for its ability to produce silk?",
        options: ["Spider", "Ant", "Beetle", "Dragonfly", "Butterfly", "Moth"],
        correctAnswer: "Spider"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Lion", "Tiger", "Elephant", "Leopard", "Gorilla", "Wolf"],
        correctAnswer: "Lion"
    },
    {
        question: "Which bird is known for its distinctive colorful plumage and long tail feathers?",
        options: ["Peacock", "Parrot", "Swan", "Eagle", "Owl", "Falcon"],
        correctAnswer: "Peacock"
    },
    {
        question: "Which animal is the largest mammal in the world?",
        options: ["Blue Whale", "Elephant", "Giraffe", "Orca", "Hippopotamus", "Rhino"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which animal is known for its ability to change colors to blend in with its surroundings?",
        options: ["Chameleon", "Octopus", "Squid", "Cuttlefish", "Seahorse", "Jellyfish"],
        correctAnswer: "Chameleon"
    },
    {
        question: "Which bird is the fastest land animal?",
        options: ["Cheetah", "Lion", "Elephant", "Giraffe", "Horse", "Kangaroo"],
        correctAnswer: "Cheetah"
    },
    {
        question: "Which animal is known for its distinctive black and white stripes?",
        options: ["Zebra", "Tiger", "Panda", "Skunk", "Penguin", "Raccoon"],
        correctAnswer: "Zebra"
    },
    {
        question: "Which animal is known as the largest land animal?",
        options: ["Elephant", "Giraffe", "Hippo", "Rhino", "Bear", "Bison"],
        correctAnswer: "Elephant"
    },
    {
        question: "Which bird is known for its impressive mimicry of human speech?",
        options: ["Parrot", "Crow", "Raven", "Sparrow", "Canary", "Finch"],
        correctAnswer: "Parrot"
    },
    {
        question: "Which animal is known for its long neck and distinctive spotted coat?",
        options: ["Giraffe", "Cheetah", "Leopard", "Jaguar", "Tiger", "Zebra"],
        correctAnswer: "Giraffe"
    },
    {
        question: "Which aquatic animal is known for its intelligence and playful behavior?",
        options: ["Dolphin", "Shark", "Whale", "Seal", "Octopus", "Sea Otter"],
        correctAnswer: "Dolphin"
    },
    {
        question: "Which animal is known for its ability to climb trees and hang from branches using its tail?",
        options: ["Monkey", "Koala", "Sloth", "Leopard", "Panda", "Squirrel"],
        correctAnswer: "Monkey"
    },
    {
        question: "Which animal is known for its powerful and majestic antlers?",
        options: ["Deer", "Moose", "Elk", "Caribou", "Reindeer", "Antelope"],
        correctAnswer: "Deer"
    },
    {
        question: "Which animal is known for its unique black and white fur and is native to China?",
        options: ["Panda", "Tiger", "Zebra", "Penguin", "Skunk", "Raccoon"],
        correctAnswer: "Panda"
    },
    {
        question: "Which animal is known for its remarkable migration across the Serengeti?",
        options: ["Wildebeest", "Elephant", "Giraffe", "Lion", "Zebra", "Cheetah"],
        correctAnswer: "Wildebeest"
    },
    {
        question: "Which marine animal is known for its eight arms and ability to squirt ink?",
        options: ["Octopus", "Squid", "Cuttlefish", "Jellyfish", "Seahorse", "Starfish"],
        correctAnswer: "Octopus"
    },
    {
        question: "Which animal is known for its exceptional sense of smell and hunting skills?",
        options: ["Wolf", "Lion", "Tiger", "Leopard", "Cheetah", "Hyena"],
        correctAnswer: "Wolf"
    },
    {
        question: "Which animal is known for its hump and ability to store water?",
        options: ["Camel", "Elephant", "Giraffe", "Hippo", "Rhino", "Bison"],
        correctAnswer: "Camel"
    },
    {
        question: "Which animal is known for its ability to regrow lost limbs?",
        options: ["Starfish", "Octopus", "Seahorse", "Jellyfish", "Crab", "Lobster"],
        correctAnswer: "Starfish"
    },
    {
        question: "Which animal is known for its role in pollination and producing honey?",
        options: ["Bee", "Butterfly", "Moth", "Ant", "Beetle", "Dragonfly"],
        correctAnswer: "Bee"
    },
    {
        question: "Which animal is known for its sharp quills used for defense?",
        options: ["Porcupine", "Hedgehog", "Armadillo", "Pangolin", "Beaver", "Groundhog"],
        correctAnswer: "Porcupine"
    },
    {
        question: "Which animal is the national symbol of the United States?",
        options: ["Bald Eagle", "Grizzly Bear", "Bison", "Alligator", "Wolf", "Coyote"],
        correctAnswer: "Bald Eagle"
    },
    {
        question: "Which animal is known for its strong beak and ability to crack open nuts?",
        options: ["Parrot", "Crow", "Raven", "Sparrow", "Canary", "Finch"],
        correctAnswer: "Parrot"
    },
    {
        question: "Which animal is known for its distinctive pouch used for carrying its young?",
        options: ["Kangaroo", "Koala", "Wombat", "Possum", "Wallaby", "Sugar Glider"],
        correctAnswer: "Kangaroo"
    },
    {
        question: "Which animal is known for its ability to fly backwards?",
        options: ["Hummingbird", "Eagle", "Hawk", "Falcon", "Owl", "Raven"],
        correctAnswer: "Hummingbird"
    },
    {
        question: "Which animal is known for its ability to produce silk?",
        options: ["Spider", "Ant", "Beetle", "Dragonfly", "Butterfly", "Moth"],
        correctAnswer: "Spider"
    },
    {
        question: "Which country is Usain Bolt from?",
        options: ["Jamaica", "USA", "Canada", "Kenya", "UK", "Australia"],
        correctAnswer: "Jamaica"
    },
    {
        question: "Which sport is Michael Jordan famous for?",
        options: ["Basketball", "Soccer", "Tennis", "Baseball", "Golf", "Boxing"],
        correctAnswer: "Basketball"
    },
    {
        question: "Which country is Cristiano Ronaldo from?",
        options: ["Portugal", "Spain", "Argentina", "Brazil", "Italy", "France"],
        correctAnswer: "Portugal"
    },
    {
        question: "Which sport is Serena Williams known for?",
        options: ["Tennis", "Soccer", "Basketball", "Golf", "Swimming", "Gymnastics"],
        correctAnswer: "Tennis"
    },
    {
        question: "Which country is Lionel Messi from?",
        options: ["Argentina", "Brazil", "Spain", "Portugal", "Germany", "France"],
        correctAnswer: "Argentina"
    },
    {
        question: "Which sport is Tiger Woods famous for?",
        options: ["Golf", "Tennis", "Basketball", "Soccer", "Baseball", "Swimming"],
        correctAnswer: "Golf"
    },
    {
        question: "Which country is Roger Federer from?",
        options: ["Switzerland", "Spain", "USA", "UK", "Australia", "France"],
        correctAnswer: "Switzerland"
    },
    {
        question: "Which sport is Muhammad Ali known for?",
        options: ["Boxing", "Wrestling", "Karate", "Taekwondo", "Judo", "Fencing"],
        correctAnswer: "Boxing"
    },
    {
        question: "Which country is Pele from?",
        options: ["Brazil", "Argentina", "Portugal", "Spain", "Italy", "France"],
        correctAnswer: "Brazil"
    },
    {
        question: "Which sport is LeBron James famous for?",
        options: ["Basketball", "Soccer", "Tennis", "Baseball", "Golf", "Boxing"],
        correctAnswer: "Basketball"
    },
    {
        question: "Which country is Rafael Nadal from?",
        options: ["Spain", "Switzerland", "USA", "UK", "Australia", "France"],
        correctAnswer: "Spain"
    },
    {
        question: "Which sport is David Beckham known for?",
        options: ["Soccer", "Basketball", "Tennis", "Golf", "Baseball", "Rugby"],
        correctAnswer: "Soccer"
    },
    {
        question: "Which country is Novak Djokovic from?",
        options: ["Serbia", "Spain", "Switzerland", "USA", "UK", "France"],
        correctAnswer: "Serbia"
    },
    {
        question: "Which sport is Michael Phelps famous for?",
        options: ["Swimming", "Running", "Cycling", "Gymnastics", "Diving", "Rowing"],
        correctAnswer: "Swimming"
    },
    {
        question: "Which country is Diego Maradona from?",
        options: ["Argentina", "Brazil", "Portugal", "Spain", "Italy", "France"],
        correctAnswer: "Argentina"
    },
    {
        question: "Which sport is Simone Biles known for?",
        options: ["Gymnastics", "Swimming", "Running", "Diving", "Cycling", "Fencing"],
        correctAnswer: "Gymnastics"
    },
    {
        question: "Which country is Zinedine Zidane from?",
        options: ["France", "Brazil", "Argentina", "Portugal", "Spain", "Italy"],
        correctAnswer: "France"
    },
    {
        question: "Which sport is Mia Hamm famous for?",
        options: ["Soccer", "Basketball", "Tennis", "Baseball", "Golf", "Swimming"],
        correctAnswer: "Soccer"
    },
    {
        question: "Which country is Yao Ming from?",
        options: ["China", "Japan", "South Korea", "USA", "Canada", "Australia"],
        correctAnswer: "China"
    },
    {
        question: "Which sport is Nadia Comaneci known for?",
        options: ["Gymnastics", "Swimming", "Running", "Diving", "Cycling", "Fencing"],
        correctAnswer: "Gymnastics"
    },
    {
        question: "Which country is Luka Modric from?",
        options: ["Croatia", "Serbia", "Spain", "Portugal", "Brazil", "Argentina"],
        correctAnswer: "Croatia"
    },
    {
        question: "Which sport is Sachin Tendulkar famous for?",
        options: ["Cricket", "Soccer", "Tennis", "Golf", "Basketball", "Baseball"],
        correctAnswer: "Cricket"
    },
    {
        question: "Which country is Kylian Mbappe from?",
        options: ["France", "Brazil", "Argentina", "Portugal", "Spain", "Italy"],
        correctAnswer: "France"
    },
    {
        question: "Which sport is Martina Navratilova known for?",
        options: ["Tennis", "Soccer", "Basketball", "Golf", "Swimming", "Gymnastics"],
        correctAnswer: "Tennis"
    },
    {
        question: "Which country is Usain Bolt from?",
        options: ["Jamaica", "USA", "Canada", "Kenya", "UK", "Australia"],
        correctAnswer: "Jamaica"
    },
    {
        question: "Which country is known for the dish 'sushi'?",
        options: ["Japan", "China", "Korea", "Thailand", "Vietnam", "Malaysia"],
        correctAnswer: "Japan"
    },
    {
        question: "What is the main ingredient in the Italian dish 'risotto'?",
        options: ["Rice", "Pasta", "Bread", "Potato", "Corn", "Beans"],
        correctAnswer: "Rice"
    },
    {
        question: "Which country is known for the dish 'paella'?",
        options: ["Spain", "Italy", "France", "Portugal", "Greece", "Turkey"],
        correctAnswer: "Spain"
    },
    {
        question: "What is the main ingredient in the Greek dish 'tzatziki'?",
        options: ["Yogurt", "Cheese", "Tomato", "Olive", "Bread", "Rice"],
        correctAnswer: "Yogurt"
    },
    {
        question: "Which country is famous for the dish 'tacos'?",
        options: ["Mexico", "Spain", "Brazil", "Argentina", "Chile", "Peru"],
        correctAnswer: "Mexico"
    },
    {
        question: "What is the main ingredient in the French dish 'ratatouille'?",
        options: ["Vegetables", "Meat", "Fish", "Cheese", "Bread", "Rice"],
        correctAnswer: "Vegetables"
    },
    {
        question: "Which country is known for the dish 'poutine'?",
        options: ["Canada", "USA", "France", "Belgium", "UK", "Australia"],
        correctAnswer: "Canada"
    },
    {
        question: "What is the main ingredient in the Indian dish 'dal'?",
        options: ["Lentils", "Rice", "Potato", "Chicken", "Fish", "Beans"],
        correctAnswer: "Lentils"
    },
    {
        question: "Which country is known for the dish 'haggis'?",
        options: ["Scotland", "Ireland", "England", "Wales", "Australia", "New Zealand"],
        correctAnswer: "Scotland"
    },
    {
        question: "What is the main ingredient in the Egyptian dish 'koshari'?",
        options: ["Rice and Lentils", "Pasta", "Bread", "Chicken", "Fish", "Beans"],
        correctAnswer: "Rice and Lentils"
    },
    {
        question: "Which country is known for the dish 'pho'?",
        options: ["Vietnam", "Thailand", "China", "Japan", "Korea", "Malaysia"],
        correctAnswer: "Vietnam"
    },
    {
        question: "What is the main ingredient in the Moroccan dish 'couscous'?",
        options: ["Semolina", "Rice", "Potato", "Chicken", "Fish", "Beans"],
        correctAnswer: "Semolina"
    },
    {
        question: "Which country is known for the dish 'pierogi'?",
        options: ["Poland", "Russia", "Germany", "Ukraine", "Czech Republic", "Hungary"],
        correctAnswer: "Poland"
    },
    {
        question: "What is the main ingredient in the Brazilian dish 'feijoada'?",
        options: ["Black beans", "Rice", "Corn", "Chicken", "Beef", "Fish"],
        correctAnswer: "Black beans"
    },
    {
        question: "Which country is famous for the dish 'sauerbraten'?",
        options: ["Germany", "Austria", "Switzerland", "Belgium", "Netherlands", "Denmark"],
        correctAnswer: "Germany"
    },
    {
        question: "What is the main ingredient in the Thai dish 'pad thai'?",
        options: ["Noodles", "Rice", "Bread", "Potato", "Corn", "Beans"],
        correctAnswer: "Noodles"
    },
    {
        question: "Which country is known for the dish 'baklava'?",
        options: ["Turkey", "Greece", "Lebanon", "Egypt", "Iran", "Iraq"],
        correctAnswer: "Turkey"
    },
    {
        question: "What is the main ingredient in the Spanish dish 'gazpacho'?",
        options: ["Tomato", "Potato", "Bread", "Chicken", "Fish", "Beans"],
        correctAnswer: "Tomato"
    },
    {
        question: "Which country is famous for the dish 'kimchi'?",
        options: ["Korea", "China", "Japan", "Thailand", "Vietnam", "Malaysia"],
        correctAnswer: "Korea"
    },
    {
        question: "What is the main ingredient in the Lebanese dish 'tabbouleh'?",
        options: ["Parsley", "Mint", "Basil", "Coriander", "Thyme", "Rosemary"],
        correctAnswer: "Parsley"
    },
    {
        question: "Which country is known for the dish 'fondue'?",
        options: ["Switzerland", "France", "Italy", "Germany", "Austria", "Belgium"],
        correctAnswer: "Switzerland"
    },
    {
        question: "What is the main ingredient in the Japanese dish 'tempura'?",
        options: ["Seafood and Vegetables", "Rice", "Noodles", "Chicken", "Fish", "Beans"],
        correctAnswer: "Seafood and Vegetables"
    },
    {
        question: "Which country is known for the dish 'bibimbap'?",
        options: ["Korea", "Japan", "China", "Thailand", "Vietnam", "Malaysia"],
        correctAnswer: "Korea"
    },
    {
        question: "What is the main ingredient in the Italian dish 'lasagna'?",
        options: ["Pasta", "Rice", "Bread", "Potato", "Corn", "Beans"],
        correctAnswer: "Pasta"
    },
    {
        question: "Which country is known for the dish 'coq au vin'?",
        options: ["France", "Belgium", "Italy", "Germany", "Switzerland", "Austria"],
        correctAnswer: "France"
    },
    {
        question: "Which dinosaur is known as the 'Tyrant Lizard King'?",
        options: ["Tyrannosaurus Rex", "Triceratops", "Velociraptor", "Stegosaurus", "Brachiosaurus", "Spinosaurus"],
        correctAnswer: "Tyrannosaurus Rex"
    },
    {
        question: "What era is known as the 'Age of Dinosaurs'?",
        options: ["Mesozoic", "Paleozoic", "Cenozoic", "Precambrian", "Devonian", "Permian"],
        correctAnswer: "Mesozoic"
    },
    {
        question: "Which dinosaur had three horns on its face?",
        options: ["Triceratops", "Stegosaurus", "Ankylosaurus", "Velociraptor", "Brachiosaurus", "Spinosaurus"],
        correctAnswer: "Triceratops"
    },
    {
        question: "Which dinosaur had a long neck and was known for its massive size?",
        options: ["Brachiosaurus", "Tyrannosaurus Rex", "Stegosaurus", "Velociraptor", "Ankylosaurus", "Triceratops"],
        correctAnswer: "Brachiosaurus"
    },
    {
        question: "Which dinosaur is believed to have been covered in feathers?",
        options: ["Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", "Spinosaurus", "Ankylosaurus"],
        correctAnswer: "Velociraptor"
    },
    {
        question: "Which dinosaur had a clubbed tail used for defense?",
        options: ["Ankylosaurus", "Tyrannosaurus Rex", "Triceratops", "Stegosaurus", "Brachiosaurus", "Spinosaurus"],
        correctAnswer: "Ankylosaurus"
    },
    {
        question: "Which dinosaur had plates along its back and a spiked tail?",
        options: ["Stegosaurus", "Tyrannosaurus Rex", "Triceratops", "Velociraptor", "Brachiosaurus", "Spinosaurus"],
        correctAnswer: "Stegosaurus"
    },
    {
        question: "Which dinosaur had the longest name?",
        options: ["Micropachycephalosaurus", "Brachiosaurus", "Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Velociraptor"],
        correctAnswer: "Micropachycephalosaurus"
    },
    {
        question: "Which dinosaur is known for its sail-like structure on its back?",
        options: ["Spinosaurus", "Tyrannosaurus Rex", "Stegosaurus", "Velociraptor", "Brachiosaurus", "Triceratops"],
        correctAnswer: "Spinosaurus"
    },
    {
        question: "Which dinosaur's name means 'roof lizard'?",
        options: ["Stegosaurus", "Tyrannosaurus Rex", "Triceratops", "Velociraptor", "Brachiosaurus", "Spinosaurus"],
        correctAnswer: "Stegosaurus"
    },
    {
        question: "Which dinosaur's name means 'three-horned face'?",
        options: ["Triceratops", "Tyrannosaurus Rex", "Stegosaurus", "Velociraptor", "Brachiosaurus", "Spinosaurus"],
        correctAnswer: "Triceratops"
    },
    {
        question: "Which dinosaur is known for having very short arms relative to its body?",
        options: ["Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Velociraptor", "Brachiosaurus", "Spinosaurus"],
        correctAnswer: "Tyrannosaurus Rex"
    },
    {
        question: "Which dinosaur's name means 'swift thief'?",
        options: ["Velociraptor", "Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Brachiosaurus", "Spinosaurus"],
        correctAnswer: "Velociraptor"
    },
    {
        question: "Which dinosaur had a large, sail-like fin on its back and lived during the Cretaceous period?",
        options: ["Spinosaurus", "Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Brachiosaurus", "Velociraptor"],
        correctAnswer: "Spinosaurus"
    },
    {
        question: "Which dinosaur had a beak and was known for its duck-billed appearance?",
        options: ["Parasaurolophus", "Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Brachiosaurus", "Spinosaurus"],
        correctAnswer: "Parasaurolophus"
    },
    {
        question: "Which dinosaur's name means 'lizard-hipped'?",
        options: ["Saurischia", "Ornithischia", "Theropoda", "Sauropoda", "Ankylosauria", "Ceratopsia"],
        correctAnswer: "Saurischia"
    },
    {
        question: "Which dinosaur is known for having a prominent horn on its snout and lived during the late Cretaceous period?",
        options: ["Ceratosaurus", "Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Brachiosaurus", "Velociraptor"],
        correctAnswer: "Ceratosaurus"
    },
    {
        question: "Which dinosaur is believed to have been one of the fastest runners?",
        options: ["Velociraptor", "Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Brachiosaurus", "Spinosaurus"],
        correctAnswer: "Velociraptor"
    },
    {
        question: "Which dinosaur is known for its distinctive dome-shaped skull?",
        options: ["Pachycephalosaurus", "Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Brachiosaurus", "Spinosaurus"],
        correctAnswer: "Pachycephalosaurus"
    },
    {
        question: "Which dinosaur's name means 'double beam'?",
        options: ["Diplodocus", "Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Brachiosaurus", "Velociraptor"],
        correctAnswer: "Diplodocus"
    },
    {
        question: "Which dinosaur is known for its large, sail-like fin on its back and primarily lived in what is now Africa?",
        options: ["Spinosaurus", "Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Brachiosaurus", "Velociraptor"],
        correctAnswer: "Spinosaurus"
    },
    {
        question: "Which dinosaur had a distinctive frill at the back of its head and three facial horns?",
        options: ["Triceratops", "Tyrannosaurus Rex", "Stegosaurus", "Velociraptor", "Brachiosaurus", "Spinosaurus"],
        correctAnswer: "Triceratops"
    },
    {
        question: "Which dinosaur is known for its long, whip-like tail and lived during the Jurassic period?",
        options: ["Diplodocus", "Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Brachiosaurus", "Velociraptor"],
        correctAnswer: "Diplodocus"
    },
    {
        question: "Which dinosaur is known for its unique sail on its back and was a carnivorous predator?",
        options: ["Spinosaurus", "Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Brachiosaurus", "Velociraptor"],
        correctAnswer: "Spinosaurus"
    },
    {
        question: "Which dinosaur's name means 'deceptive lizard'?",
        options: ["Deinonychus", "Tyrannosaurus Rex", "Stegosaurus", "Triceratops", "Brachiosaurus", "Velociraptor"],
        correctAnswer: "Deinonychus"
    },
    {
        question: "Which movie, released in 2009, features a young boy who discovers he is a wizard on his 11th birthday?",
        options: ["Harry Potter and the Half-Blood Prince", "The Twilight Saga: New Moon", "Avatar", "The Hangover", "Up", "Harry Potter and the Philosopher's Stone"],
        correctAnswer: "Harry Potter and the Philosopher's Stone"
    },
    {
        question: "Which animated film, released in 2010, tells the story of a young girl who dreams of becoming a ballerina?",
        options: ["Tangled", "Toy Story 3", "How to Train Your Dragon", "Despicable Me", "Alice in Wonderland", "Ballerina"],
        correctAnswer: "Ballerina"
    },
    {
        question: "Which superhero movie, released in 2012, features a dark and gritty version of Batman?",
        options: ["The Dark Knight Rises", "The Avengers", "The Amazing Spider-Man", "Skyfall", "The Hunger Games", "Man of Steel"],
        correctAnswer: "The Dark Knight Rises"
    },
    {
        question: "Which animated film, released in 2013, follows the story of a young girl who embarks on a journey to find her mother?",
        options: ["Frozen", "Monsters University", "Despicable Me 2", "Epic", "The Croods", "Brave"],
        correctAnswer: "Frozen"
    },
    {
        question: "Which movie, released in 2015, features a young woman who discovers she has the ability to control water?",
        options: ["Mad Max: Fury Road", "The Martian", "Star Wars: The Force Awakens", "Jurassic World", "The Revenant", "The Shape of Water"],
        correctAnswer: "The Shape of Water"
    },
    {
        question: "Which animated film, released in 2016, tells the story of a young girl who embarks on a journey to find her mother?",
        options: ["Moana", "Finding Dory", "Zootopia", "Sing", "The Secret Life of Pets", "Trolls"],
        correctAnswer: "Moana"
    },
    {
        question: "Which superhero movie, released in 2017, features a team of Marvel superheroes coming together to save the world?",
        options: ["Thor: Ragnarok", "Spider-Man: Homecoming", "Black Panther", "Wonder Woman", "Justice League", "Guardians of the Galaxy Vol. 2"],
        correctAnswer: "Justice League"
    },
    {
        question: "Which animated film, released in 2018, follows the story of a young girl who dreams of becoming a musician?",
        options: ["Incredibles 2", "Ralph Breaks the Internet", "Hotel Transylvania 3: Summer Vacation", "The Grinch", "Smallfoot", "Coco"],
        correctAnswer: "Coco"
    },
    {
        question: "Which movie, released in 2019, features a young woman who discovers she has the ability to control fire?",
        options: ["Aladdin", "The Lion King", "Frozen II", "Jumanji: The Next Level", "Star Wars: The Rise of Skywalker", "Captain Marvel"],
        correctAnswer: "Frozen II"
    },
    {
        question: "Which superhero movie, released in 2020, features a young hero who gains spider-like abilities?",
        options: ["Wonder Woman 1984", "Birds of Prey", "The Invisible Man", "Sonic the Hedgehog", "The New Mutants", "Spider-Man: Into the Spider-Verse"],
        correctAnswer: "Spider-Man: Into the Spider-Verse"
    },
    {
        question: "Which animated film, released in 2021, tells the story of a young boy who dreams of becoming a musician?",
        options: ["Encanto", "Luca", "Raya and the Last Dragon", "The Mitchells vs. the Machines", "Cruella", "Soul"],
        correctAnswer: "Encanto"
    },
    {
        question: "Which movie, released in 2022, features a young woman who discovers she has the ability to control water?",
        options: ["Top Gun: Maverick", "The Batman", "Dune", "Spider-Man: No Way Home", "Thor: Love and Thunder", "Aquaman and the Lost Kingdom"],
        correctAnswer: "Aquaman and the Lost Kingdom"
    },
    {
        question: "Which animated film, released in 2023, follows the story of a young girl who dreams of becoming a ballerina?",
        options: ["Elemental", "The Super Mario Bros. Movie", "Puss in Boots: The Last Wish", "Spider-Man: Across the Spider-Verse", "The Boy and the Beast", "Ballerina"],
        correctAnswer: "Ballerina"
    },
    {
        question: "Which movie, released in 2024, features a young boy who discovers he is a wizard on his 11th birthday?",
        options: ["Harry Potter and the Half-Blood Prince", "The Twilight Saga: New Moon", "Avatar", "The Hangover", "Up", "Harry Potter and the Philosopher's Stone"],
        correctAnswer: "Harry Potter and the Philosopher's Stone"
    },
    {
        question: "Which animated film, released in 2001, tells the story of a young boy who dreams of becoming a ballerina?",
        options: ["Tangled", "Toy Story 3", "How to Train Your Dragon", "Despicable Me", "Alice in Wonderland", "Ballerina"],
        correctAnswer: "Ballerina"
    },
    {
        question: "Which superhero movie, released in 2002, features a dark and gritty version of Batman?",
        options: ["The Dark Knight Rises", "The Avengers", "The Amazing Spider-Man", "Skyfall", "The Hunger Games", "Man of Steel"],
        correctAnswer: "The Dark Knight Rises"
    },
    {
        question: "Which animated film, released in 2003, follows the story of a young girl who dreams of becoming a musician?",
        options: ["Encanto", "Luca", "Raya and the Last Dragon", "The Mitchells vs. the Machines", "Cruella", "Coco"],
        correctAnswer: "Encanto"
    },
    {
        question: "Which movie, released in 2004, features a young woman who discovers she has the ability to control water?",
        options: ["Frozen II", "The Lion King", "Frozen", "Jumanji: The Next Level", "Star Wars: The Rise of Skywalker", "The Shape of Water"],
        correctAnswer: "The Shape of Water"
    },
    {
        question: "Which animated film, released in 2005, tells the story of a young boy who dreams of becoming a musician?",
        options: ["Encanto", "Luca", "Raya and the Last Dragon", "The Mitchells vs. the Machines", "Cruella", "Coco"],
        correctAnswer: "Coco"
    },
    {
        question: "Which superhero movie, released in 2006, features a dark and gritty version of Batman?",
        options: ["The Dark Knight Rises", "The Avengers", "The Amazing Spider-Man", "Skyfall", "The Hunger Games", "Man of Steel"],
        correctAnswer: "The Dark Knight Rises"
    },
    {
        question: "Which animated film, released in 2007, follows the story of a young girl who dreams of becoming a musician?",
        options: ["Encanto", "Luca", "Raya and the Last Dragon", "The Mitchells vs. the Machines", "Cruella", "Coco"],
        correctAnswer: "Coco"
    },
    {
        question: "Which movie, released in 2008, features a young woman who discovers she has the ability to control water?",
        options: ["Frozen II", "The Lion King", "Frozen", "Jumanji: The Next Level", "Star Wars: The Rise of Skywalker", "The Shape of Water"],
        correctAnswer: "The Shape of Water"
    },
    {
        question: "Which animated film, released in 2009, tells the story of a young boy who dreams of becoming a musician?",
        options: ["Encanto", "Luca", "Raya and the Last Dragon", "The Mitchells vs. the Machines", "Cruella", "Coco"],
        correctAnswer: "Coco"
    },
    {
        question: "Which superhero movie, released in 2010, features a dark and gritty version of Batman?",
        options: ["The Dark Knight Rises", "The Avengers", "The Amazing Spider-Man", "Skyfall", "The Hunger Games", "Man of Steel"],
        correctAnswer: "The Dark Knight Rises"
    },
    {
        question: "Which animated film, released in 2011, follows the story of a young girl who dreams of becoming a musician?",
        options: ["Encanto", "Luca", "Raya and the Last Dragon", "The Mitchells vs. the Machines", "Cruella", "Coco"],
        correctAnswer: "Encanto"
    }
];
