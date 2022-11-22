import { CloseButton } from "./CloseButton";
import bugImageUrl from "../assets/bug.svg"
import ideaImageUrl from "../assets/ideia.svg"
import thoughtImageUrl from "../assets/thought.svg"
import { useState } from "react";

const feedbackTypes = {
BUG:{
  title:'Problema',
  image: {
    source:bugImageUrl,
    alt: 'Imagem de um inseto'
  }
},

IDEIA: {
  title:'Ideia',
  image: {
    source:ideaImageUrl,
    alt:'Imagem de uma lâmpada'
  }
},

OTHER:{
  title:'Outro',
  image: {
    source:thoughtImageUrl,
    alt:'Imagem de um inseto'
  }
}
}

type FeedbackType = keyof typeof feedbackTypes
export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
   return (
  <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
  <header>
    <span className="text-xl leading-6">Deixe seu feedback</span>
  <CloseButton/>
  </header>
  Hello World
{!feedbackType ?(<div className="flex py-8 gap-2 w-full">
  {Object.entries(feedbackTypes).map(([key,value])=> {
    return (
    <button
    key={key}
    className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center border-2 border-transparent hover:border-brand-500 focus:border-x-brand-500 focus:outline-none"
    onClick={() => setFeedbackType(key as FeedbackType)}
    type="button"
    >
      <img src={value.image.source} alt={value.image.alt}></img>
      <span>{value.title}</span>
      </button>
      )
  })}
</div>) : (<p>Hello World</p>)}
<footer className="text-xs text-neutral-400">
  Feito com 🖤 por <a className="underline underline-offset-2"> Gabriela D. Dutra</a> 
</footer>
  </div>
  )
}