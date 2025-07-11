// src/pages/InterviewBot.jsx
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/SiderBar';
import DashboardContent from '../components/DashboardContent';
import CampaignContent from '../components/CampaignContent';
import AudienceContent from '../components/AudienceContent';

const InterviewBot = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f4faff' }}>
        <Routes>
          {/* ✅ use index route for /interview */}
          <Route index element={<DashboardContent />} />
          <Route path="campaign" element={<CampaignContent />} />
          <Route path="audience" element={<AudienceContent />} />
        </Routes>
      </div>
    </div>
  );
};

export default InterviewBot;
