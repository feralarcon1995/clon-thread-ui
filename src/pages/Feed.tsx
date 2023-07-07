import feed from '../data/feed.json';
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart, } from 'react-icons/ai'
import { FaRetweet } from 'react-icons/fa'
import { FaRegComment } from 'react-icons/fa6'
import { FiSend } from 'react-icons/fi'
const Feed = () => {

    return (
        <section className='p-3'>
            {feed.feed.map((thread) => (
                <div key={thread.id} className=" shadow-md rounded-lg p-4 mb-4 h-full">
                    <div className="flex items-start gap-2">
                        <div className='flex items-center flex-col w-1/5 h-full'>
                            <img className="w-full h-10	rounded-full object-cover" src={thread.author.avatar} alt={thread.author.name} />
                        </div>
                        <div className='flex justify-between flex-col w-full  items-center  gap-1 w-full'>
                            <div className=' flex justify-between  items-center w-full  gap-2'>
                                <p className="text-white">@{thread.author.username}</p>
                                <div className="w-2/4 flex items-center justify-end gap-2">
                                    <p className='text-zinc-600 text-base'>3 h</p>
                                    <BsThreeDots />
                                </div>
                            </div>
                            <p className="font-bold ">{thread.content}</p>
                            <div className="flex justify-start w-9/12 items-center gap-3 py-3 self-start">
                                <AiOutlineHeart className="text-xl" />
                                <FaRegComment className="text-xl" />
                                <FaRetweet className="text-xl" />
                                <FiSend className="text-xl" />
                            </div>
                            <div className="mt-2 flex items-center gap-3 self-start">
                                <img src={feed.response[0].comments[1].author.avatar} alt="" className="rounded-full w-3 h-3 object-cover" />
                                <p className="text-zinc-600">{thread.comments.length} respuestas - {thread.likes} Me gusta</p>
                            </div>
                        </div>
                    </div>



                </div>
            ))}
        </section>
    )
}

export default Feed