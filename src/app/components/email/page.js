 'use client';

export default function Email() {
  return (
    <div className="text-center text-white">
      <p className="text-lg mb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-3 mt-5 max-w-[300px] mx-auto md:max-w-[600px]">
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 min-w-[250px] px-4 py-4 bg-black/70 text-white text-base rounded outline-none placeholder:text-[#b3b3b3]"
        />
        <button className="bg-[#e50914] hover:bg-[#b00610] text-white font-bold px-2 py-2 rounded text-lg transition-all duration-300 transform hover:scale-110 md:px-6 py-4 ">
          Get Started
        </button>
      </div>
    </div>
  );
}
