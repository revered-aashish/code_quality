import React from 'react';
import './App.css'; // Import CSS for consistent styling

const questions = [
  { id: 1, title: "Implement a Library Management System" },
  { id: 2, title: "Develop an Online Shopping Cart" },
  { id: 3, title: "Design a Social Media Platform" },
];

function QuestionsList() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#007bff' }}>Questions List</h1>
      <ul style={{ listStyleType: 'none', padding: 0, maxWidth: '600px', margin: '0 auto' }}>
        {questions.map((question) => (
          <li
            key={question.id}
            style={{
              margin: '10px 0',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <a
              href={`/questions/${question.id}`}
              style={{
                textDecoration: 'none',
                color: '#007bff',
                fontSize: '18px',
              }}
            >
              {question.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionsList;


// import React, { useEffect, useState } from 'react';
// import './App.css'; // Import CSS for consistent styling

// function QuestionsList() {
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     // Fetch the questions list from the JSON file
//     fetch('/data/questionsList.json')
//       .then((response) => response.json())
//       .then((data) => setQuestions(data));
//   }, []);

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1 style={{ textAlign: 'center', color: '#007bff' }}>Questions List</h1>
//       <ul style={{ listStyleType: 'none', padding: 0, maxWidth: '600px', margin: '0 auto' }}>
//         {questions.map((question) => (
//           <li
//             key={question.id}
//             style={{
//               margin: '10px 0',
//               padding: '15px',
//               border: '1px solid #ddd',
//               borderRadius: '5px',
//               backgroundColor: '#f9f9f9',
//               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <a
//               href={`/questions/${question.id}`}
//               style={{
//                 textDecoration: 'none',
//                 color: '#007bff',
//                 fontSize: '18px',
//               }}
//             >
//               {question.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default QuestionsList;


// import React from 'react';
// import './App.css'; // Import CSS for consistent styling

// const questions = [
//   { id: 1, title: "Implement a Library Management System" },
//   { id: 2, title: "Develop an Online Shopping Cart" },
//   { id: 3, title: "Design a Social Media Platform" },
// ];

// function QuestionsList() {
//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1 style={{ textAlign: 'center', color: '#007bff' }}>Questions List</h1>
//       <ul style={{ listStyleType: 'none', padding: 0, maxWidth: '600px', margin: '0 auto' }}>
//         {questions.map((question) => (
//           <li
//             key={question.id}
//             style={{
//               margin: '10px 0',
//               padding: '15px',
//               border: '1px solid #ddd',
//               borderRadius: '5px',
//               backgroundColor: '#f9f9f9',
//             }}
//           >
//             <a
//               href={`/questions/${question.id}`}
//               style={{
//                 textDecoration: 'none',
//                 color: '#007bff',
//                 fontSize: '18px',
//               }}
//             >
//               {question.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default QuestionsList;
