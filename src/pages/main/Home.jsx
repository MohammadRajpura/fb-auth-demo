import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center space-y-6">
        {/* Big Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          Welcome to Our Platform -- Your one-stop solution for all your needs
        </h1>

        {/* Subtitle (optional) */}
        <p className="text-lg md:text-xl text-gray-600">
          Join us today and start your journey 🚀
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Link to="/register">
            <Button size="lg" className="px-8">
              Register
            </Button>
          </Link>
          <Link to="/login">
            <Button size="lg" variant="outline" className="px-8">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
