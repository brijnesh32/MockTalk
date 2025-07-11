// components/Sidebar.jsx
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '220px', backgroundColor: '#007bff', color: '#fff', paddingTop: '20px' }}>
      <h2 style={{ padding: '0 20px', fontWeight: 'bold' }}>
        <i className="bi bi-robot me-2"></i>MockTalk.AI
      </h2>
      <ul style={{ listStyle: 'none', padding: '20px' }}>
        <li><Link to="/interview" style={linkStyle}><i className="bi bi-house-door-fill me-2"></i>Dashboard</Link></li>
        <li><Link to="/interview/campaign" style={linkStyle}><i className="bi bi-shield-lock-fill me-2"></i>Campaign</Link></li>
        <li><Link to="/interview/audience" style={linkStyle}><i className="bi bi-people-fill me-2"></i>Audience</Link></li>
        <li><Link to="/interview/search-audience" style={linkStyle}><i className="bi bi-search me-2"></i>Search Audience</Link></li>
        <li><Link to="/interview/manual-audience" style={linkStyle}><i className="bi bi-person-lines-fill me-2"></i>Manual Audience</Link></li>
        <li><Link to="/interview/ad-tools" style={linkStyle}><i className="bi bi-wrench-adjustable-circle-fill me-2"></i>Ad Tools</Link></li>
        <li><Link to="/interview/reports" style={linkStyle}><i className="bi bi-clipboard-data-fill me-2"></i>Reports</Link></li>
        <li><Link to="/interview/docs" style={linkStyle}><i className="bi bi-file-earmark-text-fill me-2"></i>Docs</Link></li>
        <li><Link to="/interview/settings" style={linkStyle}><i className="bi bi-gear-fill me-2"></i>Settings</Link></li>
      </ul>
    </div>
  );
};

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  textDecoration: 'none',
  padding: '10px 0',
};

export default Sidebar;
