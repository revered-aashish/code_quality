import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuestionsList from './questionsList';
import QuestionPage from './questionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionsList />} />
        <Route path="/questions" element={<QuestionsList />} />
        <Route path="/questions/:id" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import QuestionsList from './questionsList';
// import QuestionPage from './questionPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<QuestionsList />} />
//         <Route path="/questions" element={<QuestionsList />} />
//         <Route path="/questions/:id" element={<QuestionPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
