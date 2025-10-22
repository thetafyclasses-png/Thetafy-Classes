'use client'
import emailjs from 'emailjs-com'

import { useState } from 'react'
import { Mail, Phone, MapPin, Youtube, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    studentClass: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: `Class: ${formData.studentClass || 'Not specified'}\n\n${formData.message}`,
        time: new Date().toLocaleString(), // optional for {{time}}
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )

    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      studentClass: ''
    })
  } catch {
    // For production: show user-friendly feedback only
    alert('Something went wrong. Please try again later.')
  } finally {
    setIsSubmitting(false)
  }
}




  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "thetafyclasses@gmail.com",
      description: "Send me your questions anytime",
      action: "mailto:thetafyclasses@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91-9235917031",
      description: "Available Mon-Sat, 10 AM - 6 PM",
      action: "tel:+91-9235917031"
    },
    {
      icon: Youtube,
      title: "YouTube",
      details: "@thetafyclasses",
      description: "Watch free tutorials and lessons",
      action: "https://www.youtube.com/@thetafyclasses"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Mau, U.P., India",
      description: "Online classes available worldwide",
      action: null
    }
  ]

  const faqs = [
    {
      question: "How can I access the course videos?",
      answer: "All course videos are available on my YouTube channel for free. You can also find organized playlists on this website."
    },
    {
      question: "Do you provide personal tutoring?",
      answer: "Yes, I offer limited personal tutoring sessions. Please contact me via email or phone to discuss availability and scheduling."
    },
    {
      question: "Are the study materials free?",
      answer: "Basic study materials and formula sheets are available for free. Premium resources may have a nominal fee to cover preparation costs."
    },
    {
      question: "How often do you upload new videos?",
      answer: "I upload new videos regularly, typically 2-3 times per week covering different topics and difficulty levels."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-30 bg-[#050529]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Have questions about mathematics? Need guidance for your studies? 
            I am here to help you succeed!
          </p>
          <div className="flex items-center justify-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
            <Clock className="h-5 w-5" />
            <span>Usually responds within 24 hours</span>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Me a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-8">
                      Thank you for reaching out. I will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="studentClass" className="block text-sm font-medium text-gray-700 mb-2">
                          Student Class
                        </label>
                        <select
                          id="studentClass"
                          name="studentClass"
                          value={formData.studentClass}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select your class</option>
                          <option value="class-10">Class 10 CBSE</option>
                          <option value="class-12">Class 12 CBSE</option>
                          <option value="iit-jee">IIT-JEE Preparation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="What is this about?"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                        placeholder="Please describe your question or how I can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 btn-hover disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info & FAQs */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                        {info.action ? (
                          <a
                            href={info.action}
                            target={info.action.startsWith('http') ? '_blank' : undefined}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium">{info.details}</p>
                        )}
                        <p className="text-gray-600 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h4 className="text-sm font-semibold text-gray-900 group-open:text-blue-600">
                          {faq.question}
                        </h4>
                        <span className="transition-transform group-open:rotate-180">
                          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="mt-3 text-sm text-gray-600">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
