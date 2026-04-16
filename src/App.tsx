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
  ExternalLink,
  PlayCircle
} from 'lucide-react';

export default function App() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const zepLinks = [
    { id: 1, url: 'https://zep.us/play/0EMlZB', title: 'ZEP 체험하기 1', image: 'https://i.imgur.com/VHesaBS.png' },
    { id: 2, url: 'https://zep.us/play/qnE64A', title: 'ZEP 체험하기 2', image: 'https://i.imgur.com/4rsGDER.png' },
    { id: 3, url: 'https://zep.us/play/r7RzOg', title: 'ZEP 체험하기 3', image: 'https://i.imgur.com/LnLRbm7.png' },
    { id: 4, url: 'https://zep.us/play/KwAkbY', title: 'ZEP 체험하기 4', image: 'https://i.imgur.com/jMP3vzu.png' },
  ];

  const applyUrl = "https://www.gbe.kr/dep_edu/cm/cntnts/cntntsView.do?mi=23519&cntntsId=9548";

  return (
    <div className="min-h-screen flex flex-col font-sans break-keep selection:bg-violet-100 selection:text-violet-900 bg-[#F5F5F7]">
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
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center">
              <button
                onClick={() => document.getElementById('apply-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2.5 rounded-xl text-sm font-bold bg-violet-50 text-violet-700 hover:bg-violet-100 transition-all duration-200"
              >
                수강 신청 안내
              </button>
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
          {/* Top Section: ZEP Experience */}
          <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full text-violet-700 text-sm font-bold border border-violet-100 shadow-sm"
                >
                  <Sparkles size={16} /> 메타버스 교실 체험
                </motion.div>
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.15] tracking-tight"
                >
                  메타버스 세상에서 펼쳐지는<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                    신나는 영어 모험!
                  </span>
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                >
                  원어민 선생님과 친구들이 기다리고 있는 신비로운 공간으로 초대합니다.<br className="hidden md:block" />
                  아래의 링크를 통해 다양한 교실을 미리 체험해 보세요!
                </motion.p>
              </div>

              {/* ZEP Experience Cards Grid */}
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
              >
                {zepLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col"
                  >
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                      <img 
                        src={link.image} 
                        alt={link.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-violet-600 shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                          <PlayCircle size={32} className="ml-1" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                      <div className="space-y-2">
                        <div className="text-sm font-bold text-violet-600 tracking-wider">EXPERIENCE 0{index + 1}</div>
                        <h3 className="text-2xl font-black text-gray-900">{link.title}</h3>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                        <span className="text-gray-500 font-medium group-hover:text-violet-600 transition-colors">
                          메타버스 입장하기
                        </span>
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white text-gray-400 transition-colors">
                          <Rocket size={18} />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Bottom Section: Application CTA */}
          <section id="apply-section" className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-500 rounded-full mix-blend-screen filter blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  지금 바로<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                    수강 신청하세요!
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  경북교육청이 제안하는 새로운 차원의 영어 학습 경험.<br />
                  원어민 선생님과 함께하는 특별한 북클럽에 지금 바로 참여하세요.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a 
                  href={applyUrl} 
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-full text-xl font-black shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    수강 신청 페이지로 이동 <ExternalLink size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </a>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.imgur.com/OYDYlXa.png" 
                alt="경북교육청 로고" 
                className="h-8 object-contain grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-lg font-black text-gray-400">원어민과 함께하는 북클럽</h3>
            </div>
            <div className="text-center text-gray-300 text-xs font-medium">
              © 2026 Gyeongsangbuk-do Office of Education. All rights reserved.
            </div>
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
