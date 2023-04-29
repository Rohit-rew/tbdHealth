import Header from "@/components/Header";
import DetailView from "@/components/detailView";
import NotificationView from "@/components/notificationView";
import ReportView from "@/components/reportView";

export default function Home() {
  return (
    <main className="h-screen">


      <Header />

      <div className="w-screen  flex items-center justify-center h-90per">
      {/* <NotificationView/> */}
        {/* <DetailView/> */}
        <ReportView />
      </div>
    </main>

  )
}
