/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket,
  ChevronRight, 
  Sparkles,
  Gamepad2,
  Monitor,
  Headset,
  Users,
  ExternalLink
} from 'lucide-react';

export default function App() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const zepLinks = [
    { id: 1, url: 'https://zep.us/play/0EMlZB', title: 'ZEP 체험하기 1', icon: Gamepad2, color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 2, url: 'https://zep.us/play/qnE64A', title: 'ZEP 체험하기 2', icon: Monitor, color: 'text-violet-500', bg: 'bg-violet-50' },
    { id: 3, url: 'https://zep.us/play/r7RzOg', title: 'ZEP 체험하기 3', icon: Headset, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { id: 4, url: 'https://zep.us/play/KwAkbY', title: 'ZEP 체험하기 4', icon: Users, color: 'text-rose-500', bg: 'bg-rose-50' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans break-keep selection:bg-violet-100 selection:text-violet-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Title */}
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-violet-50 rounded-xl group-hover:bg-violet-100 transition-colors">
                <img 
                  src="https://i.imgur.com/OYDYlXa.png" 
                  alt="경북교육청 로고" 
                  className="h-10 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold text-gray-900 tracking-tight">
                  원어민과 함께하는 북클럽
                </span>
              </div>
            </div>
            
            {/* Desktop Nav (Simplified to just the apply button) */}
            <nav className="hidden md:flex items-center">
              <a
                href="https://www.gbe.kr/dep_edu/cm/cntnts/cntntsView.do?mi=23519&cntntsId=9548"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-xl text-sm font-bold bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 flex items-center gap-2"
              >
                수강 신청하기 <ExternalLink size={16} />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <section className="relative min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://i.imgur.com/Hry0vzI.png" 
                alt="Main Background" 
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-violet-50/30 via-white/40 to-white"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-violet-50 rounded-full text-violet-700 text-sm font-bold border border-violet-100"
              >
                <Sparkles size={16} /> 2026 1학기 원어민과 함께하는 북클럽
              </motion.div>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.15] tracking-tight"
              >
                메타버스 세상에서 펼쳐지는<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  신나는 영어 모험!
                </span>
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                원어민 선생님과 함께 책을 읽으며 꿈을 키워보세요.<br className="hidden md:block" />
                경북교육청이 제안하는 새로운 차원의 영어 학습 경험.
              </motion.p>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <a 
                  href="https://www.gbe.kr/dep_edu/cm/cntnts/cntntsView.do?mi=23519&cntntsId=9548" 
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 text-lg flex items-center justify-center gap-2"
                >
                  지금 바로 신청하기 <ExternalLink size={20} />
                </a>
                <button 
                  onClick={() => {
                    document.getElementById('experience-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 text-lg flex items-center justify-center gap-2"
                >
                  ZEP 체험하기 <ChevronRight size={20} className="rotate-90 sm:rotate-0" />
                </button>
              </motion.div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience-section" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">체험하기</h2>
                <p className="text-gray-600 text-lg">메타버스 교실에 직접 접속하여 환경을 미리 체험해 보세요.</p>
              </div>
              
              <div className="card-premium p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 mb-16 bg-white">
                <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                  <img 
                    src="https://i.imgur.com/Hry0vzI.png" 
                    alt="ZEP Metaverse Preview" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-gray-900 leading-tight">메타버스 교실 입장하기</h3>
                    <p className="text-lg text-gray-500 leading-relaxed">
                      원어민 선생님과 친구들이 기다리고 있는<br />
                      신비로운 메타버스 북클럽 공간으로 초대합니다! 🎈<br />
                      아래의 링크를 통해 다양한 교실을 체험해 보세요.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {zepLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="card-premium p-8 flex flex-col items-center text-center gap-6 hover:-translate-y-2 transition-all duration-300 group bg-white"
                  >
                    <div className={`w-20 h-20 rounded-2xl ${link.bg} ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon size={40} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-gray-900">{link.title}</h3>
                      <p className="text-gray-500 text-sm font-medium">클릭하여 입장하기</p>
                    </div>
                    <div className="mt-auto pt-4 w-full">
                      <div className="w-full py-3 rounded-xl bg-gray-50 text-gray-900 font-bold group-hover:bg-violet-600 group-hover:text-white transition-colors flex items-center justify-center gap-2">
                        <Rocket size={18} /> 입장하기
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <img 
                  src="https://i.imgur.com/OYDYlXa.png" 
                  alt="경북교육청 로고" 
                  className="h-8 object-contain grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-lg font-black text-gray-400">원어민과 함께하는 북클럽</h3>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-50 text-center text-gray-300 text-xs font-medium">
            © 2026 Gyeongsangbuk-do Office of Education. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Scroll to Top) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white text-violet-600 rounded-2xl shadow-2xl border border-gray-100 flex items-center justify-center hover:bg-violet-50 transition-all z-40 active:scale-90"
      >
        <ChevronRight size={24} className="-rotate-90" />
      </motion.button>
    </div>
  );
}

