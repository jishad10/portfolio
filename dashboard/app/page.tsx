"use client";

import React, { useState } from "react";
import Sidebar, { TabId } from "./components/Sidebar";
import Header from "./components/Header";
import OverviewTab from "./components/OverviewTab";
import HeroManager from "./components/HeroManager";
import AboutManager from "./components/AboutManager";
import ExperienceManager from "./components/ExperienceManager";
import ProjectsManager from "./components/ProjectsManager";
import ResearchManager from "./components/ResearchManager";
import SkillsManager from "./components/SkillsManager";
import CertificationsManager from "./components/CertificationsManager";
import TestimonialsManager from "./components/TestimonialsManager";
import ServicesManager from "./components/ServicesManager";
import GitHubManager from "./components/GitHubManager";
import MyStoryManager from "./components/MyStoryManager";
import FAQManager from "./components/FAQManager";
import ContactManager from "./components/ContactManager";
import SettingsManager from "./components/SettingsManager";

export default function DashboardHome() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [availableStatus, setAvailableStatus] = useState(true);

  const handleSaveAll = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const renderActiveManager = () => {
    switch (activeTab) {
      case "overview":
        return (
          <OverviewTab
            setActiveTab={setActiveTab}
            availableStatus={availableStatus}
            setAvailableStatus={setAvailableStatus}
          />
        );
      case "hero":
        return <HeroManager />;
      case "about":
        return <AboutManager />;
      case "experience":
        return <ExperienceManager />;
      case "projects":
        return <ProjectsManager />;
      case "research":
        return <ResearchManager />;
      case "skills":
        return <SkillsManager />;
      case "certifications":
        return <CertificationsManager />;
      case "testimonials":
        return <TestimonialsManager />;
      case "services":
        return <ServicesManager />;
      case "github":
        return <GitHubManager />;
      case "mystory":
        return <MyStoryManager />;
      case "faq":
        return <FAQManager />;
      case "contact":
        return <ContactManager />;
      case "settings":
        return <SettingsManager />;
      default:
        return <OverviewTab setActiveTab={setActiveTab} availableStatus={availableStatus} setAvailableStatus={setAvailableStatus} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#FAFBFC]">
      {/* Pink Minimalist Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} unreadCount={4} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          activeTab={activeTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSaveAll={handleSaveAll}
          isSaved={isSaved}
        />

        <main className="p-8 flex-1 overflow-y-auto">
          {renderActiveManager()}
        </main>
      </div>
    </div>
  );
}
