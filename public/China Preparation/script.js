const indicators = [
    {
      name: "Is ammunition production being expanded?",
      foresight: "3-4 years",
      explanation: "The Russia-Ukraine war shows that modern warfare demands massive ammunition supplies. Due to historically average military-industrial capacity, low readiness levels from 1992-2015, significant disposal of near-expired ammunition, and the replacement of major ammunition types, the PLA's ammunition reserves are low. If a war decision is made, military procurement must expand significantly. The Russia-Ukraine war indicates that ammunition production expansion takes about 3-4 years.",
      sources: "Military industry personnel",
      sourceExplanation: "Beyond directly affecting production units, increased arms production due to war readiness impacts funding allocation for equipment development and R&D, making this situation widely known among professionals in weapons, vehicles, and ships.",
      deception: "In the current era, concealing rumors is challenging. There’s no room for denial—denying rumors would imply guilt. Even without RUMINT sources, large-scale ammunition production expansion is unlikely to escape Western satellite intelligence, naturally raising security concerns and warnings from the US and Taiwan.",
      currentValue: 0.7
    },
    {
      name: "Is cadre demobilization being disrupted?",
      foresight: "6-24 months",
      explanation: "The most concerning issue for PLA grassroots officers is annual demobilization at year-end. Policies are announced in September-October and finalized by December. War preparations require surplus personnel, necessitating a suspension of cadre demobilization, possibly 1-2 years before a war.",
      sources: "Active and demobilized cadres",
      sourceExplanation: "Demobilization policies affect active officers, retired officers, and senior military academy students. Suspension news spreads quickly within officer circles, causing speculation and significant unrest.",
      deception: "With direct sources from active or demobilized officers, concealment is nearly impossible.",
      currentValue: 0
    },
    {
      name: "Are troop training schedules changing?",
      foresight: "6-9 months",
      explanation: "The PLA organizes training annually, with field units spending 5-6 months in field exercises, moving between bases and training grounds (hence frequent videos of military equipment transported by rail). Taiwan operations require raising equipment readiness to combat levels. Given the PLA’s poor equipment maintenance and wear from routine training, units need months to inspect, repair, and maintain equipment, disrupting normal training.",
      sources: "Active field unit officers",
      sourceExplanation: "Training is a major part of unit operations. Grassroots officers are sensitive to schedule changes and can easily detect anomalies.",
      deception: "With direct sources from active or demobilized officers, concealment is nearly impossible.",
      currentValue: 0
    },
    {
      name: "Is conscript demobilization being disrupted?",
      foresight: "6-8 months",
      explanation: "PLA conscripts serve 2 years, with demobilization on March 1 and September 1. Retiring soldiers are key combat forces, and historically, demobilization has been delayed during war or conflict preparations. Conscripts can extend service by 3 months, but this is insufficient for Taiwan operations. A one-year extension is more likely.",
      sources: "University classmates, local official media",
      sourceExplanation: "30-40% of PLA conscripts are university students (current or graduates), critical for operating technical equipment. Extended service triggers discussions among classmates and parents. Demobilization is a key local government task, with news surging online during these months. Significant changes in news volume or quality signal war preparations.",
      deception: "It’s unimaginable that authorities could suppress such news years before a war. Even if official media is controlled, conscript families cannot be silenced. Faking demobilization news is possible but reduces information quality, and families remain vocal.",
      currentValue: 0
    },
    {
      name: "Are cadre training and leave being disrupted?",
      foresight: "3 months",
      explanation: "PLA officers face extensive study, training, and exercises, with leave (20 days annually or 20-30 days for family visits). These conflict with war preparations.",
      sources: "Active soldiers, NCOs, and their families",
      sourceExplanation: "If eastern/southern frontline cadres and NCOs take normal leave (e.g., early August last year), immediate war is unlikely. If no such news by early August, sources may lack sufficient access.",
      deception: "Cadre leave is a sufficient condition for no war preparations, not a necessary one. Lack of leave doesn’t confirm preparations, as inspections, personal plans, or unit rules may affect leave. Outsiders only know leave status, not reasons for non-leave. Use 'cadre leave = no preparations' model.",
      currentValue: 0
    },
    {
      name: "Is large-scale material prepositioning occurring?",
      foresight: "3 months",
      explanation: "Cross-strait operations require massive equipment and material supplies, transported via rail to about a dozen southeastern coastal ports. To avoid rail network collapse and long transport cycles, significant prepositioning occurs months in advance, likely 100 days before war.",
      sources: "Social media videos, Western mainstream media",
      sourceExplanation: "Contrary to common belief, military equipment rail transport isn’t conclusive evidence, as it may be headed to training grounds. Material prepositioning is more critical, characterized by higher density, proximity to populated areas, stricter secrecy (e.g., no vendor access), and prolonged presence in non-training areas.",
      deception: "Attempts to disguise prepositioning as civilian logistics are likely, but these remain in specific, closed locations near ports/railways/highways, detectable by satellite. During US-Taiwan deterrence, Western media will publish satellite images, as seen in the 2021 Russia-Ukraine border situation.",
      currentValue: 0
    },
    {
      name: "Political mobilization?",
      foresight: "1 month",
      explanation: "Even without public mobilization for secrecy, internal troop mobilization begins a month before war. Even if secrecy is maintained, troop and family morale will noticeably change—e.g., unusual silence or excitement.",
      sources: "Active troops and their families",
      sourceExplanation: "With 2 million active PLA personnel, 50 million veterans, and tens of millions of relatives, mood changes are widely noticeable, making war prospects obvious. Rumors will spread, but firsthand sources are strongly recommended for judgment.",
      deception: "Abnormal control of troop smartphones before a war indicates significant preparations.",
      currentValue: 0
    },
    {
      name: "Blood donation drives?",
      foresight: "10-30 days",
      explanation: "Whole blood and red blood cells, stored at 2-6°C, last 35 days. Blood donation stations are set up days before war. Combat units don’t donate internally; social donations are used. Eastern coastal provinces receive widespread donation notices.",
      sources: "Social media videos",
      sourceExplanation: "At this stage, halting is nearly impossible.",
      deception: "Abnormal control of social media in southeastern provinces/cities indicates major war preparations, conflicting with donation efforts.",
      currentValue: 0
    }
  ];

  const getJudgment = (totalScore) => {
    if (totalScore <= 2) {
      return { text: "Large-scale war unlikely within 2 years", color: "text-green-600" };
    } else if (totalScore <= 4) {
      return { text: "Large-scale war possible within 2 years", color: "text-yellow-600" };
    } else if (totalScore <= 6) {
      return { text: "Large-scale war possible within 6 months", color: "text-orange-600" };
    } else {
      return { text: "Buy first aid kits, canned food, bottled water, fill up gas, and avoid military facilities", color: "text-red-600" };
    }
  };

  const RiskCalculator = () => {
    // Calculate initial total score from indicators' currentValue
    const initialScores = indicators.map(ind => ind.currentValue);
    const initialTotalScore = initialScores.reduce((sum, score) => sum + score, 0);

    const [scores, setScores] = React.useState(initialScores);
    const [totalScore, setTotalScore] = React.useState(initialTotalScore);
    const [inputError, setInputError] = React.useState(''); // State for input validation error

    const handleScoreChange = (index, value) => {
      const parsedValue = parseFloat(value);
      // Remove the alert and set an error message in state
      if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 1) {
        setInputError("Please enter a valid value between 0 and 1.");
        return;
      }
      setInputError(''); // Clear error if input is valid

      const newScores = [...scores];
      newScores[index] = parsedValue;
      setScores(newScores);
      setTotalScore(newScores.reduce((sum, score) => sum + score, 0));
    };

    const resetScores = () => {
      const resetInitialScores = indicators.map(ind => ind.currentValue);
      setScores(resetInitialScores);
      setTotalScore(resetInitialScores.reduce((sum, score) => sum + score, 0)); // Recalculate total for reset
      setInputError(''); // Clear any error message on reset
    };

    const judgment = getJudgment(totalScore);

    return (
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Taiwan Strait War Crisis Risk Scale (8-Point System)
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Comprehensive Taiwan invasion risk assessment based on OSINT and RUMINT. Enter scores (0-1) for each indicator to calculate total score and risk judgment.
        </p>

        {inputError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline ml-2">{inputError}</span>
            </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-3 text-left">Indicator</th>
                <th className="p-3 text-left">Foresight</th>
                <th className="p-3 text-left">Current Score</th>
                <th className="p-3 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {indicators.map((indicator, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{indicator.name}</td>
                  <td className="p-3">{indicator.foresight}</td>
                  <td className="p-3">
                    <input
                      type="range"
                      step="0.1"
                      min="0"
                      max="1"
                      value={scores[index]}
                      onChange={(e) => handleScoreChange(index, e.target.value)}
                      className="w-20"
                    />
                    <span className="ml-2">{scores[index].toFixed(1)}</span> {/* Display with one decimal */}
                  </td>
                  <td className="p-3">
                    <details className="text-sm text-gray-600">
                      <summary className="cursor-pointer text-blue-600">View Details</summary>
                      <div className="mt-2 p-2 bg-gray-50 rounded">
                        <p><strong>Explanation:</strong> {indicator.explanation}</p>
                        <p><strong>Reliable Sources:</strong> {indicator.sources}</p>
                        <p><strong>Source Explanation:</strong> {indicator.sourceExplanation}</p>
                        <p><strong>Potential Deception:</strong> {indicator.deception}</p>
                      </div>
                    </details>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
          <h2 className="text-xl font-semibold text-blue-800">
            Total Score: {totalScore.toFixed(2)}
          </h2>
          <p className={`mt-2 text-lg font-medium ${judgment.color}`}>
            {judgment.text}
          </p>
          <button
            onClick={resetScores}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Reset Scores
          </button>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-blue-800">Applicable Principles</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>This scale is suitable for individuals with basic sources in mainland China, using anecdotal evidence (RUMINT) and open-source intelligence for war risk assessment without accessing sensitive sources, soliciting classified information, or violating laws.</li>
            <li>Information gathering should follow qualitative, indirect, and vague principles to protect analysts and sources, focusing on emotional impacts rather than precise details, balancing certainty and safety.</li>
          </ul>
          <h3 className="text-lg font-semibold text-blue-800 mt-4">Verification Principles</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Cross-Verification:</strong> Information requires at least two independent sources for credibility.</li>
            <li><strong>Source Scoring:</strong> Judge source reliability based on experience, weighting credibility comparisons.</li>
            <li><strong>Independent Verification:</strong> Always strive for independent verification and fact-checking.</li>
            <li><strong>Non-Single Indicator:</strong> Single indicators may be false positives due to deception, rumors, or misinterpretation, even with short foresight periods. Use a scoring system for overall judgment.</li>
            <li><strong>Regional Weighting:</strong> Eastern - Southern - Central - Northern - Western theaters. Phenomena in higher-weighted theaters are more significant.</li>
          </ul>
        </div>
      </div>
    );
  };

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<RiskCalculator />);