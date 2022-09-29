import { AuthContext } from "../AuthContext/AuthContext";
import React from "react";

function Login(){
  const {isAuth,ToggleAuth}=React.useContext(AuthContext)


  return (
      <>
          <h1>Hii Login Page
          Various educators teach rules governing the length of paragraphs. They may say that a paragraph should be 100 to 200 words long, or be no more than five or six sentences. But a good paragraph should not be measured in characters, words, or sentences. The true measure of your paragraphs should be ideas.

How many sentences are in a paragraph?
Your childhood teacher did not wrong you when they taught you that there should be three, or four, or five sentences in a paragraph. It is important to understand, however, that the aim in teaching this was not to impart a hard-and-fast rule of grammar, drawn from an authoritative-but-dusty book. The true aim of this strategy was to teach you that your ideas must be well supported to be persuasive and effective.


Here’s a tip: Want to make sure your writing shines? Grammarly can check your spelling and save you from grammar and punctuation mistakes. It even proofreads your text, so your work is extra polished wherever you write.
Your writing, at its best
Grammarly helps you communicate confidently
WRITE WITH GRAMMARLY
The model regarding paragraph length that your teacher undoubtedly taught you involves a topic sentence, a number of facts that support that core idea, and a concluding sentence. The proviso about the number of sentences between the topic sentence and the conclusion was not given to you because it was the magic formula for creating paragraphs of the perfect length; rather, your educator was attempting to give you a good reason to do adequate research on your topic. Academic writing yields the best examples of the topic-support-conclusion paragraph structure.


Recent research has provided a wealth of insight about how dogs came to be domesticated by humans and the roles they played in Native American culture. DNA studies on archaeological finds suggest that dogs may have been domesticated by humans as long as 40,000 years ago. When the first humans came to North America from Eurasia, at least 12,000 years ago, domesticated dogs came with them. They appear to have been highly prized by early North American hunter-gatherers and were their only animal companions for centuries, since there were no horses on the continent until the 16th century.
You can see from this example how a topic is introduced, supported, and then brought to its natural conclusion. Yet, not all writing is academic, and once you have learned the concept behind good paragraph construction—which is really the art of focused writing in disguise—you should know that there are times when paragraph “rules” can, and should, be broken.

READ: Splitting Paragraphs for Easier Reading

How to write paragraphs people want to read
The fact of the matter is that although you may have numerous valid facts or descriptions related to your paragraph’s core idea, you may lose a reader’s attention if your paragraphs are too long. What’s more, if all of your paragraphs are long, you may lose opportunities to draw your reader in. Journalists, for example, know that their readers respond better to short paragraphs. News readers generally lose interest with long descriptions and even one-sentence paragraphs are considered both acceptable and impactful.


Firefighters rushed to First Avenue today to extinguish a blaze on the 1500 block. Anguished onlookers hoped that the flames would be subdued in time to rescue the building’s most prized inhabitants.
They weren’t.

The cat hospital was gone.

When it comes to maintaining a reader’s attention, a good rule of thumb might be to avoid writing more than five or six sentences in a paragraph before finding a logical place to break. That said, remember that the idea behind a paragraph might be short and sweet, or it might merit deeper explanation. There are no strict rules about how many words or lines your paragraphs should be, and there’s no need to lock your doors if you occasionally write long or short ones. The grammar police aren’t coming for you.
          </h1>
      </>
  )

}
export default Login;