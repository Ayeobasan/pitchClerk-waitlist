import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


export function FAQ() {
  const faqs = [
    {
      question: "What is Pitchclerk?",
      answer:
        "Pitchclerk is a music pitch tool and aggregator that helps artists secure playlist placements, editorial features, press coverage, sync licensing, and publishing deals. We connect artists with industry opportunities while simplifying music discovery across DSPs and press outlets.",
    },
    {
      question: "⁠Who can use Pitchclerk?",
      answer:
        "Pitchclerk is designed for independent artists, music labels, producers, managers, and anyone looking to Pitch their  music,  Whether you're a rising star or an established act, Pitchclerk provides tools to help your music gain traction.",
    },
    {
      question: "What does your artist development program include?",
      answer:
        "Our program includes vocal training, songwriting workshops, image consulting, media training, and performance coaching. We create a customized development plan based on each artist's needs.",
    },
    {
      question: "How does Pitchclerk help me get playlisted?",
      answer:
        "Pitchclerk partners with playlist curators, DSPs, and press outlets to pitch your music directly to decision-makers, increasing your chances of being featured on major playlists and editorial selections.",
    },
    {
      question: "Does Pitchclerk guarantee placements?",
      answer:
        "Yes! Pitchclerk provides a dashboard where you can monitor the status of your pitches, see which Platforms and and editors have supported your pitch",
    },
    {
      question: "Does Pitchclerk support artists outside of South Africa?",
      answer:
        "Yes! While we are based in South Africa, we serve artists across Sub-Saharan Africa and beyond. If you create great music, we will help you get heard, no matter where you are!",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="sm:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pitchclerk FAQ – Empowering Artists, Simplifying Music Discovery
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

