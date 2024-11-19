// import React, { useState } from "react";

// const CodeEvaluator = () => {
//     const [code, setCode] = useState("");
//     const [analysis, setAnalysis] = useState(null);
//     const [error, setError] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setIsLoading(true);
//         setError("");
//         setAnalysis(null);

//         try {
//             const response = await fetch("http://127.0.0.1:8000/evaluate-code/", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ code }),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setAnalysis(data.analysis);
//             } else {
//                 const err = await response.json();
//                 setError(err.detail || "An error occurred while processing your request.");
//             }
//         } catch (error) {
//             setError("Failed to connect to the server. Please try again.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div style={{ padding: "20px" }}>
//             <h1>Code Quality Evaluator</h1>
//             <form onSubmit={handleSubmit}>
//                 <textarea
//                     value={code}
//                     onChange={(e) => setCode(e.target.value)}
//                     rows="10"
//                     cols="50"
//                     placeholder="Write your code here..."
//                     style={{ display: "block", width: "100%", margin: "10px 0" }}
//                 ></textarea>
//                 <button type="submit" disabled={isLoading}>
//                     {isLoading ? "Judging..." : "Judge"}
//                 </button>
//             </form>
//             {error && <p style={{ color: "red" }}>{error}</p>}
//             {analysis && (
//                 <div>
//                     <h2>Analysis Result</h2>
//                     <pre>{JSON.stringify(analysis, null, 2)}</pre>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CodeEvaluator;

import React, { useState } from "react";

function CodeEvaluator({ initialCode }) {
    const [code, setCode] = useState(initialCode); // Store the code entered by the user
    const [result, setResult] = useState(""); // Store the result of the code evaluation

    const handleJudgeClick = async () => {
        // Send the code to the backend for analysis
        const response = await fetch("/evaluate-code/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
        });

        const data = await response.json();
        setResult(data.analysis); // Display the analysis result
    };

    return (
        <div>
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={{ width: "100%", height: "200px", padding: "10px", fontSize: "14px" }}
            />
            <button
                onClick={handleJudgeClick}
                style={{
                    padding: "10px 20px",
                    marginTop: "10px",
                    cursor: "pointer",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                }}
            >
                Judge
            </button>
            <div
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "5px",
                    fontFamily: "monospace",
                    whiteSpace: "pre-wrap",
                }}
            >
                {result}
            </div>
        </div>
    );
}

export default CodeEvaluator;
