import Image from "next/image";
import { ColorButton } from "@pnpm-test/core";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ColorButton />
    </main>
  );
}
