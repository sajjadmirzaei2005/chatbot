import React from 'react'
import { motion } from "framer-motion"


export default function TypingIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1 }}
            className='flex justify-start'>
            <div className="bg-white/10 text-gray-300 rounded-2xl p-3 backdrop-blur-lg">
                <div className="flex space-x-1">
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                </div>
            </div>

        </motion.div>
    )
}
