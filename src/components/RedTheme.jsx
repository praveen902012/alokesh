import React, { useState } from 'react';

const PROPERTIES = [
  {
    id: 1,
    title: 'Elysium Residency',
    price: '₹2.4 Cr',
    location: 'Worli, Mumbai',
    config: '3 BHK',
    area: '1,850 sq.ft',
    status: 'Ready',
    type: 'Apartment',
    developer: 'Prestige Group',
    devLogo: 'P',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCKPsfXOboTtbgn-rDnj0wewPn22bs-dN9r2f6CYBLiyruuQVAi_cHwDY0LWTS0KIIWqhSE5njv2Vt5nFCEp1U3NrTpoeMBdA1Q7JjWS5pqwU6GmZ8D6gnCH2prQDlq37xztwM89ACu33UMpA5-WIokPoCUoZCrNoFSZlewrVvM8nQlE8UVcE2eEpuxQeKBUpPdbTPJhC3sRn52qQslY48cf9HQ_yUlu-JQgWhUZH48iUgmdYfecf_1EAPGc6V9xo_EL9a5wsvCpql'
  },
  {
    id: 2,
    title: 'Skyline Towers',
    price: '₹4.8 Cr',
    location: 'Gurgaon, Sector 54',
    config: '4 BHK',
    area: '3,200 sq.ft',
    status: 'Under Const.',
    type: 'Apartment',
    developer: 'DLF Limited',
    devLogo: 'D',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1w7OGZPVsQX9wnV_iLwdQxTvLrKvBj-E13hnm6rABb-HrVYfmshZBNU3YO4G4gpMOx4tCCawVoLBsxaWCceeuJfay7FsNeoRBlE1Bn3W6VtLTDmMas2Swc4SjQP7kggHLE2zxvUXAMoooankHXL4RbuOeYppnTHgudCSFO_OszwXor57LD50uPbnD4Ww8m_ZiGJpyxAEoUhN_D4LlHtynQYLGqDV7z_dEgqjRFOPzIAFOkqomG5J3SqOu2kVAcPQN3NH-013QKBZ6'
  },
  {
    id: 3,
    title: 'Park View Estates',
    price: '₹1.2 Cr',
    location: 'Electronic City, Bangalore',
    config: '2.5 BHK',
    area: '1,450 sq.ft',
    status: 'Ready',
    type: 'House/Villa',
    developer: 'Tata Housing',
    devLogo: 'T',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt6bK0UVb3sc9V12pJuZY1x7JC3ZkdZIdUNc9faorZDZBZ47KEHTNt1TnJbPIBQOtmMaIxq-L-pUiJbuh5ytiSQqz9tObMwmiZaNdnWTn8rlr-633tnc2UcLIO8MVz9glmg1SvpKBcAttSXGkfZpX_8fN5y5WHwCJ6KAsinV1QkIGLHeHwIa9nygmd_E9nvVpWWxi9Eex3268ml6kOg42baOYlWQ7k8-6-EzxxQM5oOsqy4YlSPkc0XSQwKXQt2GoHJ7BWreiMBdjf'
  }
];

export default function RedTheme() {
  const [filterType, setFilterType] = useState('All');
  const [favorites, setFavorites] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [locality, setLocality] = useState('Worli, Mumbai');
  const [budget, setBudget] = useState('1.5 - 3.0 Cr');

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProperties = PROPERTIES.filter(prop => {
    const matchesType = filterType === 'All' || prop.type.toLowerCase().includes(filterType.toLowerCase());
    const matchesSearch = searchQuery === '' || 
      prop.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.developer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="theme-red bg-background min-h-screen font-body-md text-on-background antialiased transition-colors duration-300">
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center h-20 px-margin-desktop w-full max-w-container-max mx-auto bg-surface-white border-b border-outline-variant shadow-sm">
        <div className="flex items-center gap-gutter">
          <h1 className="font-display-lg text-headline-md font-black text-primary">StatLynk</h1>
          <div className="hidden md:flex gap-8 items-center h-full">
            <a className="text-primary border-b-2 border-primary pb-1 font-bold font-body-md text-body-md cursor-pointer active-scale" href="#">Buy</a>
            <a className="text-secondary hover:text-primary transition-colors font-body-md text-body-md cursor-pointer active-scale" href="#">Rent</a>
            <a className="text-secondary hover:text-primary transition-colors font-body-md text-body-md cursor-pointer active-scale" href="#">Sell</a>
            <a className="text-secondary hover:text-primary transition-colors font-body-md text-body-md cursor-pointer active-scale" href="#">Projects</a>
            <a className="text-secondary hover:text-primary transition-colors font-body-md text-body-md cursor-pointer active-scale" href="#">Dealers</a>
          </div>
        </div>
        <div className="flex items-center gap-stack-md">
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-md active-scale">Post Property</button>
          <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant cursor-pointer">
            <img alt="User profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS83pL8pPuHcY82_JcrRJHYVfrWj1g0fuk64tbipTN4iROEWgQrbuHZypC1iDaeY1lkKAZxUluVDcQklJxGwa6LsafBq792fG1cNUCVkm4p7z6kL-O_ZJFKLQCl9ip5o7_XYGh5G3DfKvKufAQ01VTfVUmbl17-UGwzjkDx10vBHEyshao7dU07KugT8qbjXdcquKhrnPl7A5yqsYnjE4izmCHGng10KvUVmhEw2iEuNvwIH-rzkYyVtVWrZ6KaXQup0XBEfpFtp5f" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full py-16 px-margin-desktop bg-surface-container-low hero-pattern">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left flex flex-col gap-6">
            <h2 className="font-display-lg text-display-lg text-on-background leading-tight">Smart Real Estate Decisions, Backed by Data.</h2>
            <p className="text-secondary font-body-lg text-body-lg">At StatLynk, we replace guesswork with mathematical precision. Explore verified listings with standardized risk scores, real-time demand indices, and trusted developers.</p>
            {/* Search Pill Container */}
            <div className="bg-surface-white rounded-2xl shadow-xl p-6 border border-outline-variant mt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-text-muted text-label-sm font-semibold">Locality</label>
                  <div className="flex items-center bg-surface-container border border-outline-variant rounded-lg px-3 py-2">
                    <span className="material-symbols-outlined text-text-muted text-sm mr-2">location_on</span>
                    <select 
                      value={locality} 
                      onChange={(e) => setLocality(e.target.value)} 
                      className="bg-transparent border-none focus:ring-0 text-on-surface font-body-md w-full outline-none cursor-pointer"
                    >
                      <option value="Worli, Mumbai">Worli, Mumbai</option>
                      <option value="Bandra, Mumbai">Bandra, Mumbai</option>
                      <option value="Sector 54, Gurgaon">Sector 54, Gurgaon</option>
                      <option value="Whitefield, Bangalore">Whitefield, Bangalore</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-text-muted text-label-sm font-semibold">Budget</label>
                  <div className="flex items-center bg-surface-container border border-outline-variant rounded-lg px-3 py-2">
                    <span className="material-symbols-outlined text-text-muted text-sm mr-2">payments</span>
                    <select 
                      value={budget} 
                      onChange={(e) => setBudget(e.target.value)} 
                      className="bg-transparent border-none focus:ring-0 text-on-surface font-body-md w-full outline-none cursor-pointer"
                    >
                      <option value="1.5 - 3.0 Cr">1.5 - 3.0 Cr</option>
                      <option value="3.0 - 5.0 Cr">3.0 - 5.0 Cr</option>
                      <option value="5.0 Cr+">5.0 Cr+</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-text-muted text-label-sm font-semibold">Search Keywords</label>
                  <div className="flex items-center bg-surface-container border border-outline-variant rounded-lg px-3 py-2">
                    <span className="material-symbols-outlined text-text-muted text-sm mr-2">search</span>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="e.g. Prestige, DLF..."
                      className="bg-transparent border-none focus:ring-0 text-on-surface font-body-md w-full outline-none"
                    />
                  </div>
                </div>
              </div>
              <button className="w-full bg-primary text-on-primary py-3.5 rounded-lg font-headline-md hover:bg-primary-container transition-all active:scale-95 shadow-md flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">analytics</span> Calculate Index & Search
              </button>
            </div>
          </div>
          {/* Hero Image Block */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[480px]">
            <img className="w-full h-full object-cover" alt="Luxury private modern villa architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkRGzCoSZIs9QqD1Cupk1XIrGlgvwwVLJ9-t5DS101XT1kq_LBGpNet7VCkVQs6RzlT3Yw5tLqAxp7rlGHKuvDbFll1kaKtPBzMkMY_yLILz07ylcYgITJjG94MfhhFsaI81ecidiAMCYHwzkz9PsfFjU83fCtnO-qMFSCFnvzpeN-tfS-aePladcdflGUzqPfgFanlAE-lq2r3XWplUG1OfLo_xHO4-kepzUL6pUxl-OVGmNbJ6Hu-71qV-b81wQtNwKB0Ro_m8P3" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur border border-outline-variant p-4 rounded-xl shadow-lg flex items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <div className="text-left">
                <p className="text-primary font-bold font-headline-md text-headline-sm">100% Verified</p>
                <p className="text-secondary text-body-sm">All listings verified on-site</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-desktop py-16">
        {/* Quick Stats Panel */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-16">
          {[
            { value: '14K+', label: 'Verified Premium Properties', desc: 'Each cataloged with standardized metrics.' },
            { value: '95+', label: 'Real Estate Experts Onboarded', desc: 'Available for offline consultations.' },
            { value: '₹2,400 Cr+', label: 'Transaction Value Realized', desc: 'Securely processed over the last decade.' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-surface-white border border-outline-variant p-6 rounded-xl text-left flex flex-col gap-2 hover:shadow-md transition-shadow">
              <h4 className="font-display-lg text-display-lg text-primary">{stat.value}</h4>
              <p className="font-label-md text-headline-sm">{stat.label}</p>
              <p className="text-text-muted text-body-sm">{stat.desc}</p>
            </div>
          ))}
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h3 className="font-headline-lg text-headline-lg text-left mb-6">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {[
              { name: 'Apartment', icon: 'apartment' },
              { name: 'House/Villa', icon: 'home' },
              { name: 'Plot', icon: 'landscape' },
              { name: 'Commercial', icon: 'corporate_fare' }
            ].map(cat => (
              <div 
                key={cat.name}
                onClick={() => setFilterType(cat.name)}
                className={`border p-6 rounded-xl flex flex-col items-center gap-3 hover:shadow-lg transition-all cursor-pointer bg-surface-white ${filterType === cat.name ? 'border-primary bg-primary/5 shadow-md' : 'border-outline-variant'}`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${filterType === cat.name ? 'bg-primary text-on-primary' : 'bg-surface-container text-primary'}`}>
                  <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                </div>
                <span className="font-label-md text-label-md">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Listings */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div className="text-left">
              <h3 className="font-headline-lg text-headline-lg">Featured Listings</h3>
              <p className="text-text-muted text-body-md">Low-risk opportunities handpicked based on market velocity index</p>
            </div>
            <button className="text-primary font-label-md flex items-center gap-1 hover:underline">
              View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-stack-md scrollbar-hide no-scrollbar">
            {['All', 'Apartment', 'House/Villa', 'Plot', 'Commercial'].map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`flex-shrink-0 px-6 py-2 rounded-full font-label-md transition-all active:scale-95 ${filterType === type ? 'bg-primary text-on-primary' : 'bg-surface-container text-secondary hover:bg-surface-container-high'}`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(prop => (
                <article key={prop.id} className="bg-surface-white rounded-xl border border-outline-variant overflow-hidden hover:shadow-2xl transition-all group cursor-pointer text-left">
                  <div className="relative h-56 overflow-hidden">
                    <img alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={prop.image} />
                    <div className="absolute top-4 left-4 bg-status-success/90 text-white px-3 py-1 rounded-full text-label-sm font-bold flex items-center gap-1 shadow-md">
                      <span className="material-symbols-outlined text-[14px]">verified</span> RERA Approved
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(prop.id); }}
                      className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <span className={`material-symbols-outlined ${favorites[prop.id] ? 'text-red-500' : 'text-primary'}`} style={{ fontVariationSettings: favorites[prop.id] ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-headline-md text-headline-md truncate">{prop.title}</h4>
                      <span className="text-primary font-bold text-headline-md">{prop.price}</span>
                    </div>
                    <p className="text-text-muted text-body-sm flex items-center gap-1 mb-4">
                      <span className="material-symbols-outlined text-sm">location_on</span> {prop.location}
                    </p>
                    <div className="flex justify-between border-y border-surface-container py-3 mb-4">
                      <div className="text-center">
                        <p className="text-text-muted text-label-sm">Config</p>
                        <p className="font-label-md">{prop.config}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-text-muted text-label-sm">Area</p>
                        <p className="font-label-md">{prop.area}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-text-muted text-label-sm">Status</p>
                        <p className="font-label-md text-status-success">{prop.status}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-bold text-primary text-xs">{prop.devLogo}</div>
                        <span className="text-label-md font-semibold">{prop.developer}</span>
                      </div>
                      <button className="border border-primary text-primary px-4 py-1.5 rounded-lg text-label-sm font-bold hover:bg-primary hover:text-white transition-all">Details</button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-text-muted font-body-lg">
                No verified properties found matching your search.
              </div>
            )}
          </div>
        </section>

        {/* Top Builders */}
        <section className="mb-16">
          <div className="text-left mb-8">
            <h3 className="font-headline-lg text-headline-lg">Leading Developers</h3>
            <p className="text-text-muted text-body-md">Top real estate development institutions with high rating matrices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { name: 'LODHA', title: 'Lodha Group', active: 45, ongoing: 12, grade: 'A++ Grade' },
              { name: 'TATA', title: 'Tata Housing', active: 38, ongoing: 8, grade: 'A+ Grade' },
              { name: 'DLF', title: 'DLF Limited', active: 62, ongoing: 15, grade: 'A++ Grade' }
            ].map((builder, idx) => (
              <div key={idx} className="bg-surface-white border border-outline-variant rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow text-left">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-surface-container border border-surface-variant flex items-center justify-center p-2 rounded-lg font-black text-primary text-lg">{builder.name}</div>
                  <span className="bg-status-success/10 text-status-success px-2.5 py-1 rounded-full text-label-sm font-bold border border-status-success/20">{builder.grade}</span>
                </div>
                <div>
                  <h4 className="font-label-md text-headline-sm mb-1">{builder.title}</h4>
                  <p className="text-text-muted text-body-sm">Active portfolio: {builder.active} premium projects</p>
                </div>
                <div className="flex justify-between border-t border-surface-container pt-4 text-body-sm text-secondary">
                  <span>Ongoing: {builder.ongoing} projects</span>
                  <a className="text-primary hover:underline font-bold flex items-center gap-0.5 cursor-pointer">Catalog <span className="material-symbols-outlined text-[14px]">arrow_forward</span></a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verified Experts */}
        <section className="mb-16">
          <h3 className="font-headline-lg text-headline-lg text-left mb-8">Verified Property Experts</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {[
              { name: 'Rajesh Malhotra', agency: 'Prime Realty Associates', badge: 'Legacy Agent', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCft_OUcqbBOhzFTHfR3Dkv5jclQk4TReRIcrxDb_4fnjJyaoHi1lakjD2MlC7Ti7F3Eqy4UbvSDwZjlsl8hP1XPNi4mORKTEFfamnYZuovhVolsZ5arq0UIscaFWOQ81BZtqOj2aiDNFIlfqjEKHprM9k3EKiJpofUOlylQ17CufrT8w2Ak9ARaNpEVr0ih0iVssdG77Ap-bJO1UJGd28WHfDRU9_Bv_1vwAo6C_vZQBReaYeoziwzaUxoIdxJMDB0FSgyyXQd8u64' },
              { name: 'Ananya Sharma', agency: 'Elite Properties Gurgaon', badge: 'Top Rated', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBybE8G7rbdZEr6g0NghSFKFe93oqUSydU9_ikIpQBAf4NlPNBTpIPvCxs8D72nztEZBY9zCNxPXql135W-VJVePj6NbCgAbCT4amAlJKm85yHgY42QDjELRxrErRUu-vrOu0MviMtCakUSPCCqELj_e_tKo5np_p1ZEjK5wxWj7c4WgzFtlXuHbf5n6pnnjAgzvD7_IHtf7fEGlwTLw3xg3fuexh1NkUe1l1gLV4BB7esNufq_5cnKCQJF9jvOLwQpO7UUonWUeLYg' },
              { name: 'Vikram Singh', agency: 'Urban Nest Solutions', badge: 'Legacy Agent', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-K5yVjSSSwSiFiGDXVhlfwMsfesYmp1YWZu1yeHb5OilBIhtNGp4FrGwMsanQgKvvAUYAVch3uQfRk0_nDDv9yzi6y7rLBronepsl9uc6PZA9fLbWTLX0ytA_nbg7tQ_oD1TYpU3m3h4ndr7NiuH11XKPxNkrYcANxNNsQedh-XtMeoxk3kB9bYhAqDhSj71sYgV373DgqEyiN-hzT7s8RC053jvmP3I-54FZ4ng3SGnq7gTau75MUmE-IWpPlLc7246F510v7VnD' },
              { name: 'Priya Kapoor', agency: 'Signature Homes', badge: 'Top Rated', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPSWJ7bfGwuYi1Ohj6nVyq-TVarHudt_c0l_vs7ws6IVfAgoPYdk5IYMLGoYTVTsRg6XCRJ3VXB9FVSWPFKZ2BpNFmoMokDqejYwBmOUpFrr6qJky_wuZGhlOQWHw_iG1A0MdvYNZq0rdWVg4ctYdUJh5ObS66B-ffpkvGGHWH-bc8HkIHjyVr6ybda9Bzkv6UHLK1-8dQJj2KUXXKx-VXNoQ7PGrMhr5tI-xnDdhw3dF_o2o1qWz4CeGHZO2wVukqDvlQA-2KC3vW' }
            ].map((agent, idx) => (
              <div key={idx} className="bg-surface-white p-6 border border-outline-variant rounded-xl flex flex-col items-center text-center hover:shadow-lg transition-all">
                <div className="relative mb-4">
                  <img alt={agent.name} className="w-24 h-24 rounded-full object-cover border-2 border-primary" src={agent.image} />
                  <div className="absolute bottom-0 right-0 bg-status-info text-white rounded-full p-1 border-2 border-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                  </div>
                </div>
                <h5 className="font-label-md text-headline-md mb-1">{agent.name}</h5>
                <p className="text-text-muted text-body-sm mb-4">{agent.agency}</p>
                <span className="bg-surface-container-low text-primary px-3 py-1 rounded-full text-label-sm font-bold border border-primary/20">{agent.badge}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant grid grid-cols-1 md:grid-cols-4 gap-gutter bg-surface-white text-left">
        <div className="col-span-1 flex flex-col gap-6">
          <h2 className="font-display-lg text-headline-md font-bold text-primary">StatLynk</h2>
          <p className="text-text-muted text-body-sm">Simplifying your property journey with data-driven insights and verified listings since 2012.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">face_nod</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">share</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">mail</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-label-md text-primary">Quick Links</h6>
          <ul className="flex flex-col gap-2">
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">About Us</a></li>
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Careers</a></li>
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Privacy Policy</a></li>
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-label-md text-primary">Services</h6>
          <ul className="flex flex-col gap-2">
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Property Management</a></li>
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Legal Consultation</a></li>
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Home Loans</a></li>
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Interior Design</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-label-md text-primary">Newsletter</h6>
          <p className="text-text-muted text-body-sm">Stay updated with market trends.</p>
          <div className="flex gap-2">
            <input className="bg-surface-container border border-outline-variant rounded-lg px-3 py-2 w-full focus:ring-primary focus:border-primary text-body-sm text-on-surface" placeholder="Email Address" type="email" />
            <button className="bg-primary text-on-primary p-2 rounded-lg flex items-center justify-center hover:bg-primary-container transition-colors"><span className="material-symbols-outlined">send</span></button>
          </div>
        </div>
        <div className="col-span-full border-t border-surface-container mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-body-sm">© 2024 StatLynk Real Estate Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <img className="h-8 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Google Play Store" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkoE1OoyAsOov7I1fqFHcEZTedWZB066Sv_CEdWnquxUXqa3tm28pEbGtBqRic96QkPYqvdo1fs8oKC-Hxr8B1dg5YFgrVTb9Psi_xS9Kl83SyM1PxAkFLdl8_C7FpSulcZRNnlAJjp-OzfkLsEdUCF4OeeO2PMPuaEuD0MCJ8Zir8X1HPBEbBl5bKXGJrOidFbDq65V9b6WAgUbmAcH_jcrCYFz_uRSrfHk9WiYd_lQ4hkW8q5kEbtJj2d7sy2ETV8OFRJ_hyAg9r" />
            <img className="h-8 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="App Store" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAikdED3PkswAeiANAMY3S4zTqlL4GQol74iZdYAheRjxtSimUPZ1QZjwa8AtRQymjbo-MitJuuZNQCCVdYYfcp1I2vrhZPVuliBb-d2IQUV45GJMGn2tdbmKJq7-SVEGjSL5Ub4gZ4A9z9P3BdB8IiBYzgAuST-A7PV8DIQs6tA-bI-kuqzvnyu3quA0hopRMId7lwdAMMwrqC_ta8gUKFpNjbkz-uXjOlBAkdyjiTLEpbvuI_WDCGSEv561XK4LwHQlGnFu9fqlmF" />
          </div>
        </div>
      </footer>
    </div>
  );
}
