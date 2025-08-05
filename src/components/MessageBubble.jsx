import boy from "../assets/boy.png";
import bot from "../assets/botNormal.3c7b55b2.png";
import { motion } from "framer-motion";

export default function MessageBubble({ sender, text }) {

    const avatar = sender === "user" ? boy : bot;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-end gap-2 ${sender === "user" ? "justify-end" : "justify-start"}`}
        >
            {sender === "bot" && <img src={avatar} className="w-8 h-8 rounded-full" />}
            <div className={`max-w-xs p-3 rounded-2xl shadow-md overflow-hidden
                ${sender === "user" ?
                    "text-white bg-blue-500 transition-all hover:me-6 duration-300" :
                    'text-gray-200 backdrop-blur-lg bg-white/10 hover:shadow-cyan-200 transition duration-400'}`}>
                <p className="truncate">{text}</p>
            </div>
            {sender === "user" && <img src={avatar} className="w-8 h-8 rounded-full" />}
        </motion.div>
    );
}