'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContactModalContextType {
  isOpen: boolean;
  openModal: (interest?: string) => void;
  closeModal: () => void;
  defaultInterest: string;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultInterest, setDefaultInterest] = useState('CSR Strategy & Ground Implementation');

  const openModal = (interest?: string) => {
    if (interest) {
      setDefaultInterest(interest);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal, defaultInterest }}>
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
