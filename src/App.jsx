import './App.css'

function App() {
  const techTerms = [
    'Software Engineering', 'DevOps', 'JavaScript', 'Java', 'C++', 'Python', 
    'React', 'Node.js', 'Docker', 'Kubernetes', 'AWS', 'Git', 'MongoDB', 
    'PostgreSQL', 'TypeScript', 'GraphQL', 'REST API', 'Microservices',
    'Machine Learning', 'AI', 'Cloud Computing', 'Cybersecurity', 'Agile',
    'CI/CD', 'Linux', 'Redis', 'Nginx', 'Apache', 'MySQL', 'Firebase'
  ];

  return (
    <div className="App">
      <div className="floating-terms">
        {techTerms.map((term, index) => (
          <span 
            key={index} 
            className="floating-term" 
            style={{
              animationDelay: `${Math.random() * 8}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 5}s`
            }}
          >
            {term}
          </span>
        ))}
      </div>
      
      <div className="content">
        <div className="welcome-container">
          <h1 className="welcome-title">Welcome to NodeScape</h1>
          <p className="welcome-subtitle">Explore the world of Modern Development</p>
          <div className="accent-line"></div>
        </div>
      </div>
    </div>
  )
}

export default App