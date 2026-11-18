import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, Phone, Building2, RefreshCw, Download, Trash2 } from "lucide-react";
import { fetchContactSubmissions, deleteContactSubmission, updateContactSubmission } from "../lib/api";

const SOURCE_LABELS = { "corematrix-landing": "CoreMatrix landing page", contact: "Contact Us page" };
const sourceLabel = (s) => SOURCE_LABELS[s.source || "contact"] || s.source;
const campaignLabel = (s) => [s.utm?.source, s.utm?.medium, s.utm?.campaign].filter(Boolean).join(" / ");
const DAY_MS = 24 * 60 * 60 * 1000;
const isOverdue = (s) => (s.status || "new") === "new" && Date.now() - new Date(s.createdAt).getTime() > DAY_MS;
const FILTERS = [
  { id: "all", label: "All" },
  { id: "corematrix-landing", label: "CoreMatrix landing" },
  { id: "contact", label: "Contact Us" },
  { id: "new", label: "Not contacted yet" },
];

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function AdminContacts() {
  const [token, setToken] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [filter, setFilter] = useState("all");

  const shown = useMemo(
    () =>
      submissions.filter((s) => {
        if (filter === "all") return true;
        if (filter === "new") return (s.status || "new") === "new";
        return (s.source || "contact") === filter;
      }),
    [submissions, filter]
  );
  const overdueCount = submissions.filter(isOverdue).length;

  const handleStatus = async (id, status) => {
    try {
      const updated = await updateContactSubmission(token, id, { status });
      setSubmissions((prev) => prev.map((s) => (s._id === id ? updated : s)));
    } catch (err) {
      alert(err.message || "Failed to update this lead.");
    }
  };

  const load = async (adminToken) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchContactSubmissions(adminToken);
      setSubmissions(data);
      setUnlocked(true);
    } catch (err) {
      setError(err.message || "Invalid token or server unreachable.");
      setUnlocked(false);
    } finally {
      setLoading(false);
    }
  };

  const handleUnlock = (e) => {
    e.preventDefault();
    load(token);
  };

  // Builds an .xlsx file from the current leads and triggers a browser download.
  // xlsx is loaded on demand (not bundled into the main app) since it's only
  // needed on this admin page.
  const handleExport = async () => {
    const XLSX = await import("xlsx");

    const rows = shown.map((s) => ({
      "Full Name": s.fullName,
      "Company Name": s.companyName || "",
      "Work Email": s.workEmail,
      "Phone Number": s.phoneNumber || "",
      "Needs Help With": s.projectType || "",
      Message: s.message || "",
      Source: sourceLabel(s),
      Campaign: campaignLabel(s),
      Status: s.status || "new",
      "Submitted At": formatDate(s.createdAt),
      "Contacted At": s.contactedAt ? formatDate(s.contactedAt) : "",
      "Email To Businessops": s.notifiedAt ? "Sent" : s.notifyError ? "Not sent" : "",
      Notes: s.notes || "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(rows);
    worksheet["!cols"] = [
      { wch: 20 }, // Full Name
      { wch: 20 }, // Company Name
      { wch: 26 }, // Work Email
      { wch: 16 }, // Phone Number
      { wch: 28 }, // Needs Help With
      { wch: 50 }, // Message
      { wch: 24 }, // Source
      { wch: 24 }, // Campaign
      { wch: 10 }, // Status
      { wch: 20 }, // Submitted At
      { wch: 20 }, // Contacted At
      { wch: 12 }, // Email
      { wch: 30 }, // Notes
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contact Leads");

    const dateStamp = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(workbook, `tavewo-contact-leads-${dateStamp}.xlsx`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this lead? This can't be undone.")) return;
    setDeletingId(id);
    try {
      await deleteContactSubmission(token, id);
      setSubmissions((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      alert(err.message || "Failed to delete this lead.");
    } finally {
      setDeletingId(null);
    }
  };

  if (!unlocked) {
    return (
      <div className="max-w-md mx-auto px-5 py-24">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-4">
            <Lock className="text-brand" size={22} />
          </div>
          <h1 className="text-2xl font-extrabold mb-2">Admin Access</h1>
          <p className="text-sm text-slate-600">
            Enter the admin token to view submitted contact leads.
          </p>
        </div>
        <form onSubmit={handleUnlock} className="space-y-4">
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Admin token"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={loading ? {} : { scale: 1.02 }}
            whileTap={loading ? {} : { scale: 0.98 }}
            className="w-full rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark transition-colors disabled:opacity-60"
          >
            {loading ? "Checking…" : "Unlock"}
          </motion.button>
          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold mb-1">Contact Leads</h1>
          <p className="text-sm text-slate-600">
            {submissions.length} submission(s)
            {overdueCount > 0 && (
              <span className="ml-2 font-semibold text-red-700">· {overdueCount} not contacted after 24 hours</span>
            )}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            onClick={handleExport}
            disabled={shown.length === 0}
            whileHover={shown.length === 0 ? {} : { scale: 1.05 }}
            whileTap={shown.length === 0 ? {} : { scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition-colors disabled:opacity-50"
          >
            <Download size={16} /> Export to Excel
          </motion.button>
          <motion.button
            onClick={() => load(token)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:border-brand transition-colors"
          >
            <RefreshCw size={16} /> Refresh
          </motion.button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
              filter === f.id ? "bg-navy text-white border-navy" : "border-slate-300 hover:border-brand"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="text-slate-500 text-center py-16">No submissions yet.</p>
      ) : (
        <div className="space-y-4">
          {shown.map((s) => (
            <div key={s._id} className={`border rounded-2xl p-6 ${isOverdue(s) ? "border-red-300 bg-red-50/40" : "border-slate-200"}`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-bold text-lg">{s.fullName}</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs text-slate-500">{formatDate(s.createdAt)}</span>
                  <select
                    value={s.status || "new"}
                    onChange={(e) => handleStatus(s._id, e.target.value)}
                    aria-label="Lead status"
                    className="rounded-lg border border-slate-300 px-2 py-1 text-xs font-medium"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                  <motion.button
                    onClick={() => handleDelete(s._id)}
                    disabled={deletingId === s._id}
                    whileHover={deletingId === s._id ? {} : { scale: 1.1 }}
                    whileTap={deletingId === s._id ? {} : { scale: 0.9 }}
                    title="Delete this lead"
                    className="text-slate-400 hover:text-red-600 transition-colors disabled:opacity-50"
                  >
                    <Trash2 size={16} />
                  </motion.button>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 mb-4">
                <span className="flex items-center gap-1.5">
                  <Mail size={14} /> {s.workEmail}
                </span>
                {s.phoneNumber && (
                  <span className="flex items-center gap-1.5">
                    <Phone size={14} /> {s.phoneNumber}
                  </span>
                )}
                {s.companyName && (
                  <span className="flex items-center gap-1.5">
                    <Building2 size={14} /> {s.companyName}
                  </span>
                )}
                {s.projectType && (
                  <span className="rounded-full bg-brand-light text-brand-dark px-3 py-0.5 text-xs font-medium">
                    {s.projectType}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                <span className="rounded-full bg-slate-100 px-3 py-0.5 text-slate-700">{sourceLabel(s)}</span>
                {campaignLabel(s) && (
                  <span className="rounded-full bg-slate-100 px-3 py-0.5 text-slate-700">Campaign: {campaignLabel(s)}</span>
                )}
                {isOverdue(s) && (
                  <span className="rounded-full bg-red-100 px-3 py-0.5 font-semibold text-red-700">Over 24 hours, not contacted</span>
                )}
                {s.contactedAt && (
                  <span className="rounded-full bg-green-100 px-3 py-0.5 text-green-800">Contacted {formatDate(s.contactedAt)}</span>
                )}
                {s.notifyError && !s.notifiedAt && (
                  <span className="rounded-full bg-amber-100 px-3 py-0.5 text-amber-800">Email to businessops not sent</span>
                )}
              </div>
              {s.message && (
                <p className="text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4 whitespace-pre-wrap">
                  {s.message}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}