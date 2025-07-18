import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {


return (
    <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-6"
    >
        <div className="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden">
            <div className="flex items-center gap-4 px-5 py-4 bg-blue-500/10">
                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100" alt="userImage1" />
                <div>
                    <h1 className="text-lg font-medium text-gray-800">Donald Jackman</h1>
                    <p className="text-gray-800/80">Home Buyer</p>
                </div>
            </div>
            <div className="p-5 pb-7">
                <div className="flex gap-0.5">
                    {/* Star SVGs unchanged */}
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" fill="#FF532E"/>
                        </svg>
                    ))}
                </div>
                <p className="text-gray-500 mt-5">
                    Rothmann Properties helped me find my dream home in less than a month. The agents were knowledgeable and guided me through every step of the buying process. Highly recommended for anyone looking for a smooth real-estate deal!
                </p>
            </div>
            <a href="#" className="text-blue-500 underline px-5">Read more</a>
        </div>

        <div className="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden">
            <div className="flex items-center gap-4 px-5 py-4 bg-blue-500/10">
                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" alt="userImage2" />
                <div>
                    <h1 className="text-lg font-medium text-gray-800">Richard Nelson</h1>
                    <p className="text-gray-800/80">Property Seller</p>
                </div>
            </div>
            <div className="p-5 pb-7">
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" fill="#FF532E"/>
                        </svg>
                    ))}
                </div>
                <p className="text-gray-500 mt-5">
                    I listed my apartment on Rothmann Properties and received multiple offers within days. The platform made negotiations and paperwork easy. I closed the deal quickly and at a great price!
                </p>
            </div>
            <a href="#" className="text-blue-500 underline px-5">Read more</a>
        </div>

        <div className="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden">
            <div className="flex items-center gap-4 px-5 py-4 bg-blue-500/10">
                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop" alt="userImage3" />
                <div>
                    <h1 className="text-lg font-medium text-gray-800">James Washington</h1>
                    <p className="text-gray-800/80">Real Estate Investor</p>
                </div>
            </div>
            <div className="p-5 pb-7">
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" fill="#FF532E"/>
                        </svg>
                    ))}
                </div>
                <p className="text-gray-500 mt-5">
                    Rothmann Properties is my go-to platform for finding lucrative investment properties. The analytics and support team helped me close several profitable deals this year. Excellent service for investors!
                </p>
            </div>
            <a href="#" className="text-blue-500 underline px-5">Read more</a>
        </div>
    </motion.div>
)
}

export default Testimonials