"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import WelcomeSection from "./WelcomeSection";
import SuggestionCards from "./SuggestionCards";
import Composer from "./Composer";
import ImageStudio from "../chat-features/ImageStudio";
import VideoStudio from "../chat-features/VideoStudio";
import Compare from "../chat-features/Compare";
import Connectors from "../chat-features/Connectors";
import History from "../chat-features/History";
import Store from "../chat-features/Store";
import AITasks from "../chat-features/AITasks";
import AIJobAnalysis from "../chat-features/AIJobAnalysis";
import AISOPBuilder from "../chat-features/AISOPBuilder";

export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  return (
    <main className="flex h-screen overflow-hidden bg-white">
      <Sidebar
  isOpen={isSidebarOpen}
  onClose={() => setIsSidebarOpen(false)}
  selectedItem={selectedItem}
  onSelect={setSelectedItem}
/>

      <section className="flex min-w-0 flex-1 flex-col overflow-y-auto">
  <ChatHeader
    onMenuClick={() => setIsSidebarOpen(true)}
  />
  {selectedItem === "Image Studio" ? (
  <ImageStudio />
) : selectedItem === "Video Studio" ? (
  <VideoStudio />
) : selectedItem === "Compare" ? (
  <Compare />
) : selectedItem === "Connectors" ? (
  <Connectors />
) : selectedItem === "History" ? (
  <History />
) : selectedItem === "Store" ? (
  <Store />
) : selectedItem === "AI Tasks" ? (
  <AITasks />
) :selectedItem === "AI Job Analysis" ? (
  <AIJobAnalysis />
) :selectedItem === "AI SOP Builder" ? (
  <AISOPBuilder />
):(
  <>
    <WelcomeSection />
    <SuggestionCards />
    <Composer />
  </>
)}
</section>

      {isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          aria-label="Close navigation"
        />
      )}
    </main>
  );
}