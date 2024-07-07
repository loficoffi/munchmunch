import logo from "../assets/munchLogoBig.png";

// page, that containes Informations about the webpage.
const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl">
        <div className="flex flex-col items-center justify-center mb-4">
          <img src={logo} alt="Munch Logo" className="w-56" />
        </div>
        <p className="text-lg text-gray-300 mb-4">
          MunchMunch is a MERN-stack based culinary web application designed to
          enhance user engagement by allowing them to discover new dishes and
          recipes. This application simplifies the cooking process through
          personalized experiences, saving favorite dishes, and accessing
          detailed recipes with step-by-step instructions.
        </p>
        <h2 className="text-2xl font-semibold text-orange-500 mb-2">
          Features
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>
            User Authentication: Register and log in to access personalized
            features.
          </li>
          <li>
            Recipe Discovery: Browse and search a variety of dishes categorized
            by ingredients, cuisine, etc.
          </li>
          <li>Favorites: Save and manage favorite recipes for easy access.</li>
          <li>Interactive Guides: Follow step-by-step cooking instructions.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-orange-500 mb-2">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>MongoDB: For storing user data and recipes.</li>
          <li>Express.js: Backend framework for handling HTTP requests.</li>
          <li>React: Frontend library for building the user interface.</li>
          <li>Node.js: Runtime environment for the backend.</li>
          <li>
            Docker: For containerizing the application and ensuring consistent
            environments across development and production.
          </li>
          <li>AWS EC2: Hosting the application for live public access.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-orange-500 mb-2">
          Our Mission
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          Our mission is to make healthy eating accessible and enjoyable.
          MunchMunch provides users with easy access to healthy recipes,
          detailed instructions, and tools to personalize their culinary
          experience.
        </p>
        <h2 className="text-2xl font-semibold text-orange-500 mb-2">
          Meet the Team
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          Juliana Kühn, Nikolett Rácz, Raffael Friedl, Maximilian Lippmann,
          Christoph P. Neumann
        </p>
      </div>
    </div>
  );
};

export default About;
