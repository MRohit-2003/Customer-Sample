import Home from "./Pages/Home";
import Payments from "./Pages/Payments";
import Services from "./Pages/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatWidget from "./Components/ChatWidget";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
  {/* Chat Widget - Only show on public pages or for testing */}
            <ChatWidget
                widgetId={widgetId}
                serverUrl={serverUrl}
                primaryColor="#0b7d7b"
                welcomeMessage="Hi! How can we help you today?"
                position="bottom-right"
            />
    </Router>
  );
}

export default App;
