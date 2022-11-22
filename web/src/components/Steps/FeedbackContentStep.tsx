import { CloseButton } from "../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
}
export function FeedbackContentStep({
    feedbackType,
}: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        //Fragment
        <>
            <header>
                <span className="text-xl leading-6 flex items-center gap-2">
                  <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"></img>
                  {feedbackTypeInfo.title}</span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full"></div>
        </>
    );
}
