import React, { useEffect, useState } from 'react';

const MailchimpPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Load Mailchimp script
    const script = document.createElement('script');
    script.id = 'mcjs';
    script.async = true;
    script.src = 'https://chimpstatic.com/mcjs-connected/js/users/d5409854aff4488b13e80a648/ca34bacfded9d6bcc69296d5a.js';
    document.head.appendChild(script);

    // Show popup after 10 seconds if not shown before
    const timer = setTimeout(() => {
      const hasShownBefore = localStorage.getItem('mailchimp-popup-shown');
      if (!hasShownBefore) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('mailchimp-popup-shown', 'true');
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
      // Clean up script
      const existingScript = document.getElementById('mcjs');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    // Add click handler for close button
    const handleClose = (e) => {
      if (e.target.matches('#mc_embed_signup::after') || 
          e.target.closest('#mc_embed_signup') === null) {
        closePopup();
      }
    };

    if (isVisible) {
      document.addEventListener('click', handleClose);
      // Add class to show popup
      const popup = document.getElementById('mc_embed_signup');
      if (popup) {
        popup.classList.add('mc-modal-open');
      }
    }

    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [isVisible]);

  const closePopup = () => {
    setIsVisible(false);
    const popup = document.getElementById('mc_embed_signup');
    if (popup) {
      popup.classList.remove('mc-modal-open');
      popup.style.display = 'none';
    }
  };

  // Add close button functionality
  useEffect(() => {
    const addCloseButton = () => {
      const popup = document.getElementById('mc_embed_signup');
      if (popup && !popup.querySelector('.mc-close-btn')) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'mc-close-btn';
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
          position: absolute !important;
          top: 10px !important;
          right: 15px !important;
          font-size: 24px !important;
          font-weight: bold !important;
          color: #666 !important;
          cursor: pointer !important;
          z-index: 10000 !important;
          width: 30px !important;
          height: 30px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          border-radius: 50% !important;
          background: #f3f4f6 !important;
          border: none !important;
          transition: all 0.2s ease !important;
        `;
        
        closeBtn.addEventListener('click', closePopup);
        closeBtn.addEventListener('mouseenter', () => {
          closeBtn.style.background = '#e5e7eb';
          closeBtn.style.color = '#374151';
        });
        closeBtn.addEventListener('mouseleave', () => {
          closeBtn.style.background = '#f3f4f6';
          closeBtn.style.color = '#666';
        });
        
        popup.appendChild(closeBtn);
      }
    };

    if (isVisible) {
      // Wait for Mailchimp to load
      const checkForPopup = setInterval(() => {
        const popup = document.getElementById('mc_embed_signup');
        if (popup) {
          addCloseButton();
          clearInterval(checkForPopup);
        }
      }, 100);

      return () => clearInterval(checkForPopup);
    }
  }, [isVisible]);

  return null; // This component doesn't render anything visible
};

export default MailchimpPopup;