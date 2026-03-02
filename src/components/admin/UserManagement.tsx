import { useState } from "react";
import { Search, Filter, MoreHorizontal, UserCheck, UserX, Mail } from "lucide-react";

const users = [
  { id: 1, name: "Adebayo Ogunlesi", email: "adebayo@email.com", balance: "₦12,450", status: "active", joined: "Jan 15, 2026", orders: 47 },
  { id: 2, name: "Chioma Nwankwo", email: "chioma@email.com", balance: "₦8,200", status: "active", joined: "Feb 3, 2026", orders: 32 },
  { id: 3, name: "Ibrahim Kalu", email: "ibrahim@email.com", balance: "₦500", status: "suspended", joined: "Mar 20, 2026", orders: 5 },
  { id: 4, name: "Favour Adeyemi", email: "favour@email.com", balance: "₦45,000", status: "active", joined: "Jan 8, 2026", orders: 128 },
  { id: 5, name: "Emeka Johnson", email: "emeka@email.com", balance: "₦3,100", status: "active", joined: "Apr 12, 2026", orders: 19 },
  { id: 6, name: "Amina Bello", email: "amina@email.com", balance: "₦0", status: "inactive", joined: "May 1, 2026", orders: 0 },
];

const UserManagement = () => {
  const [search, setSearch] = useState("");
  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-foreground">User Management</h1>
        <p className="text-sm text-muted-foreground">Manage all registered users</p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search users..." className="w-full h-10 pl-10 pr-4 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <button className="h-10 px-4 rounded-xl bg-secondary border border-border text-sm font-medium text-foreground flex items-center gap-2 hover:bg-muted transition-colors">
          <Filter className="h-4 w-4" /> Filter
        </button>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">User</th>
                <th className="text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3 hidden md:table-cell">Balance</th>
                <th className="text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3 hidden lg:table-cell">Orders</th>
                <th className="text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Status</th>
                <th className="text-right text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-bold text-foreground">{user.name.split(" ").map(n => n[0]).join("")}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
                        <p className="text-[11px] text-muted-foreground truncate">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <p className="text-sm font-semibold text-foreground">{user.balance}</p>
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell">
                    <p className="text-sm text-foreground">{user.orders}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${
                      user.status === "active" ? "bg-success/10 text-success" :
                      user.status === "suspended" ? "bg-destructive/10 text-destructive" :
                      "bg-muted text-muted-foreground"
                    }`}>{user.status}</span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors" title="Email"><Mail className="h-3.5 w-3.5 text-muted-foreground" /></button>
                      <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors" title="More"><MoreHorizontal className="h-3.5 w-3.5 text-muted-foreground" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
