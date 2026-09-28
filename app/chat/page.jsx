"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import WelcomeSection from "./WelcomeSection";
import SuggestionCards from "./SuggestionCards";
import Composer from "./Composer";

export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex h-screen overflow-hidden bg-white">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <section className="flex min-w-0 flex-1 flex-col overflow-y-auto">
  <ChatHeader
    onMenuClick={() => setIsSidebarOpen(true)}
  />

  <WelcomeSection />
  <SuggestionCards />
  <Composer />
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