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

export default function BlueTheme() {
  const [searchTab, setSearchTab] = useState('Buy');
  const [filterType, setFilterType] = useState('All');
  const [location, setLocation] = useState('Mumbai');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState({});

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
    <div className="theme-blue bg-background min-h-screen font-body-md text-on-background antialiased transition-colors duration-300">
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center h-20 px-margin-desktop w-full max-w-container-max mx-auto bg-surface-white shadow-md">
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

      {/* Hero Search Section */}
      <header className="relative w-full h-[540px] flex items-center justify-center px-margin-desktop mb-stack-lg">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img className="w-full h-full object-cover brightness-[0.7]" alt="A luxury modern high-rise villa" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkRGzCoSZIs9QqD1Cupk1XIrGlgvwwVLJ9-t5DS101XT1kq_LBGpNet7VCkVQs6RzlT3Yw5tLqAxp7rlGHKuvDbFll1kaKtPBzMkMY_yLILz07ylcYgITJjG94MfhhFsaI81ecidiAMCYHwzkz9PsfFjU83fCtnO-qMFSCFnvzpeN-tfS-aePladcdflGUzqPfgFanlAE-lq2r3XWplUG1OfLo_xHO4-kepzUL6pUxl-OVGmNbJ6Hu-71qV-b81wQtNwKB0Ro_m8P3" />
        </div>
        <div className="relative z-10 w-full max-w-4xl text-center">
          <h2 className="font-display-lg text-display-lg text-white mb-stack-lg drop-shadow-lg">Find Your Perfect Address</h2>
          {/* Search Tabs & Bar */}
          <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6 mx-auto">
            <div className="flex gap-stack-md mb-6 border-b border-surface-container">
              {['Buy', 'Rent', 'Projects'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setSearchTab(tab)}
                  className={`pb-3 px-4 transition-all ${searchTab === tab ? 'text-primary border-b-2 border-primary font-bold' : 'text-secondary hover:text-primary'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 w-full flex items-center bg-surface-container-low rounded-lg px-4 py-3 border border-outline-variant">
                <span className="material-symbols-outlined text-text-muted mr-3">location_on</span>
                <select 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)} 
                  className="bg-transparent border-none focus:ring-0 text-on-surface font-body-md w-32 cursor-pointer"
                >
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Pune">Pune</option>
                </select>
                <div className="h-6 w-[1px] bg-outline-variant mx-4"></div>
                <span class="material-symbols-outlined text-text-muted mr-3">search</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 w-full text-on-surface font-body-md outline-none"
                  placeholder="Search by locality or builder..."
                />
              </div>
              <button className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-lg font-headline-md flex items-center justify-center gap-2 hover:bg-primary-container transition-all active:scale-95 shadow-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-desktop py-stack-lg">
        {/* Property Categories */}
        <section className="mb-stack-lg">
          <div className="flex justify-between items-center mb-stack-md">
            <h3 className="font-headline-lg text-headline-lg">Browse by Category</h3>
          </div>
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
                className={`border p-gutter rounded-xl flex flex-col items-center gap-stack-sm hover:shadow-lg transition-all cursor-pointer group ${filterType === cat.name ? 'border-primary bg-surface-container-low shadow-md' : 'bg-surface-white border-outline-variant'}`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${filterType === cat.name ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-primary group-hover:bg-primary-container group-hover:text-on-primary'}`}>
                  <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                </div>
                <span className="font-label-md text-label-md">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Properties */}
        <section className="mb-stack-lg">
          <div className="flex justify-between items-end mb-stack-md">
            <div>
              <h3 className="font-headline-lg text-headline-lg">Featured Properties</h3>
              <p className="text-text-muted font-body-md">Handpicked premium listings in {location}</p>
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
                <article key={prop.id} className="bg-surface-white rounded-xl border border-outline-variant overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                  <div className="relative h-56 overflow-hidden">
                    <img alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={prop.image} />
                    <div className="absolute top-4 left-4 bg-status-success/90 text-white px-3 py-1 rounded-full text-label-sm font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">verified</span> RERA Approved
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(prop.id); }}
                      className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <span className={`material-symbols-outlined ${favorites[prop.id] ? 'text-red-500' : 'text-primary'}`} style={{ fontVariationSettings: favorites[prop.id] ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
                    </button>
                  </div>
                  <div className="p-stack-md">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-headline-md text-headline-md truncate">{prop.title}</h4>
                      <span className="text-primary font-display-lg text-headline-md">{prop.price}</span>
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

        {/* Sponsored Projects */}
        <section className="mb-stack-lg">
          <div className="flex justify-between items-end mb-stack-md">
            <div>
              <h3 className="font-headline-lg text-headline-lg">Projects based on your location</h3>
              <p className="text-text-muted font-body-md">Exclusive premium developments handpicked for you</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { title: 'Grand Orchid Towers', dev: 'By Lodha Group', price: '₹1.8 Cr - 4.5 Cr', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1_qR7y1s1G1X1E1G1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z1a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1y1z' },
              { title: 'The Azure Residences', dev: 'By Tata Housing', price: '₹2.2 Cr - 5.8 Cr', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1_qR7y1s1G1X1E1G1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z1a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1y1z' },
              { title: 'Apex Sky Gardens', dev: 'By DLF Limited', price: '₹3.5 Cr - 8.0 Cr', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1_qR7y1s1G1X1E1G1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z1a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1y1z' }
            ].map((proj, idx) => (
              <article key={idx} className="bg-surface-white rounded-xl border border-outline-variant overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center text-primary text-xl font-bold">
                    <span>{proj.title} Layout</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-label-sm font-bold flex items-center gap-1 shadow-md">
                    <span className="material-symbols-outlined text-[14px]">verified</span> Sponsored
                  </div>
                </div>
                <div className="p-stack-md">
                  <h4 className="font-headline-md text-headline-md truncate mb-1">{proj.title}</h4>
                  <p className="text-text-muted text-body-sm mb-4">{proj.dev}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-text-muted text-label-sm">Starting Price</span>
                      <span className="text-primary font-display-lg text-headline-md">{proj.price}</span>
                    </div>
                    <button className="bg-primary text-on-primary px-4 py-2 rounded-lg text-label-sm font-bold hover:bg-primary-container transition-all shadow-sm">View Plan</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Verified Dealers */}
        <section className="mb-stack-lg">
          <h3 class="font-headline-lg text-headline-lg mb-stack-md">Verified Property Experts</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {[
              { name: 'Rajesh Malhotra', agency: 'Prime Realty Associates', badge: 'Legacy Agent', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCft_OUcqbBOhzFTHfR3Dkv5jclQk4TReRIcrxDb_4fnjJyaoHi1lakjD2MlC7Ti7F3Eqy4UbvSDwZjlsl8hP1XPNi4mORKTEFfamnYZuovhVolsZ5arq0UIscaFWOQ81BZtqOj2aiDNFIlfqjEKHprM9k3EKiJpofUOlylQ17CufrT8w2Ak9ARaNpEVr0ih0iVssdG77Ap-bJO1UJGd28WHfDRU9_Bv_1vwAo6C_vZQBReaYeoziwzaUxoIdxJMDB0FSgyyXQd8u64' },
              { name: 'Ananya Sharma', agency: 'Elite Properties Gurgaon', badge: 'Top Rated', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBybE8G7rbdZEr6g0NghSFKFe93oqUSydU9_ikIpQBAf4NlPNBTpIPvCxs8D72nztEZBY9zCNxPXql135W-VJVePj6NbCgAbCT4amAlJKm85yHgY42QDjELRxrErRUu-vrOu0MviMtCakUSPCCqELj_e_tKo5np_p1ZEjK5wxWj7c4WgzFtlXuHbf5n6pnnjAgzvD7_IHtf7fEGlwTLw3xg3fuexh1NkUe1l1gLV4BB7esNufq_5cnKCQJF9jvOLwQpO7UUonWUeLYg' },
              { name: 'Vikram Singh', agency: 'Urban Nest Solutions', badge: 'Legacy Agent', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-K5yVjSSSwSiFiGDXVhlfwMsfesYmp1YWZu1yeHb5OilBIhtNGp4FrGwMsanQgKvvAUYAVch3uQfRk0_nDDv9yzi6y7rLBronepsl9uc6PZA9fLbWTLX0ytA_nbg7tQ_oD1TYpU3m3h4ndr7NiuH11XKPxNkrYcANxNNsQedh-XtMeoxk3kB9bYhAqDhSj71sYgV373DgqEyiN-hzT7s8RC053jvmP3I-54FZ4ng3SGnq7gTau75MUmE-IWpPlLc7246F510v7VnD' },
              { name: 'Priya Kapoor', agency: 'Signature Homes', badge: 'Top Rated', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPSWJ7bfGwuYi1Ohj6nVyq-TVarHudt_c0l_vs7ws6IVfAgoPYdk5IYMLGoYTVTsRg6XCRJ3VXB9FVSWPFKZ2BpNFmoMokDqejYwBmOUpFrr6qJky_wuZGhlOQWHw_iG1A0MdvYNZq0rdWVg4ctYdUJh5ObS66B-ffpkvGGHWH-bc8HkIHjyVr6ybda9Bzkv6UHLK1-8dQJj2KUXXKx-VXNoQ7PGrMhr5tI-xnDdhw3dF_o2o1qWz4CeGHZO2wVukqDvlQA-2KC3vW' }
            ].map((agent, idx) => (
              <div key={idx} className="bg-surface-white p-gutter border border-outline-variant rounded-xl flex flex-col items-center text-center hover:shadow-lg transition-all">
                <div className="relative mb-stack-md">
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

        {/* Top Builders */}
        <section className="mb-stack-lg">
          <h3 className="font-headline-lg text-headline-lg mb-stack-md">Leading Developers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { name: 'LODHA', title: 'Lodha Group', active: 45, ongoing: 12 },
              { name: 'TATA', title: 'Tata Housing', active: 38, ongoing: 8 },
              { name: 'DLF', title: 'DLF Limited', active: 62, ongoing: 15 }
            ].map((builder, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer bg-surface-white">
                <div className="w-16 h-16 bg-white border border-surface-container flex items-center justify-center p-2 rounded-lg">
                  <span className="font-black text-primary text-xl">{builder.name}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <h6 className="font-label-md">{builder.title}</h6>
                    <span className="material-symbols-outlined text-status-info text-[16px]">verified</span>
                  </div>
                  <p className="text-text-muted text-body-sm">{builder.active} Projects • {builder.ongoing} Ongoing</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-stack-lg px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant grid grid-cols-1 md:grid-cols-4 gap-gutter bg-surface-container-lowest">
        <div className="col-span-1 text-left">
          <h2 className="font-display-lg text-headline-md font-bold text-primary mb-stack-md">StatLynk</h2>
          <p className="text-text-muted text-body-sm mb-stack-md">Simplifying your property journey with data-driven insights and verified listings since 2012.</p>
          <div className="flex gap-stack-md">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">face_nod</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">share</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">mail</span>
          </div>
        </div>
        <div className="text-left">
          <h6 className="font-label-md text-primary mb-stack-md">Quick Links</h6>
          <ul className="flex flex-col gap-2">
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">About Us</a></li>
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Careers</a></li>
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Privacy Policy</a></li>
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h6 className="font-label-md text-primary mb-stack-md">Services</h6>
          <ul className="flex flex-col gap-2">
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Property Management</a></li>
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Legal Consultation</a></li>
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Home Loans</a></li>
            <li><a className="text-text-muted hover:text-primary transition-all font-body-sm" href="#">Interior Design</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h6 className="font-label-md text-primary mb-stack-md">Newsletter</h6>
          <p className="text-text-muted text-body-sm mb-4">Stay updated with market trends.</p>
          <div className="flex gap-2">
            <input className="bg-surface-container border border-outline-variant rounded-lg px-3 py-2 w-full focus:ring-primary focus:border-primary text-body-sm text-on-surface" placeholder="Email Address" type="email" />
            <button className="bg-primary text-on-primary p-2 rounded-lg flex items-center justify-center hover:bg-primary-container transition-colors"><span className="material-symbols-outlined">send</span></button>
          </div>
        </div>
        <div className="col-span-full border-t border-surface-container mt-stack-lg pt-stack-md flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-body-sm">© 2024 StatLynk Real Estate Solutions. All rights reserved.</p>
          <div className="flex gap-stack-md">
            <img className="h-8 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Google Play Store" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkoE1OoyAsOov7I1fqFHcEZTedWZB066Sv_CEdWnquxUXqa3tm28pEbGtBqRic96QkPYqvdo1fs8oKC-Hxr8B1dg5YFgrVTb9Psi_xS9Kl83SyM1PxAkFLdl8_C7FpSulcZRNnlAJjp-OzfkLsEdUCF4OeeO2PMPuaEuD0MCJ8Zir8X1HPBEbBl5bKXGJrOidFbDq65V9b6WAgUbmAcH_jcrCYFz_uRSrfHk9WiYd_lQ4hkW8q5kEbtJj2d7sy2ETV8OFRJ_hyAg9r" />
            <img className="h-8 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="App Store" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAikdED3PkswAeiANAMY3S4zTqlL4GQol74iZdYAheRjxtSimUPZ1QZjwa8AtRQymjbo-MitJuuZNQCCVdYYfcp1I2vrhZPVuliBb-d2IQUV45GJMGn2tdbmKJq7-SVEGjSL5Ub4gZ4A9z9P3BdB8IiBYzgAuST-A7PV8DIQs6tA-bI-kuqzvnyu3quA0hopRMId7lwdAMMwrqC_ta8gUKFpNjbkz-uXjOlBAkdyjiTLEpbvuI_WDCGSEv561XK4LwHQlGnFu9fqlmF" />
          </div>
        </div>
      </footer>
    </div>
  );
}
