import Header from "@/components/Header";
import DetailView from "@/components/detailView";
import NotificationView from "@/components/notificationView";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">


      <Header />

      <div className="w-full h-full  flex items-center justify-center">
        <DetailView/>
      </div>
      {/* <NotificationView/> */}
    </main>

  )
}
