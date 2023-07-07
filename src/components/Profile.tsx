import { useState } from "react";
import { User } from "../types/interfaces";
import Feed from "../pages/Feed";
import Response from "../pages/Response";

interface Tab {
    id: number;
    title: string;
    content: JSX.Element;
}

const Profile = () => {
    const user: User = {
        id: 1,
        username: 'f3r.dev',
        name: 'Fer Alarcon',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7abjQPWo677ewYgroH-cpMFzZhjQDffifg&usqp=CAU',
        description: ' Clonando app con tsx 💻🚀',
    };
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabs: Tab[] = [
        { id: 0, title: 'Hilos', content: <Feed/> },
        { id: 1, title: 'Respuestas', content: <Response/>},

    ];

    const handleClick = (tabId: number) => {
        setActiveTab(tabId);
    };


    return (
        <section >
            <div className="profile-head flex justify-between p-3">
                <div className="flex flex-col gap-3">
                    <h2 className="font-bold text-3xl">{user.name}</h2>
                    <p className="">{user.username} <span className="py-1 px-2 bg-zinc-900 rounded-full text-xs text-zinc-600" >threads.net</span></p>
                </div>
                <img src={user.avatar} alt="" className="rounded-full w-16 h-16 object-cover	" />
            </div>
            <p className="my-5 py-2 px-3">{user.description}</p>
            <span className="py-1 px-2 text-sm text-zinc-600 flex p-5 gap-3 items-cente" > <img src={user.avatar} alt="" className="rounded-full w-3 h-3 object-cover" /> 130 seguidores</span>
            <div className="profile-buttons flex justify-between p-2 px-3">
                <a href="" className="border-zinc-700 border-2 rounded-lg py-1 px-7 ">Editar perfil</a>
                <a href="" className="border-zinc-700 border-2 rounded-lg py-1 px-7 ">Compartir perfil</a>
            </div>
            <div className="flex flex-col mt-5">
                <div className="flex space-x-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`px-4 py-2 w-1/2  ${activeTab === tab.id ? 'text-white border-b-2 border-white' : 'text-zinc-600'
                                }`}
                            onClick={() => handleClick(tab.id)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="mt-4">
                    <p>{tabs[activeTab].content}</p>
                </div>
            </div>

        </section>
    )
}

export default Profile