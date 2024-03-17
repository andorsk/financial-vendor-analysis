import Image from "next/image";
import Table from "@/components/Table";

import sampleData from "@/data/high_yield_checking.json";
import VendorAssistedTable from "@/views/VendorAssistedTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <VendorAssistedTable />
    </main>
  );
}
