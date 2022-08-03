import React from 'react';
import Header from './sections/header';
import Main from './sections/main';
import Footer from './sections/footer';
import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Counter key="0" limit={40} />
        <Counter key="1" limit={40} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
