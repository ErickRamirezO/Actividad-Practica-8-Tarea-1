import { useState, useEffect } from 'react';
import supabase from './supabaseClient'
import { useNavigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import './index.css'; // Estilos globales

function App() {
  const [session, setSession] = useState(null)
  const navigate = useNavigate();

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

    if (!session) {
      return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
    }
    
     navigate('/chat');
     return null;

}

export default App;
