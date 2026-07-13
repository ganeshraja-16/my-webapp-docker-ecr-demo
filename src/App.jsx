function App() {
  return (
    <div className="container">
      <h1>🚀 React App via Docker + AWS ECR</h1>
      <p>This app was built with Vite, containerized using a multi-step Dockerfile, built automatically by GitHub Actions, and pushed to AWS Elastic Container Registry.</p>
      <div className="badge">Container Status: Live ✅</div>
      <div className="footer">Pulled from AWS ECR and running locally on port 3000</div>
    </div>
  )
}

export default App
