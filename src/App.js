import Chat from "./components/Chat";
import "./App.css";
export default function App() {
  return (
    <div className="flex justify-center align-center w-[100vw] h-[100vh]">
      <div className="flex justify-center align-center m-auto">
        <Chat />
      </div>
    </div>
  );
}
