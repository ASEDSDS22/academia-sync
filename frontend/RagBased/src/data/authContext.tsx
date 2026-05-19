import React, { useCallback, useState, createContext, useContext } from 'react';
import { mockUsers, type AppUser, type AttendanceRecord } from './mockUsers';
interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'librarian' | 'admin';
  studentId?: string;
  department?: string;
  attendance?: AttendanceRecord[];
}
interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (
  identifier: string,
  password: string)
  => Promise<{
    success: boolean;
    error?: string;
    role?: string;
  }>;
  logout: () => void;
  checkOutStudent: () => void;
}
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => ({
    success: false
  }),
  logout: () => {},
  checkOutStudent: () => {}
});
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }: {children: React.ReactNode;}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const login = useCallback(async (identifier: string, password: string) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 800));

      const foundUser = mockUsers.find(
        (u) => (u.email === identifier || u.studentId === identifier || u.id === identifier) && u.password === password
      );

      if (!foundUser) {
        return {
          success: false,
          error: 'Invalid credentials'
        };
      }

      const authUser: AuthUser = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
        studentId: foundUser.studentId,
        department: foundUser.department,
        attendance: foundUser.attendance
      };

      setUser(authUser);
      return {
        success: true,
        role: foundUser.role
      };
    } catch (e: any) {
      return {
        success: false,
        error: e.message || 'Login failed',
      };
    }
  }, []);
  const logout = useCallback(() => {
    localStorage.removeItem('auth_token');
    setUser(null);
  }, []);
  const checkOutStudent = useCallback(() => {
    if (!user || user.role !== 'student') return;
    const today = new Date().toISOString().split('T')[0];
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setUser((prev) => {
      if (!prev || !prev.attendance) return prev;
      const updated = prev.attendance.map((r) => {
        if (r.date === today && !r.timeOut) {
          return {
            ...r,
            timeOut: timeStr
          };
        }
        return r;
      });
      return {
        ...prev,
        attendance: updated
      };
    });
  }, [user]);
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        checkOutStudent
      }}>
      
      {children}
    </AuthContext.Provider>);

}