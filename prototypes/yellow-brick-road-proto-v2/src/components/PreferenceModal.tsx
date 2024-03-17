"use client";

import { useState } from "react";
import Slider from "@/components/Slider";

type PreferenceEntry = {
  label: string;
  type: "toggle" | "slider" | "value";
  value: boolean | number | string;
  min?: number;
  max?: number;
};

export type PreferenceModalProps = {
  [key: string]: PreferenceEntry;
};

export function PreferenceModal(props: PreferenceModalProps) {
  const [prefs, setPrefs] = useState<PreferenceModalProps>(props);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleChange = (key: string) => {
    const newPrefs = {
      ...prefs,
      [key]: { ...prefs[key], value: !prefs[key].value },
    };
    setPrefs(newPrefs);
  };

  return (
    <div className="flex justify-between">
      <div className={`w-full transition-all duration-300 ease-in-out`}>
        <div>
          {Object.entries(prefs).map(([key, pref]) => {
            switch (pref.type) {
              case "toggle":
                return (
                  <div key={key}>
                    <label>
                      <span className="mr-2">{pref.label}</span>{" "}
                      <input
                        type="checkbox"
                        checked={!!pref.value} // Ensure `pref.value` is treated as boolean
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
                    </label>
                    <Slider
                      min={Number(pref.min)}
                      max={Number(pref.max)}
                      defaultValue={Number(pref.value)}
                    />
                  </div>
                );
              case "value":
                return (
                  <div key={key}>
                    <label className="mr-2">
                      <span className="mr-2">{pref.label}</span>{" "}
                    </label>
                    <span>{pref.value}</span>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default PreferenceModal;
