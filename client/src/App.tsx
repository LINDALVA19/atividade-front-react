import { useState, useEffect } from 'react';

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [tema, setTema] = useState('claro');
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado) {
      setTema(temaGuardado);
      document.body.style.backgroundColor = temaGuardado === 'escuro' ? '#1a1a1a' : '#ffffff';
      document.body.style.color = temaGuardado === 'escuro' ? '#ffffff' : '#000000';
    }
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(c => c + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const alternarTema = () => {
    const novoTema = tema === 'claro' ? 'escuro' : 'claro';
    setTema(novoTema);
    localStorage.setItem('tema', novoTema);
    document.body.style.backgroundColor = novoTema === 'escuro' ? '#1a1a1a' : '#ffffff';
    document.body.style.color = novoTema === 'escuro' ? '#ffffff' : '#000000';
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button 
        onClick={() => setMenuAberto(!menuAberto)}
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          cursor: 'pointer',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: tema === 'escuro' ? '#333' : '#fff'
        }}
        data-testid="button-menu"
      >
        {menuAberto ? 'Fechar Menu' : 'Abrir Menu'}
      </button>

      {menuAberto && (
        <div style={{
          border: '1px solid #ccc',
          padding: '15px',
          marginBottom: '20px',
          borderRadius: '4px',
          backgroundColor: tema === 'escuro' ? '#2a2a2a' : '#f5f5f5'
        }}>
          <h3 style={{ marginTop: 0 }}>Menu</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="/" style={{ color: tema === 'escuro' ? '#88ccff' : '#0066cc' }}>
                🏠 Home
              </a>
            </li>
          </ul>
          <button
            onClick={alternarTema}
            style={{
              padding: '8px 15px',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: tema === 'escuro' ? '#333' : '#fff',
              marginTop: '10px'
            }}
            data-testid="button-tema"
          >
            {tema === 'claro' ? '🌙 Tema Escuro' : '☀️ Tema Claro'}
          </button>
        </div>
      )}

      <h1>📰 Página Inicial</h1>
      
      <div style={{
        border: '1px solid #ccc',
        padding: '20px',
        marginTop: '20px',
        borderRadius: '4px',
        backgroundColor: tema === 'escuro' ? '#2a2a2a' : '#f9f9f9'
      }}>
        <h2>Demonstração de React Hooks</h2>
        <p>Este projeto mostra como usar useState e useEffect.</p>
        
        <div style={{ marginTop: '20px' }}>
          <h3>useState</h3>
          <p>Usado para gerenciar o estado do menu e do tema.</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h3>useEffect</h3>
          <p>Usado para o contador automático e salvar o tema.</p>
        </div>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: tema === 'escuro' ? '#333' : '#e3f2fd',
          borderRadius: '4px'
        }}>
          <h3>Contador Automático</h3>
          <div style={{ fontSize: '48px', fontWeight: 'bold', margin: '20px 0' }} data-testid="text-contador">
            {contador}
          </div>
          <p style={{ fontSize: '14px' }}>Incrementa a cada 1 segundo usando useEffect</p>
        </div>
      </div>

      <footer style={{
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: '1px solid #ccc',
        textAlign: 'center',
        fontSize: '14px'
      }}>
        <p>Projeto de estudo de React Hooks - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
