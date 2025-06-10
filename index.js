import Image from 'next/image';

export default function Homepage() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-800">
      <section
        className="w-full bg-cover bg-center py-20 px-6 text-center text-white"
        style={{
          backgroundImage: "url('/images/banners/homepage-hero.jpg')"
        }}
      >
        <img
          src="/images/logo/linkers-logo.png"
          alt="Linkers Real Estate Logo"
          className="mx-auto mb-6 w-40 md:w-48"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Linkers Real Estate</h1>
        <p className="text-lg md:text-xl mb-6">Your trusted property experts in Sydney's South West</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-red-600 text-white px-6 py-3 rounded-2xl shadow">View Listings</button>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-2xl shadow border border-blue-600">Get a Free Appraisal</button>
        </div>
      </section>
    </main>
  );
}
