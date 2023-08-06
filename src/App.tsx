import EngagementMessagesOverTime from "./components/EngagementMessagesOverTime.tsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#272730]">
      <div className="text-white text-lg w-full px-8 pt-8 pb-4 border-b border-gray-700 drop-shadow-md">
        Message Count Graph
      </div>
      <EngagementMessagesOverTime />
    </div>
  );
}

export default App;
