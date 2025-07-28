import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <div className='flex flex-col justify-center items-center h-dvh'>
            <img
                className='w-full h-auto sm:w-[600px] sm:h-[400px]'
                width={600}
                height={400}
                src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small_2x/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"
                alt="404 not found"
                loading='lazy'
            />

            <Link to={'/'} className="h-[44px] hover-effect bg-gray-400 text-white text-[16px] font-bold flex items-center justify-center px-6 rounded-[4px]">Về trang chủ</Link>
        </div>
    )
}
