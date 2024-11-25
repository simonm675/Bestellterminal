import React from "react";

const LandingPage = () => {
  const handleOptionClick = (option) => {
    alert(`Du hast "${option}" gewählt!`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Willkommen beim Bestellterminal
        </h1>
        <p className="text-gray-600 mb-6">
          Möchten Sie zum hier Essen oder zum Mitnehmen bestellen?
        </p>
        <div className="space-y-4">
          <button
            onClick={() => handleOptionClick("Zum hier Essen")}
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
          >
            Zum hier Essen
          </button>
          <button
            onClick={() => handleOptionClick("Zum Mitnehmen")}
            className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300"
          >
            Zum Mitnehmen
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
