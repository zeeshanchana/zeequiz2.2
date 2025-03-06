const quizData = [
  {
    class: 6,
    subjects: [
      {
        name: "Mathematics",
        chapters: [
          {
            name: "Algebra",
            questions: {
              phase1:
              [
               
                {
                  "question": "What is 12 divided by 3?",
                  "options": ["2", "3", "4", "6"],
                  "answer": "4"
                },
                {
                  "question": "Which gas do plants absorb from the atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                
              ],
              phase2: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                 
              ],
              phase3: [
                
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                
              ],
            },
          },
          {
            name: "Geometry",
            questions: {
              phase1:
              [
                {
                  question: "What is the capital of France?",
                  options: ["Berlin", "Madrid", "Paris", "Rome"],
                  answer: "Paris"
                },
                {
                  question: "Which planet is known as the Red Planet?",
                  options: ["Earth", "Mars", "Jupiter", "Saturn"],
                  answer: "Mars"
                },
                {
                  question: "What is the square root of 64?",
                  options: ["6", "7", "8", "9"],
                  answer: "8"
                },
                {
                  question: "Who wrote 'Romeo and Juliet'?",
                  options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
                  answer: "William Shakespeare"
                },
                {
                  question: "What is the chemical symbol for water?",
                  options: ["H2O", "CO2", "O2", "NaCl"],
                  answer: "H2O"
                },
                {
                  question: "Which country is known as the Land of the Rising Sun?",
                  options: ["China", "Japan", "South Korea", "Thailand"],
                  answer: "Japan"
                },
                {
                  question: "What is the largest mammal in the world?",
                  options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
                  answer: "Blue Whale"
                },
                {
                  question: "What is 10 multiplied by 5?",
                  options: ["50", "15", "25", "100"],
                  answer: "50"
                },
                {
                  "question": "Which element has the atomic number 1?",
                  "options": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                  "answer": "Hydrogen"
                },
                {
                  "question": "What is the smallest prime number?",
                  "options": ["1", "2", "3", "5"],
                  "answer": "2"
                },
                {
                  "question": "Who painted the Mona Lisa?",
                  "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                  "answer": "Leonardo da Vinci"
                },
                {
                  "question": "What is the largest ocean on Earth?",
                  "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                  "answer": "Pacific Ocean"
                },
                {
                  "question": "What is 12 divided by 3?",
                  "options": ["2", "3", "4", "6"],
                  "answer": "4"
                },
                {
                  "question": "Which gas do plants absorb from the atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the longest river in the world?",
                  "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                  "answer": "Nile River"
                },
                {
                  "question": "What is the freezing point of water in Celsius?",
                  "options": ["0°C", "10°C", "-10°C", "100°C"],
                  "answer": "0°C"
                },
                {
                  "question": "Who developed the theory of relativity?",
                  "options": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
                  "answer": "Albert Einstein"
                },
                {
                  "question": "What is the capital of Australia?",
                  "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                  "answer": "Canberra"
                },
                {
                  "question": "What is the chemical symbol for gold?",
                  "options": ["Au", "Ag", "Fe", "Cu"],
                  "answer": "Au"
                },
                {
                  "question": "What is 7 multiplied by 8?",
                  "options": ["56", "64", "49", "72"],
                  "answer": "56"
                }
              ],
              phase2: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }
              ],
              phase3: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }, {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }
              ],
            },
          },
        ],
      },
      {
        name: "Science",
        chapters: [
          {
            name: "Physics",
            questions: {
              phase1:
              [
                {
                  question: "What is the capital of France?",
                  options: ["Berlin", "Madrid", "Paris", "Rome"],
                  answer: "Paris"
                },
                {
                  question: "Which planet is known as the Red Planet?",
                  options: ["Earth", "Mars", "Jupiter", "Saturn"],
                  answer: "Mars"
                },
                {
                  question: "What is the square root of 64?",
                  options: ["6", "7", "8", "9"],
                  answer: "8"
                },
                {
                  question: "Who wrote 'Romeo and Juliet'?",
                  options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
                  answer: "William Shakespeare"
                },
                {
                  question: "What is the chemical symbol for water?",
                  options: ["H2O", "CO2", "O2", "NaCl"],
                  answer: "H2O"
                },
                {
                  question: "Which country is known as the Land of the Rising Sun?",
                  options: ["China", "Japan", "South Korea", "Thailand"],
                  answer: "Japan"
                },
                {
                  question: "What is the largest mammal in the world?",
                  options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
                  answer: "Blue Whale"
                },
                {
                  question: "What is 10 multiplied by 5?",
                  options: ["50", "15", "25", "100"],
                  answer: "50"
                },
                {
                  "question": "Which element has the atomic number 1?",
                  "options": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                  "answer": "Hydrogen"
                },
                {
                  "question": "What is the smallest prime number?",
                  "options": ["1", "2", "3", "5"],
                  "answer": "2"
                },
                {
                  "question": "Who painted the Mona Lisa?",
                  "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                  "answer": "Leonardo da Vinci"
                },
                {
                  "question": "What is the largest ocean on Earth?",
                  "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                  "answer": "Pacific Ocean"
                },
                {
                  "question": "What is 12 divided by 3?",
                  "options": ["2", "3", "4", "6"],
                  "answer": "4"
                },
                {
                  "question": "Which gas do plants absorb from the atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the longest river in the world?",
                  "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                  "answer": "Nile River"
                },
                {
                  "question": "What is the freezing point of water in Celsius?",
                  "options": ["0°C", "10°C", "-10°C", "100°C"],
                  "answer": "0°C"
                },
                {
                  "question": "Who developed the theory of relativity?",
                  "options": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
                  "answer": "Albert Einstein"
                },
                {
                  "question": "What is the capital of Australia?",
                  "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                  "answer": "Canberra"
                },
                {
                  "question": "What is the chemical symbol for gold?",
                  "options": ["Au", "Ag", "Fe", "Cu"],
                  "answer": "Au"
                },
                {
                  "question": "What is 7 multiplied by 8?",
                  "options": ["56", "64", "49", "72"],
                  "answer": "56"
                }
              ],
              phase2: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }
              ],
              phase3: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }, {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }
              ],
            },
          },
        ],
      },
    ],
  },
  {
    class: 7,
    subjects: [
      {
        name: "Mathematics",
        chapters: [
          {
            name: "Algebra",
            questions: {
              phase1:
              [
               
                {
                  "question": "What is 12 divided by 3?",
                  "options": ["2", "3", "4", "6"],
                  "answer": "4"
                },
                {
                  "question": "Which gas do plants absorb from the atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                
              ],
              phase2: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                 
              ],
              phase3: [
                
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                
              ],
            },
          },
          {
            name: "Geometry",
            questions: {
              phase1:
              [
                {
                  question: "What is the capital of France?",
                  options: ["Berlin", "Madrid", "Paris", "Rome"],
                  answer: "Paris"
                },
                {
                  question: "Which planet is known as the Red Planet?",
                  options: ["Earth", "Mars", "Jupiter", "Saturn"],
                  answer: "Mars"
                },
                {
                  question: "What is the square root of 64?",
                  options: ["6", "7", "8", "9"],
                  answer: "8"
                },
                {
                  question: "Who wrote 'Romeo and Juliet'?",
                  options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
                  answer: "William Shakespeare"
                },
                {
                  question: "What is the chemical symbol for water?",
                  options: ["H2O", "CO2", "O2", "NaCl"],
                  answer: "H2O"
                },
                {
                  question: "Which country is known as the Land of the Rising Sun?",
                  options: ["China", "Japan", "South Korea", "Thailand"],
                  answer: "Japan"
                },
                {
                  question: "What is the largest mammal in the world?",
                  options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
                  answer: "Blue Whale"
                },
                {
                  question: "What is 10 multiplied by 5?",
                  options: ["50", "15", "25", "100"],
                  answer: "50"
                },
                {
                  "question": "Which element has the atomic number 1?",
                  "options": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                  "answer": "Hydrogen"
                },
                {
                  "question": "What is the smallest prime number?",
                  "options": ["1", "2", "3", "5"],
                  "answer": "2"
                },
                {
                  "question": "Who painted the Mona Lisa?",
                  "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                  "answer": "Leonardo da Vinci"
                },
                {
                  "question": "What is the largest ocean on Earth?",
                  "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                  "answer": "Pacific Ocean"
                },
                {
                  "question": "What is 12 divided by 3?",
                  "options": ["2", "3", "4", "6"],
                  "answer": "4"
                },
                {
                  "question": "Which gas do plants absorb from the atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the longest river in the world?",
                  "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                  "answer": "Nile River"
                },
                {
                  "question": "What is the freezing point of water in Celsius?",
                  "options": ["0°C", "10°C", "-10°C", "100°C"],
                  "answer": "0°C"
                },
                {
                  "question": "Who developed the theory of relativity?",
                  "options": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
                  "answer": "Albert Einstein"
                },
                {
                  "question": "What is the capital of Australia?",
                  "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                  "answer": "Canberra"
                },
                {
                  "question": "What is the chemical symbol for gold?",
                  "options": ["Au", "Ag", "Fe", "Cu"],
                  "answer": "Au"
                },
                {
                  "question": "What is 7 multiplied by 8?",
                  "options": ["56", "64", "49", "72"],
                  "answer": "56"
                }
              ],
              phase2: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }
              ],
              phase3: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }, {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }
              ],
            },
          },
        ],
      },
      {
        name: "Science",
        chapters: [
          {
            name: "Physics",
            questions: {
              phase1:
              [
                {
                  question: "What is the capital of France?",
                  options: ["Berlin", "Madrid", "Paris", "Rome"],
                  answer: "Paris"
                },
                {
                  question: "Which planet is known as the Red Planet?",
                  options: ["Earth", "Mars", "Jupiter", "Saturn"],
                  answer: "Mars"
                },
                {
                  question: "What is the square root of 64?",
                  options: ["6", "7", "8", "9"],
                  answer: "8"
                },
                {
                  question: "Who wrote 'Romeo and Juliet'?",
                  options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
                  answer: "William Shakespeare"
                },
                {
                  question: "What is the chemical symbol for water?",
                  options: ["H2O", "CO2", "O2", "NaCl"],
                  answer: "H2O"
                },
                {
                  question: "Which country is known as the Land of the Rising Sun?",
                  options: ["China", "Japan", "South Korea", "Thailand"],
                  answer: "Japan"
                },
                {
                  question: "What is the largest mammal in the world?",
                  options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
                  answer: "Blue Whale"
                },
                {
                  question: "What is 10 multiplied by 5?",
                  options: ["50", "15", "25", "100"],
                  answer: "50"
                },
                {
                  "question": "Which element has the atomic number 1?",
                  "options": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                  "answer": "Hydrogen"
                },
                {
                  "question": "What is the smallest prime number?",
                  "options": ["1", "2", "3", "5"],
                  "answer": "2"
                },
                {
                  "question": "Who painted the Mona Lisa?",
                  "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                  "answer": "Leonardo da Vinci"
                },
                {
                  "question": "What is the largest ocean on Earth?",
                  "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                  "answer": "Pacific Ocean"
                },
                {
                  "question": "What is 12 divided by 3?",
                  "options": ["2", "3", "4", "6"],
                  "answer": "4"
                },
                {
                  "question": "Which gas do plants absorb from the atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the longest river in the world?",
                  "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                  "answer": "Nile River"
                },
                {
                  "question": "What is the freezing point of water in Celsius?",
                  "options": ["0°C", "10°C", "-10°C", "100°C"],
                  "answer": "0°C"
                },
                {
                  "question": "Who developed the theory of relativity?",
                  "options": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
                  "answer": "Albert Einstein"
                },
                {
                  "question": "What is the capital of Australia?",
                  "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                  "answer": "Canberra"
                },
                {
                  "question": "What is the chemical symbol for gold?",
                  "options": ["Au", "Ag", "Fe", "Cu"],
                  "answer": "Au"
                },
                {
                  "question": "What is 7 multiplied by 8?",
                  "options": ["56", "64", "49", "72"],
                  "answer": "56"
                }
              ],
              phase2: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }
              ],
              phase3: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }, {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }
              ],
            },
          },
        ],
      },
    ],
  },  {
    class: 8,
    subjects: [
      {
        name: "Mathematics",
        chapters: [
          {
            name: "Algebra",
            questions: {
              phase1:
              [
               
                {
                  "question": "What is 12 divided by 3?",
                  "options": ["2", "3", "4", "6"],
                  "answer": "4"
                },
                {
                  "question": "Which gas do plants absorb from the atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                
              ],
              phase2: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                 
              ],
              phase3: [
                
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                
              ],
            },
          },
          {
            name: "Geometry",
            questions: {
              phase1:
              [
                {
                  question: "What is the capital of France?",
                  options: ["Berlin", "Madrid", "Paris", "Rome"],
                  answer: "Paris"
                },
                {
                  question: "Which planet is known as the Red Planet?",
                  options: ["Earth", "Mars", "Jupiter", "Saturn"],
                  answer: "Mars"
                },
                {
                  question: "What is the square root of 64?",
                  options: ["6", "7", "8", "9"],
                  answer: "8"
                },
                {
                  question: "Who wrote 'Romeo and Juliet'?",
                  options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
                  answer: "William Shakespeare"
                },
                {
                  question: "What is the chemical symbol for water?",
                  options: ["H2O", "CO2", "O2", "NaCl"],
                  answer: "H2O"
                },
                {
                  question: "Which country is known as the Land of the Rising Sun?",
                  options: ["China", "Japan", "South Korea", "Thailand"],
                  answer: "Japan"
                },
                {
                  question: "What is the largest mammal in the world?",
                  options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
                  answer: "Blue Whale"
                },
                {
                  question: "What is 10 multiplied by 5?",
                  options: ["50", "15", "25", "100"],
                  answer: "50"
                },
                {
                  "question": "Which element has the atomic number 1?",
                  "options": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                  "answer": "Hydrogen"
                },
                {
                  "question": "What is the smallest prime number?",
                  "options": ["1", "2", "3", "5"],
                  "answer": "2"
                },
                {
                  "question": "Who painted the Mona Lisa?",
                  "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                  "answer": "Leonardo da Vinci"
                },
                {
                  "question": "What is the largest ocean on Earth?",
                  "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                  "answer": "Pacific Ocean"
                },
                {
                  "question": "What is 12 divided by 3?",
                  "options": ["2", "3", "4", "6"],
                  "answer": "4"
                },
                {
                  "question": "Which gas do plants absorb from the atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the longest river in the world?",
                  "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                  "answer": "Nile River"
                },
                {
                  "question": "What is the freezing point of water in Celsius?",
                  "options": ["0°C", "10°C", "-10°C", "100°C"],
                  "answer": "0°C"
                },
                {
                  "question": "Who developed the theory of relativity?",
                  "options": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
                  "answer": "Albert Einstein"
                },
                {
                  "question": "What is the capital of Australia?",
                  "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                  "answer": "Canberra"
                },
                {
                  "question": "What is the chemical symbol for gold?",
                  "options": ["Au", "Ag", "Fe", "Cu"],
                  "answer": "Au"
                },
                {
                  "question": "What is 7 multiplied by 8?",
                  "options": ["56", "64", "49", "72"],
                  "answer": "56"
                }
              ],
              phase2: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }
              ],
              phase3: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }, {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }
              ],
            },
          },
        ],
      },
      {
        name: "Science",
        chapters: [
          {
            name: "Physics",
            questions: {
              phase1:
              [
                {
                  question: "What is the capital of France?",
                  options: ["Berlin", "Madrid", "Paris", "Rome"],
                  answer: "Paris"
                },
                {
                  question: "Which planet is known as the Red Planet?",
                  options: ["Earth", "Mars", "Jupiter", "Saturn"],
                  answer: "Mars"
                },
                {
                  question: "What is the square root of 64?",
                  options: ["6", "7", "8", "9"],
                  answer: "8"
                },
                {
                  question: "Who wrote 'Romeo and Juliet'?",
                  options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
                  answer: "William Shakespeare"
                },
                {
                  question: "What is the chemical symbol for water?",
                  options: ["H2O", "CO2", "O2", "NaCl"],
                  answer: "H2O"
                },
                {
                  question: "Which country is known as the Land of the Rising Sun?",
                  options: ["China", "Japan", "South Korea", "Thailand"],
                  answer: "Japan"
                },
                {
                  question: "What is the largest mammal in the world?",
                  options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
                  answer: "Blue Whale"
                },
                {
                  question: "What is 10 multiplied by 5?",
                  options: ["50", "15", "25", "100"],
                  answer: "50"
                },
                {
                  "question": "Which element has the atomic number 1?",
                  "options": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                  "answer": "Hydrogen"
                },
                {
                  "question": "What is the smallest prime number?",
                  "options": ["1", "2", "3", "5"],
                  "answer": "2"
                },
                {
                  "question": "Who painted the Mona Lisa?",
                  "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                  "answer": "Leonardo da Vinci"
                },
                {
                  "question": "What is the largest ocean on Earth?",
                  "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                  "answer": "Pacific Ocean"
                },
                {
                  "question": "What is 12 divided by 3?",
                  "options": ["2", "3", "4", "6"],
                  "answer": "4"
                },
                {
                  "question": "Which gas do plants absorb from the atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the longest river in the world?",
                  "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                  "answer": "Nile River"
                },
                {
                  "question": "What is the freezing point of water in Celsius?",
                  "options": ["0°C", "10°C", "-10°C", "100°C"],
                  "answer": "0°C"
                },
                {
                  "question": "Who developed the theory of relativity?",
                  "options": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
                  "answer": "Albert Einstein"
                },
                {
                  "question": "What is the capital of Australia?",
                  "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                  "answer": "Canberra"
                },
                {
                  "question": "What is the chemical symbol for gold?",
                  "options": ["Au", "Ag", "Fe", "Cu"],
                  "answer": "Au"
                },
                {
                  "question": "What is 7 multiplied by 8?",
                  "options": ["56", "64", "49", "72"],
                  "answer": "56"
                }
              ],
              phase2: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }
              ],
              phase3: [
                {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }, {
                  "question": "What is 3 + 5?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which animal is known as the 'King of the Jungle'?",
                  "options": ["Elephant", "Lion", "Tiger", "Gorilla"],
                  "answer": "Lion"
                },
                {
                  "question": "What is the capital of Canada?",
                  "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                  "answer": "Ottawa"
                },
                {
                  "question": "What is the chemical symbol for oxygen?",
                  "options": ["O", "Ox", "O2", "Om"],
                  "answer": "O"
                },
                {
                  "question": "What is 15 - 7?",
                  "options": ["6", "7", "8", "9"],
                  "answer": "8"
                },
                {
                  "question": "Which planet is closest to the Sun?",
                  "options": ["Earth", "Venus", "Mercury", "Mars"],
                  "answer": "Mercury"
                },
                {
                  "question": "What is the largest continent by area?",
                  "options": ["Africa", "Europe", "Asia", "North America"],
                  "answer": "Asia"
                },
                {
                  "question": "What is 9 multiplied by 6?",
                  "options": ["45", "54", "63", "72"],
                  "answer": "54"
                },
                {
                  "question": "Who invented the telephone?",
                  "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
                  "answer": "Alexander Graham Bell"
                },
                {
                  "question": "What is the boiling point of water in Celsius?",
                  "options": ["90°C", "100°C", "110°C", "120°C"],
                  "answer": "100°C"
                },
                {
                  "question": "What is the smallest country in the world?",
                  "options": ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                  "answer": "Vatican City"
                },
                {
                  "question": "What is 20 divided by 4?",
                  "options": ["4", "5", "6", "7"],
                  "answer": "5"
                },
                {
                  "question": "Which gas is most abundant in Earth's atmosphere?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                  "answer": "Nitrogen"
                },
                {
                  "question": "What is the capital of Japan?",
                  "options": ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
                  "answer": "Tokyo"
                },
                {
                  "question": "What is 12 multiplied by 3?",
                  "options": ["24", "36", "48", "60"],
                  "answer": "36"
                },
                {
                  "question": "Who wrote 'To Kill a Mockingbird'?",
                  "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
                  "answer": "Harper Lee"
                },
                {
                  "question": "What is the chemical symbol for sodium?",
                  "options": ["So", "Na", "Sd", "No"],
                  "answer": "Na"
                },
                {
                  "question": "What is 18 + 12?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is famous for the pyramids?",
                  "options": ["Greece", "Egypt", "Mexico", "India"],
                  "answer": "Egypt"
                },
                {
                  "question": "What is the capital of Brazil?",
                  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                  "answer": "Brasília"
                },
                {
                  "question": "What is 25 - 13?",
                  "options": ["10", "11", "12", "13"],
                  "answer": "12"
                },
                {
                  "question": "Which planet has the most moons?",
                  "options": ["Earth", "Saturn", "Jupiter", "Mars"],
                  "answer": "Jupiter"
                },
                {
                  "question": "What is the chemical symbol for carbon?",
                  "options": ["Ca", "Co", "C", "Cr"],
                  "answer": "C"
                },
                {
                  "question": "What is 7 multiplied by 9?",
                  "options": ["56", "63", "72", "81"],
                  "answer": "63"
                },
                {
                  "question": "Who discovered penicillin?",
                  "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
                  "answer": "Alexander Fleming"
                },
                {
                  "question": "What is the capital of Italy?",
                  "options": ["Venice", "Rome", "Milan", "Florence"],
                  "answer": "Rome"
                },
                {
                  "question": "What is 100 divided by 10?",
                  "options": ["5", "10", "15", "20"],
                  "answer": "10"
                },
                {
                  "question": "Which gas do humans exhale?",
                  "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                  "answer": "Carbon Dioxide"
                },
                {
                  "question": "What is the capital of Germany?",
                  "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"],
                  "answer": "Berlin"
                },
                {
                  "question": "What is 14 + 16?",
                  "options": ["28", "30", "32", "34"],
                  "answer": "30"
                },
                {
                  "question": "Which country is known for the Great Wall?",
                  "options": ["Japan", "China", "India", "South Korea"],
                  "answer": "China"
                },
                {
                  "question": "What is the chemical symbol for iron?",
                  "options": ["Ir", "Fe", "In", "Io"],
                  "answer": "Fe"
                },
                {
                  "question": "What is 8 multiplied by 7?",
                  "options": ["48", "56", "64", "72"],
                  "answer": "56"
                },
                {
                  "question": "Who wrote '1984'?",
                  "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
                  "answer": "George Orwell"
                },
                {
                  "question": "What is the capital of Spain?",
                  "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
                  "answer": "Madrid"
                },
                {
                  "question": "What is 50 - 25?",
                  "options": ["20", "25", "30", "35"],
                  "answer": "25"
                },
                {
                  "question": "Which planet is known for its rings?",
                  "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
                  "answer": "Saturn"
                },
                {
                  "question": "What is the chemical symbol for silver?",
                  "options": ["Si", "Ag", "Sr", "Sv"],
                  "answer": "Ag"
                },
                {
                  "question": "What is 11 multiplied by 4?",
                  "options": ["40", "44", "48", "52"],
                  "answer": "44"
                }
              ],
            },
          },
        ],
      },
    ],
  },


  // Repeat for classes 8 and 9
];

export default quizData;
