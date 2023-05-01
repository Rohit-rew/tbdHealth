import Header from "@/components/Header";
import DetailView from "@/components/detailView";
import NotificationView from "@/components/notificationView";
import ReportView from "@/components/reportView";
import React from "react";

export default function Home() {
  const [notificationIsOpen, setNotification] = React.useState(false);
  const [isDetailView, setDetailView] = React.useState(false);
  const [isReportView, setReportView] = React.useState(false);

  const openNotification = () => {
    setNotification(true);
  };

  return (
    <main className="h-screen select-none">
      <Header />

      <div className="w-screen  flex items-center justify-center h-90per relative">
        {notificationIsOpen || (
          <button
            onClick={openNotification}
            className="bg-green-700 rounded-full px-5 py-3 text-white "
          >
            1 new notification
          </button>
        )}

        {notificationIsOpen && (
          <NotificationView
            closeNotification={setNotification}
            openDetailView={setDetailView}
          />
        )}
        {isDetailView && (
          <DetailView
            closeDetailView={setDetailView}
            openReportView={setReportView}
          />
        )}
        {isReportView && <ReportView closeReportView={setReportView} />}
      </div>
    </main>
  );
}
