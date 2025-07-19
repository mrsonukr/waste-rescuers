import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Routing from './Routing'
import MailchimpPopup from './components/ui/MailchimpPopup';

const App = () => {
  return (
    <HelmetProvider>
      <div>
        <Routing />
        <MailchimpPopup />
      </div>
    </HelmetProvider>
  );
}

export default App;