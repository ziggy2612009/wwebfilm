import React from 'react'

type DirectChatProps = {
  color: string;
  accent: string;
};

function DirectChat({ color, accent }: DirectChatProps) {
  return (
    <div className="bg-white shadow border border-gray-200 overflow-hidden">
      <div className={`${color} text-white px-4 py-2 text-sm font-medium flex items-center justify-between`}>
        <span>Direct Chat</span>
        <div className="flex items-center gap-2 opacity-90">
          <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full">3</span>
          <div className="w-3 h-3 border border-gray-500"></div>
          <div className="w-3 h-3 border border-gray-500"></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3 text-sm">
        <div>
         <img
                  src="./Buku.jpg"
                  className="w-7 h-7  object-cover rounded-lg mb-3"
                  alt="Book cover"
                />
          <div className="text-gray-600 text-xs mb-1">
            Alexander Pierce • 23 Jan 2:00 pm
          </div>
          <div className="bg-gray-100 text-gray-800 rounded px-3 py-2 inline-block">
            Is this template really for free? That&#39;s unbelievable!
          </div>
        </div>
        <div className="text-right">
           <img
                  src="./Buku.jpg"
                  className="w-7 h-7 object-cover rounded-lg mb-3"
                  alt="Book cover"
                />
          <div className="text-gray-600 text-xs mb-1">
            Sarah Bullock • 23 Jan 2:05 pm
          </div>
          <div className={`${accent} text-white rounded px-3 py-2 inline-block`}>
            You better believe it!
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChatSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <DirectChat color="bg-sky-600" accent="bg-sky-500" />
      <DirectChat color="bg-green-600" accent="bg-green-500" />
      <DirectChat color="bg-amber-600" accent="bg-amber-500" />
      <DirectChat color="bg-rose-600" accent="bg-rose-500" />
    </div>
  );
}