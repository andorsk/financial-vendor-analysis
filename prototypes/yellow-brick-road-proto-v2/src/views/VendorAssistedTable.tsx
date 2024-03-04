import sampleData from "@/data/high_yield_checking.json";
import Table from "@/components/Table";
import ChatBox from "@/components/ChatBox";
import {
  PreferenceModal,
  PreferenceModalProps,
} from "@/components/PreferenceModal";

export default function VendorAssistedTable() {
  const initialPreferences: PreferenceModalProps = {
    business: { type: "toggle", label: "Business Account", value: true },
    highYield: {
      type: "slider",
      label: "High Yield",
      value: 50,
      min: 0,
      max: 100,
    },
    riskTolerance: {
      type: "slider",
      label: "Risk Tolerance",
      value: 30,
      min: 0,
      max: 100,
    },
  };
  return (
    <div>
      <ChatBox label="In your words, describe your situation:" />
      <div className="z-10 max-w-7xl w-fullkkkkk  flex flex-col lg:flex-row items-center justify-between font-mono text-sm">
        <div className="flex flex-col items-center lg:items-start justify-between w-full lg:w-2/3 mb-5">
          <p className="text-2xl font-light p-5">
            High Yield Checking Accounts
          </p>
          <div>
            <PreferenceModal {...initialPreferences} />
          </div>
        </div>
        <div className="flex items-center justify-between p-10">
          <Table data={sampleData} />
        </div>
      </div>
    </div>
  );
}
