import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  UsersIcon,
  ActivityIcon,
  BookOpenIcon,
  UploadIcon,
  FileTextIcon,
  ClockIcon,
  CircleDotIcon,
  CheckCircleIcon,
  PlusIcon,
  DownloadIcon,
  SearchIcon,
  XIcon,
  UploadCloudIcon,
  FileIcon,
  Trash2Icon,
  Edit3Icon,
} from 'lucide-react'
import { PageTransition } from '../components/PageTransition'
import { useAuth } from '../data/authContext'
import { mockUsers, departmentUsage, systemLogs, type AppUser } from '../data/mockUsers'
import { mockTheses } from '../data/mockTheses'
export function LibrarianDashboardPage() {
  const { user } = useAuth();
  const [localUsers, setLocalUsers] = useState<AppUser[]>(() => {
    const saved = localStorage.getItem('local_users');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return mockUsers; }
    }
    return mockUsers;
  });
  const [localTheses, setLocalTheses] = useState<typeof mockTheses>(() => {
    const saved = localStorage.getItem('local_theses');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return mockTheses; }
    }
    return mockTheses;
  });
  const [localLogs, setLocalLogs] = useState<typeof systemLogs>(() => {
    const saved = localStorage.getItem('local_logs');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return systemLogs; }
    }
    return systemLogs;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingThesis, setEditingThesis] = useState<typeof mockTheses[0] | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('New thesis added to the system.');

  React.useEffect(() => {
    localStorage.setItem('local_users', JSON.stringify(localUsers));
  }, [localUsers]);

  React.useEffect(() => {
    localStorage.setItem('local_theses', JSON.stringify(localTheses));
  }, [localTheses]);

  React.useEffect(() => {
    localStorage.setItem('local_logs', JSON.stringify(localLogs));
  }, [localLogs]);

  if (!user) return null;
  const students = localUsers.filter((u) => u.role === 'student');
  const today = new Date().toISOString().split('T')[0];
  const todayStudents = students.filter((s) =>
    s.attendance?.some((r) => r.date === today)
  );
  const activeStudents = students.filter((s) =>
    s.attendance?.some((r) => r.date === today && !r.timeOut)
  );
  const newUploadsCount = localTheses.filter(t => t.id.startsWith('thesis-new-')).length;
  const overviewStats = [
  {
    label: 'Students Today',
    value: todayStudents.length,
    icon: UsersIcon,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    label: 'Active Sessions',
    value: activeStudents.length,
    icon: ActivityIcon,
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    label: 'Theses Accessed',
    value: 24 + newUploadsCount,
    icon: BookOpenIcon,
    color: 'text-psu-maroon bg-psu-maroon/8'
  },
  {
    label: 'New Uploads',
    value: 3 + newUploadsCount,
    icon: UploadIcon,
    color: 'text-psu-gold bg-amber-50'
  }];

  const maxVisits = Math.max(...departmentUsage.map((d) => d.visits))

  const handleGenerateReport = () => {
    const headers = ['Student', 'Student ID', 'Time In', 'Purpose', 'Status'];
    const rows = students.map(s => {
      const rec = s.attendance?.find(r => r.date === today);
      if (!rec) return null;
      return [s.name, s.studentId, rec.timeIn, rec.purpose, rec.timeOut ? `Left at ${rec.timeOut}` : 'In Library'];
    }).filter(Boolean);

    const csvContent = [headers, ...rows].map(e => e?.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `attendance_report_${today}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50">
        {/* Welcome Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xl font-bold font-sans">
                {user.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-psu-charcoal">
                  Welcome, {user.name}
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-sans font-medium">
                    Librarian
                  </span>
                  <span className="text-sm text-gray-400 font-sans">
                    Library Management Dashboard
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Overview Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {overviewStats.map((stat, i) =>
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 16
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.3,
                delay: i * 0.08
              }}
              className={`bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group active:scale-[0.98] ${stat.label === 'New Uploads' ? 'ring-2 ring-transparent hover:ring-psu-gold/30' : ''}`}
              onClick={() => {
                if (stat.label === 'New Uploads') {
                  document.getElementById('recent-uploads-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              
                <div
                className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                
                  <stat.icon className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold font-sans text-psu-charcoal">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 font-sans mt-0.5">
                  {stat.label}
                </p>
              </motion.div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Today's Attendance Log */}
            <motion.div
              initial={{
                opacity: 0,
                y: 16
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.4,
                delay: 0.2
              }}
              className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-display font-semibold text-psu-charcoal">
                  Today's Attendance Log
                </h2>
                <span className="text-xs font-sans font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {activeStudents.length} active
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                      <th className="text-left px-6 py-3">Student</th>
                      <th className="text-left px-6 py-3">Student ID</th>
                      <th className="text-left px-6 py-3">Time In</th>
                      <th className="text-left px-6 py-3">Purpose</th>
                      <th className="text-left px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, i) => {
                      const todayRec = student.attendance?.find(
                        (r) => r.date === today
                      );
                      if (!todayRec) return null;
                      const isActive = !todayRec.timeOut;
                      return (
                        <tr
                          key={student.id}
                          className={`text-sm font-sans ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} border-t border-gray-50`}>
                          
                          <td className="px-6 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                                {student.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium text-psu-charcoal">
                                  {student.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                  {student.department}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-3 text-gray-600">
                            {student.studentId}
                          </td>
                          <td className="px-6 py-3 text-gray-600">
                            {todayRec.timeIn}
                          </td>
                          <td className="px-6 py-3 text-gray-500">
                            {todayRec.purpose}
                          </td>
                          <td className="px-6 py-3">
                            {isActive ?
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                                <CircleDotIcon className="w-3 h-3" />
                                In Library
                              </span>
                              <button 
                                onClick={() => {
                                  const timeStr = `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`;
                                  const updatedUsers = localUsers.map(u => {
                                    if (u.id === student.id) {
                                      return {
                                        ...u,
                                        attendance: u.attendance?.map(r => 
                                          (r.date === today && !r.timeOut) ? { ...r, timeOut: timeStr } : r
                                        )
                                      };
                                    }
                                    return u;
                                  });
                                  setLocalUsers(updatedUsers);
                                  
                                  const newLog = {
                                    timestamp: `${today} ${timeStr}`,
                                    event: `Student ${student.name} checked out manually`,
                                    type: 'attendance' as const
                                  };
                                  setLocalLogs([newLog, ...localLogs]);
                                }}
                                className="text-[10px] font-sans font-bold text-psu-maroon hover:underline uppercase tracking-tight"
                              >
                                Check Out
                              </button>
                            </div> :

                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                                <CheckCircleIcon className="w-3 h-3" />
                                Left at {todayRec.timeOut}
                              </span>
                            }
                          </td>
                        </tr>);

                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Quick Actions + Activity */}
            <div className="space-y-5">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.3
                }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                
                <h3 className="text-sm font-sans font-bold text-psu-charcoal uppercase tracking-wider mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-psu-maroon hover:bg-psu-maroon-dark text-white transition-colors text-sm font-sans font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <PlusIcon className="w-4 h-4" />
                    Upload New Thesis
                  </button>
                  <button 
                    onClick={() => {
                      const studentId = prompt("Enter Student ID to Check In:");
                      if (!studentId) return;
                      const student = localUsers.find(u => u.studentId === studentId || u.id === studentId);
                      if (!student) return alert("Student not found!");
                      
                      const timeStr = `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`;
                      const updatedUsers = localUsers.map(u => {
                        if (u.id === student.id) {
                          const attendance = u.attendance || [];
                          return {
                            ...u,
                            attendance: [...attendance, { date: today, timeIn: timeStr, purpose: 'General Study' }]
                          };
                        }
                        return u;
                      });
                      setLocalUsers(updatedUsers);
                      setLocalLogs([{
                        timestamp: `${today} ${timeStr}`,
                        event: `Student ${student.name} checked in manually`,
                        type: 'attendance' as const
                      }, ...localLogs]);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-psu-gold/20 hover:bg-psu-gold/5 text-psu-charcoal transition-colors text-sm font-sans font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <UsersIcon className="w-4 h-4 text-psu-gold" />
                    Manual Check-In
                  </button>
                  <button 
                    onClick={handleGenerateReport}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-psu-charcoal transition-colors text-sm font-sans font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    Generate Report
                  </button>
                </div>
              </motion.div>

              {/* Student Activity Feed */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.4
                }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                
                <h3 className="text-sm font-sans font-bold text-psu-charcoal uppercase tracking-wider mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {localLogs.slice(0, 6).map((log, i) =>
                  <div key={i} className="flex items-start gap-3">
                      <div
                      className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${log.type === 'login' ? 'bg-blue-400' : log.type === 'search' ? 'bg-psu-gold' : log.type === 'attendance' ? 'bg-emerald-400' : 'bg-gray-400'}`} />
                    
                      <div>
                        <p className="text-xs text-gray-600 font-sans leading-relaxed">
                          {log.event}
                        </p>
                        <p className="text-[10px] text-gray-400 font-sans mt-0.5">
                          {log.timestamp}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Department Stats */}
          <motion.div
            initial={{
              opacity: 0,
              y: 16
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.4,
              delay: 0.5
            }}
            className="mt-8 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-display font-semibold text-psu-charcoal">
                Thesis Collection by Department
              </h2>
              <span className="text-sm text-gray-400 font-sans">
                {localTheses.length} total in system
              </span>
            </div>
            <div className="space-y-4">
              {departmentUsage.map((dept, i) =>
              <div key={dept.department} className="flex items-center gap-4">
                  <div className="w-40 sm:w-52 text-sm font-sans text-psu-charcoal font-medium truncate flex-shrink-0">
                    {dept.department}
                  </div>
                  <div className="flex-1 h-8 bg-gray-50 rounded-lg overflow-hidden relative">
                    <motion.div
                    initial={{
                      width: 0
                    }}
                    animate={{
                      width: `${dept.visits / maxVisits * 100}%`
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + i * 0.1
                    }}
                    className="h-full bg-psu-maroon/80 rounded-lg flex items-center justify-end pr-3">
                    
                      <span className="text-xs font-sans font-bold text-white">
                        {dept.visits}
                      </span>
                    </motion.div>
                  </div>
                  <div className="text-xs text-gray-400 font-sans w-20 text-right flex-shrink-0">
                    {dept.theses} theses
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Recently Uploaded Theses */}
          <motion.div
            id="recent-uploads-section"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-8 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-display font-semibold text-psu-charcoal">
                Recently Uploaded Theses
              </h2>
              <span className="text-xs text-gray-400 font-sans">
                {localTheses.filter(t => t.id.startsWith('thesis-new-')).length} new uploads this session
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                    <th className="text-left px-6 py-3">Title</th>
                    <th className="text-left px-6 py-3">Author</th>
                    <th className="text-left px-6 py-3">Year</th>
                    <th className="text-right px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {localTheses.filter(t => t.id.startsWith('thesis-new-')).length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-10 text-center text-gray-400 font-sans italic">
                        No new theses uploaded yet.
                      </td>
                    </tr>
                  ) : (
                    localTheses.filter(t => t.id.startsWith('thesis-new-')).map((t) => (
                      <tr key={t.id} className="text-sm font-sans hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-psu-maroon/10 flex items-center justify-center text-psu-maroon">
                              <FileIcon className="w-4 h-4" />
                            </div>
                            <p className="font-medium text-psu-charcoal max-w-sm truncate">{t.title}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{t.authors[0]}</td>
                        <td className="px-6 py-4 text-gray-600">{t.year}</td>
                        <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                          <button 
                            onClick={() => {
                              setEditingThesis(t);
                              setIsModalOpen(true);
                            }}
                            className="p-1.5 hover:bg-blue-50 rounded-lg text-gray-400 hover:text-blue-600 transition-colors"
                            title="Edit Thesis"
                          >
                            <Edit3Icon className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this thesis?')) {
                                setLocalTheses(localTheses.filter(item => item.id !== t.id));
                                const newLog = {
                                  timestamp: `${today} ${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
                                  event: `Thesis deleted: "${t.title}"`,
                                  type: 'system' as const
                                };
                                setLocalLogs([newLog, ...localLogs]);
                                setSuccessMessage('Thesis deleted successfully.');
                                setShowSuccess(true);
                                setTimeout(() => setShowSuccess(false), 3000);
                              }
                            }}
                            className="p-1.5 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete Thesis"
                          >
                            <Trash2Icon className="w-4 h-4" />
                          </button>
                          <a 
                            href={`/thesis/${t.id}`}
                            className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-psu-maroon transition-colors"
                            title="View Public Page"
                          >
                            <SearchIcon className="w-4 h-4" />
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Add Thesis Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-psu-charcoal/40 backdrop-blur-sm"
            />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              >
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50 flex-shrink-0">
                  <h3 className="text-lg font-display font-bold text-psu-charcoal">
                    {editingThesis ? 'Update Thesis' : 'Upload New Thesis'}
                  </h3>
                  <button 
                    onClick={() => {
                      setIsModalOpen(false);
                      setEditingThesis(null);
                    }}
                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="overflow-y-auto flex-1">
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const title = formData.get('title') as string;
                      const rawKeywords = formData.get('keywords') as string;
                      const parsedKeywords = rawKeywords 
                        ? rawKeywords.split(/[;,]+/).map(k => k.trim()).filter(Boolean)
                        : title.toLowerCase().split(' ').filter(w => w.length > 3);
                      
                      if (editingThesis) {
                        const updatedThesis = {
                          ...editingThesis,
                          title,
                          authors: [formData.get('author') as string],
                          department: formData.get('department') as string,
                          year: parseInt(formData.get('year') as string),
                          adviser: formData.get('adviser') as string,
                          abstract: formData.get('abstract') as string,
                          keywords: parsedKeywords,
                        };
                        setLocalTheses(localTheses.map(t => t.id === editingThesis.id ? updatedThesis : t));
                        setSuccessMessage('Thesis updated successfully.');
                        
                        const newLog = {
                          timestamp: `${today} ${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
                          event: `Thesis updated: "${title}"`,
                          type: 'system' as const
                        };
                        setLocalLogs([newLog, ...localLogs]);
                      } else {
                        const newThesis = {
                          id: `thesis-new-${Date.now()}`,
                          title,
                          authors: [formData.get('author') as string],
                          department: formData.get('department') as string,
                          year: parseInt(formData.get('year') as string),
                          adviser: formData.get('adviser') as string,
                          abstract: formData.get('abstract') as string,
                          keywords: parsedKeywords,
                          relevanceScore: 100
                        };
                        setLocalTheses([newThesis, ...localTheses]);
                        setSuccessMessage('New thesis added to the system.');
                        
                        const newLog = {
                          timestamp: `${today} ${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
                          event: `New thesis uploaded: "${title}"`,
                          type: 'system' as const
                        };
                        setLocalLogs([newLog, ...localLogs]);
                      }

                      setIsModalOpen(false);
                      setEditingThesis(null);
                      setShowSuccess(true);
                      setTimeout(() => setShowSuccess(false), 3000);
                    }}
                    className="p-6 space-y-4"
                  >
                    <div className="space-y-1">
                      <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider">Thesis Title</label>
                      <input required name="title" defaultValue={editingThesis?.title} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-psu-maroon focus:ring-1 focus:ring-psu-maroon outline-none transition-all text-sm font-sans" placeholder="Enter complete title..." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider">Author</label>
                        <input required name="author" defaultValue={editingThesis?.authors[0]} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-psu-maroon outline-none text-sm font-sans" placeholder="Full name..." />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider">Year</label>
                        <input required name="year" type="number" defaultValue={editingThesis?.year || new Date().getFullYear()} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-psu-maroon outline-none text-sm font-sans" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider">Department</label>
                      <select name="department" defaultValue={editingThesis?.department} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-psu-maroon outline-none text-sm font-sans">
                        <option>Information Technology</option>
                        <option>Education</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider">Adviser</label>
                      <input required name="adviser" defaultValue={editingThesis?.adviser} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-psu-maroon outline-none text-sm font-sans" placeholder="Adviser name..." />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider">Abstract Snippet</label>
                      <textarea name="abstract" rows={2} defaultValue={editingThesis?.abstract} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-psu-maroon outline-none text-sm font-sans resize-none" placeholder="Brief summary..." />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider">Keywords</label>
                      <input name="keywords" defaultValue={editingThesis?.keywords?.join('; ')} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-psu-maroon outline-none text-sm font-sans" placeholder="e.g. deep learning; classification; neural networks (separated by semicolon)..." />
                    </div>
                    {!editingThesis && (
                      <div className="space-y-1">
                        <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider">PDF Document</label>
                        <div className="relative group">
                          <input 
                            required 
                            name="pdf" 
                            type="file" 
                            accept=".pdf"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            onChange={(e) => {
                              const fileName = e.target.files?.[0]?.name;
                              if (fileName) {
                                const label = e.target.parentElement?.querySelector('.file-label');
                                if (label) label.textContent = fileName;
                              }
                            }}
                          />
                          <div className="w-full px-4 py-6 border-2 border-dashed border-gray-200 rounded-xl group-hover:border-psu-maroon/50 group-hover:bg-psu-maroon/5 transition-all flex flex-col items-center justify-center gap-2">
                            <UploadCloudIcon className="w-8 h-8 text-gray-300 group-hover:text-psu-maroon transition-colors" />
                            <span className="file-label text-sm text-gray-400 group-hover:text-psu-maroon transition-colors">Click or drag PDF to upload</span>
                            <span className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">Max 50MB</span>
                          </div>
                        </div>
                      </div>
                    )}
                    <button type="submit" className="w-full py-3 bg-psu-maroon text-white rounded-xl font-sans font-bold hover:bg-psu-maroon-dark transition-colors shadow-lg shadow-psu-maroon/20">
                      {editingThesis ? 'Update Thesis' : 'Upload Thesis'}
                    </button>
                  </form>
                </div>
              </motion.div>

          </div>
        )}
      </AnimatePresence>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-[60] flex items-center gap-3 px-6 py-4 bg-emerald-600 text-white rounded-2xl shadow-2xl"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <CheckCircleIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-sans font-bold text-sm">Success!</p>
              <p className="font-sans text-xs opacity-90">{successMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}