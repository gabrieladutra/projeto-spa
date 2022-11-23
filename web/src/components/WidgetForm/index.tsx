import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/ideia.svg"
import thoughtImageUrl from "../../assets/thought.svg"
import { FeedbackTypeStep } from "../Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "../Steps/FeedbackContentStep";
import complimentImageUrl from "../../assets/compliment.svg"


export const feedbackTypes = {
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
COMPLIMENTS:{
  title:'Elogio',
  image: {
    source:complimentImageUrl,
    alt:'Imagem de um sinal de like'
  }
},
OTHER:{
  title:'Outro',
  image: {
    source:thoughtImageUrl,
    alt:'Imagem de um inseto'
  }
},


}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  
  function handleRestartFeedback(){
    setFeedbackType(null)
  }
  return (
  <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
  

{!feedbackType ?(
  <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
  ) : (
  <FeedbackContentStep feedbackType={feedbackType} 
  onFeedbackRestartRequested={handleRestartFeedback}
  />)
  }

<footer className="text-xs text-neutral-400">
  Feito com 💜 por <a className="underline underline-offset-2"> Gabriela D. Dutra</a> 
</footer>
  </div>
  )
}