import React, { useState, useMemo } from "react";
import {
  Search,
  Upload,
  Download,
  Share2,
  FileText
} from "lucide-react";
import "./Labreports.css";

const initialReports = [
  {
    id: 1,
    reportName: "Liver Function Test",
    labName: "Metropolis Lab",
    symptoms: "Fatigue, nausea",
    date: "2026-02-25",
    fileUrl: "/dummy/liver.pdf"
  },
  {
    id: 2,
    reportName: "Complete Blood Count",
    labName: "Thyrocare",
    symptoms: "Weakness, fever",
    date: "2026-02-20",
    fileUrl: "/dummy/cbc.pdf"
  },
  {
    id: 3,
    reportName: "COVID-19 RT-PCR Test",
    labName: "Apollo Diagnostics",
    symptoms: "Cough, cold, fever",
    date: "2026-02-15",
    fileUrl: "/dummy/covid.pdf"
  }
];

const Labreports = () => {
  const [reports, setReports] = useState(initialReports);
  const [search, setSearch] = useState("");

  // 🔥 Always newest first
  const sortedReports = useMemo(() => {
    return [...reports].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, [reports]);

  // 🔥 Search only
 const filteredReports = sortedReports.filter((report) => {
  const keywords = search.toLowerCase().split(" ");

  const combinedFields = `
    ${report.reportName}
    ${report.labName}
    ${report.symptoms}
    ${report.date}
  `.toLowerCase();

  return keywords.every((word) =>
    combinedFields.includes(word)
  );
});

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newReport = {
      id: Date.now(),
      name: file.name,
      date: new Date().toISOString().split("T")[0],
      fileUrl: URL.createObjectURL(file)
    };

    setReports((prev) => [newReport, ...prev]);
  };

  // 🔥 Direct Download (no new tab)
  const handleDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (report) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: report.name,
          text: "Check this lab report",
          url: window.location.href
        });
      } catch  {
        console.log("Share cancelled");
      }
    } else {
      alert("Sharing not supported on this device.");
    }
  };

  return (
    <div className="lab-container">
      <div className="lab-header">
        <div>
          <h1>Reports</h1>
          <p>{reports.length} total entries</p>
        </div>

        <label className="upload-btn">
          <Upload size={18} />
          Upload
          <input
            type="file"
            hidden
            onChange={handleUpload}
          />
        </label>
      </div>

      {/* Search */}
      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search your reports..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* List */}
      <div className="reports-list">
        {filteredReports.length === 0 ? (
          <p className="no-data">
            No reports found.
          </p>
        ) : (
          filteredReports.map((report) => (
            <div
              key={report.id}
              className="report-card"
            >
              <div className="report-left">
                <FileText size={22} />
                <div>
                  <h3>{report.name}</h3>
                  <p>{report.date}</p>
                </div>
              </div>

              <div className="report-right">
                <button
                  onClick={() =>
                    handleDownload(
                      report.fileUrl,
                      report.name
                    )
                  }
                >
                  <Download size={18} />
                </button>

                <button
                  onClick={() =>
                    handleShare(report)
                  }
                >
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Labreports;