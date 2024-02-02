import { useState, useEffect } from 'react';
import supabase from './supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import Chat from './Chat';
import { ThemeSupa } from '@supabase/auth-ui-shared';

function App() {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session),
      access_token,
      refresh_token;
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <Auth 
        supabaseClient={supabase} 
        appearance={{ 
          theme: ThemeSupa, 
          providers: ['github'] // Limit authentication to GitHub only
        }} 
      />
    );
  } else {
    return <Chat />;
  }
}

export default App;
