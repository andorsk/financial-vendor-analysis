import sampleData from "@/data/high_yield_checking.json";
import Table from "@/components/Table";
import ChatBox from "@/components/ChatBox";
import PreferenceModal from "@/components/PreferenceModal";

export default function VendorAssistedTable() {
  const initialPreferences = {
    business: { type: "toggle", label: "I have a business", value: false },
    highYield: {
      type: "slider",
      label: "I care about high yield",
      value: 5,
      min: 0,
      max: 10,
    },
    riskTolerance: {
      type: "slider",
      label: "I am risk tolerant",
      value: 5,
      min: 0,
      max: 10,
    },
  };
  return (
    <div>
      <ChatBox
        className="pb-5"
        label="In your words, describe your situation:"
      />
      <div className="z-10 max-w-7xl w-fullkkkkk  flex flex-col lg:flex-row items-center justify-between font-mono text-sm">
        <div className="flex flex-col items-center lg:items-start justify-between w-full lg:w-2/3 mb-5">
          <p className="text-2xl font-light p-5">
            High Yield Checking Accounts
          </p>
          <div>
            <PreferenceModal preferences={initialPreferences} />
          </div>
        </div>
        <div className="flex items-center justify-between p-10">
          <Table data={sampleData} />
        </div>
      </div>
    </div>
  );
}
