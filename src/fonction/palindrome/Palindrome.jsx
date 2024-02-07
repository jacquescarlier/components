import React, { useState } from 'react';
import InputForm from '../../components/input/InputForm';
import "./palindrome.css"
function PalindromeChecker() {
  const [inputValue, setInputValue] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  // Fonction pour vérifier si une chaîne est un palindrome
  const estPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
  };

  // Gestionnaire pour mettre à jour l'état du palindrome
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsPalindrome(estPalindrome(value));
  };

  return (
    <div className="verificateurDePalindrome">
      <h2>Vérificateur de Palindrome</h2>
      <InputForm
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Entrez une phrase"
        className="inputPalindrome"
      />
      {isPalindrome ? (
        <p className="palindrome">La phrase est un palindrome.</p>
      ) : (
        <p className="notPalindrome">La phrase n'est pas un palindrome.</p>
      )}
    </div>
  );
}

export default PalindromeChecker;
