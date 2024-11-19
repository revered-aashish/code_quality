// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom'; // Import useParams

// function QuestionPage() {
//   const { id } = useParams(); // Get the question ID from the URL
//   const [code, setCode] = useState("");

//   const questions = {
//     1: {
//       title: "Implement a Library Management System",
//       description: "Create a system to manage books, members, and staff. Use OOP principles effectively.",
//     },
//     2: {
//       title: "Develop an Online Shopping Cart",
//       description: "Design a shopping cart with features like adding/removing items, and checkout using OOP concepts.",
//     },
//     3: {
//       title: "Design a Social Media Platform",
//       description: "Build a basic social media platform with posts, likes, and comments. Focus on class design.",
//     },
//   };

//   const question = questions[id];

//   if (!question) {
//     return <h2>Question not found!</h2>;
//   }

//   const handleCodeChange = (event) => {
//     setCode(event.target.value);
//   };

//   const handleJudgeClick = () => {
//     // Placeholder for AI integration
//     alert("Code sent for evaluation!");
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
//       <div style={{ flex: 1, padding: '20px', borderRight: '1px solid #ccc' }}>
//         <h2>{question.title}</h2>
//         <p>{question.description}</p>
//       </div>
//       <div style={{ flex: 2, padding: '20px' }}>
//         <textarea
//           value={code}
//           onChange={handleCodeChange}
//           placeholder="Write your code here..."
//           style={{
//             width: '100%',
//             height: 'calc(100% - 60px)',
//             fontFamily: 'monospace',
//             fontSize: '16px',
//             padding: '10px',
//             boxSizing: 'border-box',
//             borderRadius: '5px',
//             border: '1px solid #ddd',
//           }}
//         />
//         <button
//           onClick={handleJudgeClick}
//           style={{
//             marginTop: '10px',
//             padding: '10px 20px',
//             backgroundColor: '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           Judge
//         </button>
//       </div>
//     </div>
//   );
// }

// export default QuestionPage;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

function QuestionPage() {
  const { id } = useParams(); // Get the question ID from the URL
  const [code, setCode] = useState("");
  const [analysisResult, setAnalysisResult] = useState(""); // State to store the API response

  const questions = {
    1: {
      title: "Implement a Library Management System",
      description: "Create a system to manage books, members, and staff. Use OOP principles effectively.",
    },
    2: {
      title: "Develop an Online Shopping Cart",
      description: "Design a shopping cart with features like adding/removing items, and checkout using OOP concepts.",
    },
    3: {
      title: "Design a Social Media Platform",
      description: "Build a basic social media platform with posts, likes, and comments. Focus on class design.",
    },
  };

  const question = questions[id];

  if (!question) {
    return <h2>Question not found!</h2>;
  }

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleJudgeClick = async () => {
    // Send the code to the backend API for evaluation
    try {
      const response = await fetch('http://localhost:8000/evaluate-code/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code }), // Sending code as a JSON object
      });

      if (!response.ok) {
        throw new Error('Failed to analyze code');
      }

      const result = await response.json();
      setAnalysisResult(result.analysis.principles); // Set the response text to be displayed
    } catch (error) {
      console.error('Error:', error);
      setAnalysisResult('Error evaluating the code. Please try again later.');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ flex: 1, padding: '20px', borderRight: '1px solid #ccc' }}>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
      </div>
      <div style={{ flex: 2, padding: '20px' }}>
        <textarea
          value={code}
          onChange={handleCodeChange}
          placeholder="Write your code here..."
          style={{
            width: '100%',
            height: 'calc(100% - 60px)',
            fontFamily: 'monospace',
            fontSize: '16px',
            padding: '10px',
            boxSizing: 'border-box',
            borderRadius: '5px',
            border: '1px solid #ddd',
          }}
        />
        <button
          onClick={handleJudgeClick}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Judge
        </button>
        {analysisResult && (
          <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <h3>Code Evaluation Result:</h3>
            <p>{analysisResult}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionPage;


















































































































































// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // Import useParams

// function QuestionPage() {
//   const { id } = useParams(); // Get the question ID from the URL
//   const [code, setCode] = useState("");
//   const [result, setResult] = useState(""); // To store result of code evaluation
//   const [question, setQuestion] = useState(null);

//   useEffect(() => {
//     // Fetch the question details from the JSON file
//     fetch('/data/questionsDetails.json')
//       .then((response) => response.json())
//       .then((data) => {
//         setQuestion(data[id]);
//       });
//   }, [id]);

//   if (!question) {
//     return <h2>Question not found!</h2>;
//   }

//   const handleCodeChange = (event) => {
//     setCode(event.target.value);
//   };

//   const handleJudgeClick = () => {
//     // Simulate a code evaluation process and return a result
//     const evaluationResult = evaluateCode(code);
//     setResult(evaluationResult);
//   };

//   const evaluateCode = (code) => {
//     // Simulate evaluation logic here
//     if (code.includes("class")) {
//       return "Code passed evaluation! ✔️";
//     } else {
//       return "Code failed evaluation. Please use proper OOP principles. ❌";
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Arial, sans-serif', height: '100vh' }}>
//       <div style={{ padding: '20px', backgroundColor: '#f8f9fa', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
//         <h2>{question.title}</h2>
//         <p>{question.description}</p>
//       </div>

//       <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', flex: 1 }}>
//         <textarea
//           value={code}
//           onChange={handleCodeChange}
//           placeholder="Write your code here..."
//           style={{
//             width: '100%',
//             height: '300px',
//             fontFamily: 'monospace',
//             fontSize: '16px',
//             padding: '10px',
//             boxSizing: 'border-box',
//             borderRadius: '5px',
//             border: '1px solid #ddd',
//             marginBottom: '20px',
//             resize: 'none',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//           }}
//         />
//         <button
//           onClick={handleJudgeClick}
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             marginBottom: '20px',
//           }}
//         >
//           Judge
//         </button>

//         {/* Display the result */}
//         <div style={{
//           padding: '10px',
//           backgroundColor: '#f1f1f1',
//           border: '1px solid #ddd',
//           borderRadius: '5px',
//           fontSize: '16px',
//           color: result.includes('✔️') ? 'green' : 'red',
//           textAlign: 'center'
//         }}>
//           {result}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuestionPage;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function QuestionPage() {
//   const { id } = useParams(); // Get the id from the URL
//   const [question, setQuestion] = useState(null);
//   const [code, setCode] = useState("");

//   useEffect(() => {
//     fetch('/data/questionsDetails.json')
//       .then((response) => response.json())
//       .then((data) => {
//         // Check if the data is an array or an object
//         if (Array.isArray(data)) {
//           // Array-based structure, find by id
//           const foundQuestion = data.find((q) => q.id === Number(id)); // Convert id to number
//           setQuestion(foundQuestion);
//         } else {
//           // Object-based structure, use id as key
//           setQuestion(data[id]);
//         }
//       });
//   }, [id]);

//   const handleCodeChange = (event) => {
//     setCode(event.target.value);
//   };

//   const handleJudgeClick = () => {
//     // Placeholder for AI integration
//     alert("Code sent for evaluation!");
//   };

//   if (!question) {
//     return <h2>Question not found!</h2>;
//   }

//   return (
//     <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
//       <div style={{ flex: 1, padding: '20px', borderRight: '1px solid #ccc' }}>
//         <h2>{question.title}</h2>
//         <p>{question.description}</p>
//       </div>
//       <div style={{ flex: 2, padding: '20px' }}>
//         <textarea
//           value={code}
//           onChange={handleCodeChange}
//           placeholder="Write your code here..."
//           style={{
//             width: '100%',
//             height: 'calc(100% - 60px)',
//             fontFamily: 'monospace',
//             fontSize: '16px',
//             padding: '10px',
//             boxSizing: 'border-box',
//             borderRadius: '5px',
//             border: '1px solid #ddd',
//           }}
//         />
//         <button
//           onClick={handleJudgeClick}
//           style={{
//             marginTop: '10px',
//             padding: '10px 20px',
//             backgroundColor: '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           Judge
//         </button>
//       </div>
//     </div>
//   );
// }

// export default QuestionPage;
