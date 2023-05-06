import { TextArea } from "@blueprintjs/core";
import type { FormEvent} from "react";
import { useState } from "react";

export default function Index() {
  const [youtubeId, setYtId] = useState<string>();



  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div>
        <h1>Hello hello!</h1>
        <TextArea value={youtubeId} onChange={(textContent: FormEvent) => setYtId((textContent.target as HTMLInputElement).value)} />
        <iframe src={`https://api.vevioz.com/api/widget/mp3/${youtubeId}`} style={{width:"100%", height:"150px", border:"none"}} title="IFrame" scrolling="no"></iframe>
      </div>
    </main>
  );
}
