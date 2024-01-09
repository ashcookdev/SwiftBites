import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({ signOut, user }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    if (user) {
      // Retrieve the current authenticated user's information
      Auth.currentAuthenticatedUser().then(userInfo => {
        // Check if the user is a member of one of the specified groups
        const groups = userInfo.signInUserSession.accessToken.payload['cognito:groups'];

        if (groups) {
          if (groups.includes('Drivers')) {
            // Redirect the user to the /mobileportal page
            navigate('/mobileportal');
            window.location.reload();
          } else if (groups.includes('Admin')) {
            // Redirect the user to the /dash page
            navigate('/dash');
            window.location.reload();
          } else {
            // Redirect the user to the /dashboard page or any default page
            navigate('/');
            window.location.reload();
          }
        }
      });
    }
  }, [user, navigate]);

  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
