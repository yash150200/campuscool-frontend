// // import React, { useState, useEffect } from "react";
// // //import "../styles/Quiz.css"; // for styling
// // import "../styles/quiz.css";

// // const QuizPage = () => {
// //   const [questions, setQuestions] = useState([]);
// //   const [answers, setAnswers] = useState({});
// //   const [submitted, setSubmitted] = useState(false);
// //   const [showAns, setShowAns] = useState(false);

// //   // Fetch 20 random questions when page loads
// //   useEffect(() => {
// //     fetch("https://opentdb.com/api.php?amount=20&type=multiple")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         const formatted = data.results.map((q) => ({
// //           question: decodeHTML(q.question),
// //           options: shuffleArray([...q.incorrect_answers, q.correct_answer].map(decodeHTML)),
// //           answer: decodeHTML(q.correct_answer),
// //         }));
// //         setQuestions(formatted);
// //       })
// //       .catch((err) => console.error("Error fetching questions:", err));
// //   }, []);

// //   // Helper to shuffle answers
// //   const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

// //   // Decode HTML entities from API text
// //   const decodeHTML = (str) => {
// //     const txt = document.createElement("textarea");
// //     txt.innerHTML = str;
// //     return txt.value;
// //   };

// //   // When student selects answer
// //   const handleOptionChange = (index, option) => {
// //     setAnswers({ ...answers, [index]: option });
// //   };

// //   // Calculate quiz score
// //   const calculateScore = () => {
// //     let score = 0;
// //     questions.forEach((q, i) => {
// //       if (answers[i] === q.answer) score++;
// //     });
// //     return score;
// //   };

// //   return (
// //     <div className="quiz-container">
// //       <h1 className="quiz-title">🎯 Random Quiz</h1>

// //       {questions.length === 0 && <p>Loading questions...</p>}

// //       {questions.map((q, i) => (
// //         <div key={i} className="quiz-question">
// //           <p><b>Q{i + 1}:</b> {q.question}</p>
// //           {q.options.map((opt, idx) => (
// //             <label key={idx} className="quiz-option">
// //               <input
// //                 type="radio"
// //                 name={`q${i}`}
// //                 value={opt}
// //                 checked={answers[i] === opt}
// //                 onChange={() => handleOptionChange(i, opt)}
// //                 disabled={submitted}
// //               />
// //               {opt}
// //             </label>
// //           ))}
// //           {showAns && <p className="correct-ans">✅ Correct: {q.answer}</p>}
// //         </div>
// //       ))}

// //       {!submitted ? (
// //         <button className="quiz-btn" onClick={() => setSubmitted(true)}>
// //           Submit Quiz
// //         </button>
// //       ) : (
// //         <h3 className="quiz-score">
// //           Your Score: {calculateScore()} / {questions.length}
// //         </h3>
// //       )}

// //       {submitted && (
// //         <button
// //           className="quiz-btn secondary"
// //           onClick={() => setShowAns(!showAns)}
// //         >
// //           {showAns ? "Hide Answers" : "Show Answers"}
// //         </button>
// //       )}
// //     </div>
// //   );
// // };

// // export default QuizPage;


// import React, { useState, useEffect } from "react";
// import "../styles/quiz.css";

// const QuizPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [showAns, setShowAns] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // ✅ Use a free CORS proxy to ensure request works
//     const url =
//       "https://api.allorigins.win/get?url=" +
//       encodeURIComponent("https://opentdb.com/api.php?amount=20&type=multiple");

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         const apiData = JSON.parse(data.contents); // unwrap proxied response

//         if (apiData.results && apiData.results.length > 0) {
//           const formatted = apiData.results.map((q) => ({
//             question: decodeHTML(q.question),
//             options: shuffleArray(
//               [...q.incorrect_answers, q.correct_answer].map(decodeHTML)
//             ),
//             answer: decodeHTML(q.correct_answer),
//           }));
//           setQuestions(formatted);
//         } else {
//           console.error("⚠️ No questions returned from API");
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("❌ Error fetching questions:", err);
//         setLoading(false);
//       });
//   }, []);

//   // Helper to shuffle answers
//   const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

//   // Decode HTML entities like &amp;
//   const decodeHTML = (str) => {
//     const txt = document.createElement("textarea");
//     txt.innerHTML = str;
//     return txt.value;
//   };

//   const handleOptionChange = (index, option) => {
//     setAnswers({ ...answers, [index]: option });
//   };

//   const calculateScore = () => {
//     let score = 0;
//     questions.forEach((q, i) => {
//       if (answers[i] === q.answer) score++;
//     });
//     return score;
//   };

//   return (
//     <div className="quiz-container">
//       <h1 className="quiz-title">🎯 Random Quiz</h1>

//       {loading && <p>Loading questions...</p>}

//       {!loading &&
//         questions.map((q, i) => (
//           <div key={i} className="quiz-question">
//             <p>
//               <b>Q{i + 1}:</b> {q.question}
//             </p>
//             {q.options.map((opt, idx) => (
//               <label key={idx} className="quiz-option">
//                 <input
//                   type="radio"
//                   name={`q${i}`}
//                   value={opt}
//                   checked={answers[i] === opt}
//                   onChange={() => handleOptionChange(i, opt)}
//                   disabled={submitted}
//                 />
//                 {opt}
//               </label>
//             ))}
//             {showAns && <p className="correct-ans">✅ Correct: {q.answer}</p>}
//           </div>
//         ))}

//       {!loading && !submitted ? (
//         <button className="quiz-btn" onClick={() => setSubmitted(true)}>
//           Submit Quiz
//         </button>
//       ) : (
//         !loading && (
//           <h3 className="quiz-score">
//             Your Score: {calculateScore()} / {questions.length}
//           </h3>
//         )
//       )}

//       {!loading && submitted && (
//         <button
//           className="quiz-btn secondary"
//           onClick={() => setShowAns(!showAns)}
//         >
//           {showAns ? "Hide Answers" : "Show Answers"}
//         </button>
//       )}
//     </div>
//   );
// };

// export default QuizPage;
import React, { useState, useEffect } from "react";
import "../styles/quiz.css";

const API_BASE = "http://localhost:5000";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showAns, setShowAns] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🔒 Lock state
  const [locked, setLocked] = useState(false);
  const [unlockPass, setUnlockPass] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/api/locks`)
      .then((res) => res.json())
      .then((data) => setLocked(data.quiz));
  }, []);

  useEffect(() => {
    const url =
      "https://api.allorigins.win/get?url=" +
      encodeURIComponent("https://opentdb.com/api.php?amount=20&type=multiple");

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const apiData = JSON.parse(data.contents);
        if (apiData.results && apiData.results.length > 0) {
          const formatted = apiData.results.map((q) => ({
            question: decodeHTML(q.question),
            options: shuffleArray(
              [...q.incorrect_answers, q.correct_answer].map(decodeHTML)
            ),
            answer: decodeHTML(q.correct_answer),
          }));
          setQuestions(formatted);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const decodeHTML = (str) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  };

  const handleOptionChange = (index, option) => {
    setAnswers({ ...answers, [index]: option });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    return score;
  };

  return (
    <div className="quiz-container">
      {locked && !unlocked ? (
        <div className="lock-screen">
          <h2>🔒 Quiz Page Locked</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={unlockPass}
            onChange={(e) => setUnlockPass(e.target.value)}
          />
          <button
            onClick={() =>
              unlockPass === "yash"
                ? setUnlocked(true)
                : alert("Wrong password!")
            }
          >
            Unlock
          </button>
        </div>
      ) : (
        <>
          <h1 className="quiz-title">🎯 Random Quiz</h1>

          {loading && <p>Loading questions...</p>}

          {!loading &&
            questions.map((q, i) => (
              <div key={i} className="quiz-question">
                <p>
                  <b>Q{i + 1}:</b> {q.question}
                </p>
                {q.options.map((opt, idx) => (
                  <label key={idx} className="quiz-option">
                    <input
                      type="radio"
                      name={`q${i}`}
                      value={opt}
                      checked={answers[i] === opt}
                      onChange={() => handleOptionChange(i, opt)}
                      disabled={submitted}
                    />
                    {opt}
                  </label>
                ))}
                {showAns && <p className="correct-ans">✅ Correct: {q.answer}</p>}
              </div>
            ))}

          {!loading && !submitted ? (
            <button className="quiz-btn" onClick={() => setSubmitted(true)}>
              Submit Quiz
            </button>
          ) : (
            !loading && (
              <h3 className="quiz-score">
                Your Score: {calculateScore()} / {questions.length}
              </h3>
            )
          )}

          {!loading && submitted && (
            <button
              className="quiz-btn secondary"
              onClick={() => setShowAns(!showAns)}
            >
              {showAns ? "Hide Answers" : "Show Answers"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default QuizPage;
