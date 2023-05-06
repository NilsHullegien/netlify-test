import { TextArea, Text } from "@blueprintjs/core";
import type { FormEvent} from "react";
import { useState } from "react";

export default function Index() {
  const [youtubeId, setYtId] = useState<string>();


  function matchYoutubeUrl(url: string){
    var r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    r = url.match(rx);
    if (r == null) {
      return "";
    }
    
    return r[1];
  }

  

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div>
        <h1>Hello hello!</h1>
        <p>DEBUGGING: SEE YT ID BELOW AFTER UPLOAD</p>
        <Text>{youtubeId}</Text>
        <TextArea onChange={(textContent: FormEvent) => setYtId(matchYoutubeUrl((textContent.target as HTMLInputElement).value))} />
        {youtubeId && 
          <iframe src={`https://api.vevioz.com/api/widget/mp3/${youtubeId}`} style={{width:"100%", height:"150px", border:"none"}} title="IFrame" scrolling="no"></iframe>
        }
      </div>
    </main>
  );
}
