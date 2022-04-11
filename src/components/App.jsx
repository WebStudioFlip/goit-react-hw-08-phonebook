import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from './redux/auth/auth-operations';

import Routers from './Routes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;