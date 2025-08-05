import { Send } from "lucide-react"

export default function ChatInput({ input, setInput, handleSend }) {
    return (
        <div className='flex items-center backdrop-blur-md bg-black/30 p-4 gap-2'>
            <input
                type="text"
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
                onKeyDown={(e) => { e.key == "Enter" && handleSend() }}
                placeholder='پیام خود را بنویسید...'
                className='outline-none text-white placeholder-gray-400 flex-1 rounded-2xl p-3 bg-white/10' />
            <button
                onClick={handleSend}
                className='rounded-2xl p-3 bg-blue-600 hover:bg-blue-800 transition ease-linear duration-400'>
                <Send className='text-white' size={20} />
            </button>
        </div>
    )‍
}
