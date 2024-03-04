"use client";

import { useState } from "react";

function PreferenceModal({ preferences }) {
  const [prefs, setPrefs] = useState(preferences);

  const handleToggleChange = (key) => {
    const newPrefs = {
      ...prefs,
      [key]: { ...prefs[key], value: !prefs[key].value },
    };
    setPrefs(newPrefs);
  };

  const handleSliderChange = (key, newValue) => {
    const newPrefs = { ...prefs, [key]: { ...prefs[key], value: newValue } };
    setPrefs(newPrefs);
  };

  return (
    <div className="p-5 min-w-full">
      <h2>
        {" "}
        <b> Preference Modal </b>
      </h2>
      {Object.entries(prefs).map(([key, pref]) => {
        switch (pref.type) {
          case "toggle":
            return (
              <div key={key}>
                <label>
                  <span className="mr-2">{pref.label}</span>{" "}
                  <input
                    type="checkbox"
                    checked={pref.value}
                    onChange={() => handleToggleChange(key)}
                  />
                </label>
              </div>
            );
          case "slider":
            return (
              <div key={key}>
                <label className="mr-2">
                  <span className="mr-2">{pref.label}</span>{" "}
                  <input
                    type="range"
                    min={pref.min}
                    max={pref.max}
                    value={pref.value}
                    onChange={(e) => handleSliderChange(key, e.target.value)}
                  />
                  <span>{pref.value}</span>
                </label>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default PreferenceModal;
