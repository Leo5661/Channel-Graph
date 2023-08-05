import EngagementMessagesOverTime from "./components/EngagementMessagesOverTime.tsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#272730] text-white">
      <div>Message Count Graph</div>
      <EngagementMessagesOverTime />
    </div>
  );
}

export default App;
