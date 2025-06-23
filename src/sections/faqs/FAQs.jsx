import { Plus } from 'lucide-react'
import { useState } from 'react'
import './faqs.css'

const FAQs = (props) => {

    const { faqData } = props

    const defaultFaqData = [
        {
            id: 1,
            question: "What do you need to start working on my project?",
            answer: "To get started, I typically need a project brief outlining your goals, target audience, and any specific features you have in mind. Any existing brand assets like logos, color palettes, and content would also be very helpful."
        },
        {
            id: 2,
            question: "How long will my project take to complete?",
            answer: "The timeline for a project varies depending on its scope and complexity. A simple website might take 2-4 weeks, while a more complex web application could take several months. I'll provide a detailed timeline after our initial discussion."
        },
        {
            id: 3,
            question: "Is hosting and domain registration inclusive in your pricing?",
            answer: "No! Hosting and domain is taken care of seperately. You can pay for it or take care of it on your own if you know how to."
        },
        {
            id: 4,
            question: "How much do you charge for an average website or app?",
            answer: "Once again, this depends. But my prices are affordable so you're good. I provide custom quotes based on the specific requirements of each project. Please get in touch to discuss your needs, and I'll provide a detailed, no-obligation estimate."
        },
        {
            id: 5,
            question: "What's your payment plan?",
            answer: "My standard payment plan is 50% upfront to begin the project, and the remaining 50% upon completion and your final approval, before the website goes live. I'm open to discussing alternative arrangements for larger projects."
        },
        {
            id: 6,
            question: "What if the project doesn't turn out good?",
            answer: "You will be a part of the process from the start. You will know how the whole project is going until the end. And I will make sure to give you the best. I include revision rounds at key stages to ensure you're happy with the direction."
        }
    ]

    const [faqs] = useState(faqData || defaultFaqData)
    const [openFaqId, setOpenFaqId] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
    }

    return (
        <div className="faq-container">
            <div className="faq-header">
                <h1 className="faq-title">Frequently Asked Questions</h1>
                <p className="faq-subtitle">
                    Here are some questions I usually get. Click to toggle the answer, and if you still
                    have some more questions, shoot me a message from the contact section!
                </p>
            </div>

            <div className="faq-grid">
                {faqs.map((faq) => (
                    <div
                        key={faq.id}
                        className={`faq-item ${openFaqId === faq.id ? 'open' : ''}`}
                        onClick={() => toggleFaq(faq.id)}
                    >
                        <div className="faq-question-row">
                            <h3 className="faq-question">{faq.question}</h3>
                            <button className="faq-toggle">
                                <Plus size={24} />
                            </button>
                        </div>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQs