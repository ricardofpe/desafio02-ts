

import { Card } from './components/Card';
import { Header } from './components/Header/Header';
import { login } from './services/login';


function App() {
  return (
    <>
      <Header/>
      <Card login={login} />
    </>
  );
}

export default App;
