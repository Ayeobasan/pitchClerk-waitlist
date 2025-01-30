import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


export function FAQ() {
  const faqs = [
    {
      question: "What genres do you work with?",
      answer:
        "We work with artists across all genres, including pop, hip-hop, R&B, electronic, rock, and more. Our team has experience in developing artists in various musical styles.",
    },
    {
      question: "How does the submission process work?",
      answer:
        "Submit your demo through our online platform. Our team reviews submissions weekly and responds within 14 days with detailed feedback and next steps if we feel there's a potential fit.",
    },
    {
      question: "What does your artist development program include?",
      answer:
        "Our program includes vocal training, songwriting workshops, image consulting, media training, and performance coaching. We create a customized development plan based on each artist's needs.",
    },
    {
      question: "How do you handle music distribution?",
      answer:
        "We distribute your music to all major streaming platforms and digital stores worldwide. Our team handles all the technical aspects while ensuring you maintain your rights and receive fair compensation.",
    },
    {
      question: "What marketing support do you provide?",
      answer:
        "We provide comprehensive marketing support including social media management, PR campaigns, playlist pitching, content creation, and advertising strategies tailored to your target audience.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="sm:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and process
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

