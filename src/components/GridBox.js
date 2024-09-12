import React,{useEffect,useState} from "react";
import "../styles/grid-box.css";
import axios from "axios";

const GridBox = () => {


  const wordLength = 5; 
  const maximumGuesses = 6; 

 
  const [guesses, setGuesses] = useState(
    Array.from({ length: maximumGuesses }, () =>
      Array(wordLength).fill({ letter: "", status: "" })
    )
  );

  const [currentRowVal, setCurrentRowVal] = useState(0); 
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0); 
  const [currentGuess, setCurrentGuess] = useState(""); 
  const [validatedResult, setValidatedResult] = useState(null);
  
  console.log("current guess",currentGuess)


  useEffect(() => {
    const handleKeyDown = (e) => {


      const key = e.key.toUpperCase();


      if (/^[A-Z]$/.test(key) && currentLetterIndex < wordLength) {
        const newGuesses = [...guesses];


        newGuesses[currentRowVal][currentLetterIndex] = {
          letter: key,
          status: "",
        };
        setGuesses(newGuesses);
        setCurrentLetterIndex(currentLetterIndex + 1); 
      }

    
      if (e.key === "Backspace" && currentLetterIndex > 0) {
        const newGuesses = [...guesses]


        newGuesses[currentRowVal][currentLetterIndex - 1] = {
          letter: "",
          status: "",
        };
        setGuesses(newGuesses);
        setCurrentLetterIndex(currentLetterIndex - 1); 
      }

  
      if (e.key === "Enter" && currentLetterIndex === wordLength) {
        const guess = guesses[currentRowVal].map((letter) => letter?.letter).join("");
        setCurrentGuess(guess); 
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentLetterIndex, guesses, currentRowVal]);


  useEffect(() => {

    const validateGuess = async () => {
      if (currentGuess.length === wordLength) {
        
          const response = await fetch("https://wordle-apis.vercel.app/api/validate/", 
          
          {
            method: "POST",


            headers: {


              "Content-Type": "application/json",
            },
            body: JSON.stringify({guess:currentGuess}), 
          });

          const result = await response.json();
          console.log("api response......", result); 

          
          (result.is_valid_word) && setValidatedResult(result.score); 
          
          
    
      }

      // axios.post('https://wordle-apis.vercel.app/api/validate/', {
      //   firstName: 'Fred',
      //   lastName: 'Flintstone'
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    };

    validateGuess();
  }, [currentGuess]); 

  useEffect(() => {
    if (validatedResult && currentGuess.length === wordLength) {
      const newGuesses = [...guesses];


      const newGuessRow = guesses[currentRowVal].map((letter, index) => {
        let status = "grey"; 

        if (validatedResult[index] === 0) {
          status = "grey-color"; 
        }
        if (validatedResult[index] === 1) {
          status = "green-color"; 
        } else if (validatedResult[index] === 2) {
          status = "yellow-color"; 
        }

        return { ...letter, status };
      });

      newGuesses[currentRowVal] = newGuessRow;
      setGuesses(newGuesses);
      setCurrentRowVal(currentRowVal + 1);
      setCurrentLetterIndex(0); 
      setValidatedResult();
    }
  }, [validatedResult]); 

  const retriveColorClass = (color) => {
    if (color === "green-color"){
      return "green-color-square"
    } 
    if (color === "yellow-color") {
      return "yellow-color-square"
    }
    if(color === 'grey-color'){
      return " grey-color-square"
    } 
    return "white-color-square";
  };
  return (
    <div>
    <div className="grid-box">
      {guesses.map((word, hor) => (
        <div className="grid-horizontal" key={hor}>
          {word.map((letter, ver) => (
            <div className={`grid-square ${retriveColorClass(letter.status)}`} key={ver}>
              {letter?.letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  );
};

export default GridBox;
