  'use client';

import trendingItems from '@/app/db/trendingData';

export default function Trending() {
  return (
    <div className="p-10 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">Trending Now</h2>
      <div className="flex gap-5 overflow-x-auto overflow-y-hidden no-scrollbar">
        {trendingItems.map(item => (
          <div
            key={item.id}
            className="flex-none relative transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <p className="absolute bottom-2 left-2 text-4xl font-extrabold text-white/70">
              {item.id}
            </p>
            <img
              src={item.img}
              alt={item.title}
              className="min-w-[200px] h-[250px] object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

