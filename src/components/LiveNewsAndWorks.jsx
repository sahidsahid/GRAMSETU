import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Hammer, 
  Plus, 
  Send, 
  ThumbsUp, 
  Share2, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { RotatedPill } from './ThemeStickers';

export function LiveNewsAndWorks({
  currentVillage,
  activeRole,
  activeLang,
  t,
  onAddNewNotice
}) {
  const [activeSubTab, setActiveSubTab] = useState('works'); // 'works', 'villageNews', 'districtState'
  const [newPostModalOpen, setNewPostModalOpen] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postCategory, setPostCategory] = useState('Agriculture');
  const [postContent, setPostContent] = useState('');
  const [likesMap, setLikesMap] = useState({});

  const handleLike = (id) => {
    setLikesMap(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!postTitle.trim() || !postContent.trim()) return;

    const newNotice = {
      id: `notice-${Date.now()}`,
      title: postTitle,
      titleTe: postTitle,
      author: activeRole === 'sarpanch' ? currentVillage.sarpanch.name : 'Authorized Volunteer',
      authorRole: activeRole === 'sarpanch' ? (activeLang === 'te' ? 'గ్రామ సర్పంచ్' : 'Village Head') : (activeLang === 'te' ? 'పంచాయతీ వాలంటీర్' : 'Gram Panchayat Volunteer'),
      date: activeLang === 'te' ? 'ఇప్పుడే' : 'Just now',
      category: postCategory,
      categoryTe: postCategory,
      content: postContent,
      verified: true,
      likes: 1,
      comments: 0
    };

    onAddNewNotice(newNotice);
    setNewPostModalOpen(false);
    setPostTitle('');
    setPostContent('');
  };

  const districtStateNews = [
    {
      id: 'ds-1',
      title: activeLang === 'te' 
        ? 'గోదావరి-పెన్నా నదుల అనుసంధానానికి ₹4,500 కోట్లు మంజూరు చేసిన రాష్ట్ర ప్రభుత్వం'
        : 'AP Govt Sanctions ₹4,500 Crore for Godavari-Penna River Interlinking Canal Network',
      date: activeLang === 'te' ? 'ఈ రోజు, ఉదయం 10:15' : 'Today, 10:15 AM',
      source: 'AP Water Resources Department Amaravati',
      category: activeLang === 'te' ? 'రాష్ట్ర మౌలిక వసతులు' : 'State Infrastructure',
      content: activeLang === 'te'
        ? 'రాయలసీమ కరవు నివారణ మరియు పల్నాడు, ప్రకాశం జిల్లాల్లో ఆయకట్టు స్థిరీకరణకు సవరించిన డీపీఆర్‌కు కేబినెట్ ఆమోదం.'
        : 'Cabinet clears revised DPR ensuring drought-proofing for Rayalaseema and stabilized ayacut in Palnadu and Prakasam districts.'
    },
    {
      id: 'ds-2',
      title: activeLang === 'te'
        ? 'రైతు భరోసా కేంద్రాల్లో రాయితీపై పురుగుమందుల డ్రోన్ పిచికారీ సేవలు'
        : 'Amaravati Drone City Initiative to Provide Subsidized Crop-Spraying Drones to Village RBKs',
      date: activeLang === 'te' ? 'నిన్న' : 'Yesterday',
      source: 'AP Drone Academy & Agriculture Dept',
      category: activeLang === 'te' ? 'స్మార్ట్ వ్యవసాయం' : 'Smart Agriculture',
      content: activeLang === 'te'
        ? 'రైతు కుటుంబాల యువతకు సర్టిఫైడ్ డ్రోన్ పైలట్ శిక్షణ. ఎకరానికి కేవలం ₹250 నామమాత్రపు రుసుముతో నానో-యూరియా పిచికారీ.'
        : 'Youth from agricultural families will be trained as certified drone pilots to spray nano-urea and organic bio-fertilizers at ₹250 per acre.'
    },
    {
      id: 'ds-3',
      title: activeLang === 'te'
        ? 'కాకినాడ డీప్ వాటర్ పోర్ట్ విస్తరణతో వ్యవసాయ ఎగుమతులకు ఊతం'
        : 'Kakinada Deep Sea Port Expansion to Boost Farm Export Freight Corridors',
      date: 'Oct 12, 2026',
      source: 'AP Maritime Board',
      category: activeLang === 'te' ? 'ఎగుమతులు & వాణిజ్యం' : 'Exports & Trade',
      content: activeLang === 'te'
        ? 'కోనసీమ కొబ్బరి, బంగినపల్లి మామిడి, రొయ్యల ఎగుమతుల కోసం గల్ఫ్ మరియు ఐరోపా దేశాలకు నేరుగా నౌకాయాన సేవలు.'
        : 'Dedicated reefer container berths established for direct shipment of Konaseema coconuts, Banganapalle mangoes, and Aqua produce to Gulf and Europe.'
    }
  ];

  const canPost = activeRole === 'sarpanch' || activeRole === 'superAdmin' || activeRole === 'officer';

  const w = t.works;

  return (
    <div className="w-full space-y-8 animate-in fade-in">
      {/* Header Banner - Full Width Fluid */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b-2 border-[#1E1E24] dark:border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <RotatedPill 
              text={activeLang === 'te' ? 'లైవ్ ఫీడ్ · ప్రగతి వేదిక' : 'Live Feed · Transparency Desk'} 
              rotation="-rotate-1" 
              bg="bg-[#A3B7D8]" 
              textColor="text-black" 
            />
            <span className="text-xs font-bold text-[#3B3F63] dark:text-gray-300">
              {activeLang === 'te' ? currentVillage.nameTe : currentVillage.name} {w.tag}
            </span>
          </div>
          <h2 className="font-chunky text-3xl sm:text-5xl text-[#3B3F63] dark:text-white uppercase tracking-tight">
            {w.mainTitle}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
            {w.subTitle} <strong>{activeLang === 'te' ? currentVillage.nameTe : currentVillage.name}</strong>
          </p>
        </div>

        {canPost && (
          <button
            onClick={() => setNewPostModalOpen(true)}
            className="bg-[#363636] hover:bg-black dark:bg-[#A3B7D8] dark:hover:bg-white text-white dark:text-black text-xs sm:text-sm font-black px-5 py-2.5 rounded-full border-2 border-black sticker-shadow transition-all flex items-center gap-2 cursor-pointer"
          >
            <Plus size={16} />
            <span>{w.postNoticeBtn}</span>
          </button>
        )}
      </div>

      {/* Segment Selector Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-300 dark:border-gray-700 pb-3 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveSubTab('works')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black border-2 transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'works'
              ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black border-[#1E1E24] sticker-shadow'
              : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-200 border-transparent hover:border-[#1E1E24]'
          }`}
        >
          <Hammer size={16} />
          <span>{w.tabWorks} ({currentVillage.ongoingWorks.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('villageNews')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black border-2 transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'villageNews'
              ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black border-[#1E1E24] sticker-shadow'
              : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-200 border-transparent hover:border-[#1E1E24]'
          }`}
        >
          <Calendar size={16} />
          <span>{w.tabNews} ({currentVillage.newsFeed.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('districtState')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black border-2 transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'districtState'
              ? 'bg-[#3B3F63] text-white dark:bg-[#A3B7D8] dark:text-black border-[#1E1E24] sticker-shadow'
              : 'bg-white dark:bg-[#1E212E] text-[#3B3F63] dark:text-gray-200 border-transparent hover:border-[#1E1E24]'
          }`}
        >
          <ShieldCheck size={16} />
          <span>{w.tabDistrict}</span>
        </button>
      </div>

      {/* SUB-TAB 1: ONGOING WORKS TRACKER */}
      {activeSubTab === 'works' && (
        <div className="space-y-8">
          {/* Fluid Cards Grid filling the entire viewport */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentVillage.ongoingWorks.map((work) => {
              const isDone = work.status === 'Completed';
              const isInProgress = work.status === 'In Progress';
              
              const statusLabel = isDone 
                ? (activeLang === 'te' ? 'పూర్తయింది' : activeLang === 'hi' ? 'पूर्ण' : 'Completed')
                : isInProgress 
                ? (activeLang === 'te' ? 'కొనసాగుతోంది' : activeLang === 'hi' ? 'प्रगति पर' : 'In Progress')
                : (activeLang === 'te' ? 'షెడ్యూల్ చేయబడింది' : activeLang === 'hi' ? 'निर्धारित' : 'Scheduled');

              return (
                <div
                  key={work.id}
                  className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-6 flex flex-col justify-between relative hover:-translate-y-1 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[11px] font-black uppercase px-3 py-1 rounded-full border border-black ${
                          isDone
                            ? 'bg-emerald-300 text-emerald-950'
                            : isInProgress
                            ? 'bg-amber-300 text-amber-950'
                            : 'bg-blue-300 text-blue-950'
                        }`}
                      >
                        {statusLabel}
                      </span>
                      <span className="font-extrabold text-xs text-[#3B3F63] dark:text-gray-200 bg-[#F5EFE6] dark:bg-[#141620] px-2.5 py-1 rounded-xl border border-black/20 dark:border-white/10">
                        {w.budget}: {work.budget}
                      </span>
                    </div>

                    <h3 className="font-chunky text-xl text-[#3B3F63] dark:text-white leading-snug mb-1.5">
                      {activeLang === 'te' ? work.titleTe : work.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-bold mb-4">
                      {w.targetCompletion}: {work.expectedDate}
                    </p>

                    {/* Progress Bar with Percentage */}
                    <div className="space-y-1.5 mb-2">
                      <div className="flex justify-between text-xs font-black text-[#3B3F63] dark:text-gray-200">
                        <span>{w.progress}</span>
                        <span className="font-mono text-sm">{work.progress}%</span>
                      </div>
                      <div className="w-full h-4 bg-gray-200 dark:bg-gray-800 rounded-full border-2 border-black overflow-hidden p-0.5">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            isDone ? 'bg-emerald-500' : 'bg-[#3B3F63] dark:bg-[#A3B7D8]'
                          }`}
                          style={{ width: `${work.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-bold">{w.tenderNote}</span>
                    <span className="text-[11px] font-mono font-bold text-[#3B3F63] dark:text-[#A3B7D8]">
                      {w.workId}: {work.id.toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Audit Accountability Card - Full Width Fluid Container */}
          <div className="w-full bg-[#363636] dark:bg-[#181B26] text-white rounded-[32px] border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow-lg p-6 sm:p-10 relative overflow-hidden">
            <div className="max-w-4xl">
              <span className="bg-[#A3B7D8] text-black font-black text-xs px-3.5 py-1 rounded-full border border-black mb-3 inline-block">
                {activeLang === 'te' ? 'సోషల్ ఆడిట్ & పారదర్శకత ప్రమాణం' : 'Social Audit & Transparency Mandate'}
              </span>
              <h3 className="font-chunky text-2xl sm:text-4xl uppercase text-white mb-3">
                {w.auditTitle}
              </h3>
              <p className="text-xs sm:text-base text-gray-300 leading-relaxed font-normal">
                {w.auditDesc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: VILLAGE ANNOUNCEMENTS */}
      {activeSubTab === 'villageNews' && (
        <div className="space-y-4">
          {currentVillage.newsFeed.map((news) => (
            <div
              key={news.id}
              className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-6 relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#A3B7D8] text-black text-xs font-black px-3 py-0.5 rounded-full border border-black">
                    {activeLang === 'te' ? news.categoryTe : news.category}
                  </span>
                  {news.verified && (
                    <span className="bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={13} />
                      <span>{w.verifiedNotice}</span>
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                  {news.date}
                </span>
              </div>

              <h3 className="font-chunky text-xl sm:text-2xl text-[#3B3F63] dark:text-white leading-snug mb-2">
                {activeLang === 'te' ? news.titleTe : news.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-normal">
                {news.content}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs font-bold text-[#3B3F63] dark:text-gray-300">
                  {w.issuedBy}: <strong className="text-black dark:text-white">{news.author}</strong> ({news.authorRole})
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleLike(news.id)}
                    className="flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-[#A3B7D8] px-3.5 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 transition-colors cursor-pointer"
                  >
                    <ThumbsUp size={13} />
                    <span>{w.likeBtn} ({news.likes + (likesMap[news.id] || 0)})</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-[#A3B7D8] px-3.5 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 transition-colors cursor-pointer">
                    <Share2 size={13} />
                    <span>{w.shareBtn}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SUB-TAB 3: DISTRICT & STATE NEWS */}
      {activeSubTab === 'districtState' && (
        <div className="space-y-4">
          {districtStateNews.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#1E212E] rounded-3xl border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow p-6"
            >
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                <span className="bg-[#363636] dark:bg-[#A3B7D8] text-white dark:text-black font-black px-3 py-0.5 rounded-full text-[11px]">
                  {item.category}
                </span>
                <span className="font-bold">{item.date}</span>
              </div>

              <h3 className="font-chunky text-xl text-[#3B3F63] dark:text-white leading-snug mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-normal leading-relaxed mb-3">
                {item.content}
              </p>

              <div className="text-xs text-[#3B3F63] dark:text-gray-400 font-bold">
                Source: <span className="underline">{item.source}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Post Official Notice Modal */}
      {newPostModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#F5EFE6] dark:bg-[#1E212E] rounded-[32px] border-3 border-[#1E1E24] dark:border-[#383D54] sticker-shadow-lg max-w-lg w-full p-6 relative">
            <h3 className="font-chunky text-2xl text-[#3B3F63] dark:text-white mb-1">
              {w.postNoticeBtn}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
              Posting to {activeLang === 'te' ? currentVillage.nameTe : currentVillage.name} Live Transparency Feed.
            </p>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-[#3B3F63] dark:text-gray-300 mb-1 uppercase">
                  Notice Title:
                </label>
                <input
                  type="text"
                  required
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="e.g. Rythu Bharosa verification counter schedule"
                  className="w-full bg-white dark:bg-[#141620] border-2 border-[#1E1E24] dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-bold text-[#3B3F63] dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-[#3B3F63] dark:text-gray-300 mb-1 uppercase">
                  Category:
                </label>
                <select
                  value={postCategory}
                  onChange={(e) => setPostCategory(e.target.value)}
                  className="w-full bg-white dark:bg-[#141620] border-2 border-[#1E1E24] dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-bold text-[#3B3F63] dark:text-white focus:outline-none"
                >
                  <option value="Agriculture">Agriculture & Mandi</option>
                  <option value="Works">Civil Works & Roads</option>
                  <option value="Health">Health & Polio Camps</option>
                  <option value="Schemes">Govt Schemes & DBT</option>
                  <option value="Utilities">Electricity & Water</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-[#3B3F63] dark:text-gray-300 mb-1 uppercase">
                  Details / Body Content:
                </label>
                <textarea
                  required
                  rows={4}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Provide complete guidelines, dates, and documentation..."
                  className="w-full bg-white dark:bg-[#141620] border-2 border-[#1E1E24] dark:border-gray-700 rounded-xl px-3 py-2 text-sm font-medium text-[#3B3F63] dark:text-white focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setNewPostModalOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-bold bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full text-xs font-black bg-[#3B3F63] hover:bg-black dark:bg-[#A3B7D8] dark:text-black text-white border-2 border-black sticker-shadow flex items-center gap-1.5"
                >
                  <Send size={14} />
                  <span>Publish Notice</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
