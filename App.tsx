
import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  TrendingUp, 
  Shield, 
  Clock, 
  Globe,
  Apple,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { FEATURES } from './constants';
import { translations } from './translations';

type Language = 'en' | 'zh';

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.253 22.571c-.244.244-.45.215-.45-.133V1.562c0-.348.206-.377.45-.133l10.323 10.323c.244.244.244.641 0 .885L3.253 22.571zM17.59 15.222l-4.14-4.14c-.244-.244-.244-.641 0-.885l4.14-4.14 3.996 2.307c1.137.656 1.137 1.724 0 2.381l-3.996 2.307c-.1.057-.225.087-.353.087-.327 0-.623-.198-.747-.493zM14.335 12.885l-1.002-1.002c-.244-.244-.244-.641 0-.885l1.002-1.002 4.142 4.142-4.142 4.142z"/>
  </svg>
);

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('zh');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const brands = [
    { name: 'Apple', icon: '🍎' },
    { name: 'Steam', icon: '🎮' },
    { name: 'Amazon', icon: '📦' },
    { name: 'Google Play', icon: '📱' },
    { name: 'Razer Gold', icon: '🐍' },
    { name: 'Vanilla', icon: '💳' },
    { name: 'Sephora', icon: '💄' },
    { name: 'Nordstrom', icon: '👗' },
    { name: 'Nike', icon: '👟' },
    { name: 'Xbox', icon: '🟢' },
    { name: 'PlayStation', icon: '🔵' },
    { name: 'eBay', icon: '🏷️' },
    { name: 'Walmart', icon: '🛒' }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 relative">
      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setShowPrivacyModal(false)}
          ></div>
          <div className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-[2rem] shadow-2xl animate-fade-in-up border border-indigo-50">
            <div className="sticky top-0 bg-white/80 backdrop-blur-md px-8 py-6 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <FileText className="text-indigo-600" />
                <h3 className="text-2xl font-bold text-slate-900">{t.privacy.title}</h3>
              </div>
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={24} className="text-slate-500" />
              </button>
            </div>
            <div className="p-8 space-y-8 text-slate-600">
              <p className="text-sm font-medium text-indigo-500">{t.privacy.lastUpdated}</p>
              {t.privacy.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-lg font-bold text-slate-900">{section.title}</h4>
                  <p className="leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
            <div className="p-8 border-t border-slate-100 text-right">
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
              >
                {t.privacy.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <span className="text-white font-bold text-xl italic">O</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-indigo-950 italic">OwoCard</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">{t.nav.home}</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">{t.nav.features}</button>
              
              <div className="h-6 w-px bg-slate-200"></div>

              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-bold transition-all px-3 py-1 rounded-lg hover:bg-indigo-50"
              >
                <Globe size={18} />
                <span>{language === 'en' ? '中文' : 'EN'}</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4">
               <button 
                onClick={toggleLanguage}
                className="text-slate-600 font-bold p-2"
              >
                {language === 'en' ? '中' : 'EN'}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-white">
            <div className="pt-24 pb-6 px-4 space-y-4 text-center">
              <button onClick={() => scrollToSection('home')} className="block w-full text-xl font-medium py-3">{t.nav.home}</button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-xl font-medium py-3">{t.nav.features}</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-12 md:pt-48 md:pb-20 overflow-hidden text-center">
        <div className="absolute top-0 right-0 -z-10 w-full h-full bg-gradient-to-b from-indigo-50/50 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-semibold mx-auto">
              <TrendingUp size={16} />
              <span>{t.hero.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
              {t.hero.title1} <br />
              <span className="text-indigo-600">{t.hero.title2}</span>
            </h1>
            <p className="text-xl text-slate-600 mx-auto max-w-lg leading-relaxed">
              {t.hero.slogan}
            </p>
            
            {/* App Download Buttons */}
            <div className="space-y-4 pt-4">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.hero.downloadApp}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-black transition-colors shadow-lg">
                  <Apple size={28} />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase opacity-70">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-black transition-colors shadow-lg">
                  <PlayStoreIcon />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase opacity-70">Get it on</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Brands Ticker */}
        <div className="mt-20 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          <div className="flex gap-12 animate-ticker whitespace-nowrap px-4">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-400 font-bold text-xl grayscale hover:grayscale-0 transition-all cursor-default opacity-50 hover:opacity-100">
                <span className="text-2xl">{brand.icon}</span>
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Features */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">{t.features.title}</h2>
            <p className="text-slate-500 text-lg">{t.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={feature.id} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-indigo-600">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{t.features.items[idx].title}</h4>
                <p className="text-slate-500 leading-relaxed">{t.features.items[idx].description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[3rem] p-12 md:p-20 relative text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -ml-24 -mb-24"></div>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">{t.steps.title}</h2>
                <div className="space-y-12">
                  {[t.steps.s1, t.steps.s2, t.steps.s3].map((step, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-2xl shadow-lg shadow-indigo-900/40 group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </div>
                      <div className="pt-1">
                        <h4 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{step.t}</h4>
                        <p className="text-slate-400 text-lg leading-relaxed">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] aspect-[4/5] flex items-center justify-center overflow-hidden shadow-[0_0_100px_-20px_rgba(79,70,229,0.3)] border border-slate-700/50">
                   <div className="absolute inset-0 flex items-center justify-center opacity-40">
                      <div className="w-64 h-64 bg-indigo-500 rounded-full blur-[80px] animate-pulse"></div>
                   </div>

                   <div className="relative w-full h-full flex items-center justify-center p-8">
                      <div className="absolute top-12 left-8 right-8 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                            <CheckCircle2 className="text-white" size={20} />
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-bold tracking-wider text-green-400">Payment Sent</div>
                            <div className="font-bold text-white">#OWO-892301</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-2">
                           <span className="text-2xl font-mono font-bold text-white tracking-tighter">₦142,500.00</span>
                           <span className="text-[10px] text-slate-400 font-medium">Just now</span>
                        </div>
                      </div>

                      <div className="bg-indigo-600/90 backdrop-blur-xl border border-white/30 p-8 rounded-[2rem] w-full max-w-[280px] shadow-2xl z-20 transform translate-y-12 translate-x-4">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                            <Clock className="text-white animate-spin-slow" size={24} />
                          </div>
                          <div>
                            <div className="text-xs uppercase opacity-70 font-bold tracking-widest">{t.steps.status}</div>
                            <div className="font-black text-xl">Verification</div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-white w-3/4 rounded-full shadow-[0_0_10px_#fff]"></div>
                          </div>
                          <div className="flex justify-between items-center text-sm font-bold">
                            <span className="opacity-70">ETA</span>
                            <span className="text-white underline decoration-indigo-300 underline-offset-4">{t.steps.time}</span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-12 left-10 text-[10px] font-mono text-indigo-400 opacity-50 space-y-1">
                         <div>> verify_checksum(card_8293)</div>
                         <div>> status: SUCCESS</div>
                         <div>> init_transfer(bank_id)</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16 items-start">
            <div className="space-y-6 col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl italic">O</span>
                </div>
                <span className="text-2xl font-black tracking-tighter text-indigo-950 italic">OwoCard</span>
              </div>
              <p className="text-slate-500 max-w-sm">
                {t.footer.desc}
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Instagram', 'Telegram'].map(platform => (
                  <a key={platform} href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                    <span className="sr-only">{platform}</span>
                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h5 className="font-bold text-slate-900 mb-6">{t.footer.apps}</h5>
              <div className="space-y-3">
                <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors w-full">
                  <Apple size={20} />
                  <div className="text-left leading-none">
                    <div className="text-[8px] uppercase opacity-70">App Store</div>
                    <div className="text-xs font-bold">Download</div>
                  </div>
                </button>
                <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors w-full">
                  <PlayStoreIcon />
                  <div className="text-left leading-none">
                    <div className="text-[8px] uppercase opacity-70">Google Play</div>
                    <div className="text-xs font-bold">Download</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>{t.footer.rights}</p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-indigo-600 transition-colors"
              >
                {t.footer.privacy}
              </button>
              <span className="flex items-center gap-1"><Shield size={14} /> {t.footer.secured}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {t.footer.monitoring}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-indigo-400 hover:scale-110 transition-transform z-50 group">
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {language === 'en' ? 'Need help? Chat with Owo' : '需要帮助？联系 Owo'}
        </span>
      </button>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
