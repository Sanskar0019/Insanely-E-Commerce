const LogoLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-100">
      <div className="relative flex flex-col items-center">
        {/* Logo Image with Scaling Animation */}
        <img
          src="Insanely-removebg-preview.png"  // Replace with your logo path
          alt="Logo"
          className="w-full h-32 animate-pulse"  // Adjust size as needed
          ></img>
      </div>
    </div>
  );
};      

export default LogoLoader;