import AuthPage from "./pages/AuthPage";
import NavBar from "./pages/Navbar";
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <NavBar />
      <AuthPage />
    </div>
  );
};

export default App;
