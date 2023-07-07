import feed from '../data/feed.json';
import { BsThreeDots } from 'react-icons/bs'

const Response = () => {
    return (
        <section className='p-3'>
            {feed.response.map((thread) => (
                <div key={thread.id} className=" shadow-md rounded-lg p-4 mb-4 h-full">
                    <div className="flex items-start gap-2">
                        <div className='flex items-center flex-col w-1/5 h-full'>
                            <img className="w-full h-10	rounded-full object-cover" src={thread.author.avatar} alt={thread.author.name} />
                            <span className='bg-zinc-600 w-px min-h-[200px] max-h-[100%]'></span>
                        </div>
                        <div className='flex justify-between flex-col w-full  items-center  gap-1 w-full'>
                            <div className=' flex justify-between  items-center w-full  gap-2'>
                                <p className="text-white w-full">@{thread.author.username}</p>
                                <div className="w-2/4 flex items-center justify-end gap-2">
                                    <p className='text-zinc-600 text-base'>3 h</p>
                                    <BsThreeDots />
                                </div>
                            </div>
                            <p className="font-bold ">{thread.content}</p>
                        </div>
                    </div>

                    <div className="mt-2 flex items-center gap-3">
                        <img src={feed.response[0].comments[1].author.avatar} alt="" className="rounded-full w-3 h-3 object-cover" />
                        <p className="text-zinc-600">{thread.comments.length} respuestas - {thread.likes} Me gusta</p>
                    </div>

                </div>
            ))}
        </section>
    )
}

export default Response