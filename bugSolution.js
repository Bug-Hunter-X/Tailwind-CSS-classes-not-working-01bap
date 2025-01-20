```javascript
//In your main app.js file
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="bg-red-500 p-4">
      <h1 className="text-white text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;

// Ensure that the 'tailwind.config.js' file is correctly configured
// and that the 'postcss.config.js' is set up properly.
// Check that the necessary plugins are installed:
//   npm install -D postcss autoprefixer tailwindcss
// Also, make sure that your build process correctly compiles your CSS files.
```