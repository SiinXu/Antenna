'use client'

import {
  Accordion,
  AccordionItem,
} from "@/components/ui/accordion"
import { useTranslation } from 'react-i18next'

export default function Questions() {
  const { t } = useTranslation('common')

  const faqData = [
    { question: t('faq.q1.question'), answer: t('faq.q1.answer') },
    { question: t('faq.q2.question'), answer: t('faq.q2.answer') },
    { question: t('faq.q3.question'), answer: t('faq.q3.answer') },
    { question: t('faq.q4.question'), answer: t('faq.q4.answer') },
    { question: t('faq.q5.question'), answer: t('faq.q5.answer') },
  ]

  return (
    <div id="questions" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white">
          {t('faq.title')}
        </h2>
        <Accordion 
          type="single" 
          collapsible 
          className="space-y-4"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/5 backdrop-blur-sm rounded-lg"
              titleClassName="hover:bg-white/10 rounded-t-lg text-white"
              contentClassName="text-sm leading-relaxed text-neutral-300"
              title={faq.question}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
