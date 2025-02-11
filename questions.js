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
    }
];