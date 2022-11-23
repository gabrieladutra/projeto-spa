import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onFeedbackRestartRequested: () => void
}
export function FeedbackContentStep({
    feedbackType, 
    onFeedbackRestartRequested
}: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        //Fragment
        <>
            <header>
              <button type="button" 
              className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" 
              onClick={onFeedbackRestartRequested}>
              
                <ArrowLeft weight="bold" className="w-4 h4"/>
              </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                  <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"></img>
                  {feedbackTypeInfo.title}</span>

                <CloseButton />
            </header>

            <form className="my-4 w-full">
              <textarea 
              className="mim-m-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus: border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin " 
              placeholder="Conte com detalhes o que está acontecendo..."></textarea>
            </form>
            <footer>
              <button 
              type="submit"
              className="p-2 bg-brand-500 rounded-md border-transparent  flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
              >Enviar Feedback</button>
            </footer>
        </>
    );
}
